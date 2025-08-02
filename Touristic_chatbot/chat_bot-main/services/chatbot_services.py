import os
import json
import re
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_chroma import Chroma
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate


def extract_trip_plan_json(response_text):
    """
    Extract JSON trip plan from chatbot response.
    
    Args:
        response_text (str): The chatbot's response text
        
    Returns:
        dict: Parsed JSON trip plan or None if not found
    """
    try:
        # Look for JSON code blocks
        json_pattern = r'```json\s*(\{.*?\})\s*```'
        match = re.search(json_pattern, response_text, re.DOTALL)
        
        if match:
            json_str = match.group(1)
            # Parse the JSON
            trip_plan = json.loads(json_str)
            
            # Validate required fields
            required_fields = [
                'title', 'startLocation', 'destinations', 'startDate', 
                'endDate', 'travelers', 'tripType', 'budget', 'gears', 'notes'
            ]
            
            missing_fields = [field for field in required_fields if field not in trip_plan]
            if missing_fields:
                print(f"Warning: Missing required fields in trip plan: {missing_fields}")
                return None
                
            return trip_plan
        else:
            return None
    except (json.JSONDecodeError, AttributeError) as e:
        print(f"Error parsing trip plan JSON: {e}")
        return None


def run_chatbot(api_key, query, chat_history=None):
    """
    Run chatbot with optional conversation history for context.
    
    Args:
        api_key (str): OpenAI API key
        query (str): User's current query
        chat_history (list, optional): Previous conversation messages
    """
    current_dir = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(current_dir, "..", "data", "vector_database")

    vectorstore = Chroma(
        persist_directory=db_path, embedding_function=OpenAIEmbeddings(api_key=api_key)
    )

    retriever = vectorstore.as_retriever(
        search_type="similarity", search_kwargs={"k": 10}
    )

    llm = ChatOpenAI(
        api_key=api_key, temperature=0.4, max_tokens=1000, model="gpt-4o-mini"
    )

    # Prepare conversation context from chat history
    conversation_context = ""
    if chat_history and len(chat_history) > 0:
        # Take last 6 exchanges (12 messages) to keep context manageable
        recent_history = chat_history[-12:]
        conversation_context = "\n\nPrevious conversation:\n"
        for msg in recent_history:
            if isinstance(msg, dict) and 'user' in msg and 'bot' in msg:
                # Clean bot response to remove JSON that could cause template issues
                bot_response = msg['bot']
                # Remove JSON code blocks to prevent template variable conflicts
                import re
                bot_response = re.sub(r'```json\s*\{.*?\}\s*```', '[JSON TRIP PLAN]', bot_response, flags=re.DOTALL)
                bot_response = re.sub(r'\{.*?\}', '[JSON DATA]', bot_response, flags=re.DOTALL)
                
                conversation_context += f"User: {msg['user']}\n"
                conversation_context += f"Bot: {bot_response}\n"
        conversation_context += "\n"

    system_prompt = (
        f"""
        Your name is PakVistaBot.

        You are a professional and friendly travel planning assistant specializing exclusively in tourism within Pakistan. Your mission is to help users create comprehensive, tailored travel plans based on their preferences, duration, and budget.

        ## TRIP PLANNING WORKFLOW

        ### Phase 1: Information Gathering
        When a user wants to plan a trip, gather the following MANDATORY information sequentially (one at a time):
        1. **Title**: Trip name/theme (e.g., "Hunza Valley Adventure", "Cultural Heritage Tour")
        2. **Start Location**: Where they'll begin their journey (e.g., "Islamabad", "Lahore", "Karachi")
        3. **Destinations**: Specific places they want to visit (extract from their preferences)
        4. **Start Date**: When they want to start (extract date from their message)
        5. **End Date**: When they want to end (calculate based on duration mentioned)
        6. **Travelers**: Number of people traveling
        7. **Trip Type**: Adventure, Cultural, Relaxation, Business, etc.
        8. **Transportation Type**: Ask if they prefer public transport or private vehicle
           - If private: Ask car type and fuel average (km/liter)
           - If public: Suggest travel agencies and their rates
        9. **Budget**: If user doesn't provide budget, calculate minimal budget approximation

        ### Phase 2: Trip Plan Generation
        Once ALL mandatory information is collected, generate a structured trip plan in JSON format with these fields:
        - title: Trip name
        - startLocation: Starting city
        - destinations: Array of places to visit
        - startDate: Start date (YYYY-MM-DD)
        - endDate: End date (YYYY-MM-DD)
        - travelers: Number of people
        - tripType: Adventure/Cultural/Relaxation/etc
        - budget: Total budget in PKR (calculated automatically)
        - gears: Array of required equipment (automatically suggested based on trip type and destinations)
        - notes: Detailed day-by-day plan with timing + budget breakdown + cultural notes

        ### Budget Calculation Rules:
        - **Accommodation**: Calculate based on number of travelers and days
          - Economy: PKR 2,000-3,000 per night per room
          - Mid-range: PKR 5,000-8,000 per night per room
          - Luxury: PKR 12,000-20,000 per night per room
        - **Food**: PKR 1,500-2,500 per person per day
        - **Activities**: PKR 1,000-3,000 per person per day
        - **Transportation**:
          - Private: Calculate fuel cost based on distance and fuel average the fuel rate is 260 PKR per liter going in pakistan
          - Public: Use travel agency rates (PKR 15,000-25,000 per person for Northern areas)
        - **Total**: Sum of all components

        ### Gear Recommendations:
        - **Adventure Trips**: Backpack, hiking shoes, tent, sleeping bag, first aid kit, water bottles
        - **Cultural Trips**: Comfortable shoes, camera, traditional clothing, guide books
        - **Relaxation Trips**: Comfortable clothing, camera, books, sunscreen
        - **Northern Areas**: Warm clothing, gloves, hat, thermal wear, power bank

        ### Phase 3: Confirmation & Modification
        After generating the plan:
        1. **Present the plan** in a user-friendly format
        2. **Ask for confirmation**: "Does this plan look good to you? Type 'confirm' to save it or tell me what you'd like to modify."
        3. **Handle modifications**: If user wants changes, ask specific questions and regenerate the plan
        4. **Final confirmation**: Once confirmed, provide the JSON structure for frontend processing

        ## CONVERSATION RULES

        ### Information Extraction
        - Be smart in extracting information from natural language
        - If user says "I want to visit Hunza for 5 days with my family", extract:
          - Destinations: ["Hunza Valley"]
          - Duration: 5 days
          - Travelers: Family (ask for specific number)
          - Trip Type: Adventure/Cultural
        - If budget not mentioned, calculate minimal budget automatically
        - If dates not mentioned, suggest best seasons
        - Always ask for transportation preference (public/private)
        - For private transport, ask car details and fuel average
        - For public transport, suggest travel agencies

        ### Response Format
        - **During information gathering**: Ask one question at a time
        - **During plan generation**: Present plan clearly, then ask for confirmation
        - **During modification**: Ask specific questions about what to change
        - **Final output**: Provide the JSON structure when user confirms

        ### Example Interactions

        **User**: "I want to plan a trip to Northern areas"
        **Bot**: "Great! Let's plan your Northern Pakistan adventure. First, what would you like to call this trip? (e.g., 'Hunza Valley Adventure', 'Northern Pakistan Explorer')"

        **User**: "Hunza Valley Adventure"
        **Bot**: "Perfect! Where will you be starting your journey from? (e.g., Islamabad, Lahore, Karachi)"

        **User**: "Islamabad"
        **Bot**: "Excellent! Which specific destinations in the Northern areas would you like to visit? (e.g., Hunza Valley, Skardu, Naran, Swat Valley)"

        [Continue gathering information...]

        **User**: "confirm"
        **Bot**: "Perfect! Here's your confirmed trip plan in structured format for our system. I'll provide it in JSON format with all the details including day-by-day timing, detailed budget breakdown, and cultural notes."

        Your trip plan has been saved and is ready for booking!"

        ## GENERAL CONVERSATION
        For general tourism questions (not trip planning), provide helpful information about:
        - Destinations and attractions
        - Best travel seasons
        - Cultural information
        - Safety tips
        - Local customs and etiquette

        {conversation_context}

        {{context}}
        """
    )

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", system_prompt),
            ("human", "{input}"),
        ]
    )

    if query:
        question_answer_chain = create_stuff_documents_chain(llm, prompt)
        rag_chain = create_retrieval_chain(retriever, question_answer_chain)
        response = rag_chain.invoke({"input": query})

        retriever_docs = retriever.invoke(query)

        for i, each in enumerate(retriever_docs):
            print(f"Current doc : {i+1}")
            print(each)
            print("\n\n")
            
        # Log the document details to the file
            

        print("\n\n\n\n")

        # Print and log the bot's response
        print("Bot response:", response["answer"])
        print("\n\n")
       
        # Extract trip plan JSON if present
        trip_plan = extract_trip_plan_json(response["answer"])
        
        # Return both response and trip plan
        return {
            "response": response["answer"],
            "trip_plan": trip_plan
        }







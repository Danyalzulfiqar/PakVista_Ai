Here's your updated `README` file with **all `curl` commands and chatbot queries modified for a *touristic context*** instead of fitness. Everything else remains the same:

---

# Touristic Chatbot

This project provides a chatbot setup with commands for backend configuration. Follow the steps below to clone, configure, and run the chatbot.

## Prerequisites

* **Git**: Ensure Git is installed on your system.
* **Bash**: The scripts are written for Bash.
* **Sudo Access**: Some commands require sudo privileges.

## Setup Instructions


### Step 2: Navigate to the Project Directory

Change into the main project directory:

```bash
cd chat_bot-main/
```

### Step 3: Grant Execution Permission

Provide execution permissions for the setup script:

```bash
chmod +x b.sh
```

### Step 4: Run the Setup Script

Run the setup script to install dependencies and initialize the environment:

```bash
sudo ./b.sh
```

### Step 5: Configure API Key

Edit the `r.sh` file to add your API key. Open `r.sh` in your preferred text editor and insert your API key.

## Running the Project

Use the following commands to run the project in different modes.

### 1. Make Vector Database Before Using the Chatbot

To start the project for the first time, use:

```bash
sudo ./r.sh rag
```

### 2. Running the Backend Only

To run only the backend services, use:

```bash
sudo ./r.sh api
```



## Testing with Curl Commands

Here are some sample `curl` commands to test the chatbot in a **tourism and travel context**:

1. **Ask for the bot's name**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "What is your name?", "api_key": "your_api_key_here"}'
   ```

2. **Ask what the bot can help with**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "What kind of travel help can you provide?", "api_key": "your_api_key_here"}'
   ```

3. **Plan a vacation**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "Can you help me plan a 5-day vacation in Turkey?", "api_key": "your_api_key_here"}'
   ```

4. **Share user preferences**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "I love beaches, nature, and cultural landmarks. I have a budget of $1000. What do you recommend?", "api_key": "your_api_key_here"}'
   ```

5. **Ask about popular destinations**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "What are the best places to visit in Europe during summer?", "api_key": "your_api_key_here"}'
   ```

6. **Ask for visa requirements**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "Do I need a visa to travel to Thailand from Pakistan?", "api_key": "your_api_key_here"}'
   ```

7. **Ask about weather conditions**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "What’s the weather like in Bali in September?", "api_key": "your_api_key_here"}'
   ```

8. **Ask for local food recommendations**:

   ```bash
   curl -X POST http://127.0.0.1:5009/chat -H "Content-Type: application/json" -d '{"query": "What are some famous local dishes in Italy I must try?", "api_key": "your_api_key_here"}'
   ```

---

## Retrieving Chat History

To retrieve the chat history for a specific `api_key`, use the following `curl` command:

```bash
curl -X POST http://127.0.0.1:5009/chat/history -H "Content-Type: application/json" -d '{"api_key": "your_api_key_here"}'
```

This command returns the chat history for the provided API key in JSON format, showing previous conversations for continued interactions or analysis.

---

## Memory System

The chatbot includes an advanced memory system that allows it to remember previous conversations with users. This is particularly useful for travel assistance, where the chatbot needs to remember the user's travel preferences, budget, and history.

### Features of the Memory System

* **Conversation History**: The chatbot remembers all past interactions with each user, maintaining context throughout the conversation.
* **Summarization**: For long conversations, the system automatically summarizes previous exchanges to maintain context without overwhelming the model.
* **User-Specific Memory**: Each user (identified by their API key) has their own separate conversation history.
* **Persistent Storage**: Conversations are saved to disk, so they persist between sessions and server restarts.

### Resetting Conversation History

If you want to start a fresh conversation with the chatbot, you can reset your conversation history using the following endpoint:

```bash
curl -X POST http://127.0.0.1:5009/chat/reset -H "Content-Type: application/json" -d '{"api_key": "your_api_key_here"}'
```

This will delete all memory associated with your API key, allowing you to start a new conversation from scratch.

---

Let me know if you want to add features like **flight search, hotel booking, itinerary generation, or maps integration** to your travel bot!


cd chat_bot-main
sudo docker stop Touristic_jang_0 
sudo docker rm Touristic_jang_0 
sudo ./b.sh
sudo ./r.sh api
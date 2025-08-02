
from flask import Flask, request, jsonify
from flask_cors import CORS
from services.chatbot_services import run_chatbot
from utils.chat_history_manager import load_chat_history, save_chat_history  # Import chat history functions
import os
import hashlib
import shutil

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/chatbot', methods=['POST'])
def chat_UI():
    data = request.json
    query = data.get('query')
    api_key = data.get('api_key')

    print(f"Received the query: {query}")
    
    # Optionally load chat history for context (backward compatible)
    chat_history = load_chat_history(api_key) if api_key else None
    
    result = run_chatbot(api_key, query, chat_history)
    
    # Handle both old and new response formats
    if isinstance(result, dict):
        response_text = result.get("response", "")
        trip_plan = result.get("trip_plan")
        return jsonify({
            "response": response_text,
            "trip_plan": trip_plan
        }), 200
    else:
        # Backward compatibility for old format
        return jsonify({"response": result}), 200

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    query = data.get('query')
    api_key = data.get('api_key')

    print(f"Received the query: {query}")

    # Load existing chat history for this API key
    chat_history = load_chat_history(api_key)

    # Get response from chatbot with conversation context
    result = run_chatbot(api_key, query, chat_history)
    
    # Handle both old and new response formats
    if isinstance(result, dict):
        response_text = result.get("response", "")
        trip_plan = result.get("trip_plan")
        
        # Append the new conversation to chat history
        chat_history.append({"user": query, "bot": response_text})
        
        # Save updated chat history
        save_chat_history(api_key, chat_history)
        
        return jsonify({
            "response": response_text,
            "trip_plan": trip_plan
        }), 200
    else:
        # Backward compatibility for old format
        response_text = result
        
        # Append the new conversation to chat history
        chat_history.append({"user": query, "bot": response_text})
        
        # Save updated chat history
        save_chat_history(api_key, chat_history)
        
        return jsonify({"response": response_text}), 200

@app.route('/chat/history', methods=['POST'])
def chat_history():
    data = request.json
    api_key = data.get('api_key')

    # Load and return chat history for the given API key
    chat_history = load_chat_history(api_key)

    return jsonify({"chat_history": chat_history}), 200

@app.route('/chat/reset', methods=['POST'])
def reset_chat():
    data = request.json
    api_key = data.get('api_key')
    
    if not api_key:
        return jsonify({"error": "API key is required"}), 400
    
    # Create a hash of the API key to find the memory file
    memory_key = hashlib.sha256(api_key.encode()).hexdigest()[:8]
    
    # Get the path to the memory file
    current_dir = os.path.dirname(os.path.abspath(__file__))
    memory_file = os.path.join(current_dir, "chat_memory", f"memory_{memory_key}.json")
    
    # Check if the memory file exists
    if os.path.exists(memory_file):
        try:
            # Delete the memory file
            os.remove(memory_file)
            
            # Also clear chat history files
            api_key_hash = hashlib.sha256(api_key.encode()).hexdigest()
            chat_history_dir = os.path.join(current_dir, "chat_history")
            
            if os.path.exists(chat_history_dir):
                for file in os.listdir(chat_history_dir):
                    if file.startswith("session_") and api_key_hash in file:
                        os.remove(os.path.join(chat_history_dir, file))
            
            return jsonify({"message": "Conversation history reset successfully"}), 200
        except Exception as e:
            return jsonify({"error": f"Failed to reset conversation history: {str(e)}"}), 500
    else:
        return jsonify({"message": "No conversation history found for this API key"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5009, debug=True, use_reloader=False)

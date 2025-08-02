
import json
import os
import hashlib
from datetime import datetime

# Define the directory for chat history
CHAT_HISTORY_DIR = "chat_history"
os.makedirs(CHAT_HISTORY_DIR, exist_ok=True)

def _get_api_key_hash(api_key):
    return hashlib.sha256(api_key.encode()).hexdigest()

def _get_filename(api_key_hash):
    """Get consistent filename for API key (without timestamp)."""
    return os.path.join(CHAT_HISTORY_DIR, f"session_{api_key_hash}.json")

def _find_existing_file(api_key_hash):
    """Find existing file using consistent naming."""
    file_path = _get_filename(api_key_hash)
    return file_path if os.path.exists(file_path) else None

def load_chat_history(api_key):
    """Load chat history from a JSON file for a specific API key."""
    api_key_hash = _get_api_key_hash(api_key)
    file_path = _find_existing_file(api_key_hash)

    if file_path and os.path.getsize(file_path) > 0:
        try:
            with open(file_path, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            print(f"Warning: Corrupted chat history in {file_path}. Initializing empty history.")
    return []  # Return an empty list on failure or if no file found

def save_chat_history(api_key, chat_history):
    """Save chat history to a JSON file for a specific API key."""
    api_key_hash = _get_api_key_hash(api_key)
    file_path = _get_filename(api_key_hash)

    # Limit history size to prevent memory issues (keep last 50 messages)
    if len(chat_history) > 50:
        chat_history = chat_history[-50:]

    try:
        with open(file_path, 'w') as f:
            json.dump(chat_history, f, indent=2)
        print(f"Chat history saved to {file_path}")
    except Exception as e:
        print(f"Error saving chat history: {e}")

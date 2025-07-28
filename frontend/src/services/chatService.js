const API_BASE_URL = process.env.REACT_APP_CHAT_API_URL || 'http://35.227.145.87:5009';
const API_KEY = process.env.REACT_APP_CHAT_API_KEY;

// Debug: Log environment variables (remove in production)
console.log('API_BASE_URL:', API_BASE_URL);
console.log('API_KEY exists:', !!API_KEY);

class ChatService {
  // Send a message to the chatbot
  static async sendMessage(query) {
    if (!API_KEY) {
      throw new Error('API key is not configured. Please check your environment variables.');
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          query,
          api_key: API_KEY
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      return data.response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  // Get chat history
  static async getChatHistory() {
    if (!API_KEY) {
      throw new Error('API key is not configured. Please check your environment variables.');
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/chat/history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          api_key: API_KEY
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.chat_history || [];
    } catch (error) {
      console.error('Error getting chat history:', error);
      throw error;
    }
  }

  // Reset chat history
  static async resetChat() {
    if (!API_KEY) {
      throw new Error('API key is not configured. Please check your environment variables.');
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/chat/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          api_key: API_KEY
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error resetting chat:', error);
      throw error;
    }
  }
}

export default ChatService; 
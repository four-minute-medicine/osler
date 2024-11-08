const API_BASE_URL = 'https://fourmm-llama-hackathon-backend.onrender.com/api';

export const chatApi = {
  // Create a new conversation
  createConversation: async (question: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/conversation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error creating conversation:', error);
      throw error;
    }
  },

  // Continue conversation (send message)
  continueConversation: async (conversationId: string, message: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/conversation/${conversationId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error continuing conversation:', error);
      throw error;
    }
  },

  // Get all conversations
  getConversations: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/conversation`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching conversations:', error);
      throw error;
    }
  },

  // Get conversation history
  getConversationHistory: async (conversationId: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/conversation/${conversationId}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching conversation history:', error);
      throw error;
    }
  },
};

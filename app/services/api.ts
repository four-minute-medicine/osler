import { ConversationResponse, CreateConversationResponse, HistoryConversation, MessageResponse } from "../(chat)/types/chat";

const API_BASE_URL = 'https://fourmm-llama-hackathon-backend.onrender.com/api';

export const chatApi = {
  getConversations: async (): Promise<{ conversations: HistoryConversation[] }> => {
    const response = await fetch(`${API_BASE_URL}/conversation`);
    return await response.json();
  },

  getConversationHistory: async (id: string): Promise<ConversationResponse> => {
    const response = await fetch(`${API_BASE_URL}/conversation/${id}`);
    return await response.json();
  },

  continueConversation: async (id: string, message: string): Promise<MessageResponse> => {
    const response = await fetch(`${API_BASE_URL}/conversation/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: message }),
    });
    return await response.json();
  },

  createNewCase: async (message: string): Promise<CreateConversationResponse> => {
    const response = await fetch(`${API_BASE_URL}/conversation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: message }),
    });
    return await response.json();
  },
};

import { ConversationResponse, CreateConversationResponse, HistoryConversation, MessageResponse } from "../(chat)/types/chat";

// const API_BASE_URL = 'https://fourmm-llama-hackathon-backend.onrender.com/api';
const API_BASE_URL = 'http://localhost:5005/api';

export type ConversationType = 'parent' | 'hcw' | 'virtual-patient';

export const chatApi = {
  getConversations: async (): Promise<{ conversations: HistoryConversation[] }> => {
    const response = await fetch(`${API_BASE_URL}/conversation`);
    return await response.json();
  },

  getConversationHistory: async (id: string): Promise<ConversationResponse> => {
    const response = await fetch(`${API_BASE_URL}/conversation/${id}`);
    return await response.json();
  },

  continueConversation: async (
    type: ConversationType,
    id: string, 
    message: string
  ): Promise<MessageResponse> => {
    const response = await fetch(`${API_BASE_URL}/conversation/${type}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: message }),
    });
    return await response.json();
  },

  createConversation: async (
    type: ConversationType,
    message: string
  ): Promise<CreateConversationResponse> => {
    const response = await fetch(`${API_BASE_URL}/conversation/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: message }),
    });
    return await response.json();
  },

  // Specific typed methods for each conversation type
  parent: {
    create: async (message: string) => 
      chatApi.createConversation('parent', message),
    continue: async (id: string, message: string) => 
      chatApi.continueConversation('parent', id, message)
  },

  hcw: {
    create: async (message: string) => 
      chatApi.createConversation('hcw', message),
    continue: async (id: string, message: string) => 
      chatApi.continueConversation('hcw', id, message)
  },

  virtualPatient: {
    create: async (message: string) => 
      chatApi.createConversation('virtual-patient', message),
    continue: async (id: string, message: string) => 
      chatApi.continueConversation('virtual-patient', id, message)
  }
};

// For backward compatibility
export const createNewCase = chatApi.parent.create;
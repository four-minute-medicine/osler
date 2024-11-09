export interface HistoryConversation {
  _id: string;
  title: string;
  user: string[];
  messages: string[];
  __v: number;
  timestamp: string;
}

export interface CurrentConversation {
  _id: string;
  title: string;
  user: string[];
  messages: string[];
  __v: number;
  timestamp: string;
}

export interface ConversationMessage {
  _id: string;
  user_prompt: string;
  user_type: 'student' | 'assistant';
  conversation: string;
  __v: number;
}

export interface ApiMessage {
  user_type: 'student' | 'assistant';
  message: string;
}

export interface ConversationResponse {
  conversation: CurrentConversation;
  messages: ConversationMessage[];
}

export interface MessageResponse {
  messages: ApiMessage[];
}

export interface CreateConversationResponse {
  conversationId:string;
  messages: ApiMessage[];
}
  export interface ChatSectionProps {
    messages: Message[];
    onSendMessage: (message: string) => Promise<void>;
    onNewCase: () => Promise<void>;
    isGeneratingCase?: boolean;
  }
  export interface Message {
    user_type: 'student' | 'assistant';
    message: string;  // Changed from user_prompt to message
  }
  
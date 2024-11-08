export interface Conversation {
    _id: string;
    title: string;
    messages: string[];
  }
  
  export interface Message {
    _id: string;
    user_prompt: string;
    user_type: 'student' | 'assistant';
    conversation: string;
  }
  
export interface MessageBubbleProps {
    message: Message;
  }
  
export interface ChatSectionProps {
    conversation?: Conversation;
    messages?: Message[];
    onSendMessage?: (message: string) => Promise<void>; // Updated to handle async
    onNewCase?: () => void;
  }
export interface Conversation {
  _id: string;
  title: string;
  messages: string[];
  user: string[];
  __v: number;
  timestamp: string;  // ISO format timestamp string "2024-11-08T20:28:27.747Z"
}

// You might also want to add some helper types:
export interface ConversationWithDate extends Conversation {
  formattedDate?: string;  // Optional formatted date for display
}

// And utility function if needed:
export const formatConversationDate = (conversation: Conversation): string => {
  if (!conversation.timestamp) return '';
  return new Date(conversation.timestamp).toLocaleDateString();
};
  
export interface SidebarProps {
    conversations: Conversation[];
    onNewSession?: () => void;
    onSearch?: (query: string) => void;
    colour: string;
    onSelectConversation?: (id: string) => void;
    activeConversationId?: string;
  }
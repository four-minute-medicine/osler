export interface Conversation {
    _id: string;
    title: string;
    messages: string[];
    user: string[]; // Update this type based on your user structure
    __v: number;
  }
  
export interface SidebarProps {
    conversations: Conversation[];
    onNewSession?: () => void;
    onSearch?: (query: string) => void;
    onClearHistory?: () => void;
    onSelectConversation?: (id: string) => void;
    activeConversationId?: string;
  }
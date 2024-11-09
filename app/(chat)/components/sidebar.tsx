'use client'
import React, { useState } from 'react';
import { Search, Plus, MessageSquare, HelpCircle, LogOut } from 'lucide-react';
import { SidebarProps } from '../types/sidebar';

const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  onNewSession,
  onSearch,
  onClearHistory,
  onSelectConversation,
  activeConversationId
}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const baseTextStyle = "font-helvetica text-[18px] font-normal leading-[20px] text-left";

  // Helper function to format and truncate title
  const formatTitle = (title: string) => {
    if (title ==undefined ||!title.trim()) return "New Conversation";
    if (title.endsWith('...')) return title;
    return title.length > 20 ? `${title.substring(0, 20)}...` : title;
  };

  // Get today's date in ISO format for comparison
  const today = new Date().toISOString().split('T')[0];

  // Filter conversations for today and recent
  const todayConversations = conversations.filter(conv => {
    // Assuming _id contains timestamp. Adjust this logic based on your actual date tracking
    const convDate = new Date(parseInt(conv._id.substring(0, 8), 16) * 1000);
    return convDate.toISOString().split('T')[0] === today;
  });

  const recentConversations = conversations.filter(conv => {
    const convDate = new Date(parseInt(conv._id.substring(0, 8), 16) * 1000);
    return convDate.toISOString().split('T')[0] !== today;
  });

  return (
    <div className="w-80 h-screen bg-[#090909] border-r border-white/10 flex flex-col">
      {/* Header */}
      <div className="p-4">
        <div className="text-white text-2xl font-bold mb-4">
          Osler
        </div>

        {/* New Session & Search */}
        <div className="flex gap-2 mb-4">
          <button 
            onClick={onNewSession}
            className={`flex items-center gap-2 bg-[#89B0FF] text-black px-4 py-2 rounded-lg flex-grow hover:bg-[#89B0FF]/90 transition-colors ${baseTextStyle}`}
          >
            <Plus className="w-4 h-4" />
            Start a new session
          </button>
          <button 
            onClick={() => setSearchVisible(!searchVisible)}
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Search className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Search Input */}
        {searchVisible && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search conversations..."
              onChange={(e) => onSearch?.(e.target.value)}
              className={`w-full bg-white/5 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/20 ${baseTextStyle}`}
            />
          </div>
        )}

        <div className="h-px bg-white/10 mx-2 my-2" />
        
        {/* History Header */}
        <div className="flex justify-between items-center mb-2">
          <span className={`text-white/70 ${baseTextStyle}`}>
            Your conversation
          </span>
          <button 
            onClick={onClearHistory}
            className={`text-[#89B0FF] hover:underline ${baseTextStyle}`}
          >
            Clear All
          </button>
        </div>

        <div className="h-px bg-white/10 mx-2 my-2" />
      </div>

      {/* History List */}
      <div className="flex-grow overflow-auto px-2">
        {/* Today's conversations */}
        {todayConversations.map((conversation) => (
          <div 
            key={conversation._id}
            onClick={() => onSelectConversation?.(conversation._id)}
            className={`flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer group
              ${activeConversationId === conversation._id ? 'bg-white/5' : ''}`}
          >
            <MessageSquare className="w-5 h-5 text-white/70" />
            <span className={`text-white/70 truncate group-hover:text-white transition-colors ${baseTextStyle}`}>
              {formatTitle(conversation.title)}
            </span>
          </div>
        ))}

        {recentConversations.length > 0 && (
          <>
            <div className="h-px bg-white/10 mx-2 my-2" />
            <div className={`py-2 px-3 text-white/50 ${baseTextStyle}`}>
              Last 7 days
            </div>
            <div className="h-px bg-white/10 mx-2 my-2" />
            
            {recentConversations.map((conversation) => (
              <div 
                key={conversation._id}
                onClick={() => onSelectConversation?.(conversation._id)}
                className={`flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer group
                  ${activeConversationId === conversation._id ? 'bg-white/5' : ''}`}
              >
                <MessageSquare className="w-5 h-5 text-white/70" />
                <span className={`text-white/70 truncate group-hover:text-white transition-colors ${baseTextStyle}`}>
                  {formatTitle(conversation.title)}
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Bottom Links */}
      <div className="mt-auto border-t border-white/10 p-2">
        <button className="flex items-center gap-3 p-3 w-full hover:bg-white/5 rounded-lg text-white/70 group">
          <HelpCircle className="w-5 h-5" />
          <span className={`group-hover:text-white transition-colors ${baseTextStyle}`}>
            Updates & FAQ
          </span>
        </button>
        <button className="flex items-center gap-3 p-3 w-full hover:bg-white/5 rounded-lg text-white/70 group">
          <LogOut className="w-5 h-5" />
          <span className={`group-hover:text-white transition-colors ${baseTextStyle}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

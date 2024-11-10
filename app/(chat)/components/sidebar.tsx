'use client'
import React, { useState } from 'react';
import { Search, Plus, MessageSquare, HelpCircle, LogOut } from 'lucide-react';
import { Conversation, SidebarProps } from '../types/sidebar';
import { Baloo_Bhai_2 } from 'next/font/google';
import { useRouter } from 'next/navigation';

const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] });

const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  onSearch,
  colour,
  onSelectConversation,
  activeConversationId
}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const router = useRouter();

  // Keep your existing helper functions
  const formatTitle = (title: string) => {
    if (title === undefined || !title.trim()) return "New Conversation";
    if (title.endsWith('...')) return title;
    return title.length > 20 ? `${title.substring(0, 20)}...` : title;
  };

  const filterConversationsByDate = (conversations: Conversation[]) => {
    const today = new Date().toISOString().split('T')[0];
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().split('T')[0];
  
    const todayConversations = conversations.filter(conv => {
      if (!conv.timestamp) return false;
      const convDate = new Date(conv.timestamp).toISOString().split('T')[0];
      return convDate === today;
    });
  
    const recentConversations = conversations.filter(conv => {
      if (!conv.timestamp) return false;
      const convDate = new Date(conv.timestamp).toISOString().split('T')[0];
      return convDate !== today && convDate >= sevenDaysAgoStr;
    });
  
    return {
      todayConversations,
      recentConversations
    };
  };
  const handleNewSession = () => {
    router.push('/welcome');
  };
  

  const { todayConversations, recentConversations } = filterConversationsByDate(conversations);
  
  return (
    <div style={{ backgroundColor: colour }} className="w-80 h-screen flex flex-col px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={() => router.push('/')}
          className={`${balooBhai.className} text-black text-[30px] text-center font-bold leading-[25px] mb-6 w-full hover:opacity-80 transition-opacity`}
        >
          BrightStart
        </button>
        
        <div className="flex gap-2 mb-4">
          <button 
            onClick={handleNewSession}
            className="flex items-center gap-2 bg-[#FFE27D] text-black px-4 py-3 rounded-lg w-full hover:bg-[#FFD84D] transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium">Start a new session</span>
          </button>
          {searchVisible && (
            <button 
              onClick={() => setSearchVisible(!searchVisible)}
              className="p-2 bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              <Search className="w-4 h-4 text-gray-700" />
            </button>
          )}
        </div>

        {searchVisible && (
          <input
            type="text"
            placeholder="Search conversations..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full bg-white/50 text-gray-700 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black/10"
          />
        )}
      </div>

      {/* History List */}
      <div className=" invisible flex-grow overflow-auto">
        <div className="mb-4 text-gray-600 text-sm font-medium">
          Last 7 days
        </div>
        
        {todayConversations.concat(recentConversations).map((conversation) => (
          <button
            key={conversation._id}
            onClick={() => onSelectConversation?.(conversation._id)}
            className={`flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 hover:bg-black/5 transition-colors mb-2 ${
              activeConversationId === conversation._id ? 'bg-black/5' : ''
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">
              {formatTitle(conversation.title)}
            </span>
          </button>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="mt-auto space-y-2">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 hover:bg-black/5 transition-colors">
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Updates & FAQ</span>
        </button>
        <button className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-700 hover:bg-black/5 transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
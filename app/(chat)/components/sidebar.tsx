'use client'
interface HistoryItem {
    id: string;
    title: string;
    date: string;
    type: 'emergency' | 'consultation' | 'surgery';
  }
  
  const dummyHistory: HistoryItem[] = [
    {
      id: '1',
      title: 'Emergency chest trauma case',
      date: '2024-03-07',
      type: 'emergency'
    },
    {
      id: '2',
      title: 'Post-operative care simulation',
      date: '2024-03-07',
      type: 'surgery'
    },
    {
      id: '3',
      title: 'Cardiac consultation',
      date: '2024-03-07',
      type: 'consultation'
    },
    {
      id: '4',
      title: 'Trauma assessment',
      date: '2024-03-01',
      type: 'emergency'
    },
    {
      id: '5',
      title: 'Pre-operative evaluation',
      date: '2024-03-01',
      type: 'surgery'
    },
    {
      id: '6',
      title: 'Emergency response scenario',
      date: '2024-02-28',
      type: 'emergency'
    }
  ];
  
  import React, { useState } from 'react';
  import { Search, Plus, MessageSquare, HelpCircle, LogOut } from 'lucide-react';
  
  interface SidebarProps {
    onNewSession?: () => void;
    onSearch?: (query: string) => void;
    onClearHistory?: () => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({
    onNewSession,
    onSearch,
    onClearHistory
  }) => {
    const [searchVisible, setSearchVisible] = useState(false);
  
    // Get today's items
    const todayItems = dummyHistory.filter(
      item => item.date === '2024-03-07'
    );
  
    // Get items from last 7 days
    const recentItems = dummyHistory.filter(
      item => item.date !== '2024-03-07'
    );
  
    const baseTextStyle = "font-helvetica text-[18px] font-normal leading-[20px] text-left";

    return (
      <div className="w-80 h-screen bg-[#090909] border-r border-white/10 flex flex-col">
        {/* Header */}
        <div className="p-4">
          {/* Logo - keeping its original style */}
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
          {todayItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer group"
            >
              <MessageSquare className="w-5 h-5 text-white/70" />
              <span className={`text-white/70 truncate group-hover:text-white transition-colors ${baseTextStyle}`}>
                {item.title}
              </span>
            </div>
          ))}
  
          {recentItems.length > 0 && (
          <>
          {/* Divider */}
          <div className="h-px bg-white/10 mx-2 my-2" />
                        <div className={`py-2 px-3 text-white/50 ${baseTextStyle}`}>
                Last 7 days
              </div>
              <div className="h-px bg-white/10 mx-2 my-2" />
              {recentItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg cursor-pointer group"
                >
                  <MessageSquare className="w-5 h-5 text-white/70" />
                  <span className={`text-white/70 truncate group-hover:text-white transition-colors ${baseTextStyle}`}>
                    {item.title}
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
  
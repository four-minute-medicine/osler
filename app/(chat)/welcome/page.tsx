'use client'
import { useState } from 'react';
import WelcomePage from "../components/welcomesection";
import Sidebar from "../components/sidebar";
import { useRouter } from 'next/navigation';
import { chatApi } from '@/app/services/api';
import React from 'react';

interface Conversation {
  _id: string;
  title: string;
  messages: string[];
  user: string[];
  __v: number;
  timestamp: string;
}

export default function Welcome() {
  const router = useRouter();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [, setIsGeneratingCase] = useState(false);

  const handleNewCase = async () => {
    setIsGeneratingCase(true);
    try {
      const data = await chatApi.createNewCase('ready');
      if (data.conversationId) {
        router.push(`/chat/${data.conversationId}`);
        // Refresh conversations list
        const updatedData = await chatApi.getConversations();
        setConversations(updatedData.conversations);
      }
    } catch (error) {
      console.error('Error creating new case:', error);
    } finally {
      setIsGeneratingCase(false);
    }
  };

  const handleSelectConversation = (id: string) => {
    router.push(`/chat/${id}`);
  };

  // Fetch conversations when component mounts
  React.useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await chatApi.getConversations();
        setConversations(data.conversations);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  return (
    <div className="flex h-screen bg-[#1B1B1B]">
      <Sidebar
        conversations={conversations}
        onNewSession={handleNewCase}
        onSelectConversation={handleSelectConversation}
        activeConversationId=""
      />
      <WelcomePage />
    </div>
  );
}
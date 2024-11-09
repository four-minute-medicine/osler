'use client'
import { useState } from 'react';
import Sidebar from "../components/sidebar";
import { useRouter } from 'next/navigation';
import { chatApi } from '@/app/services/api';
import React from 'react';
import IntroSection from '../components/introsection';

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
        router.push(`/parent/${data.conversationId}`);
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
    router.push(`/parent/${id}`);
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
    <div className="flex h-screen w-screen bg-white">
      <Sidebar
        conversations={conversations}
        onNewSession={handleNewCase}
        colour='#FFE5EC'
        onSelectConversation={handleSelectConversation}
        activeConversationId=''
      />
      <IntroSection highlightedWord='Parent' unHighlightedWord='Chat' colour='#FFE5EC' discription="Have a question about your child's health? I'm here to help! Ask me anything about the Road to Health Book."/>
    </div>
  );
}
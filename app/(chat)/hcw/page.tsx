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
      const data = await chatApi.hcw.create('ready');
      if (data.conversationId) {
        router.push(`/hcw/${data.conversationId}`);
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
    router.push(`/hcw/${id}`);
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
        colour='#D1E4D1'
        onSelectConversation={handleSelectConversation}
        activeConversationId=''
      />
      <IntroSection highlightedWord='HCW' subtext='E.g. What do I need to to do if a child presents with [symptom]?' unHighlightedWord='Chat' colour='#D1E4D1' discription="Helps healthcare workers (HCWs) find the information they are looking for whilst in the flow of work"/>
    </div>
  );
}
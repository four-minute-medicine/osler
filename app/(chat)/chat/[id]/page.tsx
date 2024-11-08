'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { chatApi } from '@/app/services/api';
import { Message } from '../../types/chat';
import Sidebar from '../../components/sidebar';
import ChatSection from '../../components/chatsection';

interface Conversation {
  _id: string;
  title: string;
  messages: string[];
  user: string[]; // Update based on your user structure
  __v: number;
}

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);

  // Fetch all conversations for sidebar
  useEffect(() => {
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

  // Fetch current conversation messages
  useEffect(() => {
    const fetchMessages = async () => {
      if (params.id) {
        try {
          const data = await chatApi.getConversationHistory(params.id as string);
          setCurrentMessages(data.messages);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
    };

    fetchMessages();
  }, [params.id]);

  const handleNewSession = async () => {
    try {
      const initialMessage = "Hi there";
      const data = await chatApi.createConversation(initialMessage);
      router.push(`/chat/${data.conversation._id}`);
      // Refresh conversations list
      const updatedData = await chatApi.getConversations();
      setConversations(updatedData.conversations);
    } catch (error) {
      console.error('Error creating new conversation:', error);
    }
  };

  const handleSearch = async (query: string) => {
    // Implement search functionality
    console.log('Searching:', query);
  };

  const handleClearHistory = async () => {
    // Implement clear history functionality
    console.log('Clearing history');
  };

  const handleSelectConversation = (id: string) => {
    router.push(`/chat/${id}`);
  };

  const handleSendMessage = async (message: string) => {
    if (!params.id) return;

    try {
      const data = await chatApi.continueConversation(params.id as string, message);
      setCurrentMessages(prev => [...prev, data.message]);
      return data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  };

  return (
    <div className="flex h-screen bg-[#090909] w-screen">
      <Sidebar
        conversations={conversations}
        onNewSession={handleNewSession}
        onSearch={handleSearch}
        onClearHistory={handleClearHistory}
        onSelectConversation={handleSelectConversation}
        activeConversationId={params.id as string}
      />
      <ChatSection
        conversation={conversations.find(c => c._id === params.id)}
        messages={currentMessages}
        onSendMessage={handleSendMessage}
        onNewCase={handleNewSession}
      />
    </div>
  );
}
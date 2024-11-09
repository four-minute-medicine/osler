'use client'
import { chatApi } from '@/app/services/api';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChatSection from '../../components/chatsection';
import Sidebar from '../../components/sidebar';
interface Message {
  user_type: 'student' | 'assistant';
  message: string;
}

interface Conversation {
  _id: string;
  title: string;
  messages: string[];
  user: string[];
  __v: number;  
  timestamp: string;
}

interface ConversationMessage {
  _id: string;
  user_prompt: string;
  user_type: 'student' | 'assistant';
  conversation: string;
  __v: number;
}

interface MessageResponse {
  messages: Message[];
}

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setCurrentMessages] = useState<Message[]>([]);
  const [isGeneratingCase, setIsGeneratingCase] = useState(false);

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
          // Map ConversationMessage to Message
          setCurrentMessages(
            data.messages.map((msg: ConversationMessage) => ({
              user_type: msg.user_type,
              message: msg.user_prompt
            }))
          );
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
    };

    fetchMessages();
  }, [params.id]);

  const handleSendMessage = async (message: string) => {
    if (!params.id) return;

    try {
      const data: MessageResponse = await chatApi.continueConversation(
        params.id as string,
        message
      );

      if (data.messages && data.messages.length > 0) {
        setCurrentMessages((prev) => [...prev, ...data.messages]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

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

  return (
    <div className="flex h-screen w-screen bg-[#090909]">
      <Sidebar
        conversations={conversations}
        onNewSession={handleNewCase}
        onSelectConversation={handleSelectConversation}
        activeConversationId={params.id as string}
      />
      <ChatSection
        messages={messages}
        onSendMessage={handleSendMessage}
        onNewCase={handleNewCase}
        isGeneratingCase={isGeneratingCase}
      />
    </div>
  );
}
'use client'
import { chatApi } from '@/app/services/api';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChatSection from '../../components/chatsection';
import Sidebar from '../../components/sidebar';

interface Message {
  user_type: 'student' | 'assistant'| 'parent';
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
    
    // Immediately add user message to the UI
    const userMessage: Message = {
      user_type: 'student',
      message: message
    };
    setCurrentMessages(prev => [...prev, userMessage]);
  
    try {
      const data: MessageResponse = await chatApi.hcw.continue(
        params.id as string,
        message
      );
      if (data.messages && data.messages.length > 0) {
        // Add assistant messages with typing effect
        const assistantMessages = data.messages.filter(msg => msg.user_type === 'assistant');
        assistantMessages.forEach(msg => {
          setCurrentMessages(prev => [...prev, {
            ...msg,
            isTyping: true
          }]);
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

  const handleNewCase = async () => {
    setIsGeneratingCase(true);
    try {
      const data = await chatApi.hcw.create('ready');
      if (data.conversationId) {
        router.push(`/hcw/${data.conversationId}`);
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

  return (
    <div className="flex h-screen w-screen bg-[#090909]">
      <Sidebar
        conversations={conversations}
        onNewSession={handleNewCase}
        colour='#D1E4D1'
        onSelectConversation={handleSelectConversation}
        activeConversationId={params.id as string}
      />
      <ChatSection
        title='hcw'
        messages={messages}
        onSendMessage={handleSendMessage}
        onNewCase={handleNewCase}
        isGeneratingCase={isGeneratingCase}
      />
    </div>
  );
}
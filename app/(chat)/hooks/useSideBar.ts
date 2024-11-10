import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Conversation } from '../types/sidebar';

export const useSidebar = (portalType: 'parent' | 'healthcare' | 'training') => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string>();
  const router = useRouter();

  // Get background color based on portal type
  const getBgColor = () => {
    switch (portalType) {
      case 'parent':
        return '#FFE5EC';
      case 'healthcare':
        return '#E5F4F0';
      case 'training':
        return '#F0EBE5';
      default:
        return '#FFE5EC';
    }
  };

  // Start new session
  const handleNewSession = useCallback(async () => {
    try {
      const response = await fetch('/api/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          type: portalType,
          timestamp: new Date().toISOString()
        }),
      });
      
      const newConversation = await response.json();
      setConversations(prev => [newConversation, ...prev]);
      setActiveConversationId(newConversation._id);
      
      // Navigate to the new conversation
      router.push(`/${portalType}/chat/${newConversation._id}`);
    } catch (error) {
      console.error('Failed to create new session:', error);
      // Handle error (show toast notification, etc.)
    }
  }, [portalType, router]);

  // Select conversation
  const handleSelectConversation = useCallback((id: string) => {
    setActiveConversationId(id);
    router.push(`/${portalType}/chat/${id}`);
  }, [portalType, router]);

  // Load conversations
  const loadConversations = useCallback(async () => {
    try {
      const response = await fetch(`/api/conversations?type=${portalType}`);
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      console.error('Failed to load conversations:', error);
      // Handle error
    }
  }, [portalType]);

  // Delete conversation
  const handleDeleteConversation = useCallback(async (id: string) => {
    try {
      await fetch(`/api/conversations/${id}`, {
        method: 'DELETE',
      });
      setConversations(prev => prev.filter(conv => conv._id !== id));
      if (activeConversationId === id) {
        setActiveConversationId(undefined);
      }
    } catch (error) {
      console.error('Failed to delete conversation:', error);
      // Handle error
    }
  }, [activeConversationId]);

  return {
    conversations,
    activeConversationId,
    bgColor: getBgColor(),
    handleNewSession,
    handleSelectConversation,
    handleDeleteConversation,
    loadConversations,
  };
};
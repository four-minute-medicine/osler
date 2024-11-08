'use client'
import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpCircle, CircleUser, Plus } from 'lucide-react';
import { ApiMessage, ChatSectionProps, ConversationMessage } from '../types/chat';


interface MessageDisplay {
  content: string;
  type: 'student' | 'assistant';
}

const formatMessageForDisplay = (message: ConversationMessage | ApiMessage): MessageDisplay => {
  if (typeof message === 'object' && message !== null && 'user_prompt' in message) {
    return {
      content: message.user_prompt,
      type: message.user_type
    };
  }
  return {
    content: message.message,
    type: message.user_type
  };
};

const MessageBubble: React.FC<{ message: MessageDisplay }> = ({ message }) => {  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  if (message.type === 'student') {
    return (
      <div className="flex justify-end">
        <div className="bg-[#D8E4FC] p-4 rounded-lg max-w-[85%]">
          <div className="flex items-center gap-2 text-black mb-2 font-bold text-[20px] font-helvetica">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <CircleUser />
            </div>
            <span>Student</span>
          </div>
          <div className="text-black font-helvetica text-[20px] font-normal leading-[30px] text-left">
            {message.content}  {/* Changed from user_prompt to message */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white/70 font-helvetica text-[20px] font-light italic leading-[30px] text-left">
      {formatContent(message.content)}  {/* Changed from user_prompt to message */}
    </div>
  );
};



const ChatSection: React.FC<ChatSectionProps> = ({ 
  messages = [], 
  onSendMessage, 
  onNewCase,
  isGeneratingCase = false
}) => {
  const displayMessages = messages.map(msg => formatMessageForDisplay(msg));
  const [inputValue, setInputValue] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onSendMessage) {
      setIsAiTyping(true);
      try {
        await onSendMessage(inputValue);
        setInputValue('');
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        setIsAiTyping(false);
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#1B1B1B]">
      <div className="flex-1 overflow-y-auto">
        <div className="pt-20 px-8 pb-8"> 
          <div className="max-w-4xl mx-auto space-y-6">
            {displayMessages.slice(1).map((message, index) => (
              <MessageBubble message={message} key={index} />
            ))}
            {isAiTyping && (
              <div className="text-white/50 italic">
                Your guide is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-white/10 p-4">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your response here..."
                className="w-full bg-white/5 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-white/20"
                disabled={isGeneratingCase}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#89B0FF] hover:text-[#89B0FF]/80 transition-colors disabled:opacity-50"
                disabled={!inputValue.trim() || isAiTyping || isGeneratingCase}
              >
                <ArrowUpCircle className="w-6 h-6" />
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <div className="text-white/50 text-xs mb-4">
              Answers are generated from our content and intended for study support. 
              For detailed guidance, always refer to official medical sources.
            </div>
            <button
              onClick={onNewCase}
              disabled={isGeneratingCase}
              className="flex items-center gap-2 bg-[#89B0FF] text-black px-4 py-2 rounded-lg mx-auto hover:bg-[#89B0FF]/90 transition-colors disabled:opacity-50"
            >
              {isGeneratingCase ? (
                <span>Generating new case...</span>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Generate a new case
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ChatSection;
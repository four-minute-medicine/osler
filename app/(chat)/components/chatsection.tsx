'use client'
import React, { useRef, useEffect, useState } from 'react';
import { ArrowUp, CircleUser, Mic } from 'lucide-react';
import { ApiMessage, ChatSectionProps, ConversationMessage } from '../types/chat';


interface MessageDisplay {
  content: string;
  type: 'student' | 'assistant' | 'parent';
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

const MessageBubble: React.FC<{ message: MessageDisplay,title:string }> = ({ message,title }) => {  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };
  const c = ((title == 'hcw') ? '#D1E4D1' : '#E0D7CE');

  if (message.type === 'student') {
    return (
      <div className="flex justify-end">
        <div className="bg-[#FFE5EC] p-4 rounded-lg max-w-[85%]"             style={{
              backgroundColor: c
            }}>
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
  else if (message.type === 'parent') {
    return (
      <div className="flex justify-end">
        <div className="bg-[#FFE5EC] p-4 rounded-lg max-w-[85%]">
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
    <div className="text-black font-helvetica text-[20px] font-light italic leading-[30px] text-left">
      {formatContent(message.content)}  {/* Changed from user_prompt to message */}
    </div>
  );
};



const ChatSection: React.FC<ChatSectionProps> = ({ 
  title = '',
  messages = [], 
  onSendMessage, 
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
    <div className="flex-1 flex flex-col h-screen bg-white">
      <div className="flex-1 overflow-y-auto">
        <div className="pt-20 px-8 pb-8"> 
          <div className="max-w-4xl mx-auto space-y-6">
            {displayMessages.map((message, index) => (
              <MessageBubble message={message} key={index} title={title} />
            ))}
            {isAiTyping && (
              <div className="text-black italic">
                Your guide is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-8">
      {/* Disclaimer text */}


      <div className="border-t border-white/10 p-4">
        <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center gap-3">
          {/* Mic icon */}
          <div className="absolute left-4 text-black">
            <Mic className="w-5 h-5" />
          </div>

          {/* Text input */}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question here..."
            className="w-full bg-[#F4F4F4] text-black rounded-[14px] pl-12 pr-12 py-4 focus:outline-none"
            disabled={isGeneratingCase}
          />

          {/* Submit button */}
          <button
          type="submit"
          className={`
            w-[46px] h-[46px] rounded-full flex items-center justify-center
            ${inputValue.trim() && !isGeneratingCase 
              ? 'bg-[#FFE27D] hover:bg-[#FFD84D]' 
              : 'bg-gray-200'
            }
            transition-all duration-200 disabled:opacity-50
          `}
          disabled={!inputValue.trim() || isGeneratingCase}
        >
          <ArrowUp 
            className={`w-5 h-5 ${inputValue.trim() && !isGeneratingCase ? 'text-black' : 'text-gray-400'}`}
          />
        </button>
        </div>
      </form>
      <p className="text-center text-gray-600 text-sm mt-4">
        Information is for educational purposes. Always consult a healthcare worker if you child has any danger signs.
      </p>
</div>
          <div className="mt-4 text-center">
            <div className="text-white/50 text-xs mb-4">
              Answers are generated from our content and intended for study support. 
              For detailed guidance, always refer to official medical sources.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ChatSection;
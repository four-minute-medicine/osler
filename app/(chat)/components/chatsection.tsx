'use client'
import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpCircle, CircleUser, Plus } from 'lucide-react';

interface Message {
  id: string;
  role: 'ai' | 'user';
  content: string;
  timestamp: string;
}

const dummyMessages: Message[] = [
    {
        id: '1',
        role: 'ai',
        content: 'You are in the emergency department, where a 25 year old male patient has been brought in after a stab to anterior chest. They have no known comorbidities and they appear distressed...\n\nThe Patient: "I can\'t catch my breath, and my chest feels tight. Help! I think I might pass out!"\n\n💡 The Team applies ATLS principles. He is transferred to a trauma bay, placed on face mask O2, and a wide bore IV line is currently being placed by your colleague. Whilst the team is exposing the patient you note that the patients\' blood pressure is 70/40. You tell a colleague to place another IV line in the patient. You briefly auscultate the chest and hear breath sounds bilaterally and your colleagues start your patient on fluids. You are not sure if you can hear the heart sounds, you are only 20% certain you can hear them. What do you think could be the diagnosis based on the Patient\'s symptoms and circumstances?',
        timestamp: '10:00'
      },
      {
        id: '2',
        role: 'user',
        content: 'Tell me how I need to prep the theater for the operation?',
        timestamp: '10:01'
      },    {
        id: '5',
        role: 'ai',
        content: 'You are in the emergency department, where a 25 year old male patient has been brought in after a stab to anterior chest. They have no known comorbidities and they appear distressed...\n\nThe Patient: "I can\'t catch my breath, and my chest feels tight. Help! I think I might pass out!"\n\n💡 The Team applies ATLS principles. He is transferred to a trauma bay, placed on face mask O2, and a wide bore IV line is currently being placed by your colleague. Whilst the team is exposing the patient you note that the patients\' blood pressure is 70/40. You tell a colleague to place another IV line in the patient. You briefly auscultate the chest and hear breath sounds bilaterally and your colleagues start your patient on fluids. You are not sure if you can hear the heart sounds, you are only 20% certain you can hear them. What do you think could be the diagnosis based on the Patient\'s symptoms and circumstances?',
        timestamp: '10:00'
      },
      {
        id: '6',
        role: 'user',
        content: 'Tell me how I need to prep the theater for the operation?',
        timestamp: '10:01'
      },    {
        id: '7',
        role: 'ai',
        content: 'You are in the emergency department, where a 25 year old male patient has been brought in after a stab to anterior chest. They have no known comorbidities and they appear distressed...\n\nThe Patient: "I can\'t catch my breath, and my chest feels tight. Help! I think I might pass out!"\n\n💡 The Team applies ATLS principles. He is transferred to a trauma bay, placed on face mask O2, and a wide bore IV line is currently being placed by your colleague. Whilst the team is exposing the patient you note that the patients\' blood pressure is 70/40. You tell a colleague to place another IV line in the patient. You briefly auscultate the chest and hear breath sounds bilaterally and your colleagues start your patient on fluids. You are not sure if you can hear the heart sounds, you are only 20% certain you can hear them. What do you think could be the diagnosis based on the Patient\'s symptoms and circumstances?',
        timestamp: '10:00'
      },
      {
        id: '8',
        role: 'user',
        content: 'Tell me how I need to prep the theater for the operation?',
        timestamp: '10:01'
      },
];

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const formatContent = (content: string) => {
      return content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < content.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    };
  
    if (message.role === 'user') {
      return (
        <div className="flex justify-end"> {/* Changed to justify-end */}
          <div className="bg-[#D8E4FC] p-4 rounded-lg max-w-[85%]">
            <div className="flex items-center gap-2 text-black mb-2 font-bold text-[20px] font-helvetica">
              <div className="w-6 h-6 rounded-full bg-white/10 flex  items-center justify-center">
                <CircleUser/>
              </div>
              <span>Student</span>
            </div>
            <div className="text-black font-helvetica text-[20px] font-normal leading-[30px] text-left">
              {message.content}
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="text-white/70 font-helvetica text-[20px] font-light italic leading-[30px] text-left">
        {formatContent(message.content)}
      </div>
    );
  };

interface ChatSectionProps {
  onSendMessage?: (message: string) => void;
  onNewCase?: () => void;
}

const ChatSection: React.FC<ChatSectionProps> = ({ onSendMessage, onNewCase }) => {
  const [inputValue, setInputValue] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [dummyMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue);
      setInputValue('');
      setIsAiTyping(true);
      setTimeout(() => setIsAiTyping(false), 3000);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-[#1B1B1B]">
      <div className="flex-1 overflow-y-auto">
        <div className="pt-20 px-8 pb-8"> 
          <div className="max-w-4xl mx-auto space-y-6">
            {dummyMessages.map((message) => (
              <MessageBubble key={message.id} message={message} />
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
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#89B0FF] hover:text-[#89B0FF]/80 transition-colors disabled:opacity-50"
                disabled={!inputValue.trim()}
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
              className="flex items-center gap-2 bg-[#89B0FF] text-black px-4 py-2 rounded-lg mx-auto hover:bg-[#89B0FF]/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Generate a new case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
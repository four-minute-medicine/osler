import React, { useState } from 'react';
import { ArrowUp, Loader2 } from 'lucide-react';
import { chatApi, ConversationType } from '@/app/services/api';
import { Baloo_Bhai_2 } from 'next/font/google';
import { useRouter } from 'next/navigation';

const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] });

interface ChatViewProps {
  chat?: ConversationType;
  highlightedWord?: string;
  unHighlightedWord?: string;
  discription: string;
  colour: string;
  subtext?: string;
}

const IntroSection: React.FC<ChatViewProps> = ({ 
  highlightedWord = 'Parent',
  unHighlightedWord,
  colour, 
  discription,
  chat = 'parent',
  subtext
}) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsLoading(true);
    try {
      const response = await chatApi.createConversation(chat, question);
      if (response.conversationId) {
        router.push(`/${chat}/${response.conversationId}`);
      }
    } catch (error) {
      console.error('Error creating conversation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-screen">
      {/* Header Section */}
      <div className="text-center mb-12 text-black">
        <h1 className={`${balooBhai.className} text-8xl font-bold mb-6 flex items-center justify-center gap-2`}>
          <span className={`px-4 py-1 rounded-lg`} style={{background: colour}}>
            {highlightedWord}
          </span>
          <span>{unHighlightedWord}</span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl">
            {discription}
          </p>
          {subtext ? (
            <p><br/>{subtext}</p>
          ) : (
            <p className="text-2xl">
              Start a Case now by typing <strong>START</strong> and pressing <strong>ENTER</strong>
            </p>
          )}
        </div>
      </div>

      {/* Chat Input Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl relative">
        <div className="flex items-center gap-4">
          <div className="flex-grow bg-gray-100 rounded-lg">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full px-4 py-4 bg-transparent focus:outline-none text-gray-800 rounded-lg"
              disabled={isLoading}
            />
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className={`
              w-[46px] h-[46px] rounded-full flex items-center justify-center
              transition-all duration-200
              ${isLoading 
                ? 'bg-gray-200' 
                : question.trim() 
                  ? 'bg-[#FFD666] hover:bg-[#FFE4E4]' 
                  : 'bg-gray-200'
              }
            `}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-gray-600 animate-spin" />
            ) : (
              <ArrowUp className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </form>

      {/* Disclaimer */}
      <p className="text-sm text-black mt-6 max-w-3xl text-center">
        Information is for educational purposes. Always consult a healthcare worker if you child has any danger signs.
      </p>
    </div>
  );
};

export default IntroSection;
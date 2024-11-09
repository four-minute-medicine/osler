import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { chatApi } from '@/app/services/api';
import { Baloo_Bhai_2 } from 'next/font/google';
import { useRouter } from 'next/navigation';

const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] });

interface ChatViewProps {
  highlightedWord?: string;
  unHighlightedWord?:string;
  colour:string;
}

const IntroSection: React.FC<ChatViewProps> = ({ highlightedWord = 'Parent',unHighlightedWord ,colour}) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      const response = await chatApi.createNewCase(question);
      if (response.conversationId) {
        router.push(`/${highlightedWord}/${response.conversationId}`);
      }
    } catch (error) {
      console.error('Error creating conversation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-16 w-screen">
      {/* Header Section */}
      <div className="text-center mb-12 text-black">
        <h1 className={`${balooBhai.className} text-8xl font-bold mb-6 flex items-center justify-center gap-2`}>
          <span className={`px-4 py-1 rounded-lg`} style={{background:colour}}>
            {highlightedWord}
          </span>
          <span >{unHighlightedWord}</span>
        </h1>
        <div className="max-w-2xl  mx-auto">
          <p className="text-2xl mb-2">Have a question about your child&apos;s health?</p>
          <p className="text-lg">
            I&apos;m here to help! Ask me anything about the Road to Health Book.
          </p>
        </div>
      </div>

      {/* Chat Input Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-3xl relative">
        <div className="relative">
          <div className="flex items-center bg-gray-100 rounded-lg">
            <div className="flex-grow">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                className="w-full px-4 py-4 bg-transparent focus:outline-none text-gray-800"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="mr-2 bg-[#FFD666] p-2 rounded-full hover:bg-[#FFE4E4] transition-colors"
            >
              <ArrowUp className="w-6 h-6 text-gray-700" />
            </button>
          </div>
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
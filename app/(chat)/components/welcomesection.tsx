'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { StudyModeProps } from '../types/welcome';
import { chatApi } from '@/app/services/api';

const StudyModeButton: React.FC<StudyModeProps & { disabled?: boolean; onClick?: () => Promise<void> }> = ({ 
  title, 
  description, 
  disabled,
  onClick 
}) => (
  <div className="flex flex-col items-center">
    {disabled ? (
      <div
        className="bg-[#89B0FF]/10 text-white/50 px-8 py-4 rounded-lg mb-6 w-full text-center cursor-not-allowed"
      >
        {title}
        <span className="ml-2 text-sm">(Coming Soon)</span>
      </div>
    ) : (
      <button
        onClick={onClick}
        className="bg-[#89B0FF]/20 text-white px-8 py-4 rounded-lg hover:bg-[#89B0FF]/30 transition-colors mb-6 w-full text-center"
      >
        {title}
      </button>
    )}
    <p className="text-white/70 text-center max-w-xs">
      {description}
    </p>
  </div>
);

const WelcomePage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateCase = async () => {
    setIsLoading(true);
    try {
      const data = await chatApi.createNewCase('ready');
      if (data.conversationId) {
        router.push(`/chat/${data.conversationId}`);
      }
    } catch (error) {
      console.error('Error creating new case:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const studyModes = [
    {
      title: "VIRTUAL PATIENT CASES",
      description: "Need practice identifying your knowledge gap? Generate Patient scenarios and put your knowledge to the test.",
      disabled: false
    },
    {
      title: "KNOWLEDGE CHECK",
      description: "Stuck looking for an answer? Ask any question related to the material, and I'll even link it to the material",
      disabled: true
    },
    {
      title: "ASK ANYTHING",
      description: "Don't understand a section in the material? Paste in or reference a section to explain it better.",
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pl-20">
      <div className="max-w-6xl w-full">
        {/* Welcome Text */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold text-white mb-8">
            Welcome to{' '}
            <span className="text-[#89B0FF] underline">Osler</span>
          </h1>
          <p className="text-white/90 text-2xl max-w-3xl">
            We are here to help you build confidence, deepen your knowledge, and master the art of Clinical care.
            Enter one of our study modes to get started!
          </p>
        </div>

        {/* Study Modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studyModes.map((mode, index) => (
            <StudyModeButton
              key={index}
              title={isLoading && !mode.disabled ? `${mode.title} ...` : mode.title}
              description={mode.description}
              disabled={mode.disabled}
              onClick={!mode.disabled ? handleCreateCase : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
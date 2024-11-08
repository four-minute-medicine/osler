import React from 'react';
import Link from 'next/link';
import { StudyModeProps } from '../types/welcome';

const StudyModeButton: React.FC<StudyModeProps> = ({ title, description, href }) => ( //to be moved out
  <div className="flex flex-col items-center">
    <Link 
      href={href}
      className="bg-[#89B0FF]/20 text-white px-8 py-4 rounded-lg hover:bg-[#89B0FF]/30 transition-colors mb-6 w-full text-center"
    >
      {title}
    </Link>
    <p className="text-white/70 text-center max-w-xs">
      {description}
    </p>
  </div>
);

const WelcomePage: React.FC = () => {
  const studyModes = [
    {
      title: "VIRTUAL PATIENT CASES",
      description: "Need practice identifying your knowledge gap? Generate Patient scenarios and put your knowledge to the test.",
      href: "/virtual-cases"
    },
    {
      title: "KNOWLEDGE CHECK",
      description: "Stuck looking for an answer? Ask any question related to the material, and I'll even link it to the material",
      href: "/knowledge-check"
    },
    {
      title: "ASK ANYTHING",
      description: "Don't understand a section in the material? Paste in or reference a section to explain it better.",
      href: "/ask"
    }
  ];

  return (
    <div className="min-h-screen  flex items-center  justify-center pl-20">
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
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {studyModes.map((mode, index) => (
            <StudyModeButton
              key={index}
              title={mode.title}
              description={mode.description}
              href={mode.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
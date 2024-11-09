'use client'
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full pt-10 min-h-screen relative bg-[#FDFBF7] overflow-hidden">

      {/* Content with higher z-index */}
      <div className="relative z-[1] mx-auto pl-9 py-32">
        <div className="flex flex-col items-center max-w-[1400px] mx-auto">
          {/* Header with minimal styling */}
          <div className="relative mb-16">
            <span
              className="text-sm tracking-[0.3em] uppercase font-helvetica font-bold text-black px-6 py-2"
            >
              SOLUTION
            </span>
          </div>
          
          {/* Main content with clean typography */}
          <div className="space-y-20">
            <h2
              className="text-center leading-tight text-black font-helvetica"
              style={{
                fontSize: 'clamp(48px, 5vw, 75px)',
                lineHeight: '1.2',
                fontWeight: '700',
              }}
            >
              Your AI-powered partner, designed to streamline your journey in child health by offering features for parent queries & helping healthcare workers in the public sector confidently manage paediatric conditions using national guidelines.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
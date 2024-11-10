'use client'
import React from 'react';
import Image from 'next/image';
import vector from '../../assets/vector.png';
import Footer from '../footer';
import router from 'next/router';

const GetStartedSection: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen py-32 pl-9 relative overflow-hidden bg-[#F2F1E5] z-0"
    >
      {/* Background Vector */}
      <div className="absolute left-[-200px] top-1/2 w-[800px] h-[800px] opacity-[0.15] transform rotate-[270deg]">
        <Image
          src={vector}
          alt="Background vector"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center relative z-10 pb-8">
        <div className="w-full max-w-[1200px] min-h-[400px] flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 relative">
          {/* Card background */}
          <div 
            className="absolute inset-0 rounded-[32px]"
            style={{
              backgroundColor: '#E5EEF6'
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto py-20">
            <span 
              className="text-sm tracking-[0.3em] uppercase mb-8 text-gray-600 block font-helvetica font-bold" 
            >
              GET STARTED
            </span>

            <h2 
              className="text-4xl md:text-6xl font-bold font-helvetica mb-16 text-black mx-auto"
              style={{ 
                lineHeight: '1.2'
              }}
            >
              Ask your query or test your knowledge Brightstart
            </h2>

            <button 
              onClick={() => router.push('/welcome')}
              className="px-8 py-4 text-xl font-helvetica font-bold bg-[#FFEF89] text-black rounded-lg hover:bg-[#FFD84D] transition-all duration-300"
            >
              Try Our Beta Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default GetStartedSection;
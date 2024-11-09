import React from 'react';
import Footer from '../footer';

const GetStartedSection: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(197.35% 156.15% at 117.29% 148.31%, #A1FFCE 1.5%, #D8FFE4 18%, #BDFFD7 34.5%, #FAFFD1 48%, #FAFFD1 100%)'
      }}
    >
      {/* Background glow effect */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          boxShadow: 'inset 0 0 100px rgba(161, 255, 206, 0.5)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center relative z-10">
        <div className="w-full max-w-[90vw] min-h-[600px] lg:min-h-[750px] flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 relative">
          {/* Card background with blur */}
          <div className="absolute inset-0 backdrop-blur-sm bg-emerald-50/10 rounded-t-[15px]" />
          
          {/* Border overlay */}
          <div 
            className="absolute inset-0 rounded-t-[15px]"
            style={{
              background: 'linear-gradient(180deg, rgba(167, 243, 208, 0.2) 0%, transparent 100%)',
              border: '1px solid rgba(167, 243, 208, 0.2)',
              borderBottom: 'none'
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            <span className="inline-block text-sm tracking-[0.3em] uppercase mb-4 text-emerald-700 font-helvetica bg-emerald-50/30 px-4 py-2 rounded-full">
              GET STARTED
            </span>
            
            <h2 className="text-emerald-950 text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl mx-auto">
              Test your knowledge with<br className="hidden md:block" />
              our AI patient simulator
            </h2>

            <button className="bg-emerald-500 text-white font-bold text-2xl md:text-3xl px-8 py-4 rounded-lg hover:bg-emerald-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Try Our Beta Now
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />

      <Footer />
    </section>
  );
};

export default GetStartedSection;
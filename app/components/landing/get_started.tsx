'use client'
import React from 'react';
import Footer from '../footer';

const GetStartedSection: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#FFA7D1' // Matching the primary pink from the theme
      }}
    >
      {/* Floating bubbles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-32 w-32 rounded-full bg-yellow-200/30 blur-xl animate-float" 
          style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="absolute h-24 w-24 rounded-full bg-blue-200/30 blur-xl animate-float" 
          style={{ left: '80%', top: '15%', animationDelay: '2s' }} />
        <div className="absolute h-40 w-40 rounded-full bg-green-200/30 blur-xl animate-float" 
          style={{ left: '20%', top: '60%', animationDelay: '4s' }} />
        <div className="absolute h-28 w-28 rounded-full bg-pink-200/30 blur-xl animate-float" 
          style={{ left: '70%', top: '70%', animationDelay: '6s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center relative z-10">
        <div className="w-full max-w-[90vw] min-h-[600px] lg:min-h-[750px] flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 relative group">
          {/* Card background with fun gradient */}
          <div 
            className="absolute inset-0 rounded-[35px] transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
              backdropFilter: 'blur(10px)',
              border: '4px solid rgba(255, 255, 255, 0.2)'
            }}
          />

          {/* Playful corner decorations */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-[#FFB862] rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#FFA7D1] rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-[#A6FF96] rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-[#92DFFF] rounded-br-xl" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            <span 
              className="inline-block text-sm tracking-[0.3em] uppercase mb-4 text-gray-800 bg-white/50 px-6 py-2 rounded-full shadow-lg"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              GET STARTED
            </span>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl mx-auto bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(to right, #2D3047 20%, #419D78 80%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              Test your knowledge with<br className="hidden md:block" />
              our AI patient simulator
            </h2>

            <button 
              className="relative group overflow-hidden rounded-[25px] text-3xl font-bold transition-all transform hover:scale-105 hover:-rotate-2"
              style={{
                background: 'linear-gradient(45deg, #FFB862, #FFA7D1)',
                boxShadow: '0 4px 0 #2D3047',
                width: '369px',
                height: '86px'
              }}
            >
              <span className="relative z-10 text-white">Try Our Beta Now</span>
              <div 
                className="absolute inset-0 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, #FFA7D1, #FFB862)'
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute -top-6 left-1/4 transform -rotate-12">
        <div className="w-12 h-12 bg-[#FFB862] rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute -top-4 right-1/4 transform rotate-12">
        <div className="w-8 h-8 bg-[#FFA7D1] rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute -right-6 top-1/3 transform rotate-45">
        <div className="w-10 h-10 bg-[#A6FF96] rounded-lg animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GetStartedSection;
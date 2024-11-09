'use client'
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full pt-10 min-h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(77.11% 58.88% at 50% 50%, #FFA7D1 0%, #FFB862 25%, #A6FF96 50%, #92DFFF 100%)'
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 mx-auto px-6 py-32">
        <div className="flex flex-col items-center max-w-[1400px] mx-auto">
          {/* Header with enhanced styling */}
          <div className="relative mb-16">
            <span
              className="text-sm tracking-[0.3em] uppercase text-gray-800 bg-white/50 px-6 py-2 rounded-full shadow-lg"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              What We Do
            </span>
          </div>

          {/* Main content with visual separation */}
          <div className="space-y-12">
            <h2
              className="text-center leading-tight bg-clip-text text-transparent"
              style={{
                fontSize: 'clamp(48px, 5vw, 75px)',
                lineHeight: '1.2',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: '700',
                background: 'linear-gradient(to right, #2D3047 20%, #419D78 80%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              BrightStart is a virtual patient simulation,
              offering safe, scenario-based learning to help
              clinicians build diagnostic and communication
              skills with confidence.
            </h2>

            {/* Stats cards with playful styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-8 rounded-2xl relative group hover:transform hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFA7D1, #FFB862)',
                  boxShadow: '0 4px 0 #2D3047'
                }}>
                <div className="text-white text-6xl font-bold mb-4">100+</div>
                <div className="text-white text-xl">Clinical Scenarios</div>
              </div>
              <div className="text-center p-8 rounded-2xl relative group hover:transform hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFB862, #A6FF96)',
                  boxShadow: '0 4px 0 #2D3047'
                }}>
                <div className="text-white text-6xl font-bold mb-4">24/7</div>
                <div className="text-white text-xl">Learning Access</div>
              </div>
              <div className="text-center p-8 rounded-2xl relative group hover:transform hover:scale-105 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #A6FF96, #92DFFF)',
                  boxShadow: '0 4px 0 #2D3047'
                }}>
                <div className="text-white text-6xl font-bold mb-4">98%</div>
                <div className="text-white text-xl">Student Satisfaction</div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <button 
                className="relative group overflow-hidden bg-[#2D3047] text-white font-bold text-2xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-rotate-2"
                style={{
                  boxShadow: '0 4px 0 #FFB862'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFA7D1] to-[#FFB862] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Learning Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

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

export default SolutionSection;
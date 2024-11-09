import React from 'react';
import Navbar from '../navbar';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <div className={`relative w-full bg-[#A1FFCE] ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(77.11% 58.88% at 50% 90.5%, #A1FFCE 0%, #BDFFD7 25%, #D8FFE4 50%, #FAFFD1 100%)'
        }}
      />
      <div className="relative z-10">
        <Navbar />
        {/* Hero Content */}
        <div className="max-w-[1600px] mx-auto pt-40 px-6">
          <div className="text-center mx-auto">
            <h1 className="text-7xl md:text-8xl font-bold text-emerald-950 mb-8" style={{ lineHeight: '1.2' }}>
              AI Patient Simulations for<br />
              Smarter Clinical Training
            </h1>
            <p className="text-emerald-800 mx-auto mb-16 max-w-[1385px]" style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '31px',
              fontWeight: '400',
              lineHeight: '63px'
            }}>
              Osler helps medical students develop critical thinking skills through personalised, adaptive, and case-based learning, so that they can become effective problem-solvers and decision-makers.
            </p>
            {/* Email Input */}
            <div className="relative w-full max-w-2xl mx-auto mb-32">
              <button
                className="w-[369px] h-[86px] bg-emerald-500 text-white font-bold rounded-[10px] text-3xl hover:bg-emerald-400 transition-all"
              >
                Try Our Beta Now
              </button>
            </div>
          </div>
          {/* Video Section */}
          <div className="relative w-full max-w-[1681px] z-10 mx-auto px-6">
            <div
              className="w-full aspect-[1681/745] bg-gradient-to-b from-emerald-200 to-emerald-300 rounded-t-[20px] relative"
            >
              {/* Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 mix-blend-overlay rounded-t-[20px]"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-100/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-emerald-200/50 to-transparent" />
            </div>
          </div>
          <div className="absolute z-0 bottom-20 w-full left-0 right-0 h-20 bg-[#A1FFCE] translate-y-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
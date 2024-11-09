'use client'
import React from 'react';
import Navbar from '../navbar';
import videoSource from '../../assets/ui_prototype.webm';
import Image from 'next/image';
import vector from '../../assets/vector 2.png';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <div className={`relative w-full bg-[#FDFBF7] ${className}`}>
      <div className="relative z-10">
        <Navbar />
        <div className="absolute right-28 top-6  w-[800px] h-[800px] opacity-[1] rotate-90 ">
        <Image
          src={vector}
          alt="Background vector"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

        {/* Hero Content */}
        <div className="max-w-[1600px] mx-auto pt-40 px-6">
          <div className="text-center mx-auto">
            <h1 
              className="text-7xl md:text-8xl font-bold mb-8 text-black"
              style={{ 
                lineHeight: '1.1',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Navigating child health<br /> guidelines, simplified.
            </h1>
            <p className="text-gray-600 mx-auto mb-16 max-w-[900px]" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '1.5'
            }}>
              Start bright, stay bright with Brightstart. Empowering parents and healthcare workers to navigate child health related issues with confidence.
            </p>

            <button
              className="px-8 py-4 text-xl font-medium bg-[#FFEF89] text-black rounded-lg hover:bg-[#FFD84D] transition-all duration-300"
            >
              Try Our Beta Now
            </button>
          </div>

          {/* Video Section */}
          <div className="relative w-full max-w-[1200px] mx-auto mt-20">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
              <video
                className="w-full h-full object-cover"
                controls={false}
                playsInline
                autoPlay
                loop
                muted
              >
                <source src={videoSource} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
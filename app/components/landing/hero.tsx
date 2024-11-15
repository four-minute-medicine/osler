'use client'
import React from 'react';
import Navbar from '../navbar';
import videoSource from '../../assets/brightstart_UI_video.webm';
import Image from 'next/image';
import vector from '../../assets/vector.png';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={`relative w-full bg-[#F2F1E5] ${className}`}>
      {/* Vector background container with lower z-index */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-28 top-6 w-[800px] h-[800px] opacity-[1] rotate-90">
          <Image
            src={vector}
            alt="Background vector"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      {/* Content container with higher z-index */}
      <div className="relative z-20">
        <Navbar />
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
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '1.5'
            }}>
              Start bright, stay bright with BrightStart. Empowering parents and healthcare workers to navigate child health related issues with confidence.
            </p>
            <button
              onClick={() => router.push('/welcome')}
              className="relative z-30 px-8 py-4 text-xl font-medium bg-[#FFEF89] text-black rounded-lg hover:bg-[#FFD84D] transition-all duration-300"
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
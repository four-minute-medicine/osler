  'use client'
  import React from 'react';
  import Navbar from '../navbar';
  import videoSource from '../../assets/ui_prototype.webm';
  interface HeroSectionProps {
    className?: string;
  }

  const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
    return (
      <div className={`relative w-full bg-[#FFA7D1] ${className}`}>
        {/* Playful background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(77.11% 58.88% at 50% 90.5%, #FFA7D1 0%, #FFB862 25%, #A6FF96 50%, #92DFFF 100%)'
          }}
        />

        {/* Floating bubbles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-32 w-32 rounded-full bg-yellow-200/30 blur-xl animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
          <div className="absolute h-24 w-24 rounded-full bg-blue-200/30 blur-xl animate-float" style={{ left: '80%', top: '15%', animationDelay: '2s' }} />
          <div className="absolute h-40 w-40 rounded-full bg-green-200/30 blur-xl animate-float" style={{ left: '20%', top: '60%', animationDelay: '4s' }} />
          <div className="absolute h-28 w-28 rounded-full bg-pink-200/30 blur-xl animate-float" style={{ left: '70%', top: '70%', animationDelay: '6s' }} />
        </div>

        <div className="relative z-10">
          <Navbar />
          {/* Hero Content */}
          <div className="max-w-[1600px] mx-auto pt-40 px-6">
            <div className="text-center mx-auto">
              <h1 
                className="text-7xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent" 
                style={{ 
                  lineHeight: '1.2',
                  background: 'linear-gradient(to right, #2D3047 20%, #419D78 80%)',
                  WebkitBackgroundClip: 'text'
                }}
              >
                AI Patient Simulations for<br />
                Smarter Clinical Training
              </h1>
              <p className="text-gray-800 mx-auto mb-16 max-w-[1385px]" style={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontSize: '31px',
                fontWeight: '400',
                lineHeight: '63px'
              }}>
                BrightStart helps medical students develop critical thinking skills through personalised, adaptive, and case-based learning, so that they can become effective problem-solvers and decision-makers.
              </p>
              {/* Fun button */}
              <div className="relative w-full max-w-2xl mx-auto mb-32 group">
                <button
                  className="relative w-[369px] h-[86px] rounded-[25px] text-3xl font-bold transition-all transform hover:scale-105 hover:-rotate-2"
                  style={{
                    background: 'linear-gradient(45deg, #FFB862, #FFA7D1)',
                    boxShadow: '0 4px 0 #2D3047'
                  }}
                >
                  <span className="relative z-10 text-white">Try Our Beta Now</span>
                  <div className="absolute inset-0 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(45deg, #FFA7D1, #FFB862)'
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Video Section with fun border */}
            <div className="relative w-full max-w-[1681px] z-10 mx-auto px-6">
              <div
                className="w-full aspect-[1681/745] rounded-t-[35px] relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #92DFFF, #A6FF96)',
                  border: '4px solid #2D3047',
                  borderBottom: 'none',
                  padding: '4px'
                }}
              >
                {/* Video container with custom controls */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    playsInline
                    autoPlay
                    loop
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(45, 48, 71, 0.1)'
                    }}
                  >
                    <source src={videoSource} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>


                  {/* Playful corner decorations */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-[#FFB862] rounded-tl-xl" />
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-[#FFA7D1] rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-[#A6FF96] rounded-bl-xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-[#92DFFF] rounded-br-xl" />

                  {/* Hover overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, white, transparent)'
                    }}
                  />
                </div>

                {/* Playful floating elements */}
                <div className="absolute -top-6 left-1/4 transform -rotate-12">
                  <div className="w-12 h-12 bg-[#FFB862] rounded-lg rotate-45" />
                </div>
                <div className="absolute -top-4 right-1/4 transform rotate-12">
                  <div className="w-8 h-8 bg-[#FFA7D1] rounded-full" />
                </div>
                <div className="absolute -right-6 top-1/3 transform rotate-45">
                  <div className="w-10 h-10 bg-[#A6FF96] rounded-lg" />
                </div>
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

          /* Custom video controls styling */
          video::-webkit-media-controls-panel {
            background-image: linear-gradient(to top, rgba(45, 48, 71, 0.7), rgba(45, 48, 71, 0.5));
          }
          
          video::-webkit-media-controls-play-button,
          video::-webkit-media-controls-volume-slider,
          video::-webkit-media-controls-mute-button,
          video::-webkit-media-controls-timeline {
            filter: grayscale(1) invert(1);
          }
        `}</style>
      </div>
    );
  };

  export default HeroSection; 
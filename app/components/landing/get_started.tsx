import React from 'react';
import Footer from '../footer';

const GetStartedSection: React.FC = () => {
    return (
      <section 
        className="w-full py-32 relative overflow-hidden"
        style={{
          background: 'radial-gradient(197.35% 156.15% at 117.29% 148.31%, #00339C 1.5%, #739DF3 18%, #1F64BF 34.5%, #04318C 48%, #090909 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
          <div 
            className="w-[1683px] h-[759.42px] flex flex-col items-center justify-center text-center backdrop-blur-sm bg-white/5"
            style={{
              borderTopWidth: '1px',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderTopLeftRadius: '15px',
            }}
          >
            <span className="text-sm tracking-[0.3em] uppercase mb-4 text-white/70 block font-helvetica">
              GET STARTED
            </span>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl">
              Test your knowledge with<br />
              our AI patient simulator
            </h2>
            <button className="bg-[#89B0FF] text-black font-bold text-3xl px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all">
              Try Our Beta Now
            </button>
          </div>
        </div>
        <Footer/>
      </section>
    );
  };
  

export default GetStartedSection
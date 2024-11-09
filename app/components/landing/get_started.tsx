import React from 'react';
import Footer from '../footer';

const GetStartedSection: React.FC = () => {
  return (
    <section
      className="w-full py-32 relative overflow-hidden drop-shadow-[0_0_15px_rgba(161,255,206,0.5)]"
      style={{
        background: 'radial-gradient(197.35% 156.15% at 117.29% 148.31%, #A1FFCE 1.5%, #D8FFE4 18%, #BDFFD7 34.5%, #FAFFD1 48%, #FAFFD1 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
        <div
          className="w-[1683px] h-[759.42px] flex flex-col items-center justify-center text-center backdrop-blur-sm bg-emerald-50/10"
          style={{
            borderTopWidth: '1px',
            borderColor: 'rgba(167, 243, 208, .5)',
            borderTopLeftRadius: '15px',
            boxShadow: '0 4px 20px rgba(161, 255, 206, .5)'
          }}
        >
          <span className="text-sm tracking-[0.3em] uppercase mb-4 text-emerald-700 block font-helvetica">
            GET STARTED
          </span>
          <h2 className="text-emerald-950 text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl">
            Test your knowledge with<br />
            our AI patient simulator
          </h2>
          <button className="bg-emerald-500 text-white font-bold text-3xl px-8 py-4 rounded-lg hover:bg-emerald-400 transition-all">
            Try Our Beta Now
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GetStartedSection;
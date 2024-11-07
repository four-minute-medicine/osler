import React from 'react';

const SolutionSection: React.FC = () => {
    return (
      <section className="bg-black w-full pt-10">
        <div className="mx-auto px-6 py-32">
          <div className="flex flex-col items-center">
            <span
              className="text-sm tracking-[0.3em] uppercase mb-16 text-white/70"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              Solution
            </span>
            <h2
              className="text-white text-center max-w-screen-2xl"
              style={{
                fontSize: '75px',
                lineHeight: '112px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: '700'
              }}
            >
              Osler is a virtual patient simulation,
              offering safe, scenario-based learning <br/> to help
              clinicians build diagnostic and communication
              skills with confidence.
            </h2>
          </div>
        </div>
      </section>
    );
  };
export default SolutionSection;
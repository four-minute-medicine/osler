import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full pt-10 min-h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(77.11% 58.88% at 50% 50%, #FAFFD1 0%, #D8FFE4 50%, #A1FFCE 100%)'
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-50/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto px-6 py-32">
        <div className="flex flex-col items-center max-w-[1400px] mx-auto">
          {/* Header with enhanced styling */}
          <div className="relative mb-16">
            <span
              className="text-sm tracking-[0.3em] uppercase text-emerald-700 bg-emerald-50/50 px-6 py-2 rounded-full"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              Solution
            </span>
          </div>

          {/* Main content with visual separation */}
          <div className="space-y-12">
            <h2
              className="text-emerald-950 text-center leading-tight"
              style={{
                fontSize: 'clamp(48px, 5vw, 75px)',
                lineHeight: '1.2',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: '700'
              }}
            >
              Osler is a virtual patient simulation,
              offering safe, scenario-based learning to help
              clinicians build diagnostic and communication
              skills with confidence.
            </h2>

            {/* Added supporting content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6">
                <div className="text-emerald-600 text-5xl font-bold mb-4">100+</div>
                <div className="text-emerald-800">Clinical Scenarios</div>
              </div>
              <div className="text-center p-6">
                <div className="text-emerald-600 text-5xl font-bold mb-4">24/7</div>
                <div className="text-emerald-800">Learning Access</div>
              </div>
              <div className="text-center p-6">
                <div className="text-emerald-600 text-5xl font-bold mb-4">98%</div>
                <div className="text-emerald-800">Student Satisfaction</div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <button className="bg-emerald-500 text-white font-bold text-xl px-8 py-4 rounded-lg hover:bg-emerald-400 transition-all shadow-lg hover:shadow-xl">
                Start Learning Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
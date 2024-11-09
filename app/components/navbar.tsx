'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Baloo_Bhai_2 } from 'next/font/google';

const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] });

const Navbar: React.FC = () => {
  const router = useRouter();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#FDFBF7',  // Exact match with the page background
          backdropFilter: 'blur(4px)'  // Light blur for non-matching sections
        }}
      />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className={`${balooBhai.className} cursor-pointer relative group`}
              onClick={() => router.push('/')}
              style={{
                fontSize: '30px',
                fontWeight: 400,
                lineHeight: '25px',
                textAlign: 'center',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                color: '#000'
              }}
            >
              <span className="relative z-10">BrightStart</span>
            </div>

            <button
              onClick={() => router.push('/welcome')}
              className="px-8 py-4 text-xl font-medium bg-[#FFEF89] text-black rounded-lg hover:bg-[#FFD84D] transition-all duration-300"
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
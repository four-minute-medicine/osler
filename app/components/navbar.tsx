'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'linear-gradient(to bottom, rgba(161, 255, 206, 0.2), rgba(250, 255, 209, 0.1))'
        }}
      />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className="text-emerald-950 text-3xl font-bold cursor-pointer hover:text-emerald-700 transition-colors relative group"
              onClick={() => router.push('/')}
            >
              <span className="relative z-10">BrightStart</span>
              <div className="absolute inset-0 bg-emerald-100/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <button
              onClick={() => router.push('/welcome')}
              className="relative group overflow-hidden bg-emerald-500 px-8 py-3 text-2xl rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Try Now</span>
            </button>
          </div>
        </div>
        
        {/* Bottom border gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(167, 243, 208, 0.2), transparent)'
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
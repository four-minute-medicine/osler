import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            Osler
          </div>
          <button className="bg-[#89B0FF] px-6 py-2 text-3xl rounded-lg text-black hover:bg-opacity-90 transition-all">
            Try Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0b0f19]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          ProfNITT Tools
        </span>
        <span className="text-[10px] px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 font-semibold tracking-wide">
          QUANTITATIVE RESEARCH
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest text-gray-300">
        <a href="#" className="hover:text-white transition">ABOUT</a>
        <a href="#" className="hover:text-white transition">SERVICES</a>
        <a href="#" className="hover:text-white transition">STRATEGIES</a>
        <a href="#" className="text-white border-b-2 border-pink-500 pb-1">TOOLS</a>
        <a href="#" className="hover:text-white transition">EXPLORE</a>
        <a href="#" className="hover:text-white transition">NEWS</a>
      </div>
      <button className="px-5 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-gray-200 transition shadow-lg">
        ProfNITT
      </button>
    </nav>
  );
};
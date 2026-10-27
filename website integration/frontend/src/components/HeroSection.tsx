import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative py-16 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-2xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs mb-6 font-medium">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          <span>SUPPLY CHAIN DELAY DURATION PREDICTOR</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          Supply Chain <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Delay Predictor</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
          Empowering quantitative traders, researchers, and logistics operators at NIT Trichy with production-ready machine learning models and analytics tools.
        </p>
      </div>
      <div className="mt-8 md:mt-0 p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-gray-200">Verified Model Status</span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">Active 100%</span>
        </div>
        <div className="space-y-3 text-sm text-gray-400">
          <div className="flex justify-between py-2 border-b border-white/5">
            <span>Core Framework:</span>
            <span className="text-white font-medium">TensorFlow Keras / Node.js</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/5">
            <span>Pipeline:</span>
            <span className="text-white font-medium">Custom CSV / XLSX Ingestion</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Institution:</span>
            <span className="text-white font-medium">NIT Trichy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
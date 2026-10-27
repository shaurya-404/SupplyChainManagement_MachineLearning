import React from 'react';

interface PredictionResultsProps {
  result: any;
}

export const PredictionResults: React.FC<PredictionResultsProps> = ({ result }) => {
  if (!result) return null;

  return (
    <div className="max-w-4xl mx-auto px-8 mb-20">
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-pink-500/[0.02] backdrop-blur-2xl border border-pink-500/30 shadow-2xl">
        <h3 className="text-xl font-bold mb-6 text-white flex items-center justify-between">
          <span>Production Model Output</span>
          <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold border border-pink-500/30">
            {result.risk_level}
          </span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Predicted Delay Duration</span>
            <span className="text-4xl md:text-5xl font-black text-white">
              {result.predicted_delay_days} <span className="text-lg font-normal text-pink-400">days</span>
            </span>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Model Source & Samples</span>
            <span className="text-xl font-bold text-white block mt-1">
              {result.model_metrics?.data_source}
            </span>
            <span className="text-xs text-gray-400 mt-1 block">
              {result.model_metrics?.training_samples} training rows processed
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-3">Analyzed Features Schema</span>
          <div className="flex flex-wrap gap-2">
            {result.model_metrics?.features_used?.map((feat: string, idx: number) => (
              <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/5 text-gray-300 text-xs border border-white/10 font-mono">
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { UploadSection } from '../components/UploadSection';
import { PredictionResults } from '../components/PredictionResults';

export const SupplyChainTool: React.FC = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (formData: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Prediction error:', err);
      alert('Failed to connect to backend model server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-pink-500 selection:text-white font-sans">
      <Navbar />
      <HeroSection />
      <UploadSection onPredict={handlePredict} loading={loading} />
      <PredictionResults result={result} />
    </div>
  );
};

export default SupplyChainTool;
import React, { useState } from 'react';

interface UploadSectionProps {
  onPredict: (formData: FormData) => void;
  loading: boolean;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onPredict, loading }) => {
  const [file, setFile] = useState<File | null>(null);
  const [scheduledDays, setScheduledDays] = useState('3');
  const [benefitPerOrder, setBenefitPerOrder] = useState('150.0');
  const [salesPerCustomer, setSalesPerCustomer] = useState('350.0');
  const [categoryName, setCategoryName] = useState('Electronics');
  const [customerCity, setCustomerCity] = useState('New York');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append('dataset', file);
    }
    const features = [
      Number(scheduledDays),
      Number(scheduledDays) + 1,
      Number(benefitPerOrder),
      Number(salesPerCustomer),
      0,
      12,
      categoryName,
      customerCity
    ];
    formData.append('features', JSON.stringify(features));
    onPredict(formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-8 mb-16">
      <div className="p-8 md:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold mb-2 text-white">Configure Model & Inference</h2>
        <p className="text-sm text-gray-400 mb-8">Upload your custom dataset to train on the fly, or leave empty to use backend stored models.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Custom Dataset File <span className="text-gray-500 font-normal">(.csv or .xlsx)</span>
            </label>
            <input
              type="file"
              accept=".csv, .xlsx, .xls"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-pink-500/20 file:text-pink-400 hover:file:bg-pink-500/30 transition cursor-pointer border border-white/10 rounded-2xl p-2 bg-white/5"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Scheduled Shipping Days</label>
              <input
                type="number"
                value={scheduledDays}
                onChange={(e) => setScheduledDays(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Benefit Per Order ($)</label>
              <input
                type="number"
                step="0.1"
                value={benefitPerOrder}
                onChange={(e) => setBenefitPerOrder(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Sales Per Customer ($)</label>
              <input
                type="number"
                step="0.1"
                value={salesPerCustomer}
                onChange={(e) => setSalesPerCustomer(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Category Name</label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold tracking-wide hover:from-pink-500 hover:to-purple-500 transition shadow-lg shadow-pink-500/25 flex items-center justify-center space-x-3 cursor-pointer"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Training Neural Network & Running Inference...</span>
              </>
            ) : (
              <span>Run Supply Chain Delay Prediction</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
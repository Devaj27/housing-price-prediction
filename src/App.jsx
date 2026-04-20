import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import Insights from './components/Insights';
import { Building2, Github } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function App() {
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/predict`, formData);
      setPredictedPrice(response.data.predicted_price);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "An error occurred while connecting to the prediction API.");
      setPredictedPrice(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 font-inter">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Building2 className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">EstiMate AI</h1>
              <p className="text-xs text-slate-400">California Real Estate Valuation</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a href="#" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
              <span>View Source</span>
            </a>
          </motion.div>
        </header>

        {/* Main Content */}
        <main>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-tight"
                >
                  Predict property values with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">machine precision.</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-slate-400 text-lg max-w-xl leading-relaxed"
                >
                  Our Random Forest model analyzes 9 key metrics to deliver highly accurate valuations based on historical California housing data.
                </motion.p>
              </div>
              
              <PredictionForm onSubmit={handlePredict} loading={loading} />
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 lg:pt-[180px]">
              <div className="sticky top-8 h-[400px]">
                <ResultCard price={predictedPrice} error={error} />
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Insights />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} EstiMate AI. Built for the Machine Learning House Price Prediction project.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

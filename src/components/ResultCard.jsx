import React from 'react';

function ResultCard({ price, error }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-full flex items-center justify-center">
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : price ? (
        <div className="text-center">
          <h2 className="text-xl text-slate-300 mb-2">Predicted Price</h2>
          <p className="text-4xl font-bold text-green-400">
            ${Number(price).toLocaleString()}
          </p>
        </div>
      ) : (
        <p className="text-slate-400">Prediction result will appear here.</p>
      )}
    </div>
  );
}

export default ResultCard;

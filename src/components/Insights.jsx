import React from 'react';

function Insights() {
  return (
    <section className="mt-20 grid md:grid-cols-3 gap-6">
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold mb-2">Smart Model</h3>
        <p className="text-slate-400 text-sm">
          Uses Random Forest Regression for strong prediction accuracy.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold mb-2">Real Inputs</h3>
        <p className="text-slate-400 text-sm">
          Based on California housing dataset metrics.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <h3 className="text-white font-semibold mb-2">Instant Results</h3>
        <p className="text-slate-400 text-sm">
          Enter values and receive immediate house valuation.
        </p>
      </div>
    </section>
  );
}

export default Insights;

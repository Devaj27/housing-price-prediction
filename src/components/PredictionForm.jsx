import React, { useState } from 'react';

function PredictionForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    MedInc: '',
    HouseAge: '',
    AveRooms: '',
    AveBedrms: '',
    Population: '',
    AveOccup: '',
    Latitude: '',
    Longitude: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(formData).map((key) => (
        <input
          key={key}
          type="number"
          step="any"
          name={key}
          placeholder={key}
          value={formData[key]}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        {loading ? 'Predicting...' : 'Predict'}
      </button>
    </form>
  );
}

export default PredictionForm;

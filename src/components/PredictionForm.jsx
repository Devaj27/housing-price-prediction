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
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4"
    >
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
          className="w-full p-3 rounded-lg bg-slate-800 text-white"
        />
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
      >
        {loading ? 'Predicting...' : 'Predict Price'}
      </button>
    </form>
  );
}

export default PredictionForm;

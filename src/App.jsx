import React, { useState, useEffect } from 'react';
import QatarDashboard from './components/QatarDashboard';
import './index.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load all quarters data
        const [q1_2023, q1_2024, q3_2023, q3_2024] = await Promise.all([
          fetch('/data/processed/q1_2023.json').then(res => res.json()),
          fetch('/data/processed/q1_2024.json').then(res => res.json()),
          fetch('/data/processed/q3_2023.json').then(res => res.json()),
          fetch('/data/processed/q3_2024.json').then(res => res.json())
        ]);

        setData({
          q1_2023,
          q1_2024,
          q3_2023,
          q3_2024
        });
        setLoading(false);
      } catch (err) {
        setError('Error loading data. Please try again later.');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <QatarDashboard data={data} />
      </main>
    </div>
  );
};

function NavButton({ label, active, onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium whitespace-nowrap 
        ${active ? 'bg-[#8D1B3D] text-white' : 'bg-gray-100 text-gray-700'}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default App; 
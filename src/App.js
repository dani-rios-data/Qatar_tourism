import React from 'react';
import './App.css';
import MotivationsSection from './components/MotivationsSection/MotivationsSection';
import BehaviorsSection from './components/BehaviorsSection/BehaviorsSection';
import PerceptionsSection from './components/PerceptionsSection/PerceptionsSection';
import CompetitiveLandscapeSection from './components/CompetitiveLandscapeSection/CompetitiveLandscapeSection';
import ExecutiveSummary from './components/ExecutiveSummary/ExecutiveSummary';

function App() {
  // Simulated data - in a real application, this would come from an API or other data source
  const data = {};

  return (
    <div className="App">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Qatar Tourism Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-8">
            <ExecutiveSummary data={data} />
            <MotivationsSection data={data} />
            <BehaviorsSection data={data} />
            <PerceptionsSection data={data} />
            <CompetitiveLandscapeSection data={data} />
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-sm mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center">© 2024 Qatar Tourism Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 
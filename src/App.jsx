import React from 'react';
import QatarDashboard from './components/QatarDashboard';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <QatarDashboard />
      </main>
    </div>
  );
};

export default App; 
import React, { useState } from 'react';
import './App.css';
import MotivationsSection from './components/MotivationsSection/MotivationsSection';
import BehaviorsSection from './components/BehaviorsSection/BehaviorsSection';
import PerceptionsSection from './components/PerceptionsSection/PerceptionsSection';
import CompetitiveLandscapeSection from './components/CompetitiveLandscapeSection/CompetitiveLandscapeSection';
import ExecutiveSummary from './components/ExecutiveSummary/ExecutiveSummary';

function App() {
  const [activeTab, setActiveTab] = useState('executive');

  const tabs = [
    { id: 'executive', label: 'Executive Summary', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'perceptions', label: 'Perceptions of Qatar', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { id: 'motivations', label: 'Travel Motivations & Barriers', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'behaviors', label: 'Travel Behaviors & Trends', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'competitive', label: 'Competitive Landscape', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'executive':
        return <ExecutiveSummary data={{}} />;
      case 'motivations':
        return <MotivationsSection data={{}} />;
      case 'behaviors':
        return <BehaviorsSection data={{}} />;
      case 'perceptions':
        return <PerceptionsSection data={{}} />;
      case 'competitive':
        return <CompetitiveLandscapeSection data={{}} />;
      default:
        return <ExecutiveSummary data={{}} />;
    }
  };

  return (
    <div className="App">
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        {/* Header */}
        <header style={{
          backgroundColor: '#8D1B3D',
          padding: '12px 0',
          color: 'white',
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <img 
              src="/assets/logo_Qatar.svg" 
              alt="Qatar Logo" 
              style={{
                height: '40px',
                width: 'auto'
              }}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center'
            }}>
              <h1 style={{
                fontSize: '20px',
                fontWeight: '500',
                margin: 0,
                lineHeight: '1.2',
                textAlign: 'center'
              }}>
                Qatar Premium Travel Perception Dashboard
              </h1>
              <p style={{
                fontSize: '12px',
                margin: 0,
                opacity: '0.9',
                textAlign: 'center',
                width: '100%'
              }}>
                Bi-annual Premium Traveler Survey Analysis (2023-2024)
              </p>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          padding: '0',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'center',
            gap: '4px'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{ 
                  backgroundColor: activeTab === tab.id ? '#8D1B3D' : '#F3F4F6',
                  color: activeTab === tab.id ? 'white' : '#4B5563',
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: '4px 4px 0 0',
                  fontWeight: 500,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  margin: '4px 4px 0'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" style={{height: '16px', width: '16px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                </svg>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content - con margen superior para dejar espacio para el header y nav fijos */}
      <main style={{ 
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '24px',
        marginTop: '150px' // Ajusta esto según la altura exacta del header + nav
      }}>
        {renderContent()}
      </main>
    </div>
  );
}

export default App; 
import React, { useState } from 'react';
import DataOverviewTab from './tabs/data_overview/DataOverviewTab';
import ExecutiveSummaryTab from './tabs/executive_summary/ExecutiveSummaryTab';
import PerceptionQatarTab from './tabs/perception_qatar/PerceptionQatarTab';
import TravelMotivationsBarriersTab from './tabs/motivations_barriers/TravelMotivationsBarriersTab';
import TravelBehaviorsTab from './tabs/travel_behaviors/TravelBehaviorsTab';
import CompetitiveLandscapeTab from './tabs/competitive_landscape/CompetitiveLandscapeTab';

// Componente separado para el filtro de país
const CountryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleApply = () => {
    setIsOpen(false);
  };
  
  const handleClear = () => {
    setIsOpen(false);
  };
  
  return (
    <div className="w-full fixed top-[64px] left-0 right-0 bg-white py-3 border-b border-gray-200 z-50" 
         style={{ minHeight: '50px', boxSizing: 'border-box' }}>
      <div className="w-full px-6">
        <div className="flex justify-start items-center">
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Audience Country Residence:</span>
              <div className="relative" style={{ zIndex: 1 }}>
                <button 
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span className="text-sm font-medium">United States</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d={isOpen ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"}/>
                  </svg>
                </button>
                
                {/* Dropdown centrado exactamente debajo del botón */}
                {isOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 9999,
                      marginTop: '4px',
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                      width: '100%'
                    }}
                  >
                    <div className="bg-white border border-gray-300 rounded-md overflow-hidden" style={{ minWidth: '240px' }}>
                      <div className="py-2">
                        <div 
                          className="flex items-center px-3 py-2 rounded-md bg-blue-50 mx-2 cursor-pointer hover:bg-blue-100 transition-colors duration-150"
                        >
                          <div className="w-5 h-5 text-white bg-blue-500 rounded-sm mr-3 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-800">United States</span>
                        </div>
                      </div>
                      
                      {/* Botones de acción */}
                      <div className="flex justify-between border-t border-gray-200 p-2 px-3">
                        <button 
                          className="text-sm text-gray-600 px-2 py-1 hover:underline transition-colors duration-150"
                          onClick={handleClear}
                        >
                          Clear
                        </button>
                        <button 
                          className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition-colors duration-150"
                          onClick={handleApply}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QatarDashboard = () => {
  const [activeSection, setActiveSection] = useState('dataOverview');
  
  // Helper function for rendering section content
  const renderSection = () => {
    switch(activeSection) {
      case 'dataOverview':
        return <DataOverviewTab />;
      case 'summary':
        return <ExecutiveSummaryTab />;
      case 'perceptions':
        return <PerceptionQatarTab />;
      case 'motivations':
        return <TravelMotivationsBarriersTab />;
      case 'behaviors':
        return <TravelBehaviorsTab />;
      case 'competitive':
        return <CompetitiveLandscapeTab />;
      default:
        return <DataOverviewTab />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Header - Full width y fixed */}
      <header className="fixed top-0 left-0 right-0 w-full z-50" style={{
        backgroundColor: '#8D1B3D',
        padding: '12px 0',
        color: 'white',
        minHeight: '64px',
        boxSizing: 'border-box'
      }}>
        <div className="w-full px-4 flex items-center justify-center gap-3">
          <img 
            src="/assets/logo_Qatar.svg" 
            alt="Qatar Logo" 
            style={{
              height: '40px',
              width: 'auto',
              flexShrink: 0
            }}
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold m-0">Qatar Premium Travel Perception Dashboard</h1>
            <p className="text-sm m-0">Bi-annual Premium Traveler Survey Analysis (2023-2024)</p>
          </div>
        </div>
      </header>
      
      {/* Filtro de país como componente separado */}
      <CountryFilter />
      
      {/* Navigation - Full width y fixed */}
      <nav className="fixed top-[114px] left-0 right-0 w-full bg-white py-4 shadow z-40" style={{ minHeight: '56px', boxSizing: 'border-box' }}>
        <div className="w-full px-6">
          <div className="flex justify-center space-x-3 overflow-x-auto pb-2">
            <NavButton 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>}
              label="Data Overview" 
              active={activeSection === 'dataOverview'} 
              onClick={() => setActiveSection('dataOverview')} 
            />
            <NavButton 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
              label="Executive Summary" 
              active={activeSection === 'summary'} 
              onClick={() => setActiveSection('summary')} 
            />
            <NavButton 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>}
              label="Perceptions of Qatar" 
              active={activeSection === 'perceptions'} 
              onClick={() => setActiveSection('perceptions')} 
            />
            <NavButton 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>}
              label="Travel Motivations & Barriers" 
              active={activeSection === 'motivations'} 
              onClick={() => setActiveSection('motivations')} 
            />
            <NavButton 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>}
              label="Travel Behaviors & Trends" 
              active={activeSection === 'behaviors'} 
              onClick={() => setActiveSection('behaviors')} 
            />
            <NavButton 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>}
              label="Competitive Landscape" 
              active={activeSection === 'competitive'} 
              onClick={() => setActiveSection('competitive')} 
            />
          </div>
        </div>
      </nav>
      
      {/* Main Content - Con espacio para header y nav */}
      <div className="pt-[190px] max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {renderSection()}
      </div>
    </div>
  );
};

// Navigation Button Component
function NavButton({ icon, label, active, onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium whitespace-nowrap flex items-center gap-2
        ${active ? 'bg-[#8D1B3D] text-white' : 'bg-white text-gray-700 border border-gray-200'}
      `}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}

export default QatarDashboard; 
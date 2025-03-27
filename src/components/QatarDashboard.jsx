import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ExecutiveSummary from './ExecutiveSummary/ExecutiveSummary';
import PerceptionsSection from './PerceptionsSection/PerceptionsSection';
import MotivationsSection from './MotivationsSection/MotivationsSection';
import BehaviorsSection from './BehaviorsSection/BehaviorsSection';
import CompetitiveLandscapeSection from './CompetitiveLandscapeSection/CompetitiveLandscapeSection';

// Define colors using Qatar's national colors and complementary palette
const COLORS = ['#8D1B3D', '#1A4D2E', '#B8A88F', '#A7754D', '#D4B391', '#C29591', '#6B7280'];

const QatarDashboard = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [surveyData, setSurveyData] = useState({
    vacationImportance: [],
    newVsPrevious: [],
    businessAttitudes: [],
    ecoAttitudes: [],
    carbonConcern: [],
    travelBarriers: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        // Cargar los archivos JSON procesados en lugar de los CSV
        const [q1_2023, q3_2023, q1_2024, q3_2024] = await Promise.all([
          fetch('/data/processed/q1_2023.json').then(res => res.json()),
          fetch('/data/processed/q3_2023.json').then(res => res.json()),
          fetch('/data/processed/q1_2024.json').then(res => res.json()),
          fetch('/data/processed/q3_2024.json').then(res => res.json())
        ]);
        
        // Estructurar los datos para el dashboard
        const processedData = {
          vacationImportance: extractDataFromJson('Importance of Vacations', { 
            'Q1 2023': q1_2023, 
            'Q3 2023': q3_2023, 
            'Q1 2024': q1_2024,
            'Q3 2024': q3_2024 
          }),
          newVsPrevious: extractDataFromJson('New Versus Previous Destinations', { 
            'Q1 2023': q1_2023, 
            'Q3 2023': q3_2023, 
            'Q1 2024': q1_2024,
            'Q3 2024': q3_2024 
          }),
          businessAttitudes: extractDataFromJson('Business Travel Attitudes', { 
            'Q1 2023': q1_2023, 
            'Q3 2023': q3_2023, 
            'Q1 2024': q1_2024,
            'Q3 2024': q3_2024 
          }),
          ecoAttitudes: extractDataFromJson('Eco & Experience Attitudes', { 
            'Q1 2023': q1_2023, 
            'Q3 2023': q3_2023, 
            'Q1 2024': q1_2024,
            'Q3 2024': q3_2024 
          }),
          carbonConcern: extractDataFromJson('Concern Over Carbon Footprint', { 
            'Q1 2023': q1_2023, 
            'Q3 2023': q3_2023, 
            'Q1 2024': q1_2024,
            'Q3 2024': q3_2024 
          }),
          travelBarriers: extractDataFromJson('Reasons for Not Traveling', { 
            'Q1 2023': q1_2023, 
            'Q3 2023': q3_2023, 
            'Q1 2024': q1_2024,
            'Q3 2024': q3_2024 
          })
        };
        
        setSurveyData(processedData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load survey data");
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  // Extrae datos específicos de los archivos JSON procesados
  function extractDataFromJson(questionLabel, jsonData) {
    const result = {
      byPeriod: {},
      trend: []
    };
    
    // Procesar cada período
    Object.keys(jsonData).forEach(period => {
      let questionData;
      
      // Buscar en perceptions, motivationsBarriers, behaviors, etc.
      if (jsonData[period].perceptions) {
        questionData = jsonData[period].perceptions.filter(item => 
          item.question === questionLabel
        );
      }
      
      if (!questionData || questionData.length === 0 && jsonData[period].motivationsBarriers) {
        questionData = jsonData[period].motivationsBarriers.filter(item => 
          item.question === questionLabel
        );
      }
      
      if (!questionData || questionData.length === 0 && jsonData[period].behaviors) {
        questionData = jsonData[period].behaviors.filter(item => 
          item.question === questionLabel
        );
      }
      
      result.byPeriod[period] = questionData ? questionData.map(item => ({
        attribute: item.attribute,
        audiencePercentage: item.value,
        responses: item.responses
      })) : [];
    });
    
    // Crear datos de tendencia para cada atributo
    const allAttributes = new Set();
    Object.values(result.byPeriod).forEach(periodData => {
      periodData.forEach(item => allAttributes.add(item.attribute));
    });
    
    [...allAttributes].forEach(attribute => {
      const trendItem = { attribute };
      
      Object.keys(result.byPeriod).forEach(period => {
        const match = result.byPeriod[period].find(item => item.attribute === attribute);
        trendItem[period] = match ? match.audiencePercentage : 0;
      });
      
      result.trend.push(trendItem);
    });
    
    return result;
  }

  // Process data for a specific question across time periods
  function processQuestionData(questionLabel, dataByPeriod) {
    const result = {
      byPeriod: {},
      trend: []
    };
    
    // Process each time period
    Object.keys(dataByPeriod).forEach(period => {
      const periodData = dataByPeriod[period];
      const questionData = periodData.filter(item => 
        item['Short Label Question'] === questionLabel
      );
      
      result.byPeriod[period] = questionData.map(item => ({
        attribute: item.Attributes,
        audiencePercentage: item['Audience %'],
        responses: item.Responses
      }));
    });
    
    // Create trend data for each attribute
    const allAttributes = new Set();
    Object.values(result.byPeriod).forEach(periodData => {
      periodData.forEach(item => allAttributes.add(item.attribute));
    });
    
    [...allAttributes].forEach(attribute => {
      const trendItem = { attribute };
      
      Object.keys(result.byPeriod).forEach(period => {
        const match = result.byPeriod[period].find(item => item.attribute === attribute);
        trendItem[period] = match ? match.audiencePercentage : 0;
      });
      
      result.trend.push(trendItem);
    });
    
    return result;
  }

  // Helper function for rendering section content
  const renderSection = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Loading survey data...</div>
        </div>
      );
    }
    
    if (error) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      );
    }

    switch(activeSection) {
      case 'summary':
        return <ExecutiveSummary data={surveyData} />;
      case 'perceptions':
        return <PerceptionsSection data={surveyData} />;
      case 'motivations':
        return <MotivationsSection data={surveyData} />;
      case 'behaviors':
        return <BehaviorsSection data={surveyData} />;
      case 'competitive':
        return <CompetitiveLandscapeSection data={surveyData} />;
      default:
        return <ExecutiveSummary data={surveyData} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: '90px',
        left: 0,
        right: 0,
        zIndex: 10,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#FFFFFF',
        padding: '16px 0'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          gap: '8px'
        }}>
          <button 
            onClick={() => setActiveSection('summary')}
            style={{ 
              backgroundColor: activeSection === 'summary' ? '#8D1B3D' : '#EEF2F6', 
              color: activeSection === 'summary' ? 'white' : '#4A5568',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexGrow: 1,
              fontSize: '14px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', marginRight: '8px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Executive Summary
          </button>
          <button 
            onClick={() => setActiveSection('perceptions')}
            style={{ 
              backgroundColor: activeSection === 'perceptions' ? '#8D1B3D' : '#EEF2F6', 
              color: activeSection === 'perceptions' ? 'white' : '#4A5568',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexGrow: 1,
              fontSize: '14px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', marginRight: '8px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Perceptions of Qatar
          </button>
          <button 
            onClick={() => setActiveSection('motivations')}
            style={{ 
              backgroundColor: activeSection === 'motivations' ? '#8D1B3D' : '#EEF2F6', 
              color: activeSection === 'motivations' ? 'white' : '#4A5568',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexGrow: 1,
              fontSize: '14px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', marginRight: '8px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Travel Motivations & Barriers
          </button>
          <button 
            onClick={() => setActiveSection('behaviors')}
            style={{ 
              backgroundColor: activeSection === 'behaviors' ? '#8D1B3D' : '#EEF2F6', 
              color: activeSection === 'behaviors' ? 'white' : '#4A5568',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexGrow: 1,
              fontSize: '14px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', marginRight: '8px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Travel Behaviors & Trends
          </button>
          <button 
            onClick={() => setActiveSection('competitive')}
            style={{ 
              backgroundColor: activeSection === 'competitive' ? '#8D1B3D' : '#EEF2F6', 
              color: activeSection === 'competitive' ? 'white' : '#4A5568',
              padding: '10px 16px',
              borderRadius: '6px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexGrow: 1,
              fontSize: '14px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', marginRight: '8px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Competitive Landscape
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 40px',
        marginTop: '150px'
      }}>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-gray-500 text-sm">
      </footer>
    </div>
  );
};

export default QatarDashboard; 
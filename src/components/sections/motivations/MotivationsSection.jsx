import React from 'react';
import { useSectionData, useTrendData } from '../../../hooks/useDataLoading';
import { COLORS } from '../../../data/constants/colors';
import { CHART_CONFIG } from '../../../data/constants/config';

// Importar componentes de gráficos
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import PieChart from '../../charts/PieChart';

const MotivationsSection = ({ data }) => {
  const { sectionData, loading, error } = useSectionData(data, 'motivations');
  const { trendData } = useTrendData(data, 'motivations', {
    periods: ['Q1 2023', 'Q3 2023', 'Q1 2024'],
    attributes: ['Cultura', 'Aventura', 'Relajación', 'Lujo']
  });

  if (loading) {
    return <div className="loading">Cargando motivaciones...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar las motivaciones: {error}</div>;
  }

  return (
    <section className="motivations-section" style={{
      padding: '30px',
      backgroundColor: COLORS.background.secondary,
      borderRadius: '10px',
      marginBottom: '30px'
    }}>
      <h2 style={{
        color: COLORS.text.primary,
        fontSize: '2rem',
        marginBottom: '20px'
      }}>
        Motivaciones de Viaje
      </h2>

      <div className="motivations-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Motivaciones principales */}
        <div className="main-motivations" style={{
          backgroundColor: COLORS.background.primary,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: COLORS.text.primary,
            fontSize: '1.2rem',
            marginBottom: '15px'
          }}>
            Motivaciones Principales
          </h3>
          <div className="motivations-list">
            {sectionData.mainMotivations.map((motivation, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: COLORS.background.secondary,
                borderRadius: '4px'
              }}>
                <span style={{ color: COLORS.text.primary }}>{motivation.label}</span>
                <span style={{ 
                  color: motivation.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontWeight: 'bold'
                }}>
                  {motivation.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tendencias de motivación */}
        <div className="motivation-trends" style={{
          backgroundColor: COLORS.background.primary,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: COLORS.text.primary,
            fontSize: '1.2rem',
            marginBottom: '15px'
          }}>
            Tendencias de Motivación
          </h3>
          <LineChart
            data={trendData}
            config={{
              ...CHART_CONFIG.line,
              height: 200,
              colors: COLORS.chartColors.motivation
            }}
          />
        </div>
      </div>

      <div className="motivations-charts" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {/* Distribución de motivaciones */}
        <div className="motivations-distribution" style={{
          backgroundColor: COLORS.background.primary,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: COLORS.text.primary,
            fontSize: '1.2rem',
            marginBottom: '15px'
          }}>
            Distribución de Motivaciones
          </h3>
          <PieChart
            data={sectionData.distribution}
            config={{
              ...CHART_CONFIG.pie,
              height: 300,
              colors: COLORS.chartColors.motivation,
              innerRadius: 60
            }}
          />
        </div>

        {/* Top motivaciones */}
        <div className="top-motivations" style={{
          backgroundColor: COLORS.background.primary,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            color: COLORS.text.primary,
            fontSize: '1.2rem',
            marginBottom: '15px'
          }}>
            Top Motivaciones
          </h3>
          <BarChart
            data={sectionData.topMotivations}
            config={{
              ...CHART_CONFIG.bar,
              height: 300,
              colors: COLORS.chartColors.motivation,
              orientation: 'horizontal'
            }}
          />
        </div>
      </div>

      {/* Factores influyentes */}
      <div className="influencing-factors" style={{
        marginTop: '30px',
        backgroundColor: COLORS.background.primary,
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          color: COLORS.text.primary,
          fontSize: '1.2rem',
          marginBottom: '15px'
        }}>
          Factores Influyentes
        </h3>
        <div className="factors-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {sectionData.influencingFactors.map((factor, index) => (
            <div key={index} style={{
              padding: '15px',
              backgroundColor: COLORS.background.secondary,
              borderRadius: '4px'
            }}>
              <h4 style={{
                color: COLORS.text.primary,
                fontSize: '1.1rem',
                marginBottom: '10px'
              }}>
                {factor.title}
              </h4>
              <p style={{
                color: COLORS.text.secondary,
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {factor.description}
              </p>
              <div style={{
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  color: COLORS.text.primary,
                  fontWeight: 'bold',
                  marginRight: '10px'
                }}>
                  {factor.percentage}%
                </span>
                <span style={{
                  color: factor.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontSize: '0.8rem'
                }}>
                  {factor.trend > 0 ? '↑' : '↓'} {Math.abs(factor.trend)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationsSection; 
import React from 'react';
import { useSectionData, useTrendData } from '../../../hooks/useDataLoading';
import { COLORS } from '../../../data/constants/colors';
import { CHART_CONFIG } from '../../../data/constants/config';

// Importar componentes de gráficos
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import PieChart from '../../charts/PieChart';

const BehaviorsSection = ({ data }) => {
  const { sectionData, loading, error } = useSectionData(data, 'behaviors');
  const { trendData } = useTrendData(data, 'behaviors', {
    periods: ['Q1 2023', 'Q3 2023', 'Q1 2024'],
    attributes: ['Planificación', 'Gastos', 'Actividades', 'Duración']
  });

  if (loading) {
    return <div className="loading">Cargando comportamientos...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar los comportamientos: {error}</div>;
  }

  return (
    <section className="behaviors-section" style={{
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
        Comportamientos de Viaje
      </h2>

      <div className="behaviors-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Comportamientos principales */}
        <div className="main-behaviors" style={{
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
            Comportamientos Principales
          </h3>
          <div className="behaviors-list">
            {sectionData.mainBehaviors.map((behavior, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: COLORS.background.secondary,
                borderRadius: '4px'
              }}>
                <span style={{ color: COLORS.text.primary }}>{behavior.label}</span>
                <span style={{ 
                  color: behavior.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontWeight: 'bold'
                }}>
                  {behavior.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tendencias de comportamiento */}
        <div className="behavior-trends" style={{
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
            Tendencias de Comportamiento
          </h3>
          <LineChart
            data={trendData}
            config={{
              ...CHART_CONFIG.line,
              height: 200,
              colors: COLORS.chartColors.behavior
            }}
          />
        </div>
      </div>

      <div className="behaviors-charts" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {/* Distribución de comportamientos */}
        <div className="behaviors-distribution" style={{
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
            Distribución de Comportamientos
          </h3>
          <PieChart
            data={sectionData.distribution}
            config={{
              ...CHART_CONFIG.pie,
              height: 300,
              colors: COLORS.chartColors.behavior,
              innerRadius: 60
            }}
          />
        </div>

        {/* Top comportamientos */}
        <div className="top-behaviors" style={{
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
            Top Comportamientos
          </h3>
          <BarChart
            data={sectionData.topBehaviors}
            config={{
              ...CHART_CONFIG.bar,
              height: 300,
              colors: COLORS.chartColors.behavior,
              orientation: 'horizontal'
            }}
          />
        </div>
      </div>

      {/* Patrones de gasto */}
      <div className="spending-patterns" style={{
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
          Patrones de Gasto
        </h3>
        <div className="patterns-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {sectionData.spendingPatterns.map((pattern, index) => (
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
                {pattern.category}
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <span style={{ color: COLORS.text.secondary }}>Promedio</span>
                <span style={{ 
                  color: COLORS.text.primary,
                  fontWeight: 'bold'
                }}>
                  ${pattern.average}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: COLORS.text.secondary }}>Tendencia</span>
                <span style={{
                  color: pattern.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontSize: '0.8rem'
                }}>
                  {pattern.trend > 0 ? '↑' : '↓'} {Math.abs(pattern.trend)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preferencias de viaje */}
      <div className="travel-preferences" style={{
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
          Preferencias de Viaje
        </h3>
        <div className="preferences-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {sectionData.travelPreferences.map((preference, index) => (
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
                {preference.title}
              </h4>
              <p style={{
                color: COLORS.text.secondary,
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {preference.description}
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
                  {preference.percentage}%
                </span>
                <span style={{
                  color: preference.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontSize: '0.8rem'
                }}>
                  {preference.trend > 0 ? '↑' : '↓'} {Math.abs(preference.trend)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehaviorsSection; 
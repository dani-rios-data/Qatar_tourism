import React from 'react';
import { useSectionData, useComparisonData } from '../../../hooks/useDataLoading';
import { COLORS } from '../../../data/constants/colors';
import { CHART_CONFIG } from '../../../data/constants/config';

// Importar componentes de gráficos
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import PieChart from '../../charts/PieChart';

const CompetitiveSection = ({ data }) => {
  const { sectionData, loading, error } = useSectionData(data, 'competitive');
  const { comparisonData } = useComparisonData(data, ['qatar', 'dubai', 'abudhabi'], {
    periods: ['Q1 2023', 'Q3 2023', 'Q1 2024']
  });

  if (loading) {
    return <div className="loading">Cargando análisis competitivo...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar el análisis competitivo: {error}</div>;
  }

  return (
    <section className="competitive-section" style={{
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
        Análisis Competitivo
      </h2>

      <div className="competitive-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Posicionamiento competitivo */}
        <div className="competitive-positioning" style={{
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
            Posicionamiento Competitivo
          </h3>
          <div className="positioning-list">
            {sectionData.positioning.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: COLORS.background.secondary,
                borderRadius: '4px'
              }}>
                <span style={{ color: COLORS.text.primary }}>{item.label}</span>
                <span style={{ 
                  color: item.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontWeight: 'bold'
                }}>
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparación con competidores */}
        <div className="competitor-comparison" style={{
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
            Comparación con Competidores
          </h3>
          <LineChart
            data={comparisonData}
            config={{
              ...CHART_CONFIG.line,
              height: 200,
              colors: COLORS.chartColors.competitive
            }}
          />
        </div>
      </div>

      <div className="competitive-charts" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {/* Distribución de preferencias */}
        <div className="preferences-distribution" style={{
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
            Distribución de Preferencias
          </h3>
          <PieChart
            data={sectionData.preferences}
            config={{
              ...CHART_CONFIG.pie,
              height: 300,
              colors: COLORS.chartColors.competitive,
              innerRadius: 60
            }}
          />
        </div>

        {/* Top ventajas competitivas */}
        <div className="competitive-advantages" style={{
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
            Top Ventajas Competitivas
          </h3>
          <BarChart
            data={sectionData.advantages}
            config={{
              ...CHART_CONFIG.bar,
              height: 300,
              colors: COLORS.chartColors.competitive,
              orientation: 'horizontal'
            }}
          />
        </div>
      </div>

      {/* Análisis de competidores */}
      <div className="competitor-analysis" style={{
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
          Análisis de Competidores
        </h3>
        <div className="competitors-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {sectionData.competitors.map((competitor, index) => (
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
                {competitor.name}
              </h4>
              <div style={{
                marginBottom: '10px'
              }}>
                <p style={{
                  color: COLORS.text.secondary,
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  {competitor.description}
                </p>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px'
              }}>
                <span style={{
                  color: COLORS.text.primary,
                  fontWeight: 'bold'
                }}>
                  {competitor.marketShare}%
                </span>
                <span style={{
                  color: competitor.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontSize: '0.8rem'
                }}>
                  {competitor.trend > 0 ? '↑' : '↓'} {Math.abs(competitor.trend)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Oportunidades y amenazas */}
      <div className="opportunities-threats" style={{
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
          Oportunidades y Amenazas
        </h3>
        <div className="analysis-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {sectionData.opportunitiesThreats.map((item, index) => (
            <div key={index} style={{
              padding: '15px',
              backgroundColor: COLORS.background.secondary,
              borderRadius: '4px',
              borderLeft: `4px solid ${item.type === 'opportunity' ? COLORS.text.success : COLORS.text.error}`
            }}>
              <h4 style={{
                color: COLORS.text.primary,
                fontSize: '1.1rem',
                marginBottom: '10px'
              }}>
                {item.title}
              </h4>
              <p style={{
                color: COLORS.text.secondary,
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {item.description}
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
                  Impacto: {item.impact}%
                </span>
                <span style={{
                  color: item.type === 'opportunity' ? COLORS.text.success : COLORS.text.error,
                  fontSize: '0.8rem'
                }}>
                  {item.type === 'opportunity' ? 'Oportunidad' : 'Amenaza'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveSection; 
import React from 'react';
import { useSectionData, useTrendData } from '../../../hooks/useDataLoading';
import { COLORS } from '../../../data/constants/colors';
import { CHART_CONFIG } from '../../../data/constants/config';

// Importar componentes de gráficos
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import PieChart from '../../charts/PieChart';

const PerceptionsSection = ({ data }) => {
  const { sectionData, loading, error } = useSectionData(data, 'perceptions');
  const { trendData } = useTrendData(data, 'perceptions', {
    periods: ['Q1 2023', 'Q3 2023', 'Q1 2024'],
    attributes: ['Lujo', 'Innovación', 'Autenticidad', 'Seguridad']
  });

  if (loading) {
    return <div className="loading">Cargando percepciones...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar las percepciones: {error}</div>;
  }

  return (
    <section className="perceptions-section" style={{
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
        Percepciones de Qatar
      </h2>

      <div className="perceptions-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Métricas clave de percepción */}
        <div className="perception-metrics" style={{
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
            Métricas Clave
          </h3>
          <div className="metrics-list">
            {sectionData.keyMetrics.map((metric, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: COLORS.background.secondary,
                borderRadius: '4px'
              }}>
                <span style={{ color: COLORS.text.primary }}>{metric.label}</span>
                <span style={{ 
                  color: metric.trend > 0 ? COLORS.text.success : COLORS.text.error,
                  fontWeight: 'bold'
                }}>
                  {metric.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tendencias de percepción */}
        <div className="perception-trends" style={{
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
            Tendencias de Percepción
          </h3>
          <LineChart
            data={trendData}
            config={{
              ...CHART_CONFIG.line,
              height: 200,
              colors: COLORS.chartColors.perception
            }}
          />
        </div>
      </div>

      <div className="perceptions-charts" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {/* Distribución de atributos */}
        <div className="attributes-distribution" style={{
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
            Distribución de Atributos
          </h3>
          <PieChart
            data={sectionData.attributes}
            config={{
              ...CHART_CONFIG.pie,
              height: 300,
              colors: COLORS.chartColors.perception,
              innerRadius: 60
            }}
          />
        </div>

        {/* Top percepciones */}
        <div className="top-perceptions" style={{
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
            Top Percepciones
          </h3>
          <BarChart
            data={sectionData.topPerceptions}
            config={{
              ...CHART_CONFIG.bar,
              height: 300,
              colors: COLORS.chartColors.perception,
              orientation: 'horizontal'
            }}
          />
        </div>
      </div>

      {/* Análisis detallado */}
      <div className="detailed-analysis" style={{
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
          Análisis Detallado
        </h3>
        <div className="analysis-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px'
        }}>
          {sectionData.detailedAnalysis.map((item, index) => (
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
                {item.title}
              </h4>
              <p style={{
                color: COLORS.text.secondary,
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerceptionsSection; 
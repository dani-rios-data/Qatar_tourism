import React from 'react';
import { useSectionData } from '../../../hooks/useDataLoading';
import { COLORS } from '../../../data/constants/colors';
import { CHART_CONFIG } from '../../../data/constants/config';

// Importar componentes de gráficos
import BarChart from '../../charts/BarChart';
import LineChart from '../../charts/LineChart';
import PieChart from '../../charts/PieChart';

const SummarySection = ({ data }) => {
  const { sectionData, loading, error } = useSectionData(data, 'summary');

  if (loading) {
    return <div className="loading">Cargando resumen...</div>;
  }

  if (error) {
    return <div className="error">Error al cargar el resumen: {error}</div>;
  }

  return (
    <section className="summary-section" style={{
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
        Resumen General
      </h2>

      <div className="summary-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {/* Métricas clave */}
        <div className="key-metrics" style={{
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

        {/* Tendencias principales */}
        <div className="main-trends" style={{
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
            Tendencias Principales
          </h3>
          <LineChart
            data={sectionData.trends}
            config={{
              ...CHART_CONFIG.line,
              height: 200,
              colors: COLORS.chartColors.trend
            }}
          />
        </div>
      </div>

      <div className="summary-charts" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {/* Distribución de respuestas */}
        <div className="response-distribution" style={{
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
            Distribución de Respuestas
          </h3>
          <PieChart
            data={sectionData.distribution}
            config={{
              ...CHART_CONFIG.pie,
              height: 300,
              colors: COLORS.chartColors.default
            }}
          />
        </div>

        {/* Top atributos */}
        <div className="top-attributes" style={{
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
            Top Atributos
          </h3>
          <BarChart
            data={sectionData.topAttributes}
            config={{
              ...CHART_CONFIG.bar,
              height: 300,
              colors: COLORS.chartColors.default,
              orientation: 'horizontal'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SummarySection; 
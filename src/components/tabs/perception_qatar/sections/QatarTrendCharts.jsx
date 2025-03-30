import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const QatarTrendCharts = () => {
  // Colores de Qatar
  const COLORS = {
    primary: '#8d1c3e',     // burgundy
    secondary: '#b8a88f',   // beige
    tertiary: '#1a4d2e',    // dark green
    quaternary: '#d4a017',  // mostaza/dorado
    quinta: '#5d1d41',      // berenjena
  };

  // Datos combinados para la gráfica de tendencia
  const trendData = [
    { quarter: 'Q1 2023', audience: 3.4, index: 135.1 },
    { quarter: 'Q2 2023', audience: 2.8, index: 118.4 },
    { quarter: 'Q3 2023', audience: 1.5, index: 92.7 },
    { quarter: 'Q4 2023', audience: 0.9, index: 68.5 },
    { quarter: 'Q1 2024', audience: 0.6, index: 45.2 },
    { quarter: 'Q2 2024', audience: 0.2, index: 18.9 },
    { quarter: 'Q3 2024', audience: 0, index: 0 },
  ];

  // Datos para el ranking de Audience %
  const rankingData = [
    { name: 'Morocco', value: 6 },
    { name: 'South Africa', value: 3.1 },
    { name: 'Egypt', value: 1.7 },
    { name: 'Dubai / UAE', value: 1.7 },
    { name: 'Israel', value: 1.3 },
    { name: 'Kenya', value: 1.3 },
    { name: 'Mauritius', value: 1.3 },
    { name: 'Rwanda', value: 1.3 },
    { name: 'Saudi Arabia', value: 1.3 },
    { name: 'Tanzania', value: 1.3 },
    { name: 'Qatar', value: 0 },
  ].sort((a, b) => b.value - a.value);

  // Personalización para el tooltip de la gráfica de tendencia
  const TrendTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{label}</p>
          <p style={{ color: COLORS.quaternary }}>{`Audience %: ${payload[0].value}`}</p>
          <p style={{ color: COLORS.quinta }}>{`Index: ${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
  };

  // Personalización para el tooltip del ranking
  const RankingTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-gray-700">{`Audience: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  // Definir gradiente para las barras
  const renderGradientBar = (props) => {
    const { x, y, width, height, name } = props;
    
    if (name === 'Qatar') {
      return (
        <rect 
          x={x} 
          y={y} 
          width={width} 
          height={height} 
          fill={COLORS.quinta} 
          rx={4}
          ry={4}
        />
      );
    }
    
    return (
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill={COLORS.primary} 
        rx={4}
        ry={4}
      />
    );
  };

  return (
    <div className="space-y-6">
      {/* Título para el gráfico de tendencia */}
      <h6 className="text-base font-semibold text-gray-700 mb-2">Qatar Trend (Q1 2023 – Q3 2024)</h6>
      
      {/* Gráfico de tendencia combinado */}
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trendData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="quarter" 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              yAxisId="left"
              domain={[0, 4]}
              tickCount={5}
              label={{ value: 'Audience %', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 10 } }} 
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              domain={[0, 160]}
              tickCount={5}
              label={{ value: 'Index', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fontSize: 10 } }} 
            />
            <Tooltip content={<TrendTooltip />} />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="audience" 
              name="Audience %" 
              stroke={COLORS.quaternary} 
              strokeWidth={2}
              dot={{ r: 4, fill: COLORS.quaternary }}
              activeDot={{ r: 6, fill: COLORS.quaternary }}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="index" 
              name="Index" 
              stroke={COLORS.quinta} 
              strokeWidth={2}
              dot={{ r: 4, fill: COLORS.quinta }}
              activeDot={{ r: 6, fill: COLORS.quinta }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Título para el ranking */}
      <h6 className="text-base font-semibold text-gray-700 mt-6 mb-2">Ranking by Audience % (Q3 2024)</h6>
      
      {/* Gráfico de ranking horizontal con estilo mejorado */}
      <div className="h-80 w-full p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={rankingData}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
            barCategoryGap={8}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              horizontal={true} 
              vertical={false}
              stroke="#f0f0f0" 
            />
            <XAxis 
              type="number" 
              domain={[0, 8]} 
              tick={{ fontSize: 10 }}
              axisLine={true}
              tickLine={true}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              scale="band" 
              tick={{ fontSize: 10 }}
              width={90}
              axisLine={true}
              tickLine={false}
            />
            <Tooltip content={<RankingTooltip />} />
            <Bar 
              dataKey="value" 
              shape={renderGradientBar}
              barSize={16}
              label={{ 
                position: 'right', 
                formatter: (value) => `${value}%`, 
                fontSize: 10, 
                fill: '#666',
                offset: 5
              }}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QatarTrendCharts; 
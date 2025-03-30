import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RegionalComparisonCharts = () => {
  // Colores de Qatar (paleta completa)
  const COLORS = {
    primary: '#8d1c3e',     // burgundy
    secondary: '#b8a88f',   // beige
    tertiary: '#1a4d2e',    // dark green
    quaternary: '#d4a017',  // mostaza/dorado
    quinta: '#5d1d41',      // berenjena
  };

  // Datos para las regiones de vacaciones internacionales
  const regionalRankingData = [
    { name: 'Americas', value: 52 },
    { name: 'Europe', value: 45 },
    { name: 'Asia Pacific', value: 25 },
    { name: 'Middle East / Africa', value: 8 },
  ].sort((a, b) => b.value - a.value);

  // Datos para la tendencia regional a lo largo del tiempo
  const regionalTrendData = [
    { 
      quarter: 'Q1 2023', 
      Americas: 55, 
      Europe: 48, 
      'Asia Pacific': 17, 
      'Middle East / Africa': 8 
    },
    { 
      quarter: 'Q3 2023', 
      Americas: 43, 
      Europe: 46, 
      'Asia Pacific': 19, 
      'Middle East / Africa': 7 
    },
    { 
      quarter: 'Q1 2024', 
      Americas: 50, 
      Europe: 52, 
      'Asia Pacific': 20, 
      'Middle East / Africa': 5 
    },
    { 
      quarter: 'Q3 2024', 
      Americas: 49, 
      Europe: 44, 
      'Asia Pacific': 25, 
      'Middle East / Africa': 8 
    },
  ];

  // Datos para países del Medio Oriente
  const middleEastRankingData = [
    { name: 'Dubai / UAE', value: 1.7 },
    { name: 'Egypt', value: 1.7 },
    { name: 'Saudi Arabia', value: 1.3 },
    { name: 'Israel', value: 1.3 },
    { name: 'Qatar', value: 0 },
    { name: 'Jordan', value: 0 },
  ].sort((a, b) => b.value - a.value);

  // Datos para la tendencia de países del Medio Oriente a lo largo del tiempo
  const middleEastTrendData = [
    { 
      quarter: 'Q1 2023', 
      'Dubai / UAE': 4.2, 
      Egypt: 1.5, 
      'Saudi Arabia': 1.8, 
      Israel: 1.2, 
      Qatar: 3.4, 
      Jordan: 0.8 
    },
    { 
      quarter: 'Q3 2023', 
      'Dubai / UAE': 6.1, 
      Egypt: 4.5, 
      'Saudi Arabia': 2.3, 
      Israel: 1.8, 
      Qatar: 3.1, 
      Jordan: 0 
    },
    { 
      quarter: 'Q1 2024', 
      'Dubai / UAE': 2.8, 
      Egypt: 1.2, 
      'Saudi Arabia': 1.1, 
      Israel: 1.5, 
      Qatar: 1.9, 
      Jordan: 0 
    },
    { 
      quarter: 'Q3 2024', 
      'Dubai / UAE': 1.7, 
      Egypt: 1.7, 
      'Saudi Arabia': 1.3, 
      Israel: 1.3, 
      Qatar: 0, 
      Jordan: 0 
    },
  ];

  // Colores para las regiones usando la nueva paleta
  const regionColors = {
    'Americas': COLORS.primary, // Burdeos
    'Europe': COLORS.secondary, // Beige
    'Asia Pacific': COLORS.tertiary, // Verde oscuro
    'Middle East / Africa': COLORS.quaternary, // Mostaza
  };

  // Colores para los países del Medio Oriente usando la nueva paleta
  const countryColors = {
    'Dubai / UAE': COLORS.primary, // Burdeos
    'Egypt': COLORS.tertiary, // Verde oscuro
    'Saudi Arabia': COLORS.secondary, // Beige
    'Israel': COLORS.quaternary, // Mostaza
    'Qatar': COLORS.quinta, // Berenjena
    'Jordan': '#d8caaf', // Derivado del beige más claro
  };

  // Personalización para el tooltip regional
  const RegionalTooltip = ({ active, payload, label }) => {
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

  // Personalización para el tooltip de tendencia
  const TrendTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.stroke }}>
              {`${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Personalización para el tooltip de países
  const CountryTooltip = ({ active, payload, label }) => {
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
  
  // Función para renderizar barras con colores personalizados para países
  const renderCountryBar = (props) => {
    const { x, y, width, height, name } = props;
    
    // Asignar el color correspondiente al país
    const fill = countryColors[name] || '#ccc';
    
    return (
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill={fill} 
        rx={4}
        ry={4}
      />
    );
  };
  
  // Función para renderizar barras con colores personalizados para regiones
  const renderRegionBar = (props) => {
    const { x, y, width, height, payload } = props;
    
    // Asignar el color correspondiente a la región
    const fill = regionColors[payload.name] || '#ccc';
    
    return (
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill={fill} 
        rx={4}
        ry={4}
      />
    );
  };

  return (
    <div className="space-y-6">
      {/* Título para Regiones para Vacaciones Internacionales */}
      <h6 className="text-base font-semibold text-gray-700 mt-6 mb-2">Ranking – Q3 2024 (Audience %)</h6>
      
      {/* Gráfico de ranking regional */}
      <div className="h-60 w-full p-4 bg-white rounded-lg border border-gray-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={regionalRankingData}
            margin={{
              top: 5,
              right: 30,
              left: 10,
              bottom: 5,
            }}
            barCategoryGap={10}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, 60]} 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              scale="band" 
              tick={{ fontSize: 10 }}
              width={100}
            />
            <Tooltip content={<RegionalTooltip />} />
            <Bar 
              dataKey="value" 
              shape={renderRegionBar}
              barSize={30}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Título para Tendencias Regionales */}
      <h6 className="text-base font-semibold text-gray-700 mt-6 mb-2">Trends Over Time (Audience %)</h6>
      
      {/* Gráfico de tendencia regional */}
      <div className="h-60 w-full p-4 bg-white rounded-lg border border-gray-100">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={regionalTrendData}
            margin={{
              top: 5,
              right: 30,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="quarter" 
              tick={{ fontSize: 10 }}
            />
            <YAxis
              domain={[0, 60]}
              tickCount={7}
              tick={{ fontSize: 10 }}
            />
            <Tooltip content={<TrendTooltip />} />
            <Legend 
              iconType="circle" 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              wrapperStyle={{ paddingTop: '10px' }}
            />
            <Line 
              type="monotone" 
              dataKey="Americas" 
              stroke={regionColors['Americas']} 
              dot={{ r: 4, fill: regionColors['Americas'] }}
              activeDot={{ r: 6, fill: regionColors['Americas'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Europe" 
              stroke={regionColors['Europe']} 
              dot={{ r: 4, fill: regionColors['Europe'] }}
              activeDot={{ r: 6, fill: regionColors['Europe'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Asia Pacific" 
              stroke={regionColors['Asia Pacific']} 
              dot={{ r: 4, fill: regionColors['Asia Pacific'] }}
              activeDot={{ r: 6, fill: regionColors['Asia Pacific'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Middle East / Africa" 
              stroke={regionColors['Middle East / Africa']} 
              dot={{ r: 4, fill: regionColors['Middle East / Africa'] }}
              activeDot={{ r: 6, fill: regionColors['Middle East / Africa'] }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Título para Middle East Regional Comparison */}
      <h5 className="text-lg font-semibold text-gray-800 mt-10 mb-4">Middle East Regional Comparison</h5>
      <p className="text-gray-600 mb-4">
        How does Qatar compare to other Middle Eastern destinations in terms of awareness and appeal? 
        This dashboard compares Qatar with key regional destinations over time.
      </p>
      
      {/* Título para Países del Medio Oriente */}
      <h6 className="text-base font-semibold text-gray-700 mt-6 mb-2">Ranking – Q3 2024 (Audience %)</h6>
      
      {/* Gráfico de ranking de países del Medio Oriente */}
      <div className="h-60 w-full p-4 bg-white rounded-lg border border-gray-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={middleEastRankingData}
            margin={{
              top: 5,
              right: 30,
              left: 10,
              bottom: 5,
            }}
            barCategoryGap={10}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, 2.5]} 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              scale="band" 
              tick={{ fontSize: 10 }}
              width={100}
            />
            <Tooltip content={<CountryTooltip />} />
            <Bar 
              dataKey="value" 
              shape={(props) => {
                const { x, y, width, height, payload } = props;
                return (
                  <rect 
                    x={x} 
                    y={y} 
                    width={width} 
                    height={height} 
                    fill={countryColors[payload.name] || '#ccc'} 
                    rx={4}
                    ry={4}
                  />
                );
              }}
              barSize={30}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Título para Tendencias de Países del Medio Oriente */}
      <h6 className="text-base font-semibold text-gray-700 mt-6 mb-2">Trends Over Time (Audience %)</h6>
      
      {/* Gráfico de tendencia de países del Medio Oriente */}
      <div className="h-80 w-full p-4 bg-white rounded-lg border border-gray-100">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={middleEastTrendData}
            margin={{
              top: 5,
              right: 30,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="quarter" 
              tick={{ fontSize: 10 }}
            />
            <YAxis
              domain={[0, 7]}
              tickCount={8}
              tick={{ fontSize: 10 }}
            />
            <Tooltip content={<TrendTooltip />} />
            <Legend 
              iconType="circle" 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              wrapperStyle={{ paddingTop: '10px' }}
            />
            <Line 
              type="monotone" 
              dataKey="Dubai / UAE" 
              stroke={countryColors['Dubai / UAE']} 
              dot={{ r: 4, fill: countryColors['Dubai / UAE'] }}
              activeDot={{ r: 6, fill: countryColors['Dubai / UAE'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Egypt" 
              stroke={countryColors['Egypt']} 
              dot={{ r: 4, fill: countryColors['Egypt'] }}
              activeDot={{ r: 6, fill: countryColors['Egypt'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Saudi Arabia" 
              stroke={countryColors['Saudi Arabia']} 
              dot={{ r: 4, fill: countryColors['Saudi Arabia'] }}
              activeDot={{ r: 6, fill: countryColors['Saudi Arabia'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Israel" 
              stroke={countryColors['Israel']} 
              dot={{ r: 4, fill: countryColors['Israel'] }}
              activeDot={{ r: 6, fill: countryColors['Israel'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Qatar" 
              stroke={countryColors['Qatar']} 
              dot={{ r: 4, fill: countryColors['Qatar'] }}
              activeDot={{ r: 6, fill: countryColors['Qatar'] }}
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="Jordan" 
              stroke={countryColors['Jordan']} 
              dot={{ r: 4, fill: countryColors['Jordan'] }}
              activeDot={{ r: 6, fill: countryColors['Jordan'] }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RegionalComparisonCharts; 
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const TravelBarriersCharts = () => {
  // Datos para barreras de viaje
  const barriersData = [
    { name: 'Safety concerns', value: 78 },
    { name: 'Political instability', value: 71 },
    { name: 'Visa difficulties', value: 65 },
    { name: 'Travel time/distance', value: 59 },
    { name: 'Limited direct flights', value: 54 },
    { name: 'Language barriers', value: 48 },
    { name: 'Cultural restrictions', value: 46 },
    { name: 'Expensive accommodations', value: 42 },
    { name: 'Limited activities', value: 38 },
    { name: 'Poor infrastructure', value: 35 },
  ].sort((a, b) => b.value - a.value);
  
  // Datos para tendencia de barreras de viaje
  const barriersTrendData = [
    { 
      quarter: 'Q1 2023', 
      'Safety concerns': 75,
      'Political instability': 68,
      'Visa difficulties': 70,
      'Travel time/distance': 54,
      'Limited direct flights': 49 
    },
    { 
      quarter: 'Q3 2023', 
      'Safety concerns': 76,
      'Political instability': 69,
      'Visa difficulties': 68,
      'Travel time/distance': 56,
      'Limited direct flights': 50 
    },
    { 
      quarter: 'Q1 2024', 
      'Safety concerns': 77,
      'Political instability': 70,
      'Visa difficulties': 67,
      'Travel time/distance': 57,
      'Limited direct flights': 52 
    },
    { 
      quarter: 'Q3 2024', 
      'Safety concerns': 78,
      'Political instability': 71,
      'Visa difficulties': 65,
      'Travel time/distance': 59,
      'Limited direct flights': 54 
    },
  ];

  // Colores para los gráficos
  const barriersColors = {
    bar: '#F44336',
    'Safety concerns': '#C62828',
    'Political instability': '#D32F2F',
    'Visa difficulties': '#E53935',
    'Travel time/distance': '#F44336',
    'Limited direct flights': '#EF5350'
  };

  // Personalización para el tooltip
  const CustomTooltip = ({ active, payload, label }) => {
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

  return (
    <div className="mb-10">
      <h5 className="text-lg font-semibold text-gray-800 mb-4">Common Travel Barriers</h5>
      <p className="text-gray-600 mb-6">
        Understanding the barriers that discourage premium travelers from visiting certain destinations
        helps identify obstacles Qatar must address to enhance its appeal. These charts highlight 
        the most significant barriers and their evolution over time.
      </p>
      
      {/* Grid para Ranking y Tendencia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
        {/* Gráfico de Ranking */}
        <div>
          <h6 className="text-base font-semibold text-gray-700 mb-2">Ranking – Q3 2024 (Audience %)</h6>
          <div className="h-[300px] w-full pl-0 bg-white p-4 rounded-lg border border-gray-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={barriersData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
                barCategoryGap={12}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 80]} 
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  scale="band" 
                  tick={{ fontSize: 10 }}
                  width={150}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill={barriersColors.bar}
                  barSize={24}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Gráfico de Tendencia */}
        <div>
          <h6 className="text-base font-semibold text-gray-700 mb-2">Trend Over Time - Top 5 Barriers (Audience %)</h6>
          <div className="h-[300px] w-full pl-0 bg-white p-4 rounded-lg border border-gray-100">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={barriersTrendData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="quarter" 
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  domain={[45, 80]}
                  tickCount={5}
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
                  dataKey="Safety concerns" 
                  stroke={barriersColors['Safety concerns']} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="Political instability" 
                  stroke={barriersColors['Political instability']} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="Visa difficulties" 
                  stroke={barriersColors['Visa difficulties']} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="Travel time/distance" 
                  stroke={barriersColors['Travel time/distance']} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="Limited direct flights" 
                  stroke={barriersColors['Limited direct flights']} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-red-50 p-5 rounded-lg border border-red-100 mt-6">
        <h5 className="text-lg font-semibold text-red-800 mb-2">Key Insight</h5>
        <p className="text-gray-700 mb-3">
          Safety concerns (78%) and political instability (71%) remain the dominant barriers for premium travelers, 
          while visa difficulties (65%) show a downward trend. Qatar can capitalize on its reputation for safety and stability
          while continuing to simplify visa processes to overcome key traveler concerns.
        </p>
      </div>
    </div>
  );
};

export default TravelBarriersCharts; 
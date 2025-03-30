import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const EcoExperienceAttitudes = () => {
  // Datos para actitudes eco y experienciales
  const ecoExperienceData = [
    { 
      name: 'Use Local Providers', 
      value: 55,
      color: '#8d1c3e' // Burdeos/vino
    },
    { 
      name: 'Use Local Transport', 
      value: 48,
      color: '#d4a017' // Dorado/ocre
    },
    { 
      name: 'Visit Non-Touristy Areas', 
      value: 35,
      color: '#1a4d2e' // Verde oscuro
    },
    { 
      name: 'Limit Environmental Impact', 
      value: 18,
      color: '#b8a88f' // Beige/taupe
    },
    { 
      name: 'Pick Sustainable Provider', 
      value: 17,
      color: '#8d1c3e' // Burdeos/vino (repetir paleta)
    },
    { 
      name: 'None of These', 
      value: 12,
      color: '#d4a017' // Dorado/ocre (repetir paleta)
    },
  ].sort((a, b) => b.value - a.value);
  
  // Datos para tendencia de actitudes eco y experienciales
  const ecoTrendData = [
    { quarter: 'Q1 2023', 'Use Local Providers': 46 },
    { quarter: 'Q3 2023', 'Use Local Providers': 44 },
    { quarter: 'Q1 2024', 'Use Local Providers': 48 },
    { quarter: 'Q3 2024', 'Use Local Providers': 55 },
  ];
  
  // Personalización para el tooltip del ranking
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg text-sm backdrop-blur-sm bg-opacity-90">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p className="text-gray-700" style={{ color: payload[0].payload.color }}>{`Audience %: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };
  
  // Personalización para el tooltip de tendencia
  const TrendTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg text-sm backdrop-blur-sm bg-opacity-90">
          <p className="font-semibold">{label}</p>
          <p style={{ color: '#8d1c3e' }}>
            {`Use Local Providers: ${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* Título para el ranking */}
      <h4 className="text-base font-semibold text-gray-700 mb-2">Ranking – Q3 2024 (Audience %)</h4>
      
      {/* Gráfico de Ranking */}
      <div className="mb-6">
        <div className="h-[300px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ecoExperienceData}
              margin={{
                top: 20,
                right: 30,
                left: 150,
                bottom: 20,
              }}
              barCategoryGap={40}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.3} />
              <XAxis 
                type="number" 
                domain={[0, 60]} 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                scale="band" 
                tick={{ fontSize: 12 }}
                width={150}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                barSize={40}
                radius={[0, 20, 20, 0]}
              >
                {ecoExperienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Gráfico de Tendencia */}
      <div className="mb-6">
        <div className="h-[300px] w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={ecoTrendData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <defs>
                <linearGradient id="colorLocalProviders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8d1c3e" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#8d1c3e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis 
                dataKey="quarter" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                domain={[0, 60]}
                tickCount={6}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<TrendTooltip />} />
              <Legend 
                iconType="circle" 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ paddingTop: '15px' }}
              />
              <Line 
                type="monotone" 
                dataKey="Use Local Providers" 
                name="Use Local Providers"
                stroke="#8d1c3e" 
                strokeWidth={3}
                dot={{ r: 4, fill: "#8d1c3e", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6, fill: "#8d1c3e", strokeWidth: 0 }}
                fillOpacity={1}
                fill="url(#colorLocalProviders)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-amber-50 p-5 rounded-xl border border-green-100 mt-6 shadow-sm">
        <h5 className="text-lg font-semibold text-green-800 mb-2">Key Insight</h5>
        <p className="text-gray-700 mb-3">
          The preference for using local providers (55%) and transport options (48%) has grown significantly, 
          indicating an opportunity for Qatar to highlight authentic local experiences and sustainable 
          tourism initiatives in its marketing campaigns.
        </p>
      </div>
    </div>
  );
};

export default EcoExperienceAttitudes;
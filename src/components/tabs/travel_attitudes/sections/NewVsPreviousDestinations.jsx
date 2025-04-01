import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie } from 'recharts';

const NewVsPreviousDestinations = () => {
  // Datos para destinos nuevos vs. previos - Actualizado con datos reales
  const newVsPreviousData = [
    { 
      name: 'Take a vacation somewhere new', 
      'Take a vacation somewhere new': 82, 
      'Take a vacation somewhere I\'ve been before': 0,
      color: '#8d1c3e' // Burdeos/vino
    },
    { 
      name: 'Take a vacation somewhere I\'ve been before', 
      'Take a vacation somewhere new': 0,
      'Take a vacation somewhere I\'ve been before': 16.3,
      color: '#d4a017' // Dorado/ocre
    },
  ];
  
  // Datos formateados para el gráfico de donut
  const donutData = [
    { name: 'Take a vacation somewhere new', value: 82, color: '#8d1c3e' },
    { name: 'Take a vacation somewhere I\'ve been before', value: 16.3, color: '#d4a017' },
  ];
  
  // Datos para tendencia de destinos nuevos vs. previos - Actualizado con datos reales
  const destinationTrendData = [
    { quarter: 'Q1 2023', 'Take a vacation somewhere new': 74.9, 'Take a vacation somewhere I\'ve been before': 23.4 },
    { quarter: 'Q3 2023', 'Take a vacation somewhere new': 76.4, 'Take a vacation somewhere I\'ve been before': 22 },
    { quarter: 'Q1 2024', 'Take a vacation somewhere new': 79.5, 'Take a vacation somewhere I\'ve been before': 18 },
    { quarter: 'Q3 2024', 'Take a vacation somewhere new': 82, 'Take a vacation somewhere I\'ve been before': 16.3 },
  ];

  // Colores para los gráficos - paleta específica
  const newVsPreviousColors = {
    new: '#8d1c3e', // Burdeos/vino
    previous: '#d4a017' // Dorado/ocre
  };

  // Personalización para el tooltip de donut
  const DonutTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-md shadow-sm">
          <p className="font-medium text-sm">{`${payload[0].name}`}</p>
          <p className="text-[#8d1c3e] font-bold">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  // Personalización para el tooltip de tendencia
  const TrendTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-md shadow-sm">
          <p className="font-medium text-sm mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* Primer bloque - Gráficos de donut y tendencia lado a lado */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Gráfico de Donut - Proporción actual (Q3 2024) */}
        <div className="md:w-1/3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center">
          <h4 className="text-sm font-medium text-gray-500 mb-1 text-center">Current Preference (Q3 2024)</h4>
          <div className="h-[240px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={false}
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Etiquetas incorporadas directamente - Un solo texto centrado en el donut */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full bg-[#8d1c3e] inline-block mr-1"></span>
                <span className="font-medium mr-3">New</span>
                <span className="w-3 h-3 rounded-full bg-[#d4a017] inline-block mr-1"></span>
                <span className="font-medium">Previous</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gráfico de Tendencia - Histórico */}
        <div className="md:w-2/3">
          <div className="h-[300px] w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
            <h4 className="text-sm font-medium text-gray-500 mb-1">Trend Analysis (2023-2024)</h4>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart
                data={destinationTrendData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 5,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={newVsPreviousColors.new} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={newVsPreviousColors.new} stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={newVsPreviousColors.previous} stopOpacity={0.2}/>
                    <stop offset="95%" stopColor={newVsPreviousColors.previous} stopOpacity={0}/>
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
                  domain={[0, 100]}
                  tickCount={6}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<TrendTooltip />} />
                <Line
                  type="monotone"
                  dataKey="Take a vacation somewhere new"
                  stroke={newVsPreviousColors.new}
                  strokeWidth={3}
                  dot={{ r: 3.5, fill: newVsPreviousColors.new }}
                  activeDot={{ r: 5, fill: newVsPreviousColors.new }}
                />
                <Line
                  type="monotone"
                  dataKey="Take a vacation somewhere I've been before"
                  stroke={newVsPreviousColors.previous}
                  strokeWidth={3}
                  dot={{ r: 3.5, fill: newVsPreviousColors.previous }}
                  activeDot={{ r: 5, fill: newVsPreviousColors.previous }}
                />
              </LineChart>
            </ResponsiveContainer>
            
            {/* Etiquetas de línea simplificadas y legibles */}
            <div className="flex justify-center mt-1">
              <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full bg-[#8d1c3e] inline-block mr-1"></span>
                <span className="font-medium mr-4">New Destination</span>
                <span className="w-3 h-3 rounded-full bg-[#d4a017] inline-block mr-1"></span>
                <span className="font-medium">Previous Destination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVsPreviousDestinations; 
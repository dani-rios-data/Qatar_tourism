import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie } from 'recharts';

const NewVsPreviousDestinations = () => {
  // Datos para destinos nuevos vs. previos
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
      'Take a vacation somewhere I\'ve been before': 18,
      color: '#d4a017' // Dorado/ocre
    },
  ];
  
  // Datos formateados para el gráfico de donut
  const donutData = [
    { name: 'Take a vacation somewhere new', value: 82, color: '#8d1c3e' },
    { name: 'Take a vacation somewhere I\'ve been before', value: 18, color: '#d4a017' },
  ];
  
  // Datos para tendencia de destinos nuevos vs. previos
  const destinationTrendData = [
    { quarter: 'Q1 2023', 'Take a vacation somewhere new': 49, 'Take a vacation somewhere I\'ve been before': 51 },
    { quarter: 'Q3 2023', 'Take a vacation somewhere new': 63, 'Take a vacation somewhere I\'ve been before': 37 },
    { quarter: 'Q1 2024', 'Take a vacation somewhere new': 65, 'Take a vacation somewhere I\'ve been before': 35 },
    { quarter: 'Q3 2024', 'Take a vacation somewhere new': 82, 'Take a vacation somewhere I\'ve been before': 18 },
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
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-lg text-sm backdrop-blur-sm bg-opacity-90">
          <p className="font-semibold">{payload[0].name}</p>
          <p style={{ color: payload[0].payload.color }}>{`${payload[0].value}%`}</p>
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

  // Renderizar etiquetas personalizadas para el donut
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill={donutData[index].color}
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontWeight="500"
        fontSize="14"
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <div className="w-full">
      {/* Contenedor para ambas gráficas en la misma fila */}
      <div className="flex flex-wrap mb-6">
        {/* Gráfico de Donut - 1/4 del ancho */}
        <div className="w-1/4 pr-2">
          <div className="h-[300px] w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={renderCustomizedLabel}
                  outerRadius={70}
                  innerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Gráfico de Tendencia - 3/4 del ancho */}
        <div className="w-3/4 pl-2">
          <div className="h-[300px] w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm backdrop-filter backdrop-blur-sm">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={destinationTrendData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
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
                  dataKey="Take a vacation somewhere new" 
                  stroke={newVsPreviousColors.new} 
                  strokeWidth={3}
                  dot={{ r: 4, fill: newVsPreviousColors.new, strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 6, fill: newVsPreviousColors.new, strokeWidth: 0 }}
                  fillOpacity={1}
                  fill="url(#colorNew)"
                />
                <Line 
                  type="monotone" 
                  dataKey="Take a vacation somewhere I've been before" 
                  stroke={newVsPreviousColors.previous} 
                  strokeWidth={3}
                  dot={{ r: 4, fill: newVsPreviousColors.previous, strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 6, fill: newVsPreviousColors.previous, strokeWidth: 0 }}
                  fillOpacity={1}
                  fill="url(#colorPrevious)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Leyenda común para ambas gráficas */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center mr-6">
          <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: newVsPreviousColors.new }}></div>
          <span style={{ color: newVsPreviousColors.new, fontSize: '14px' }}>Take a vacation somewhere new</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: newVsPreviousColors.previous }}></div>
          <span style={{ color: newVsPreviousColors.previous, fontSize: '14px' }}>Take a vacation somewhere I've been before</span>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-5 rounded-xl border border-amber-100 mt-6 shadow-sm">
        <h5 className="text-lg font-semibold text-amber-800 mb-2">Key Insight</h5>
        <p className="text-gray-700 mb-3">
          The strong shift toward new destinations (82% in Q3 2024, up from 49% in Q1 2023) represents a significant 
          opportunity for emerging destinations like Qatar to attract premium travelers seeking novel experiences.
        </p>
      </div>
    </div>
  );
};

export default NewVsPreviousDestinations; 
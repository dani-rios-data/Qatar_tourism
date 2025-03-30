import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const InsightsCharts = () => {
  // Datos para destinos nuevos vs. previos
  const newVsPreviousData = [
    { name: 'Take a vacation somewhere new', value: 82 },
    { name: 'Take a vacation somewhere I\'ve been before', value: 18 },
  ];
  
  // Datos para tendencia de destinos nuevos vs. previos
  const destinationTrendData = [
    { quarter: 'Q1 2023', 'Take a vacation somewhere new': 49, 'Take a vacation somewhere I\'ve been before': 51 },
    { quarter: 'Q3 2023', 'Take a vacation somewhere new': 63, 'Take a vacation somewhere I\'ve been before': 37 },
    { quarter: 'Q1 2024', 'Take a vacation somewhere new': 65, 'Take a vacation somewhere I\'ve been before': 35 },
    { quarter: 'Q3 2024', 'Take a vacation somewhere new': 82, 'Take a vacation somewhere I\'ve been before': 18 },
  ];

  // Datos para factores que influyen en la elección de destino
  const factorsData = [
    { name: 'Attractions', value: 75 },
    { name: 'Weather', value: 68 },
    { name: 'Relaxation', value: 62 },
    { name: 'Security', value: 56 },
    { name: 'Accommodation', value: 45 },
  ];
  
  // Datos para tendencia de factores de elección de destino
  const factorsTrendData = [
    { quarter: 'Q1 2023', 'Accommodation': 49 },
    { quarter: 'Q3 2023', 'Accommodation': 63 },
    { quarter: 'Q1 2024', 'Accommodation': 65 },
    { quarter: 'Q3 2024', 'Accommodation': 45 },
  ];

  // Datos para actitudes eco y experiencia
  const ecoAttitudesData = [
    { name: 'Use Local Providers', value: 55 },
    { name: 'Use Local Transport', value: 42 },
    { name: 'Visit Non-Touristy Areas', value: 35 },
    { name: 'Limit Environmental Impact', value: 18 },
    { name: 'Pick Sustainable Provider', value: 18 },
    { name: 'None of These', value: 14 },
  ];
  
  // Datos para tendencia de actitudes eco (uso de proveedores locales)
  const ecoTrendData = [
    { quarter: 'Q1 2023', 'LocalProviders': 45 },
    { quarter: 'Q3 2023', 'LocalProviders': 43 },
    { quarter: 'Q1 2024', 'LocalProviders': 47 },
    { quarter: 'Q3 2024', 'LocalProviders': 55 },
  ];

  // Colores para los gráficos
  const newVsPreviousColors = {
    new: '#8BC34A',
    previous: '#9575CD'
  };
  
  const factorsColors = {
    bar: '#9575CD'
  };
  
  const ecoColors = {
    bar: '#8BC34A',
    line: '#4CAF50'
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
    <div className="space-y-6">
      {/* Destinos Nuevos vs. Previos */}
      <div className="bg-white p-0 rounded-lg border border-gray-200 mb-8">
        <h5 className="text-lg font-semibold text-gray-800 pl-6 pt-6 mb-4">New Versus Previous Destinations</h5>
        <p className="text-gray-600 pl-6 pr-6 mb-6">
          Explore how premium travelers' preferences between new destinations versus familiar ones have evolved. 
          The latest data shows a strong preference for new destinations, creating opportunities for emerging markets.
        </p>
        
        {/* Grid para Ranking y Tendencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
          {/* Gráfico de Ranking */}
          <div>
            <h6 className="text-base font-semibold text-gray-700 mb-2 pl-6">Ranking – Q3 2024 (Audience %)</h6>
            <div className="h-[180px] w-full pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={newVsPreviousData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                  barCategoryGap={20}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 100]} 
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                    tick={{ fontSize: 10 }}
                    width={200}
                    dx={-5}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill={(entry) => entry.name === 'Take a vacation somewhere new' ? newVsPreviousColors.new : newVsPreviousColors.previous} 
                    barSize={30}
                    isAnimationActive={false}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Gráfico de Tendencia */}
          <div>
            <h6 className="text-base font-semibold text-gray-700 mb-2 pl-6">Trend Over Time (Audience %)</h6>
            <div className="h-[180px] w-full pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={destinationTrendData}
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
                    domain={[0, 100]}
                    tickCount={6}
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
                    dataKey="Take a vacation somewhere new" 
                    stroke={newVsPreviousColors.new} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Take a vacation somewhere I've been before" 
                    stroke={newVsPreviousColors.previous} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Factores que influyen en la elección de destino */}
      <div className="bg-white p-0 rounded-lg border border-gray-200 mb-8">
        <h5 className="text-lg font-semibold text-gray-800 pl-6 pt-6 mb-4">Factors Influencing Choice of Destination</h5>
        <p className="text-gray-600 pl-6 pr-6 mb-6">
          Explore how premium travelers' preferences evolved over time and which destination factors rank highest in the latest data. 
          Select between Audience % and Index to change the metric.
        </p>
        
        {/* Grid para Ranking y Tendencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
          {/* Gráfico de Ranking */}
          <div>
            <h6 className="text-base font-semibold text-gray-700 mb-2 pl-6">Ranking – Q3 2024 (Audience %)</h6>
            <div className="h-[220px] w-full pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={factorsData}
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
                    width={100}
                    dx={-5}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill={factorsColors.bar}
                    barSize={16}
                    isAnimationActive={false}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Gráfico de Tendencia */}
          <div>
            <h6 className="text-base font-semibold text-gray-700 mb-2 pl-6">Trend Over Time (Audience %)</h6>
            <div className="h-[220px] w-full pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={factorsTrendData}
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
                    domain={[0, 80]}
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
                    dataKey="Accommodation" 
                    stroke={factorsColors.bar} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Actitudes eco y experiencia */}
      <div className="bg-white p-0 rounded-lg border border-gray-200">
        <h5 className="text-lg font-semibold text-gray-800 pl-6 pt-6 mb-4">Eco & Experience Attitudes</h5>
        <p className="text-gray-600 pl-6 pr-6 mb-6">
          This dashboard tracks the evolution of eco-conscious and experience-seeking behaviors among premium travelers. 
          Use the controls below to explore rankings and quarterly trends.
        </p>
        
        {/* Grid para Ranking y Tendencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
          {/* Gráfico de Ranking */}
          <div>
            <h6 className="text-base font-semibold text-gray-700 mb-2 pl-6">Ranking – Q3 2024 (Audience %)</h6>
            <div className="h-[240px] w-full pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={ecoAttitudesData}
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
                    domain={[0, 60]} 
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                    tick={{ fontSize: 10 }}
                    width={140}
                    dx={-5}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    fill={ecoColors.bar}
                    barSize={16}
                    isAnimationActive={false}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Gráfico de Tendencia */}
          <div>
            <h6 className="text-base font-semibold text-gray-700 mb-2 pl-6">Trend Over Time (Audience %)</h6>
            <div className="h-[240px] w-full pl-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={ecoTrendData}
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
                    dataKey="LocalProviders" 
                    name="Use Local Providers"
                    stroke={ecoColors.line} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conclusiones sobre las oportunidades para Qatar */}
      <div className="bg-green-50 p-5 rounded-lg border border-green-100 mt-8">
        <h5 className="text-lg font-semibold text-green-800 mb-2">Insights: Opportunities for Qatar</h5>
        <p className="text-gray-700 mb-3">
          Basándonos en los datos de actitudes y preferencias de los viajeros, identificamos varias oportunidades clave para Qatar:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>La fuerte preferencia por <strong>destinos nuevos</strong> (82%) representa una oportunidad para Qatar como destino emergente.</li>
          <li>Qatar puede destacar sus <strong>atracciones turísticas</strong> y <strong>clima favorable</strong>, los dos factores más importantes para los viajeros.</li>
          <li>El creciente interés en <strong>proveedores locales</strong> (55%) y <strong>experiencias auténticas</strong> puede aprovecharse para crear ofertas culturales distintivas.</li>
          <li>Los viajeros valoran la <strong>seguridad</strong> (56%), un área donde Qatar tiene una ventaja competitiva en la región.</li>
        </ul>
      </div>
    </div>
  );
};

export default InsightsCharts; 
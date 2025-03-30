import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const DestinationVsStopoverCharts = () => {
  // Datos para tipos de vacaciones internacionales
  const vacationTypesData = [
    { name: 'Sightseeing', value: 45 },
    { name: 'Beach / coast', value: 35 },
    { name: 'City break', value: 32 },
    { name: 'Resort', value: 28 },
    { name: 'Visiting family, relatives or friends', value: 25 },
    { name: 'Country / rural escape', value: 22 },
    { name: 'Nature', value: 21 },
    { name: 'Walking / hiking', value: 20 },
    { name: 'Special occasion trip (e.g. Wedding, Birthday, Anniversary)', value: 15 },
    { name: 'Road / driving trip', value: 14 },
    { name: 'Cruise', value: 13 },
    { name: 'Camping', value: 12 },
    { name: 'Winter sports (e.g. skiing)', value: 10 },
    { name: 'Sailing', value: 8 },
    { name: 'Spa / retreat', value: 8 },
    { name: 'Fitness (e.g. cycling break, yoga)', value: 6 },
    { name: 'To have cosmetic / medical treatments', value: 4 },
    { name: 'Safari', value: 3 },
    { name: 'None of these', value: 1 },
    { name: 'Active (e.g. surfing, climbing etc.)', value: 1 },
  ].sort((a, b) => b.value - a.value);

  // Datos para aerolíneas consideradas para viajes de ocio
  const leisureAirlinesData = [
    { name: 'American Airlines', value: 51.7 },
    { name: 'United Airlines', value: 44.7 },
    { name: 'Delta', value: 44.4 },
    { name: 'JetBlue (USA Only)', value: 30.9 },
    { name: 'British Airways', value: 27.9 },
    { name: 'Lufthansa', value: 27.5 },
    { name: 'Southwest Airlines (USA Only)', value: 25.7 },
    { name: 'Alaska Airlines (Canada and USA Only)', value: 24.6 },
    { name: 'Emirates', value: 24.2 },
    { name: 'Japan Airlines (Select Markets Only)', value: 23 },
  ].sort((a, b) => b.value - a.value);
  
  // Datos para programas de fidelidad de aerolíneas
  const loyaltyProgramsData = [
    { name: 'Delta', value: 28 },
    { name: 'American Airlines', value: 26 },
    { name: 'United Airlines', value: 26 },
    { name: 'Southwest Airlines', value: 13 },
    { name: 'JetBlue', value: 9 },
    { name: 'Air France', value: 8 },
    { name: 'Hawaiian Airlines', value: 8 },
    { name: 'Singapore Airlines', value: 8 },
    { name: 'Japan Airlines', value: 7 },
    { name: 'Other', value: 7 },
  ].sort((a, b) => b.value - a.value);
  
  // Datos para aerolíneas consideradas para viajes de negocios
  const businessAirlinesData = [
    { name: 'American Airlines', value: 17.5, highlight: false },
    { name: 'Delta', value: 16.2, highlight: false },
    { name: 'United Airlines (Select Markets Only)', value: 12.1, highlight: false },
    { name: 'JetBlue (USA Only)', value: 10.2, highlight: false },
    { name: 'Emirates', value: 8.4, highlight: false },
    { name: 'Lufthansa', value: 8.1, highlight: false },
    { name: 'Southwest Airlines (USA Only)', value: 7.9, highlight: false },
    { name: 'Alaska Airlines (Canada and USA Only)', value: 7.0, highlight: false },
    { name: 'Virgin (Select Markets Only)', value: 6.7, highlight: false },
    { name: 'British Airways', value: 6.2, highlight: false },
    { name: 'Qatar (Select Markets Only)', value: 4.1, highlight: false },
  ].sort((a, b) => b.value - a.value);

  // Colores para los gráficos usando la nueva paleta
  const vacationColors = {
    bar: '#1a4d2e', // Verde oscuro
    qatar: '#8d1c3e'  // Burdeos
  };
  
  const airlinesColors = {
    bar: '#8d1c3e', // Burdeos
    qatar: '#1a4d2e'  // Verde oscuro
  };
  
  const loyaltyColors = {
    bar: '#1a4d2e'  // Verde oscuro (cambiado de beige)
  };
  
  const businessColors = {
    bar: '#8d1c3e', // Burdeos
    qatar: '#8d1c3e'  // Cambiado a burdeos para que todas las barras sean del mismo color
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

  // Función para renderizar barras con colores personalizados para aerolíneas de negocios
  const renderBusinessBar = (props) => {
    const { x, y, width, height, index } = props;
    
    // Usar siempre el color burdeos para todas las aerolíneas
    const fill = businessColors.bar;
    
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
      {/* Grid para Tipos de Vacaciones y Aerolíneas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Tipos de Vacaciones Internacionales */}
        <div className="bg-white p-0 rounded-lg border border-gray-100">
          <h6 className="text-base font-semibold text-gray-700 mb-2 pl-4 pt-4">Types of International Vacations – Q3 2024 (Audience %)</h6>
          
          <div className="h-[540px] w-full pl-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={vacationTypesData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
                barCategoryGap={8}
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
                  tick={{ fontSize: 9 }}
                  width={150}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill={vacationColors.bar}
                  barSize={16}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Top 10 Aerolíneas para Viajes de Ocio */}
        <div className="bg-white p-0 rounded-lg border border-gray-100">
          <h6 className="text-base font-semibold text-gray-700 mb-2 pl-4 pt-4">
            <span className="inline-block mr-2">🏆</span>
            Top 10 Airlines for Leisure Travel – Q3 2024 (Audience %)
          </h6>
          
          <div className="h-[540px] w-full pl-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={leisureAirlinesData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
                barCategoryGap={8}
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
                  width={170}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill={airlinesColors.bar}
                  barSize={16}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Grid para Programas de Fidelidad y Aerolíneas de Negocios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Top Programas de Fidelidad de Aerolíneas */}
        <div className="bg-white p-0 rounded-lg border border-gray-100">
          <h6 className="text-base font-semibold text-gray-700 mb-2 pl-4 pt-4">
            <span className="inline-block mr-2">🏆</span>
            Top Airline Loyalty Programs – Q3 2024 (Audience %)
          </h6>
        
          <div className="h-[400px] w-full pl-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={loyaltyProgramsData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
                barCategoryGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 30]} 
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  scale="band" 
                  tick={{ fontSize: 10 }}
                  width={120}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill={loyaltyColors.bar}
                  barSize={16}
                  isAnimationActive={false}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Aerolíneas Consideradas para Viajes de Negocios */}
        <div className="bg-white p-0 rounded-lg border border-gray-100">
          <h6 className="text-base font-semibold text-gray-700 mb-2 pl-4 pt-4">
            <span className="inline-block mr-2">✈️</span>
            Airlines Considered for Business Trips – Q3 2024 (Audience %)
          </h6>
        
          <div className="h-[400px] w-full pl-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={businessAirlinesData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
                barCategoryGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis 
                  type="number" 
                  domain={[0, 20]} 
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  scale="band" 
                  tick={{ fontSize: 10 }}
                  width={180}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  shape={renderBusinessBar}
                  barSize={16}
                  isAnimationActive={false}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Conclusiones sobre Qatar como destino vs escala */}
      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100 mt-8">
        <h5 className="text-lg font-semibold text-amber-800 mb-2">Insights: Qatar as Destination vs Stopover</h5>
        <p className="text-gray-700 mb-3">
          Los datos indican que Qatar es más percibido como un destino de escala que como un destino final de vacaciones:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Qatar no aparece entre los destinos principales para tipos de vacaciones populares como turismo, playa o escapadas urbanas.</li>
          <li>Qatar Airways está en una posición más fuerte para viajes de negocios (4.1%) que para viajes de ocio, donde no aparece entre las 10 principales aerolíneas.</li>
          <li>Esto sugiere que Qatar es visto principalmente como un punto de conexión para vuelos internacionales, especialmente para viajeros de negocios.</li>
          <li>Hay una oportunidad para reposicionar Qatar como un destino vacacional atractivo, aprovechando su infraestructura y conexiones aéreas existentes.</li>
        </ul>
      </div>
    </div>
  );
};

export default DestinationVsStopoverCharts; 
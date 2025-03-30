import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const QatarConsiderationsCharts = () => {
  // Datos para consideraciones para visitar Qatar
  const considerationsData = [
    { name: 'Unique cultural experiences', value: 74 },
    { name: 'Luxury accommodations', value: 70 },
    { name: 'World-class dining', value: 67 },
    { name: 'Safety and security', value: 65 },
    { name: 'Shopping opportunities', value: 58 },
    { name: 'Desert excursions', value: 56 },
    { name: 'Sports events', value: 52 },
    { name: 'Architectural landmarks', value: 50 },
    { name: 'Business opportunities', value: 48 },
    { name: 'Museum and art exhibitions', value: 45 },
  ].sort((a, b) => b.value - a.value);
  
  // Datos para compañeros de viaje preferidos para Qatar
  const companionsData = [
    { name: 'With spouse/partner', value: 68 },
    { name: 'With family', value: 54 },
    { name: 'With friends', value: 42 },
    { name: 'Solo travel', value: 28 },
    { name: 'Business colleagues', value: 22 },
    { name: 'Tour group', value: 14 },
  ].sort((a, b) => b.value - a.value);

  // Colores para los gráficos
  const considerationsColors = {
    considerations: '#8E24AA',
    companions: '#5E35B1'
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

  return (
    <div className="mb-10">
      <h5 className="text-lg font-semibold text-gray-800 mb-4">Visiting Considerations for Qatar</h5>
      <p className="text-gray-600 mb-6">
        These charts identify specific factors that would encourage premium travelers to visit Qatar
        and their preferences for travel companions. Understanding these considerations can inform both 
        destination development and targeted marketing strategies.
      </p>
      
      {/* Grid para Dos Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0">
        {/* Gráfico de Consideraciones */}
        <div>
          <h6 className="text-base font-semibold text-gray-700 mb-2">Key Qatar Attractions – Q3 2024 (Audience %)</h6>
          <div className="h-[300px] w-full pl-0 bg-white p-4 rounded-lg border border-gray-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={considerationsData}
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
                  fill={considerationsColors.considerations}
                  barSize={24}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Gráfico de Compañeros de Viaje */}
        <div>
          <h6 className="text-base font-semibold text-gray-700 mb-2">Preferred Travel Companions for Qatar (Audience %)</h6>
          <div className="h-[300px] w-full pl-0 bg-white p-4 rounded-lg border border-gray-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={companionsData}
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
                  width={120}
                  dx={-5}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill={considerationsColors.companions}
                  barSize={24}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 mt-6">
        <h5 className="text-lg font-semibold text-purple-800 mb-2">Key Insights</h5>
        <p className="text-gray-700 mb-3">
          Unique cultural experiences (74%), luxury accommodations (70%), and world-class dining (67%) are the top 
          attractions for premium travelers considering Qatar. Most travelers prefer to visit with their spouse/partner (68%)
          or family (54%), suggesting marketing should emphasize Qatar as a luxury couples or family destination 
          highlighting cultural experiences, high-end accommodations, and fine dining options.
        </p>
      </div>
    </div>
  );
};

export default QatarConsiderationsCharts; 
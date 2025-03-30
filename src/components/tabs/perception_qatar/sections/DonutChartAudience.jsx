import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const DonutChartAudience = () => {
  // Datos de ejemplo - se pueden reemplazar con datos reales
  const data = [
    { name: 'Dubai (UAE)', value: 12.8, color: '#8d1c3e' }, // Burdeos
    { name: 'Abu Dhabi (UAE)', value: 7.6, color: '#a63950' }, // Derivado del burdeos
    { name: 'Egypt', value: 5.3, color: '#1a4d2e' }, // Verde oscuro
    { name: 'Morocco', value: 4.7, color: '#2a6d44' }, // Derivado del verde
    { name: 'Saudi Arabia', value: 4.1, color: '#8a7d65' }, // Beige oscurecido
    { name: 'Qatar', value: 0, color: '#614051' }, // Color más oscuro derivado del burdeos
    { name: 'Otros destinos', value: 65.5, color: '#d4a017' }, // Mostaza
  ];

  // Personalización para el tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-gray-700">{`Audience: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            formatter={(value, entry, index) => (
              <span className="text-sm text-gray-700">{value}: {data[index].value}%</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChartAudience; 
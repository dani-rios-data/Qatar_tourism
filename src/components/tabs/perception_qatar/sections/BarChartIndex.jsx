import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartIndex = () => {
  // Datos de ejemplo - se pueden reemplazar con datos reales
  const data = [
    { name: 'Dubai (UAE)', index: 168 },
    { name: 'Abu Dhabi (UAE)', index: 147 },
    { name: 'Egypt', index: 112 },
    { name: 'Morocco', index: 98 },
    { name: 'Saudi Arabia', index: 87 },
    { name: 'Qatar', index: 0 }, // Qatar sin presencia en Q3 2024
  ].sort((a, b) => b.index - a.index); // Ordenar de mayor a menor

  // Línea de referencia del índice promedio (100)
  const averageLine = [
    { index: 100 }
  ];

  // Personalización para el tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{label}</p>
          <p className="text-gray-700">{`Index: ${payload[0].value}`}</p>
          <p className="text-xs text-gray-500 mt-1">Base 100 = Global Avg</p>
        </div>
      );
    }
    return null;
  };

  // Función para renderizar barras con colores personalizados
  const renderBar = (props) => {
    const { x, y, width, height, index } = props;
    
    // Usar verde oscuro para Qatar y burdeos para los demás
    const fill = data[index]?.name === 'Qatar' ? '#1a4d2e' : '#8d1c3e';
    
    return (
      <rect 
        x={x} 
        y={y} 
        width={width} 
        height={height} 
        fill={fill} 
        radius={[4, 4, 0, 0]}
      />
    );
  };

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end"
            height={60}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[0, 'dataMax + 20']} 
            label={{ value: 'Índice (base 100)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }} 
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="index" 
            shape={renderBar}
            barSize={30}
          />
          {/* Línea de referencia para el promedio global */}
          <Bar 
            dataKey="avg" 
            fill="transparent" 
            stroke="#b8a88f" 
            strokeDasharray="3 3" 
            legendType="none"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartIndex; 
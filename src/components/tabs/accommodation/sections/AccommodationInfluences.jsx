import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, Cell
} from 'recharts';

const AccommodationInfluences = () => {
  const viewType = 'audience';
  const [chartView, setChartView] = useState('current');
  
  const accommodationInfluencesData = [
    { factor: "Comfort", audience: 61.4, index: 134.8, responses: 53, quarter: "Q3 2024" },
    { factor: "Location", audience: 61.7, index: 180.9, responses: 55, quarter: "Q3 2024" },
    { factor: "Cleanliness / hygiene", audience: 61.4, index: 134.8, responses: 53, quarter: "Q3 2024" },
    { factor: "Cost", audience: 54.7, index: 137.4, responses: 79, quarter: "Q1 2024" },
    { factor: "Quality breakfast", audience: 40.9, index: 137.7, responses: 33, quarter: "Q3 2024" },
    { factor: "Loyalty programs", audience: 23.0, index: 269.4, responses: 17, quarter: "Q3 2024" },
    { factor: "On-site food / drink options", audience: 32.5, index: 125.5, responses: 26, quarter: "Q3 2024" },
    { factor: "Size / space", audience: 36.4, index: 156.1, responses: 34, quarter: "Q3 2024" },
    { factor: "Brand (e.g. certain hotel chain)", audience: 27.4, index: 139.9, responses: 27, quarter: "Q3 2024" },
    { factor: "Luxury facilities / services", audience: 31.7, index: 214.7, responses: 26, quarter: "Q3 2024" },
    { factor: "Leisure facilities", audience: 27.6, index: 126.3, responses: 24, quarter: "Q3 2024" }
  ];

  const historicalData = [
    // Q1 2023
    { quarter: "Q1 2023", factor: "Brand (e.g. certain hotel chain)", audience: 36.5, index: 191.3, responses: 51 },
    { quarter: "Q1 2023", factor: "Cleanliness / hygiene", audience: 63.1, index: 148.3, responses: 94 },
    { quarter: "Q1 2023", factor: "Comfort", audience: 68.6, index: 171.2, responses: 105 },
    { quarter: "Q1 2023", factor: "Cost", audience: 46.2, index: 122.9, responses: 73 },
    { quarter: "Q1 2023", factor: "Leisure facilities", audience: 28.6, index: 137.5, responses: 43 },
    { quarter: "Q1 2023", factor: "Location", audience: 61.7, index: 206.8, responses: 96 },
    { quarter: "Q1 2023", factor: "Loyalty programs", audience: 38.1, index: 283.8, responses: 55 },
    { quarter: "Q1 2023", factor: "Luxury facilities / services", audience: 29.5, index: 240.6, responses: 42 },
    { quarter: "Q1 2023", factor: "On-site food / drink options", audience: 33.8, index: 137.6, responses: 55 },
    { quarter: "Q1 2023", factor: "Quality breakfast", audience: 40.0, index: 147.5, responses: 61 },
    { quarter: "Q1 2023", factor: "Reviews from other people", audience: 34.4, index: 155.3, responses: 51 },
    { quarter: "Q1 2023", factor: "Size / space", audience: 40.0, index: 188.9, responses: 60 },
    
    // Q3 2023
    { quarter: "Q3 2023", factor: "Brand (e.g. certain hotel chain)", audience: 47.3, index: 257.7, responses: 58 },
    { quarter: "Q3 2023", factor: "Cleanliness / hygiene", audience: 66.4, index: 152.3, responses: 88 },
    { quarter: "Q3 2023", factor: "Comfort", audience: 67.0, index: 171.2, responses: 88 },
    { quarter: "Q3 2023", factor: "Cost", audience: 57.9, index: 157.3, responses: 77 },
    { quarter: "Q3 2023", factor: "Extras (e.g. robe, toiletries etc.)", audience: 24.3, index: 163.6, responses: 30 },
    { quarter: "Q3 2023", factor: "Leisure facilities", audience: 35.8, index: 176.2, responses: 47 },
    { quarter: "Q3 2023", factor: "Location", audience: 77.2, index: 250.6, responses: 101 },
    { quarter: "Q3 2023", factor: "Loyalty programs", audience: 39.9, index: 281.1, responses: 52 },
    { quarter: "Q3 2023", factor: "Luxury facilities / services", audience: 37.6, index: 295.4, responses: 49 },
    { quarter: "Q3 2023", factor: "On-site food / drink options", audience: 36.3, index: 142.1, responses: 48 },
    { quarter: "Q3 2023", factor: "Quality breakfast", audience: 38.7, index: 144.8, responses: 50 },
    { quarter: "Q3 2023", factor: "Reviews from other people", audience: 43.3, index: 188.5, responses: 57 },
    { quarter: "Q3 2023", factor: "Size / space", audience: 36.6, index: 160.5, responses: 49 },
    
    // Q1 2024
    { quarter: "Q1 2024", factor: "Brand (e.g. certain hotel chain)", audience: 41.9, index: 210.2, responses: 61 },
    { quarter: "Q1 2024", factor: "Cleanliness / hygiene", audience: 67.1, index: 148.0, responses: 95 },
    { quarter: "Q1 2024", factor: "Comfort", audience: 70.8, index: 161.1, responses: 100 },
    { quarter: "Q1 2024", factor: "Cost", audience: 54.7, index: 137.4, responses: 79 },
    { quarter: "Q1 2024", factor: "Extras (e.g. robe, toiletries etc.)", audience: 23.8, index: 139.3, responses: 32 },
    { quarter: "Q1 2024", factor: "Leisure facilities", audience: 35.3, index: 159.5, responses: 49 },
    { quarter: "Q1 2024", factor: "Location", audience: 62.7, index: 194.0, responses: 92 },
    { quarter: "Q1 2024", factor: "Loyalty programs", audience: 35.5, index: 448.8, responses: 52 },
    { quarter: "Q1 2024", factor: "Luxury facilities / services", audience: 36.7, index: 245.5, responses: 50 },
    { quarter: "Q1 2024", factor: "On-site food / drink options", audience: 43.3, index: 166.1, responses: 61 },
    { quarter: "Q1 2024", factor: "Quality breakfast", audience: 44.9, index: 150.8, responses: 60 },
    { quarter: "Q1 2024", factor: "Reviews from other people", audience: 37.1, index: 151.6, responses: 53 },
    { quarter: "Q1 2024", factor: "Size / space", audience: 43.5, index: 182.0, responses: 64 },
    { quarter: "Q1 2024", factor: "Other", audience: 3.5, index: 193.9, responses: 5 },
    
    // Q3 2024
    { quarter: "Q3 2024", factor: "Brand (e.g. certain hotel chain)", audience: 27.4, index: 139.9, responses: 27 },
    { quarter: "Q3 2024", factor: "Cleanliness / hygiene", audience: 61.4, index: 134.8, responses: 53 },
    { quarter: "Q3 2024", factor: "Comfort", audience: 61.4, index: 134.8, responses: 53 },
    { quarter: "Q3 2024", factor: "Leisure facilities", audience: 27.6, index: 126.3, responses: 24 },
    { quarter: "Q3 2024", factor: "Location", audience: 61.7, index: 180.9, responses: 55 },
    { quarter: "Q3 2024", factor: "Loyalty programs", audience: 23.0, index: 269.4, responses: 17 },
    { quarter: "Q3 2024", factor: "Luxury facilities / services", audience: 31.7, index: 214.7, responses: 26 },
    { quarter: "Q3 2024", factor: "On-site food / drink options", audience: 32.5, index: 125.5, responses: 26 },
    { quarter: "Q3 2024", factor: "Quality breakfast", audience: 40.9, index: 137.7, responses: 33 },
    { quarter: "Q3 2024", factor: "Size / space", audience: 36.4, index: 156.1, responses: 34 }
  ];

  // Colores para cada factor
  const getFactorColor = (factor) => {
    if (factor === "Comfort") return "#8d1c3e"; // burgundy
    if (factor === "Location") return "#d4a017"; // gold
    if (factor === "Cleanliness / hygiene") return "#1a4d2e"; // dark green
    if (factor === "Cost") return "#e77c81"; // rosa
    if (factor === "Quality breakfast") return "#b99c6b"; // brown
    if (factor === "Loyalty programs") return "#6a513b"; // dark brown
    if (factor === "On-site food / drink options") return "#ca7d60"; // terra cotta
    if (factor === "Size / space") return "#004a96"; // blue
    if (factor === "Brand (e.g. certain hotel chain)") return "#b8a88f"; // beige
    if (factor === "Luxury facilities / services") return "#509e2f"; // green
    if (factor === "Leisure facilities") return "#9370db"; // purple
    if (factor === "Reviews from other people") return "#ff7f50"; // coral
    if (factor === "Extras (e.g. robe, toiletries etc.)") return "#20b2aa"; // light sea green
    
    return '#888888'; // Por defecto
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...accommodationInfluencesData]
      .sort((a, b) => {
        if (viewType === 'audience') {
          return b.audience - a.audience;
        } else {
          return b.index - a.index;
        }
      });
  };

  // Preparar datos para gráfico de tendencias
  const getTrendsData = () => {
    const quarters = [...new Set(historicalData.map(item => item.quarter))];
    const factors = [...new Set(historicalData.map(item => item.factor))];
    // Usar todos los factores en lugar de solo los top 5
    const topFactors = getSortedData().slice(0, 6).map(item => item.factor);
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      factors.forEach(factor => {
        if (topFactors.includes(factor)) {
          const dataForFactor = historicalData.find(item => 
            item.quarter === quarter && item.factor === factor
          );
          if (dataForFactor) {
            quarterData[factor] = viewType === 'audience' 
              ? dataForFactor.audience 
              : dataForFactor.index;
          }
        }
      });
      return quarterData;
    });
  };

  // Gráfico de barras para los datos actuales
  const renderBarChart = () => {
    const data = getSortedData();
    
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 180, bottom: 5 }}
          barGap={6}
          barSize={24}
        >
          <XAxis 
            type="number" 
            domain={[0, Math.max(70, Math.ceil(Math.max(...data.map(item => item.audience)) / 10) * 10)]} 
            axisLine={false}
            tickLine={false}
            tickCount={5}
            style={{ fontSize: '12px', fill: '#666' }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            dataKey="factor" 
            type="category" 
            width={180}
            tickLine={false}
            axisLine={false}
            style={{ fontSize: '12px', fill: '#333', fontWeight: 500 }}
          />
          <Tooltip 
            formatter={(value, name, props) => {
              const item = props.payload;
              return [
                <div>
                  <p><strong>Factor:</strong> {item.factor}</p>
                  <p><strong>Audience:</strong> {item.audience.toFixed(1)}%</p>
                  <p><strong>Index:</strong> {item.index.toFixed(1)}</p>
                  <p><strong>Responses:</strong> {item.responses}</p>
                </div>
              ];
            }}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: '#b8a88f',
              borderRadius: '4px'
            }}
          />
          <Bar 
            dataKey={viewType === 'audience' ? 'audience' : 'index'} 
            name={viewType === 'audience' ? 'Audience %' : 'Index'} 
            radius={[4, 4, 4, 4]}
            barSize={26}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getFactorColor(entry.factor)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Gráfico de líneas para tendencias
  const renderLineChart = () => {
    const data = getTrendsData();
    const topFactors = getSortedData().slice(0, 6).map(item => item.factor);
    
    // Calcular los valores mínimos y máximos para establecer el dominio del eje Y
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    data.forEach(entry => {
      topFactors.forEach(factor => {
        if (entry[factor] !== undefined) {
          minValue = Math.min(minValue, entry[factor]);
          maxValue = Math.max(maxValue, entry[factor]);
        }
      });
    });
    
    // Ajustar el dominio para que sea 5% menor que el mínimo y 5% mayor que el máximo
    const domainMin = Math.max(0, minValue - (minValue * 0.05));
    const domainMax = maxValue + (maxValue * 0.05);
    
    return (
      <ResponsiveContainer width="100%" height={550}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <XAxis 
            dataKey="quarter" 
            angle={-45} 
            textAnchor="end" 
            height={70}
            style={{ fontSize: '12px' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            domain={[domainMin, domainMax]}
            axisLine={false}
            tickLine={false}
            style={{ fontSize: '12px', fill: '#666' }}
            tickFormatter={(value) => `${value.toFixed(0)}%`}
          />
          <Tooltip 
            formatter={(value, name, props) => {
              return [
                <div>
                  <p><strong>Factor:</strong> {name}</p>
                  <p><strong>{viewType === 'audience' ? 'Audience' : 'Index'}:</strong> {value.toFixed(1)}{viewType === 'audience' ? '%' : ''}</p>
                  <p><strong>Quarter:</strong> {props.payload.quarter}</p>
                </div>
              ];
            }}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: '#b8a88f',
              borderRadius: '4px'
            }}
          />
          <Legend 
            wrapperStyle={{ 
              paddingTop: 20,
              paddingBottom: 10
            }}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={10}
            margin={{ top: 10, left: 0, right: 0, bottom: 0 }}
          />
          {topFactors.map((factor) => (
            <Line
              key={factor}
              type="monotone"
              dataKey={factor}
              stroke={getFactorColor(factor)}
              strokeWidth={2}
              dot={{ r: 4, fill: getFactorColor(factor) }}
              activeDot={{ r: 6, fill: getFactorColor(factor) }}
              name={factor}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  const onClickMetric = (type) => {
    const newView = type;
    if (newView !== chartView) {
      setChartView(newView);
    }
  };

  const renderViewOptions = () => {
    return (
      <div className="flex items-center mt-1">
        <div className="mr-5 flex items-center">
          <span className="text-sm text-gray-600 mr-3">View:</span>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-3 py-2 text-xs font-medium ${
                chartView === 'current'
                  ? 'text-white bg-[#8d1c3e]'
                  : 'text-gray-700 bg-white hover:bg-gray-50'
              } border border-gray-200 rounded-l-lg focus:z-10 focus:ring-2 focus:ring-[#8d1c3e] focus:text-[#8d1c3e]`}
              onClick={() => onClickMetric('current')}
            >
              Current
            </button>
            <button
              type="button"
              className={`px-3 py-2 text-xs font-medium ${
                chartView === 'trends'
                  ? 'text-white bg-[#8d1c3e]'
                  : 'text-gray-700 bg-white hover:bg-gray-50'
              } border-t border-b border-r border-gray-200 rounded-r-lg focus:z-10 focus:ring-2 focus:ring-[#8d1c3e] focus:text-[#8d1c3e]`}
              onClick={() => onClickMetric('trends')}
            >
              Trends
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Renderizar los controles de visualización
  const renderControls = () => {
    return (
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <h5 className="text-base font-semibold text-gray-800 mr-4">Accommodation Influences</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        Comfort, cleanliness, and location consistently rank as the most influential factors when choosing accommodations. Cost, quality breakfast, and reviews from other guests also play key roles in decision-making. While amenities like leisure and luxury facilities, loyalty programs, and food options matter to a more specific segment, their importance is steadily growing, reflecting broader expectations for well-rounded guest experiences.
      </p>
      
      {/* Controles de visualización */}
      {renderControls()}
      
      {/* Visualización principal */}
      <div className="mb-8">
        {chartView === 'current' && renderBarChart()}
        {chartView === 'trends' && renderLineChart()}
      </div>
    </>
  );
};

export default AccommodationInfluences; 
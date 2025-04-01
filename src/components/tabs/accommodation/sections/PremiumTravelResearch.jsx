import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, Cell
} from 'recharts';

const PremiumTravelResearch = () => {
  const viewType = 'audience';
  const [chartView, setChartView] = useState('current');
  
  const researchFactorsData = [
    { factor: "Flight departure / arrival times", audience: 63.4, index: 207.8, responses: 54, quarter: "Q3 2024" },
    { factor: "Cost of tickets", audience: 61.2, index: 191.6, responses: 53, quarter: "Q3 2024" },
    { factor: "Ability to take direct flights", audience: 59.6, index: 201.9, responses: 51, quarter: "Q3 2024" },
    { factor: "On-board comfort", audience: 42.4, index: 153.2, responses: 38, quarter: "Q3 2024" },
    { factor: "No hidden fees", audience: 40.2, index: 196.5, responses: 38, quarter: "Q3 2024" },
    { factor: "Previous experience with airline", audience: 36.9, index: 166.7, responses: 33, quarter: "Q3 2024" },
    { factor: "Availability of tickets", audience: 27.9, index: 124.6, responses: 26, quarter: "Q3 2024" },
    { factor: "Ability to use air miles / promotions", audience: 31.4, index: 196.6, responses: 25, quarter: "Q3 2024" },
    { factor: "On-board drinks / food", audience: 23.5, index: 128.9, responses: 23, quarter: "Q3 2024" },
    { factor: "Airline loyalty scheme", audience: 17.0, index: 213.5, responses: 13, quarter: "Q3 2024" }
  ];

  const historicalData = [
    // Q1 2023
    { quarter: "Q1 2023", factor: "Ability to take direct flights", audience: 58.7, index: 243.7, responses: 88 },
    { quarter: "Q1 2023", factor: "Ability to use air miles / promotions", audience: 35.6, index: 252.6, responses: 53 },
    { quarter: "Q1 2023", factor: "Airline loyalty scheme", audience: 31.1, index: 211.3, responses: 46 },
    { quarter: "Q1 2023", factor: "Availability of tickets", audience: 46.7, index: 240.1, responses: 68 },
    { quarter: "Q1 2023", factor: "Cost of tickets", audience: 64.2, index: 224.6, responses: 97 },
    { quarter: "Q1 2023", factor: "Flight departure / arrival times", audience: 66.9, index: 252.0, responses: 100 },
    { quarter: "Q1 2023", factor: "No hidden fees", audience: 40.1, index: 217.4, responses: 63 },
    { quarter: "Q1 2023", factor: "On-board comfort", audience: 50.2, index: 212.9, responses: 71 },
    { quarter: "Q1 2023", factor: "On-board drinks / food", audience: 23.7, index: 145.5, responses: 35 },
    { quarter: "Q1 2023", factor: "Previous experience with airline", audience: 39.5, index: 201.0, responses: 60 },
    
    // Q3 2023
    { quarter: "Q3 2023", factor: "Ability to take direct flights", audience: 59.8, index: 229.3, responses: 80 },
    { quarter: "Q3 2023", factor: "Ability to use air miles / promotions", audience: 37.6, index: 281.1, responses: 52 },
    { quarter: "Q3 2023", factor: "Airline loyalty scheme", audience: 31.3, index: 214.8, responses: 42 },
    { quarter: "Q3 2023", factor: "Availability of tickets", audience: 44.5, index: 227.2, responses: 56 },
    { quarter: "Q3 2023", factor: "Cost of tickets", audience: 60.9, index: 214.8, responses: 80 },
    { quarter: "Q3 2023", factor: "Flight departure / arrival times", audience: 69.5, index: 254.9, responses: 89 },
    { quarter: "Q3 2023", factor: "No hidden fees", audience: 38.7, index: 213.6, responses: 51 },
    { quarter: "Q3 2023", factor: "On-board comfort", audience: 51.2, index: 214.8, responses: 66 },
    { quarter: "Q3 2023", factor: "On-board drinks / food", audience: 23.6, index: 147.0, responses: 32 },
    { quarter: "Q3 2023", factor: "Previous experience with airline", audience: 46.2, index: 233.2, responses: 62 },
    
    // Q1 2024
    { quarter: "Q1 2024", factor: "Ability to take direct flights", audience: 57.4, index: 199.3, responses: 80 },
    { quarter: "Q1 2024", factor: "Ability to use air miles / promotions", audience: 33.4, index: 197.8, responses: 51 },
    { quarter: "Q1 2024", factor: "Airline loyalty scheme", audience: 27.7, index: 330.9, responses: 40 },
    { quarter: "Q1 2024", factor: "Availability of tickets", audience: 37.9, index: 160.1, responses: 53 },
    { quarter: "Q1 2024", factor: "Cost of tickets", audience: 54.9, index: 169.1, responses: 78 },
    { quarter: "Q1 2024", factor: "Flight departure / arrival times", audience: 57.5, index: 195.1, responses: 82 },
    { quarter: "Q1 2024", factor: "No hidden fees", audience: 41.9, index: 193.9, responses: 61 },
    { quarter: "Q1 2024", factor: "On-board comfort", audience: 53.8, index: 200.2, responses: 75 },
    { quarter: "Q1 2024", factor: "On-board drinks / food", audience: 31.3, index: 164.5, responses: 43 },
    { quarter: "Q1 2024", factor: "Previous experience with airline", audience: 35.4, index: 157.7, responses: 50 },
    
    // Q3 2024
    { quarter: "Q3 2024", factor: "Flight departure / arrival times", audience: 63.4, index: 207.8, responses: 54 },
    { quarter: "Q3 2024", factor: "Cost of tickets", audience: 61.2, index: 191.6, responses: 53 },
    { quarter: "Q3 2024", factor: "Ability to take direct flights", audience: 59.6, index: 201.9, responses: 51 },
    { quarter: "Q3 2024", factor: "On-board comfort", audience: 42.4, index: 153.2, responses: 38 },
    { quarter: "Q3 2024", factor: "No hidden fees", audience: 40.2, index: 196.5, responses: 38 },
    { quarter: "Q3 2024", factor: "Previous experience with airline", audience: 36.9, index: 166.7, responses: 33 },
    { quarter: "Q3 2024", factor: "Availability of tickets", audience: 27.9, index: 124.6, responses: 26 },
    { quarter: "Q3 2024", factor: "Ability to use air miles / promotions", audience: 31.4, index: 196.6, responses: 25 },
    { quarter: "Q3 2024", factor: "On-board drinks / food", audience: 23.5, index: 128.9, responses: 23 },
    { quarter: "Q3 2024", factor: "Airline loyalty scheme", audience: 17.0, index: 213.5, responses: 13 }
  ];

  // Colores para cada factor
  const getFactorColor = (factor) => {
    if (factor === "Flight departure / arrival times") return "#8d1c3e"; // burgundy
    if (factor === "Cost of tickets") return "#d4a017"; // gold
    if (factor === "Ability to take direct flights") return "#b8a88f"; // beige
    if (factor === "On-board comfort") return "#1a4d2e"; // dark green
    if (factor === "No hidden fees") return "#e77c81"; // rosa
    if (factor === "Previous experience with airline") return "#b99c6b"; // brown
    if (factor === "Availability of tickets") return "#6a513b"; // dark brown
    if (factor === "Ability to use air miles / promotions") return "#ca7d60"; // terra cotta
    if (factor === "On-board drinks / food") return "#004a96"; // blue
    if (factor === "Airline loyalty scheme") return "#509e2f"; // green
    
    return '#888888'; // Por defecto
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...researchFactorsData]
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
    const allFactors = [...new Set(researchFactorsData.map(item => item.factor))];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      factors.forEach(factor => {
        if (allFactors.includes(factor)) {
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
          <h5 className="text-base font-semibold text-gray-800 mr-4">Research Factors Importance</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        Flight decisions are primarily influenced by practical considerations such as departure and arrival times, ticket cost, and the ability to take direct flights. On-board comfort and availability of tickets also play a significant role, followed by prior experience with airlines and the presence of hidden fees. While loyalty schemes, air miles, and in-flight services like food and drinks matter to a smaller segment, they still contribute meaningfully to overall traveler preferences.
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

export default PremiumTravelResearch; 
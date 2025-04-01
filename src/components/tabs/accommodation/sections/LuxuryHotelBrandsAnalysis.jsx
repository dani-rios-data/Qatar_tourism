import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, Cell
} from 'recharts';

const LuxuryHotelBrandsAnalysis = () => {
  const viewType = 'audience';
  const [chartView, setChartView] = useState('current');
  
  const luxuryHotelsData = [
    { brand: "Four Seasons", audience: 13.5, index: 357.4, responses: 12, quarter: "Q3 2024" },
    { brand: "Hyatt", audience: 19.5, index: 390.8, responses: 17, quarter: "Q3 2024" },
    { brand: "Ritz-Carlton", audience: 19.5, index: 682.6, responses: 16, quarter: "Q3 2024" },
    { brand: "Mandarin Oriental", audience: 9.4, index: 408.0, responses: 9, quarter: "Q3 2024" },
    { brand: "The Peninsula Hotel", audience: 7.8, index: 272.3, responses: 6, quarter: "Q3 2024" },
    { brand: "St Regis Hotel", audience: 6.9, index: 337.0, responses: 5, quarter: "Q3 2024" },
    { brand: "Waldorf Astoria", audience: 6.9, index: 467.3, responses: 6, quarter: "Q3 2024" },
    { brand: "Fairmont", audience: 4.4, index: 283.1, responses: 5, quarter: "Q3 2024" },
    { brand: "Auberge Resorts", audience: 3.7, index: 292.2, responses: 3, quarter: "Q3 2024" }
  ];

  const historicalData = [
    // Q1 2023
    { quarter: "Q1 2023", brand: "Four Seasons", audience: 12.8, index: 407.2, responses: 20 },
    { quarter: "Q1 2023", brand: "Hyatt", audience: 20.5, index: 533.8, responses: 30 },
    { quarter: "Q1 2023", brand: "Mandarin Oriental", audience: 7.4, index: 383.8, responses: 11 },
    { quarter: "Q1 2023", brand: "Ritz-Carlton", audience: 13.3, index: 496.1, responses: 20 },
    { quarter: "Q1 2023", brand: "Shangri La", audience: 4.2, index: 146.5, responses: 5 },
    { quarter: "Q1 2023", brand: "St Regis Hotel", audience: 6.6, index: 331.8, responses: 9 },
    { quarter: "Q1 2023", brand: "Waldorf Astoria", audience: 6.2, index: 319.8, responses: 9 },
    
    // Q3 2023
    { quarter: "Q3 2023", brand: "Fairmont", audience: 11.9, index: 836.8, responses: 17 },
    { quarter: "Q3 2023", brand: "Four Seasons", audience: 19.1, index: 590.9, responses: 25 },
    { quarter: "Q3 2023", brand: "Hyatt", audience: 28.8, index: 704.6, responses: 39 },
    { quarter: "Q3 2023", brand: "Mandarin Oriental", audience: 7.0, index: 339.9, responses: 9 },
    { quarter: "Q3 2023", brand: "Ritz-Carlton", audience: 16.7, index: 630.2, responses: 22 },
    { quarter: "Q3 2023", brand: "St Regis Hotel", audience: 11.6, index: 739.7, responses: 15 },
    { quarter: "Q3 2023", brand: "The Peninsula Hotel", audience: 3.8, index: 168.5, responses: 5 },
    { quarter: "Q3 2023", brand: "Waldorf Astoria", audience: 8.2, index: 554.3, responses: 12 },
    { quarter: "Q3 2023", brand: "None of these", audience: 5.9, index: 176.5, responses: 6 },
    
    // Q1 2024
    { quarter: "Q1 2024", brand: "Auberge Resorts", audience: 4.9, index: 438.6, responses: 6 },
    { quarter: "Q1 2024", brand: "Fairmont", audience: 12.0, index: 695.8, responses: 16 },
    { quarter: "Q1 2024", brand: "Four Seasons", audience: 20.9, index: 538.1, responses: 29 },
    { quarter: "Q1 2024", brand: "Hyatt", audience: 24.7, index: 503.1, responses: 36 },
    { quarter: "Q1 2024", brand: "Mandarin Oriental", audience: 8.3, index: 333.1, responses: 12 },
    { quarter: "Q1 2024", brand: "Marina Bay Sands", audience: 2.9, index: 153.5, responses: 4 },
    { quarter: "Q1 2024", brand: "Ritz-Carlton", audience: 22.4, index: 817.0, responses: 32 },
    { quarter: "Q1 2024", brand: "Six Senses Hotel", audience: 2.5, index: 126.2, responses: 3 },
    { quarter: "Q1 2024", brand: "St Regis Hotel", audience: 10.6, index: 557.8, responses: 16 },
    { quarter: "Q1 2024", brand: "Waldorf Astoria", audience: 13.6, index: 735.4, responses: 17 },
    { quarter: "Q1 2024", brand: "None of these", audience: 4.5, index: 128.1, responses: 4 },
    
    // Q3 2024
    { quarter: "Q3 2024", brand: "Four Seasons", audience: 13.5, index: 357.4, responses: 12 },
    { quarter: "Q3 2024", brand: "Hyatt", audience: 19.5, index: 390.8, responses: 17 },
    { quarter: "Q3 2024", brand: "Ritz-Carlton", audience: 19.5, index: 682.6, responses: 16 },
    { quarter: "Q3 2024", brand: "Mandarin Oriental", audience: 9.4, index: 408.0, responses: 9 },
    { quarter: "Q3 2024", brand: "The Peninsula Hotel", audience: 7.8, index: 272.3, responses: 6 },
    { quarter: "Q3 2024", brand: "St Regis Hotel", audience: 6.9, index: 337.0, responses: 5 },
    { quarter: "Q3 2024", brand: "Waldorf Astoria", audience: 6.9, index: 467.3, responses: 6 },
    { quarter: "Q3 2024", brand: "Fairmont", audience: 4.4, index: 283.1, responses: 5 },
    { quarter: "Q3 2024", brand: "Auberge Resorts", audience: 3.7, index: 292.2, responses: 3 }
  ];

  // Colores para cada marca de hotel de lujo
  const getBrandColor = (brand) => {
    if (brand === "Four Seasons") return "#8d1c3e"; // burgundy
    if (brand === "Hyatt") return "#d4a017"; // gold
    if (brand === "Ritz-Carlton") return "#b8a88f"; // beige
    if (brand === "Mandarin Oriental") return "#1a4d2e"; // dark green
    if (brand === "The Peninsula Hotel") return "#e77c81"; // rosa
    if (brand === "St Regis Hotel") return "#b99c6b"; // brown
    if (brand === "Waldorf Astoria") return "#6a513b"; // dark brown
    if (brand === "Fairmont") return "#ca7d60"; // terra cotta
    if (brand === "Auberge Resorts") return "#004a96"; // blue
    if (brand === "Six Senses Hotel") return "#509e2f"; // green
    if (brand === "Marina Bay Sands") return "#7b6fac"; // purple
    if (brand === "Shangri La") return "#5d1d41"; // burgundy dark
    
    return '#888888'; // Por defecto
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...luxuryHotelsData]
      .filter(item => item.brand !== "None of these")
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
    const brands = [...new Set(historicalData.map(item => item.brand))];
    // Usar todas las marcas presentes en luxuryHotelsData en lugar de solo las top 5
    const allActiveBrands = [...new Set(luxuryHotelsData.map(item => item.brand))];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      brands.forEach(brand => {
        if (allActiveBrands.includes(brand) && brand !== "None of these") {
          const dataForBrand = historicalData.find(item => 
            item.quarter === quarter && item.brand === brand
          );
          if (dataForBrand) {
            quarterData[brand] = viewType === 'audience' 
              ? dataForBrand.audience 
              : dataForBrand.index;
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
          margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
          barGap={6}
          barSize={24}
        >
          <XAxis 
            type="number" 
            domain={[0, Math.max(30, Math.ceil(Math.max(...data.map(item => item.audience)) / 10) * 10)]} 
            axisLine={false}
            tickLine={false}
            tickCount={5}
            style={{ fontSize: '12px', fill: '#666' }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            dataKey="brand" 
            type="category" 
            width={150}
            tickLine={false}
            axisLine={false}
            style={{ fontSize: '12px', fill: '#333', fontWeight: 500 }}
          />
          <Tooltip 
            formatter={(value, name, props) => {
              const item = props.payload;
              return [
                <div>
                  <p><strong>Brand:</strong> {item.brand}</p>
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
              <Cell key={`cell-${index}`} fill={getBrandColor(entry.brand)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Gráfico de líneas para tendencias
  const renderLineChart = () => {
    const data = getTrendsData();
    const activeBrands = [...new Set(luxuryHotelsData.map(item => item.brand))];
    
    // Calcular los valores mínimos y máximos para establecer el dominio del eje Y
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    data.forEach(entry => {
      activeBrands.forEach(brand => {
        if (entry[brand] !== undefined) {
          minValue = Math.min(minValue, entry[brand]);
          maxValue = Math.max(maxValue, entry[brand]);
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
                  <p><strong>Brand:</strong> {name}</p>
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
          {activeBrands.map((brand) => (
            <Line
              key={brand}
              type="monotone"
              dataKey={brand}
              stroke={getBrandColor(brand)}
              strokeWidth={2}
              dot={{ r: 4, fill: getBrandColor(brand) }}
              activeDot={{ r: 6, fill: getBrandColor(brand) }}
              name={brand}
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
          <h5 className="text-base font-semibold text-gray-800 mr-4">Luxury Brand Popularity</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        Hyatt, Four Seasons, and Ritz-Carlton consistently lead in consumer preference among luxury hotel brands, with strong appeal and recognition across quarters. Fairmont and Waldorf Astoria also maintain a solid presence, especially among discerning travelers. Brands like Mandarin Oriental, St. Regis, and The Peninsula attract niche but loyal audiences, while emerging or exclusive names such as Auberge Resorts and Six Senses add diversity to the luxury hospitality landscape.
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

export default LuxuryHotelBrandsAnalysis; 
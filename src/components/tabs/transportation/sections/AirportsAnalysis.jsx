import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, Cell
} from 'recharts';

const AirportsAnalysis = () => {
  const viewType = 'rating';
  const [chartView, setChartView] = useState('current');
  
  const airportsData = [
    { airport: "Hamad International (DOH)", location: "Doha, Qatar", rating: 8.7, index: 157.4, responses: 23, quarter: "Q3 2024" },
    { airport: "Changi Airport (SIN)", location: "Singapore", rating: 9.2, index: 190.8, responses: 36, quarter: "Q3 2024" },
    { airport: "Incheon International (ICN)", location: "Seoul, Korea", rating: 8.9, index: 182.6, responses: 16, quarter: "Q3 2024" },
    { airport: "Dubai International (DXB)", location: "Dubai, UAE", rating: 8.5, index: 168.0, responses: 14, quarter: "Q3 2024" },
    { airport: "Tokyo Haneda (HND)", location: "Tokyo, Japan", rating: 8.8, index: 172.3, responses: 18, quarter: "Q3 2024" },
    { airport: "Munich Airport (MUC)", location: "Munich, Germany", rating: 8.6, index: 167.0, responses: 31, quarter: "Q3 2024" },
    { airport: "Zurich Airport (ZRH)", location: "Zurich, Switzerland", rating: 8.4, index: 167.3, responses: 27, quarter: "Q3 2024" },
    { airport: "Heathrow Airport (LHR)", location: "London, UK", rating: 7.9, index: 153.1, responses: 34, quarter: "Q3 2024" },
    { airport: "Hong Kong International (HKG)", location: "Hong Kong", rating: 8.3, index: 162.2, responses: 46, quarter: "Q3 2024" }
  ];

  const historicalData = [
    // Q1 2023
    { quarter: "Q1 2023", airport: "Hamad International (DOH)", location: "Doha, Qatar", rating: 8.5, index: 147.2, responses: 20 },
    { quarter: "Q1 2023", airport: "Changi Airport (SIN)", location: "Singapore", rating: 9.1, index: 183.8, responses: 35 },
    { quarter: "Q1 2023", airport: "Incheon International (ICN)", location: "Seoul, Korea", rating: 8.8, index: 173.8, responses: 14 },
    { quarter: "Q1 2023", airport: "Dubai International (DXB)", location: "Dubai, UAE", rating: 8.3, index: 166.1, responses: 12 },
    { quarter: "Q1 2023", airport: "Tokyo Haneda (HND)", location: "Tokyo, Japan", rating: 8.7, index: 176.5, responses: 16 },
    { quarter: "Q1 2023", airport: "Munich Airport (MUC)", location: "Munich, Germany", rating: 8.5, index: 161.8, responses: 33 },
    { quarter: "Q1 2023", airport: "Zurich Airport (ZRH)", location: "Zurich, Switzerland", rating: 8.3, index: 159.8, responses: 29 },
    { quarter: "Q1 2023", airport: "Heathrow Airport (LHR)", location: "London, UK", rating: 7.7, index: 153.8, responses: 37 },
    { quarter: "Q1 2023", airport: "Hong Kong International (HKG)", location: "Hong Kong", rating: 8.2, index: 162.2, responses: 45 },
    
    // Q3 2023
    { quarter: "Q3 2023", airport: "Hamad International (DOH)", location: "Doha, Qatar", rating: 8.6, index: 156.8, responses: 22 },
    { quarter: "Q3 2023", airport: "Changi Airport (SIN)", location: "Singapore", rating: 9.3, index: 190.9, responses: 37 },
    { quarter: "Q3 2023", airport: "Incheon International (ICN)", location: "Seoul, Korea", rating: 8.8, index: 174.6, responses: 16 },
    { quarter: "Q3 2023", airport: "Dubai International (DXB)", location: "Dubai, UAE", rating: 8.4, index: 159.9, responses: 13 },
    { quarter: "Q3 2023", airport: "Tokyo Haneda (HND)", location: "Tokyo, Japan", rating: 8.7, index: 178.5, responses: 19 },
    { quarter: "Q3 2023", airport: "Munich Airport (MUC)", location: "Munich, Germany", rating: 8.5, index: 169.7, responses: 30 },
    { quarter: "Q3 2023", airport: "Zurich Airport (ZRH)", location: "Zurich, Switzerland", rating: 8.3, index: 164.3, responses: 28 },
    { quarter: "Q3 2023", airport: "Heathrow Airport (LHR)", location: "London, UK", rating: 7.8, index: 158.5, responses: 33 },
    { quarter: "Q3 2023", airport: "Hong Kong International (HKG)", location: "Hong Kong", rating: 8.1, index: 166.5, responses: 47 },
    
    // Q1 2024
    { quarter: "Q1 2024", airport: "Hamad International (DOH)", location: "Doha, Qatar", rating: 8.6, index: 148.6, responses: 22 },
    { quarter: "Q1 2024", airport: "Changi Airport (SIN)", location: "Singapore", rating: 9.2, index: 187.8, responses: 36 },
    { quarter: "Q1 2024", airport: "Incheon International (ICN)", location: "Seoul, Korea", rating: 8.9, index: 183.1, responses: 17 },
    { quarter: "Q1 2024", airport: "Dubai International (DXB)", location: "Dubai, UAE", rating: 8.4, index: 163.1, responses: 13 },
    { quarter: "Q1 2024", airport: "Tokyo Haneda (HND)", location: "Tokyo, Japan", rating: 8.7, index: 173.5, responses: 17 },
    { quarter: "Q1 2024", airport: "Munich Airport (MUC)", location: "Munich, Germany", rating: 8.5, index: 167.0, responses: 32 },
    { quarter: "Q1 2024", airport: "Zurich Airport (ZRH)", location: "Zurich, Switzerland", rating: 8.3, index: 165.4, responses: 28 },
    { quarter: "Q1 2024", airport: "Heathrow Airport (LHR)", location: "London, UK", rating: 7.8, index: 157.8, responses: 35 },
    { quarter: "Q1 2024", airport: "Hong Kong International (HKG)", location: "Hong Kong", rating: 8.2, index: 166.2, responses: 45 },
    
    // Q3 2024
    { quarter: "Q3 2024", airport: "Hamad International (DOH)", location: "Doha, Qatar", rating: 8.7, index: 157.4, responses: 23 },
    { quarter: "Q3 2024", airport: "Changi Airport (SIN)", location: "Singapore", rating: 9.2, index: 190.8, responses: 36 },
    { quarter: "Q3 2024", airport: "Incheon International (ICN)", location: "Seoul, Korea", rating: 8.9, index: 182.6, responses: 16 },
    { quarter: "Q3 2024", airport: "Dubai International (DXB)", location: "Dubai, UAE", rating: 8.5, index: 168.0, responses: 14 },
    { quarter: "Q3 2024", airport: "Tokyo Haneda (HND)", location: "Tokyo, Japan", rating: 8.8, index: 172.3, responses: 18 },
    { quarter: "Q3 2024", airport: "Munich Airport (MUC)", location: "Munich, Germany", rating: 8.6, index: 167.0, responses: 31 },
    { quarter: "Q3 2024", airport: "Zurich Airport (ZRH)", location: "Zurich, Switzerland", rating: 8.4, index: 167.3, responses: 27 },
    { quarter: "Q3 2024", airport: "Heathrow Airport (LHR)", location: "London, UK", rating: 7.9, index: 153.1, responses: 34 },
    { quarter: "Q3 2024", airport: "Hong Kong International (HKG)", location: "Hong Kong", rating: 8.3, index: 162.2, responses: 46 }
  ];

  // Colores para cada aeropuerto
  const getAirportColor = (airport) => {
    if (airport === "Hamad International (DOH)") return "#8d1c3e"; // burgundy
    if (airport === "Changi Airport (SIN)") return "#1a4d2e"; // dark green
    if (airport === "Incheon International (ICN)") return "#b8a88f"; // beige
    if (airport === "Dubai International (DXB)") return "#d4a017"; // gold
    if (airport === "Tokyo Haneda (HND)") return "#004a96"; // blue
    if (airport === "Munich Airport (MUC)") return "#e77c81"; // rosa
    if (airport === "Zurich Airport (ZRH)") return "#b99c6b"; // brown
    if (airport === "Heathrow Airport (LHR)") return "#6a513b"; // dark brown
    if (airport === "Hong Kong International (HKG)") return "#ca7d60"; // terra cotta
    
    return '#888888'; // Por defecto
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...airportsData]
      .sort((a, b) => {
        if (viewType === 'rating') {
          return b.rating - a.rating;
        } else {
          return b.index - a.index;
        }
      });
  };

  // Preparar datos para gráfico de tendencias
  const getTrendsData = () => {
    const quarters = [...new Set(historicalData.map(item => item.quarter))];
    const airports = [...new Set(historicalData.map(item => item.airport))];
    // Usar todos los aeropuertos activos en lugar de solo los top 5
    const allActiveAirports = [...new Set(airportsData.map(item => item.airport))];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      airports.forEach(airport => {
        if (allActiveAirports.includes(airport)) {
          const dataForAirport = historicalData.find(item => 
            item.quarter === quarter && item.airport === airport
          );
          if (dataForAirport) {
            quarterData[airport] = viewType === 'rating' 
              ? dataForAirport.rating 
              : dataForAirport.index;
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
            domain={[7, 10]} 
            axisLine={false}
            tickLine={false}
            tickCount={5}
            style={{ fontSize: '12px', fill: '#666' }}
          />
          <YAxis 
            dataKey="airport" 
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
                  <p><strong>Airport:</strong> {item.airport}</p>
                  <p><strong>Location:</strong> {item.location}</p>
                  <p><strong>Rating:</strong> {item.rating.toFixed(1)}</p>
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
            dataKey={viewType === 'rating' ? 'rating' : 'index'} 
            name={viewType === 'rating' ? 'Rating' : 'Index'} 
            radius={[4, 4, 4, 4]}
            barSize={26}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getAirportColor(entry.airport)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Gráfico de líneas para tendencias
  const renderLineChart = () => {
    const data = getTrendsData();
    const activeAirports = [...new Set(airportsData.map(item => item.airport))];
    
    // Calcular los valores mínimos y máximos para establecer el dominio del eje Y
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    data.forEach(entry => {
      activeAirports.forEach(airport => {
        if (entry[airport] !== undefined) {
          minValue = Math.min(minValue, entry[airport]);
          maxValue = Math.max(maxValue, entry[airport]);
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
            tickFormatter={(value) => `${value.toFixed(1)}`}
          />
          <Tooltip 
            formatter={(value, name, props) => {
              return [
                <div>
                  <p><strong>Airport:</strong> {name}</p>
                  <p><strong>{viewType === 'rating' ? 'Rating' : 'Index'}:</strong> {value.toFixed(1)}</p>
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
          {activeAirports.map((airport) => (
            <Line
              key={airport}
              type="monotone"
              dataKey={airport}
              stroke={getAirportColor(airport)}
              strokeWidth={2}
              dot={{ r: 4, fill: getAirportColor(airport) }}
              activeDot={{ r: 6, fill: getAirportColor(airport) }}
              name={airport}
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
          <h5 className="text-base font-semibold text-gray-800 mr-4">International Airport Quality Ratings</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        El Aeropuerto de Changi en Singapur mantiene su posición como líder indiscutible en calidad de servicio y experiencia del viajero, con calificaciones consistentemente superiores a 9 puntos. Incheon y Hamad International lo siguen con puntuaciones excelentes, destacando por sus instalaciones modernas y servicios premium. Aeropuertos en Asia y Medio Oriente dominan las primeras posiciones del ranking, mientras que los principales hubs europeos como Munich y Zurich también reciben reconocimiento por su eficiencia y comodidad.
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

export default AirportsAnalysis; 
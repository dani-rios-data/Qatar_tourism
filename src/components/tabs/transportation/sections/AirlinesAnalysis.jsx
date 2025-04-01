import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, Cell
} from 'recharts';

const AirlinesAnalysis = () => {
  const viewType = 'audience';
  const [chartView, setChartView] = useState('current');
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const airlinesData = [
    { airline: "Air Canada", audience: 27.7, index: 894.6, responses: 24, quarter: "Q3 2024" },
    { airline: "Air France", audience: 25.6, index: 144.9, responses: 24, quarter: "Q3 2024" },
    { airline: "Alaska Airlines", audience: 30.7, index: 1232.9, responses: 24, quarter: "Q3 2024" },
    { airline: "All Nippon Airways", audience: 10.9, index: 181.8, responses: 18, quarter: "Q3 2024" },
    { airline: "American Airlines", audience: 56.3, index: 373.2, responses: 78, quarter: "Q3 2024" },
    { airline: "Asiana Airlines", audience: 8.4, index: 1003.7, responses: 13, quarter: "Q3 2024" },
    { airline: "British Airways", audience: 24.5, index: 177.7, responses: 40, quarter: "Q3 2024" },
    { airline: "Cathay Pacific", audience: 13.4, index: 106, responses: 22, quarter: "Q3 2024" },
    { airline: "Delta", audience: 58.5, index: 473, responses: 88, quarter: "Q3 2024" },
    { airline: "Emirates", audience: 30.2, index: 186.4, responses: 42, quarter: "Q3 2024" },
    { airline: "EVA Air", audience: 9.1, index: 1094.2, responses: 14, quarter: "Q3 2024" },
    { airline: "Hawaiian Airlines", audience: 39.8, index: 1502.2, responses: 34, quarter: "Q3 2024" },
    { airline: "Japan Airlines", audience: 10, index: 160.3, responses: 15, quarter: "Q3 2024" },
    { airline: "JetBlue", audience: 39.4, index: 1246.4, responses: 34, quarter: "Q3 2024" },
    { airline: "KLM", audience: 10.4, index: 147.7, responses: 16, quarter: "Q3 2024" },
    { airline: "Korean Air", audience: 11.5, index: 254.1, responses: 18, quarter: "Q3 2024" },
    { airline: "LATAM", audience: 8.3, index: 905.6, responses: 14, quarter: "Q3 2024" },
    { airline: "Lufthansa", audience: 23.9, index: 195.7, responses: 37, quarter: "Q3 2024" },
    { airline: "Qantas", audience: 17.5, index: 209.4, responses: 27, quarter: "Q3 2024" },
    { airline: "Southwest Airlines", audience: 43.6, index: 1261.8, responses: 65, quarter: "Q3 2024" },
    { airline: "United Airlines", audience: 52.8, index: 412.5, responses: 72, quarter: "Q3 2024" }
  ];

  const historicalData = [
    // Q1 2023
    { quarter: "Q1 2023", airline: "Air Canada", audience: 24.7, index: 889.6, responses: 21 },
    { quarter: "Q1 2023", airline: "Air France", audience: 22.6, index: 141.9, responses: 21 },
    { quarter: "Q1 2023", airline: "Alaska Airlines", audience: 28.7, index: 1220.9, responses: 22 },
    { quarter: "Q1 2023", airline: "All Nippon Airways", audience: 9.9, index: 180.8, responses: 16 },
    { quarter: "Q1 2023", airline: "American Airlines", audience: 54.3, index: 370.2, responses: 76 },
    { quarter: "Q1 2023", airline: "Asiana Airlines", audience: 7.4, index: 998.7, responses: 11 },
    { quarter: "Q1 2023", airline: "British Airways", audience: 23.5, index: 174.7, responses: 38 },
    { quarter: "Q1 2023", airline: "Cathay Pacific", audience: 12.4, index: 104, responses: 20 },
    { quarter: "Q1 2023", airline: "Delta", audience: 56.5, index: 470, responses: 85 },
    { quarter: "Q1 2023", airline: "Emirates", audience: 28.2, index: 184.4, responses: 40 },
    { quarter: "Q1 2023", airline: "EVA Air", audience: 8.1, index: 1090.2, responses: 12 },
    { quarter: "Q1 2023", airline: "Hawaiian Airlines", audience: 37.8, index: 1498.2, responses: 32 },
    { quarter: "Q1 2023", airline: "Japan Airlines", audience: 9.0, index: 158.3, responses: 13 },
    { quarter: "Q1 2023", airline: "JetBlue", audience: 37.4, index: 1242.4, responses: 32 },
    { quarter: "Q1 2023", airline: "KLM", audience: 9.4, index: 145.7, responses: 14 },
    { quarter: "Q1 2023", airline: "Korean Air", audience: 10.5, index: 252.1, responses: 16 },
    { quarter: "Q1 2023", airline: "LATAM", audience: 7.3, index: 902.6, responses: 12 },
    { quarter: "Q1 2023", airline: "Lufthansa", audience: 21.9, index: 193.7, responses: 35 },
    { quarter: "Q1 2023", airline: "Qantas", audience: 16.5, index: 207.4, responses: 25 },
    { quarter: "Q1 2023", airline: "Southwest Airlines", audience: 41.6, index: 1258.8, responses: 63 },
    { quarter: "Q1 2023", airline: "United Airlines", audience: 50.8, index: 409.5, responses: 69 },
    
    // Q3 2023
    { quarter: "Q3 2023", airline: "Air Canada", audience: 25.7, index: 892.6, responses: 22 },
    { quarter: "Q3 2023", airline: "Air France", audience: 23.6, index: 142.9, responses: 22 },
    { quarter: "Q3 2023", airline: "Alaska Airlines", audience: 29.7, index: 1225.9, responses: 23 },
    { quarter: "Q3 2023", airline: "All Nippon Airways", audience: 9.9, index: 180.8, responses: 16 },
    { quarter: "Q3 2023", airline: "American Airlines", audience: 55.3, index: 371.2, responses: 77 },
    { quarter: "Q3 2023", airline: "Asiana Airlines", audience: 7.4, index: 998.7, responses: 11 },
    { quarter: "Q3 2023", airline: "British Airways", audience: 23.5, index: 174.7, responses: 38 },
    { quarter: "Q3 2023", airline: "Cathay Pacific", audience: 12.4, index: 104, responses: 20 },
    { quarter: "Q3 2023", airline: "Delta", audience: 57.5, index: 471, responses: 86 },
    { quarter: "Q3 2023", airline: "Emirates", audience: 29.2, index: 185.4, responses: 41 },
    { quarter: "Q3 2023", airline: "EVA Air", audience: 8.1, index: 1090.2, responses: 12 },
    { quarter: "Q3 2023", airline: "Hawaiian Airlines", audience: 38.8, index: 1499.2, responses: 33 },
    { quarter: "Q3 2023", airline: "Japan Airlines", audience: 9.0, index: 158.3, responses: 13 },
    { quarter: "Q3 2023", airline: "JetBlue", audience: 38.4, index: 1244.4, responses: 33 },
    { quarter: "Q3 2023", airline: "KLM", audience: 9.4, index: 145.7, responses: 14 },
    { quarter: "Q3 2023", airline: "Korean Air", audience: 10.5, index: 252.1, responses: 16 },
    { quarter: "Q3 2023", airline: "LATAM", audience: 7.3, index: 902.6, responses: 12 },
    { quarter: "Q3 2023", airline: "Lufthansa", audience: 22.9, index: 194.7, responses: 36 },
    { quarter: "Q3 2023", airline: "Qantas", audience: 16.5, index: 207.4, responses: 25 },
    { quarter: "Q3 2023", airline: "Southwest Airlines", audience: 42.6, index: 1260.8, responses: 64 },
    { quarter: "Q3 2023", airline: "United Airlines", audience: 51.3, index: 410.5, responses: 70 },
    
    // Q1 2024
    { quarter: "Q1 2024", airline: "Air Canada", audience: 26.7, index: 893.6, responses: 23 },
    { quarter: "Q1 2024", airline: "Air France", audience: 24.6, index: 143.9, responses: 23 },
    { quarter: "Q1 2024", airline: "Alaska Airlines", audience: 29.7, index: 1228.9, responses: 23 },
    { quarter: "Q1 2024", airline: "All Nippon Airways", audience: 10.9, index: 181.8, responses: 17 },
    { quarter: "Q1 2024", airline: "American Airlines", audience: 55.3, index: 372.2, responses: 77 },
    { quarter: "Q1 2024", airline: "Asiana Airlines", audience: 7.4, index: 1000.7, responses: 12 },
    { quarter: "Q1 2024", airline: "British Airways", audience: 24.5, index: 176.7, responses: 39 },
    { quarter: "Q1 2024", airline: "Cathay Pacific", audience: 13.4, index: 105, responses: 21 },
    { quarter: "Q1 2024", airline: "Delta", audience: 57.5, index: 472, responses: 87 },
    { quarter: "Q1 2024", airline: "Emirates", audience: 29.2, index: 185.4, responses: 41 },
    { quarter: "Q1 2024", airline: "EVA Air", audience: 9.1, index: 1092.2, responses: 13 },
    { quarter: "Q1 2024", airline: "Hawaiian Airlines", audience: 38.8, index: 1500.2, responses: 33 },
    { quarter: "Q1 2024", airline: "Japan Airlines", audience: 10.0, index: 159.3, responses: 14 },
    { quarter: "Q1 2024", airline: "JetBlue", audience: 38.4, index: 1245.4, responses: 33 },
    { quarter: "Q1 2024", airline: "KLM", audience: 10.4, index: 146.7, responses: 15 },
    { quarter: "Q1 2024", airline: "Korean Air", audience: 11.5, index: 253.1, responses: 17 },
    { quarter: "Q1 2024", airline: "LATAM", audience: 8.3, index: 903.6, responses: 13 },
    { quarter: "Q1 2024", airline: "Lufthansa", audience: 22.9, index: 194.7, responses: 36 },
    { quarter: "Q1 2024", airline: "Qantas", audience: 17.5, index: 208.4, responses: 26 },
    { quarter: "Q1 2024", airline: "Southwest Airlines", audience: 42.6, index: 1260.8, responses: 64 },
    { quarter: "Q1 2024", airline: "United Airlines", audience: 52.1, index: 411.5, responses: 71 },
    
    // Q3 2024
    { quarter: "Q3 2024", airline: "Air Canada", audience: 27.7, index: 894.6, responses: 24, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Air France", audience: 25.6, index: 144.9, responses: 24, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Alaska Airlines", audience: 30.7, index: 1232.9, responses: 24, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "All Nippon Airways", audience: 10.9, index: 181.8, responses: 18, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "American Airlines", audience: 56.3, index: 373.2, responses: 78, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Asiana Airlines", audience: 8.4, index: 1003.7, responses: 13, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "British Airways", audience: 24.5, index: 177.7, responses: 40, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Cathay Pacific", audience: 13.4, index: 106, responses: 22, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Delta", audience: 58.5, index: 473, responses: 88, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Emirates", audience: 30.2, index: 186.4, responses: 42, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "EVA Air", audience: 9.1, index: 1094.2, responses: 14, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Hawaiian Airlines", audience: 39.8, index: 1502.2, responses: 34, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Japan Airlines", audience: 10, index: 160.3, responses: 15, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "JetBlue", audience: 39.4, index: 1246.4, responses: 34, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "KLM", audience: 10.4, index: 147.7, responses: 16, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Korean Air", audience: 11.5, index: 254.1, responses: 18, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "LATAM", audience: 8.3, index: 905.6, responses: 14, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Lufthansa", audience: 23.9, index: 195.7, responses: 37, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Qantas", audience: 17.5, index: 209.4, responses: 27, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "Southwest Airlines", audience: 43.6, index: 1261.8, responses: 65, quarter: "Q3 2024" },
    { quarter: "Q3 2024", airline: "United Airlines", audience: 52.8, index: 412.5, responses: 72, quarter: "Q3 2024" }
  ];

  // Colores para cada aerolínea
  const getAirlineColor = (airline) => {
    if (airline === "Air Canada") return "#d52b1e"; // red
    if (airline === "Air France") return "#002157"; // navy blue
    if (airline === "Alaska Airlines") return "#01426a"; // blue
    if (airline === "All Nippon Airways") return "#13448f"; // blue
    if (airline === "American Airlines") return "#0078d2"; // light blue
    if (airline === "Asiana Airlines") return "#d60812"; // red
    if (airline === "British Airways") return "#075aaa"; // blue
    if (airline === "Cathay Pacific") return "#006564"; // teal
    if (airline === "Delta") return "#e01a33"; // red
    if (airline === "Emirates") return "#d71a21"; // red
    if (airline === "EVA Air") return "#316e3a"; // green
    if (airline === "Hawaiian Airlines") return "#762432"; // purple/red
    if (airline === "Japan Airlines") return "#be0028"; // red
    if (airline === "JetBlue") return "#0033a0"; // blue
    if (airline === "KLM") return "#00a1de"; // light blue
    if (airline === "Korean Air") return "#00256c"; // dark blue
    if (airline === "LATAM") return "#e9242e"; // red
    if (airline === "Lufthansa") return "#05164d"; // dark blue
    if (airline === "Qantas") return "#ee0000"; // red
    if (airline === "Southwest Airlines") return "#304cb2"; // blue
    if (airline === "United Airlines") return "#002244"; // dark blue
    
    return '#888888'; // Default
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...airlinesData]
      .filter(item => item.airline !== "None of these")
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
    const airlines = [...new Set(historicalData.map(item => item.airline))];
    // Usar todas las aerolíneas activas en lugar de solo top 5
    const allActiveAirlines = [...new Set(airlinesData.map(item => item.airline))];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      airlines.forEach(airline => {
        if (allActiveAirlines.includes(airline) && airline !== "None of these") {
          const dataForAirline = historicalData.find(item => 
            item.quarter === quarter && item.airline === airline
          );
          if (dataForAirline) {
            quarterData[airline] = viewType === 'audience' 
              ? dataForAirline.audience 
              : dataForAirline.index;
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
            domain={[0, Math.max(70, Math.ceil(Math.max(...data.map(item => item.audience)) / 10) * 10)]} 
            axisLine={false}
            tickLine={false}
            tickCount={5}
            style={{ fontSize: '12px', fill: '#666' }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            dataKey="airline" 
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
                  <p><strong>Airline:</strong> {item.airline}</p>
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
              <Cell key={`cell-${index}`} fill={getAirlineColor(entry.airline)} />
            ))}
            {data.map((entry, index) => {
              const barWidth = entry.audience;
              return (
                <text
                  key={`text-${index}`}
                  x={barWidth / 2}
                  y={index * 28 + 13}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize={11}
                  fontWeight={600}
                >
                  {entry.airline} ({entry.audience.toFixed(1)}%)
                </text>
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Inicializa las aerolíneas seleccionadas al cargar el componente
  useEffect(() => {
    // Seleccionar las 5 principales aerolíneas por defecto
    const top5Airlines = getSortedData().slice(0, 5).map(item => item.airline);
    setSelectedAirlines(top5Airlines);
  }, []);

  // Gráfico de líneas para tendencias
  const renderLineChart = () => {
    const data = getTrendsData();
    // Usar solo las aerolíneas seleccionadas en lugar de todas
    const activeAirlines = selectedAirlines.length > 0 
      ? selectedAirlines 
      : [...new Set(airlinesData.map(item => item.airline))].slice(0, 5);
    
    // Calcular los valores mínimos y máximos para establecer el dominio del eje Y
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    data.forEach(entry => {
      activeAirlines.forEach(airline => {
        if (entry[airline] !== undefined) {
          minValue = Math.min(minValue, entry[airline]);
          maxValue = Math.max(maxValue, entry[airline]);
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
                  <p><strong>Airline:</strong> {name}</p>
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
          {activeAirlines.map((airline) => (
            <Line
              key={airline}
              type="monotone"
              dataKey={airline}
              stroke={getAirlineColor(airline)}
              strokeWidth={2}
              dot={{ r: 4, fill: getAirlineColor(airline) }}
              activeDot={{ r: 6, fill: getAirlineColor(airline) }}
              name={airline}
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

  // Manejo de selección de aerolíneas
  const handleAirlineSelection = (airline) => {
    setSelectedAirlines(prev => {
      if (prev.includes(airline)) {
        return prev.filter(a => a !== airline);
      } else {
        return [...prev, airline];
      }
    });
  };

  // Seleccionar todas las aerolíneas
  const selectAllAirlines = () => {
    setSelectedAirlines([...new Set(airlinesData.map(item => item.airline))]);
  };

  // Deseleccionar todas las aerolíneas
  const clearAllAirlines = () => {
    setSelectedAirlines([]);
  };

  // Renderizar el selector de aerolíneas
  const renderAirlineSelector = () => {
    const allAirlines = [...new Set(airlinesData.map(item => item.airline))].sort();
    
    return (
      <div className="relative mb-6">
        <div 
          className="flex items-center justify-between border border-gray-300 rounded-lg p-3 cursor-pointer bg-white shadow-sm"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-sm font-medium text-gray-700">
            {selectedAirlines.length} airlines selected
          </span>
          <svg 
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        {dropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-3 flex">
              <button 
                className="text-[#8d1c3e] text-sm font-medium hover:underline mr-4" 
                onClick={() => {
                  selectAllAirlines();
                  setDropdownOpen(false);
                }}
              >
                Select All
              </button>
              <button 
                className="text-[#8d1c3e] text-sm font-medium hover:underline" 
                onClick={() => {
                  clearAllAirlines();
                  setDropdownOpen(false);
                }}
              >
                Clear All
              </button>
            </div>
            
            <div className="p-3 grid grid-cols-1 gap-2">
              {allAirlines.map(airline => (
                <div key={airline} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`airline-${airline}`}
                    checked={selectedAirlines.includes(airline)}
                    onChange={() => handleAirlineSelection(airline)}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-[#8d1c3e] focus:ring-[#8d1c3e]"
                  />
                  <label 
                    htmlFor={`airline-${airline}`}
                    className="text-sm text-gray-700 cursor-pointer flex items-center"
                  >
                    <span 
                      className="w-4 h-4 mr-2 rounded-full inline-block" 
                      style={{ backgroundColor: getAirlineColor(airline) }}
                    ></span>
                    {airline}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Renderizar los controles de visualización
  const renderControls = () => {
    return (
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <h5 className="text-base font-semibold text-gray-800 mr-4">Airlines Considered by Premium Travelers</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        Delta, United, American, and Southwest remain the most frequently considered airlines, reflecting their strong market presence and broad coverage. JetBlue and Alaska Airlines also maintain high consideration rates, particularly in the U.S., while Air Canada, British Airways, Lufthansa, and Emirates lead among international carriers. Regional favorites like Japan Airlines, EVA Air, and Singapore Airlines show consistent niche strength, with loyalty evident across markets and quarters.
      </p>
      
      {/* Controles de visualización */}
      {renderControls()}

      {/* Selector de aerolíneas para el gráfico de tendencias */}
      {chartView === 'trends' && (
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Airline Trends — 2023-2024
          </div>
          {renderAirlineSelector()}
        </div>
      )}
      
      {/* Visualización principal */}
      <div className="mb-8">
        {chartView === 'current' && renderBarChart()}
        {chartView === 'trends' && renderLineChart()}
      </div>
    </>
  );
};

export default AirlinesAnalysis; 
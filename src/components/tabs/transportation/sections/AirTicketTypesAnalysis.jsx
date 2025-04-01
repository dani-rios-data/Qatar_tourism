import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, Cell
} from 'recharts';

const AirTicketTypesAnalysis = () => {
  const viewType = 'audience';
  const [chartView, setChartView] = useState('current');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const ticketTypesData = [
    { ticketType: "Business Class", audience: 12.3, index: 164.1, responses: 10, quarter: "Q3 2024" },
    { ticketType: "First Class", audience: 14.8, index: 255.5, responses: 13, quarter: "Q3 2024" },
    { ticketType: "Premium Economy", audience: 14.8, index: 171.2, responses: 13, quarter: "Q3 2024" }
  ];

  const historicalData = [
    // Q1 2023
    { quarter: "Q1 2023", ticketType: "Business Class", audience: 11.5, index: 134.2, responses: 18 },
    { quarter: "Q1 2023", ticketType: "First Class", audience: 11.4, index: 170.9, responses: 16 },
    { quarter: "Q1 2023", ticketType: "Premium Economy", audience: 21.9, index: 238, responses: 33 },
    
    // Q3 2023
    { quarter: "Q3 2023", ticketType: "Business Class", audience: 14.4, index: 235.2, responses: 21 },
    { quarter: "Q3 2023", ticketType: "First Class", audience: 7.9, index: 155.6, responses: 11 },
    { quarter: "Q3 2023", ticketType: "Premium Economy", audience: 23.9, index: 306.5, responses: 30 },
    
    // Q1 2024
    { quarter: "Q1 2024", ticketType: "Business Class", audience: 16.8, index: 205.9, responses: 25 },
    { quarter: "Q1 2024", ticketType: "First Class", audience: 13.4, index: 208.6, responses: 19 },
    { quarter: "Q1 2024", ticketType: "Premium Economy", audience: 22.7, index: 238.4, responses: 30 },
    
    // Q3 2024
    { quarter: "Q3 2024", ticketType: "Business Class", audience: 12.3, index: 164.1, responses: 10 },
    { quarter: "Q3 2024", ticketType: "First Class", audience: 14.8, index: 255.5, responses: 13 },
    { quarter: "Q3 2024", ticketType: "Premium Economy", audience: 14.8, index: 171.2, responses: 13 }
  ];

  // Colores para cada tipo de billete
  const getTicketTypeColor = (ticketType) => {
    if (ticketType === "Business Class") return "#0078d2"; // blue
    if (ticketType === "First Class") return "#8d1c3e"; // burgundy
    if (ticketType === "Premium Economy") return "#d4a017"; // gold
    
    return '#888888'; // Default
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...ticketTypesData]
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
    const ticketTypes = [...new Set(historicalData.map(item => item.ticketType))];
    // Usar todos los tipos de billetes activos
    const allActiveTypes = [...new Set(ticketTypesData.map(item => item.ticketType))];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      ticketTypes.forEach(ticketType => {
        if (allActiveTypes.includes(ticketType)) {
          const dataForType = historicalData.find(item => 
            item.quarter === quarter && item.ticketType === ticketType
          );
          if (dataForType) {
            quarterData[ticketType] = viewType === 'audience' 
              ? dataForType.audience 
              : dataForType.index;
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
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 150, bottom: 5 }}
          barGap={6}
          barSize={24}
        >
          <XAxis 
            type="number" 
            domain={[0, Math.max(25, Math.ceil(Math.max(...data.map(item => item.audience)) / 5) * 5)]} 
            axisLine={false}
            tickLine={false}
            tickCount={5}
            style={{ fontSize: '12px', fill: '#666' }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            dataKey="ticketType" 
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
                  <p><strong>Ticket Type:</strong> {item.ticketType}</p>
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
              <Cell key={`cell-${index}`} fill={getTicketTypeColor(entry.ticketType)} />
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
                  {entry.ticketType} ({entry.audience.toFixed(1)}%)
                </text>
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Inicializa los tipos de billetes seleccionados al cargar el componente
  useEffect(() => {
    // Seleccionar todos los tipos de billetes por defecto
    const allTypes = [...new Set(ticketTypesData.map(item => item.ticketType))];
    setSelectedTypes(allTypes);
  }, []);

  // Gráfico de líneas para tendencias
  const renderLineChart = () => {
    const data = getTrendsData();
    // Usar solo los tipos seleccionados
    const activeTypes = selectedTypes.length > 0 
      ? selectedTypes 
      : [...new Set(ticketTypesData.map(item => item.ticketType))];
    
    // Calcular los valores mínimos y máximos para establecer el dominio del eje Y
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    data.forEach(entry => {
      activeTypes.forEach(ticketType => {
        if (entry[ticketType] !== undefined) {
          minValue = Math.min(minValue, entry[ticketType]);
          maxValue = Math.max(maxValue, entry[ticketType]);
        }
      });
    });
    
    // Ajustar el dominio para que sea 5% menor que el mínimo y 5% mayor que el máximo
    const domainMin = Math.max(0, minValue - (minValue * 0.05));
    const domainMax = maxValue + (maxValue * 0.05);
    
    return (
      <ResponsiveContainer width="100%" height={350}>
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
                  <p><strong>Ticket Type:</strong> {name}</p>
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
          {activeTypes.map((ticketType) => (
            <Line
              key={ticketType}
              type="monotone"
              dataKey={ticketType}
              stroke={getTicketTypeColor(ticketType)}
              strokeWidth={2}
              dot={{ r: 4, fill: getTicketTypeColor(ticketType) }}
              activeDot={{ r: 6, fill: getTicketTypeColor(ticketType) }}
              name={ticketType}
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

  // Manejo de selección de tipos de billetes
  const handleTicketTypeSelection = (ticketType) => {
    setSelectedTypes(prev => {
      if (prev.includes(ticketType)) {
        return prev.filter(t => t !== ticketType);
      } else {
        return [...prev, ticketType];
      }
    });
  };

  // Seleccionar todos los tipos de billetes
  const selectAllTicketTypes = () => {
    setSelectedTypes([...new Set(ticketTypesData.map(item => item.ticketType))]);
  };

  // Deseleccionar todos los tipos de billetes
  const clearAllTicketTypes = () => {
    setSelectedTypes([]);
  };

  // Renderizar el selector de tipos de billetes
  const renderTicketTypeSelector = () => {
    const allTicketTypes = [...new Set(ticketTypesData.map(item => item.ticketType))];
    
    return (
      <div className="relative mb-6">
        <div 
          className="flex items-center justify-between border border-gray-300 rounded-lg p-3 cursor-pointer bg-white shadow-sm"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="text-sm font-medium text-gray-700">
            {selectedTypes.length} ticket types selected
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
                  selectAllTicketTypes();
                  setDropdownOpen(false);
                }}
              >
                Select All
              </button>
              <button 
                className="text-[#8d1c3e] text-sm font-medium hover:underline" 
                onClick={() => {
                  clearAllTicketTypes();
                  setDropdownOpen(false);
                }}
              >
                Clear All
              </button>
            </div>
            
            <div className="p-3 grid grid-cols-1 gap-2">
              {allTicketTypes.map(ticketType => (
                <div key={ticketType} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`ticketType-${ticketType}`}
                    checked={selectedTypes.includes(ticketType)}
                    onChange={() => handleTicketTypeSelection(ticketType)}
                    className="mr-3 h-4 w-4 rounded border-gray-300 text-[#8d1c3e] focus:ring-[#8d1c3e]"
                  />
                  <label 
                    htmlFor={`ticketType-${ticketType}`}
                    className="text-sm text-gray-700 cursor-pointer flex items-center"
                  >
                    <span 
                      className="w-4 h-4 mr-2 rounded-full inline-block" 
                      style={{ backgroundColor: getTicketTypeColor(ticketType) }}
                    ></span>
                    {ticketType}
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
          <h5 className="text-base font-semibold text-gray-800 mr-4">Premium Air Travel Ticket Types</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        Premium Economy consistently stands out as the most frequently used air travel ticket type among respondents, followed by steady usage of Business Class and First Class across all quarters. While Business Class holds a strong share, First Class shows notable but slightly lower adoption, indicating a balanced distribution among premium travel preferences.
      </p>
      
      {/* Controles de visualización */}
      {renderControls()}

      {/* Selector de tipos de billetes para el gráfico de tendencias */}
      {chartView === 'trends' && (
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">
            Ticket Type Trends — 2023-2024
          </div>
          {renderTicketTypeSelector()}
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

export default AirTicketTypesAnalysis; 
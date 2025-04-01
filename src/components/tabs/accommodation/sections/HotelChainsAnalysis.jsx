import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Sector,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const HotelChainsAnalysis = () => {
  const viewType = 'audience';
  const [chartView, setChartView] = useState('current'); // 'current', 'trends', 'regional' or 'radar'
  const [activeIndex, setActiveIndex] = useState(0);
  
  const hotelChainsData = [
    { chain: "Choice Hotels Group", audience: 20.4, index: 170.4, responses: 18, region: "North America" },
    { chain: "Hilton brands", audience: 45.2, index: 209.9, responses: 37, region: "North America" },
    { chain: "Hyatt Hotel Group", audience: 23.4, index: 139.8, responses: 19, region: "North America" },
    { chain: "InterContinental Hotels Group", audience: 25.6, index: 142.6, responses: 23, region: "Global" },
    { chain: "Marriott Bonvoy Hotels", audience: 61.8, index: 254.1, responses: 51, region: "North America" },
    { chain: "Rotana Hotels and Resorts", audience: 1.9, index: 126.2, responses: 1, region: "Middle East" },
    { chain: "Wyndham Hotels Group", audience: 17.2, index: 147.8, responses: 15, region: "North America" }
  ];

  const historicalData = [
    { quarter: "Q1 2023", chain: "Hilton brands", audience: 53.4, index: 242.9, responses: 81, region: "North America" },
    { quarter: "Q1 2023", chain: "Hyatt Hotel Group", audience: 26.0, index: 156.9, responses: 41, region: "North America" },
    { quarter: "Q1 2023", chain: "InterContinental Hotels Group", audience: 32.1, index: 178.2, responses: 46, region: "Global" },
    { quarter: "Q1 2023", chain: "Marriott Bonvoy Hotels", audience: 57.6, index: 245.0, responses: 84, region: "North America" },
    { quarter: "Q1 2023", chain: "Radisson Hotel Group", audience: 17.4, index: 142.8, responses: 25, region: "Europe" },
    { quarter: "Q1 2023", chain: "Whitbread PLC", audience: 2.0, index: 183.2, responses: 2, region: "Europe" },
    
    { quarter: "Q3 2023", chain: "Choice Hotels Group", audience: 14.3, index: 120.8, responses: 20, region: "North America" },
    { quarter: "Q3 2023", chain: "Hilton brands", audience: 49.7, index: 237.6, responses: 66, region: "North America" },
    { quarter: "Q3 2023", chain: "Hyatt Hotel Group", audience: 26.2, index: 160.1, responses: 37, region: "North America" },
    { quarter: "Q3 2023", chain: "InterContinental Hotels Group", audience: 23.3, index: 138.6, responses: 29, region: "Global" },
    { quarter: "Q3 2023", chain: "Marriott Bonvoy Hotels", audience: 53.0, index: 235.3, responses: 68, region: "North America" },
    { quarter: "Q3 2023", chain: "Wyndham Hotels Group", audience: 16.6, index: 146.6, responses: 24, region: "North America" },
    
    { quarter: "Q1 2024", chain: "Choice Hotels Group", audience: 17.7, index: 152.9, responses: 26, region: "North America" },
    { quarter: "Q1 2024", chain: "Hilton brands", audience: 58.3, index: 249.6, responses: 83, region: "North America" },
    { quarter: "Q1 2024", chain: "Hyatt Hotel Group", audience: 30.7, index: 174.9, responses: 45, region: "North America" },
    { quarter: "Q1 2024", chain: "InterContinental Hotels Group", audience: 27.1, index: 145.1, responses: 41, region: "Global" },
    { quarter: "Q1 2024", chain: "Marriott Bonvoy Hotels", audience: 50.4, index: 203.0, responses: 72, region: "North America" },
    { quarter: "Q1 2024", chain: "Wyndham Hotels Group", audience: 21.3, index: 174.5, responses: 30, region: "North America" },
    
    { quarter: "Q3 2024", chain: "Choice Hotels Group", audience: 20.4, index: 170.4, responses: 18, region: "North America" },
    { quarter: "Q3 2024", chain: "Hilton brands", audience: 45.2, index: 209.9, responses: 37, region: "North America" },
    { quarter: "Q3 2024", chain: "Hyatt Hotel Group", audience: 23.4, index: 139.8, responses: 19, region: "North America" },
    { quarter: "Q3 2024", chain: "InterContinental Hotels Group", audience: 25.6, index: 142.6, responses: 23, region: "Global" },
    { quarter: "Q3 2024", chain: "Marriott Bonvoy Hotels", audience: 61.8, index: 254.1, responses: 51, region: "North America" },
    { quarter: "Q3 2024", chain: "Rotana Hotels and Resorts", audience: 1.9, index: 126.2, responses: 1, region: "Middle East" },
    { quarter: "Q3 2024", chain: "Wyndham Hotels Group", audience: 17.2, index: 147.8, responses: 15, region: "North America" }
  ];

  // Colores de Qatar
  const COLORS = {
    primary: '#8d1c3e',     // burgundy
    secondary: '#b8a88f',   // beige
    tertiary: '#1a4d2e',    // dark green
    quaternary: '#d4a017',  // gold
    quinta: '#5d1d41',      // berenjena oscuro para reemplazar el lila
  };

  // Definición de colores por región
  const REGION_COLORS = {
    "North America": COLORS.primary,
    "Europe": COLORS.tertiary,
    "Middle East": COLORS.quaternary,
    "Asia": COLORS.secondary,
    "Global": COLORS.quinta,
    "Other": "#AAAAAA"
  };

  // Objeto para agrupar cadenas por categoría
  const categorizeHotels = () => {
    return {
      'Ultra Luxury': ['Jumeirah Hotels and Resorts', 'Marriott Bonvoy Hotels', 'Hyatt Hotel Group'],
      'Luxury': ['Hilton brands', 'InterContinental Hotels Group', 'Rotana Hotels and Resorts'],
      'Upscale': ['Accor Hotel Group', 'Radisson Hotel Group', 'Melia Hotel Group', 'Wyndham Hotels Group'],
      'Mid-range': ['BWH Hotel Group', 'Choice Hotels Group', 'Whitbread PLC', 'OYO Rooms']
    };
  };

  // Colores para cada cadena hotelera basados en la paleta de Qatar
  const getHotelColor = (chain) => {
    if (chain === "Marriott Bonvoy Hotels") return "#8d1c3e"; // burgundy
    if (chain === "Hilton brands") return "#b8a88f"; // beige
    if (chain === "InterContinental Hotels Group") return "#1a4d2e"; // dark green
    if (chain === "Hyatt Hotel Group") return "#004a96"; // blue
    if (chain === "Choice Hotels Group") return "#d4a017"; // gold
    if (chain === "Wyndham Hotels Group") return "#2d623d"; // green
    if (chain === "Rotana Hotels and Resorts") return "#ca7d60"; // terra cotta
    
    return '#888888'; // Por defecto
  };

  // Función para ordenar los datos de mayor a menor
  const getSortedData = () => {
    return [...hotelChainsData]
      .filter(item => item.chain !== "None of these")
      .sort((a, b) => {
        if (viewType === 'audience') {
          return b.audience - a.audience;
        } else {
          return b.index - a.index;
        }
      })
      .slice(0, 10); // Top 10
  };

  // Preparar datos para gráfico regional
  const getRegionalData = () => {
    const regions = {};
    hotelChainsData.forEach(item => {
      if (item.chain === "None of these") return;
      
      if (!regions[item.region]) {
        regions[item.region] = {
          region: item.region,
          audience: 0,
          index: 0,
          hotels: 0
        };
      }
      
      regions[item.region].audience += item.audience;
      regions[item.region].index += item.index;
      regions[item.region].hotels += 1;
    });
    
    // Calcular promedios para index
    Object.values(regions).forEach(region => {
      region.avgIndex = region.index / region.hotels;
    });
    
    return Object.values(regions);
  };

  // Preparar datos para gráfico de tendencias
  const getTrendsData = () => {
    const quarters = [...new Set(historicalData.map(item => item.quarter))];
    const chains = [...new Set(historicalData.map(item => item.chain))];
    // Usar todas las cadenas presentes en hotelChainsData en lugar de solo las top 5
    const allActiveChains = [...new Set(hotelChainsData.map(item => item.chain))];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      chains.forEach(chain => {
        if (allActiveChains.includes(chain)) {
          const dataForChain = historicalData.find(item => 
            item.quarter === quarter && item.chain === chain
          );
          if (dataForChain) {
            quarterData[chain] = viewType === 'audience' 
              ? dataForChain.audience 
              : dataForChain.index;
          }
        }
      });
      return quarterData;
    });
  };

  // Preparar datos para gráfico de radar
  const getRadarData = () => {
    const categories = categorizeHotels();
    const result = [];
    
    Object.entries(categories).forEach(([category, chains]) => {
      const categoryData = {
        category,
        audience: 0,
        index: 0,
        count: 0
      };
      
      chains.forEach(chain => {
        const hotel = hotelChainsData.find(item => item.chain === chain);
        if (hotel) {
          categoryData.audience += hotel.audience;
          categoryData.index += hotel.index;
          categoryData.count += 1;
        }
      });
      
      // Calcular promedios
      if (categoryData.count > 0) {
        categoryData.avgIndex = categoryData.index / categoryData.count;
        categoryData.avgAudience = categoryData.audience / categoryData.count;
      }
      
      result.push(categoryData);
    });
    
    return result;
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
            dataKey="chain" 
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
                  <p><strong>Chain:</strong> {item.chain}</p>
                  <p><strong>Audience:</strong> {item.audience.toFixed(1)}%</p>
                  <p><strong>Index:</strong> {item.index.toFixed(1)}</p>
                  <p><strong>Responses:</strong> {item.responses}</p>
                </div>
              ];
            }}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: COLORS.secondary,
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
              <Cell key={`cell-${index}`} fill={getHotelColor(entry.chain)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Gráfico de líneas para tendencias
  const renderLineChart = () => {
    const data = getTrendsData();
    const activeChains = [...new Set(hotelChainsData.map(item => item.chain))];
    
    // Calcular los valores mínimos y máximos para establecer el dominio del eje Y
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    data.forEach(entry => {
      activeChains.forEach(chain => {
        if (entry[chain] !== undefined) {
          minValue = Math.min(minValue, entry[chain]);
          maxValue = Math.max(maxValue, entry[chain]);
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
                  <p><strong>Chain:</strong> {name}</p>
                  <p><strong>{viewType === 'audience' ? 'Audience' : 'Index'}:</strong> {value.toFixed(1)}{viewType === 'audience' ? '%' : ''}</p>
                  <p><strong>Quarter:</strong> {props.payload.quarter}</p>
                </div>
              ];
            }}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: COLORS.secondary,
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
          {activeChains.map((chain) => (
            <Line
              key={chain}
              type="monotone"
              dataKey={chain}
              stroke={getHotelColor(chain)}
              strokeWidth={2}
              dot={{ r: 4, fill: getHotelColor(chain) }}
              activeDot={{ r: 6, fill: getHotelColor(chain) }}
              name={chain}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Gráfico de radar para categorías
  const renderRadarChart = () => {
    const data = getRadarData();
    
    return (
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#e0e0e0" />
          <PolarAngleAxis dataKey="category" style={{ fontSize: '12px', fontWeight: 'bold' }} />
          <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
          <Radar
            name={viewType === 'audience' ? 'Avg. Audience %' : 'Avg. Index'}
            dataKey={viewType === 'audience' ? 'avgAudience' : 'avgIndex'}
            stroke={COLORS.primary}
            fill={COLORS.primary}
            fillOpacity={0.6}
          />
          <Tooltip 
            formatter={(value) => [`${value.toFixed(1)}${viewType === 'audience' ? '%' : ''}`, viewType === 'audience' ? 'Avg. Audience' : 'Avg. Index']}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: COLORS.secondary,
              borderRadius: '4px'
            }}
          />
          <Legend wrapperStyle={{ paddingTop: 10 }} />
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  // Renderizar vista de tarjetas para TreeMap
  const renderTreemapChart = () => {
    const regions = getRegionalData();
    
    return (
      <div className="h-[500px] overflow-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden shadow-md"
              style={{ 
                backgroundColor: REGION_COLORS[region.region] || "#AAAAAA",
                borderColor: '#b8a88f'
              }}
            >
              <div className="bg-white bg-opacity-10 p-4">
                <h3 className="text-white text-lg font-bold mb-2">{region.region}</h3>
                <p className="text-white font-semibold mb-1">
                  {viewType === 'audience' 
                    ? `Total Audience: ${region.audience.toFixed(1)}%` 
                    : `Average Index: ${region.avgIndex.toFixed(1)}`}
                </p>
                <p className="text-white text-sm mb-3">Hotels: {region.hotels}</p>
                
                <div className="space-y-2 mt-4">
                  {hotelChainsData
                    .filter(item => item.region === region.region && item.audience > 0)
                    .sort((a, b) => b[viewType] - a[viewType])
                    .map((hotel, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white bg-opacity-20 p-2 rounded"
                        style={{borderLeft: `3px solid ${getHotelColor(hotel.chain)}`}}
                      >
                        <p className="text-white text-sm font-medium">{hotel.chain}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-white text-xs">
                            {viewType === 'audience' 
                              ? `${hotel.audience.toFixed(1)}%` 
                              : hotel.index.toFixed(1)}
                          </span>
                          <div 
                            className="h-2 rounded-full" 
                            style={{ 
                              width: `${viewType === 'audience' 
                                ? (hotel.audience / Math.max(...hotelChainsData.map(h => h.audience))) * 100 
                                : (hotel.index / 300) * 100}%`,
                              minWidth: '10px',
                              maxWidth: '100px',
                              backgroundColor: getHotelColor(hotel.chain)
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Gráfico de distribución regional
  const renderRegionDistributionChart = () => {
    const data = getRegionalData();
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill={COLORS.primary}
            dataKey={viewType === 'audience' ? 'audience' : 'avgIndex'}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            nameKey="region"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={REGION_COLORS[entry.region] || "#AAAAAA"} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: COLORS.secondary,
              borderRadius: '4px'
            }}
            formatter={(value, name, props) => [
              `${value.toFixed(1)}${viewType === 'audience' ? '%' : ''}`,
              props.payload.region
            ]}
          />
          <Legend 
            formatter={(value, entry, index) => {
              // Obtener el nombre de la región a partir del payload
              const region = entry.payload.region;
              return <span style={{ color: REGION_COLORS[region] || '#AAAAAA' }}>{region}</span>;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  // Forma activa para el gráfico de pastel
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, value, percent } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333" fontSize={14}>
          {payload.region}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>
          {`${viewType === 'audience' ? 'Total: ' + value.toFixed(1) + '%' : 'Avg: ' + value.toFixed(1)}`}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontSize={11}>
          {`(${(percent * 100).toFixed(1)}%)`}
        </text>
      </g>
    );
  };

  const onClickMetric = (type) => {
    // Mantenemos la función pero no cambiamos viewType ya que siempre será audience
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
          <h5 className="text-base font-semibold text-gray-800 mr-4">Hotel Chain Popularity</h5>
        </div>
        
        {renderViewOptions()}
      </div>
    );
  };

  return (
    <>
      <p className="mb-6 text-gray-700">
        Hilton and Marriott Bonvoy consistently lead in preference among international hotel chains, showing strong recognition and appeal across all quarters. Hyatt and InterContinental also maintain solid positions, particularly among upscale and lifestyle travelers. Wyndham and Choice Hotels offer broader accessibility and show steady interest, while other chains like Radisson, Whitbread, and Rotana capture niche segments with more moderate engagement.
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

export default HotelChainsAnalysis; 
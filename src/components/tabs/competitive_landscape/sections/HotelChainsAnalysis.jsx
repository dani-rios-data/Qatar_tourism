import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Sector,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const HotelChainsAnalysis = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  const [chartView, setChartView] = useState('current'); // 'current', 'trends', 'regional' or 'radar'
  const [activeIndex, setActiveIndex] = useState(0);
  
  const hotelChainsData = [
    { chain: "Accor Hotel Group", audience: 6.3, index: 53.7, responses: 5, region: "Europe" },
    { chain: "BWH Hotel Group", audience: 4.1, index: 51.4, responses: 4, region: "Global" },
    { chain: "Choice Hotels Group", audience: 20.4, index: 170.4, responses: 18, region: "North America" },
    { chain: "Hilton brands", audience: 45.2, index: 209.9, responses: 37, region: "North America" },
    { chain: "Hyatt Hotel Group", audience: 23.4, index: 139.8, responses: 19, region: "North America" },
    { chain: "InterContinental Hotels Group", audience: 25.6, index: 142.6, responses: 23, region: "Global" },
    { chain: "Jumeirah Hotels and Resorts", audience: 1.3, index: 62.2, responses: 1, region: "Middle East" },
    { chain: "Marriott Bonvoy Hotels", audience: 61.8, index: 254.1, responses: 51, region: "North America" },
    { chain: "Melia Hotel Group", audience: 7.3, index: 95.8, responses: 6, region: "Europe" },
    { chain: "OYO Rooms", audience: 1.4, index: 16.5, responses: 1, region: "Asia" },
    { chain: "Radisson Hotel Group", audience: 11.5, index: 93.1, responses: 10, region: "Europe" },
    { chain: "Rotana Hotels and Resorts", audience: 1.9, index: 126.2, responses: 1, region: "Middle East" },
    { chain: "Whitbread PLC", audience: 0, index: 0, responses: 0, region: "Europe" },
    { chain: "Wyndham Hotels Group", audience: 17.2, index: 147.8, responses: 15, region: "North America" },
    { chain: "None of these", audience: 9.0, index: 49.0, responses: 7, region: "Other" }
  ];

  const historicalData = [
    { quarter: "Q1 2023", chain: "Accor Hotel Group", audience: 5.6, index: 52.3, region: "Europe" },
    { quarter: "Q1 2023", chain: "BWH Hotel Group", audience: 7.9, index: 99.3, region: "Global" },
    { quarter: "Q1 2023", chain: "Choice Hotels Group", audience: 13.7, index: 117.6, region: "North America" },
    { quarter: "Q1 2023", chain: "Hilton brands", audience: 53.4, index: 242.9, region: "North America" },
    { quarter: "Q1 2023", chain: "Hyatt Hotel Group", audience: 26.0, index: 156.9, region: "North America" },
    { quarter: "Q1 2023", chain: "InterContinental Hotels Group", audience: 32.1, index: 178.2, region: "Global" },
    { quarter: "Q1 2023", chain: "Jumeirah Hotels and Resorts", audience: 0, index: 0, region: "Middle East" },
    { quarter: "Q1 2023", chain: "Marriott Bonvoy Hotels", audience: 57.6, index: 245.0, region: "North America" },
    { quarter: "Q1 2023", chain: "Melia Hotel Group", audience: 5.1, index: 58.2, region: "Europe" },
    { quarter: "Q1 2023", chain: "OYO Rooms", audience: 0.7, index: 7.8, region: "Asia" },
    { quarter: "Q1 2023", chain: "Radisson Hotel Group", audience: 17.4, index: 142.8, region: "Europe" },
    { quarter: "Q1 2023", chain: "Rotana Hotels and Resorts", audience: 0, index: 0, region: "Middle East" },
    { quarter: "Q1 2023", chain: "Whitbread PLC", audience: 2.0, index: 183.2, region: "Europe" },
    { quarter: "Q1 2023", chain: "Wyndham Hotels Group", audience: 13.0, index: 108.4, region: "North America" },

    { quarter: "Q2 2023", chain: "Accor Hotel Group", audience: 4.2, index: 41.3, region: "Europe" },
    { quarter: "Q2 2023", chain: "BWH Hotel Group", audience: 6.1, index: 78.5, region: "Global" },
    { quarter: "Q2 2023", chain: "Choice Hotels Group", audience: 17.3, index: 143.6, region: "North America" },
    { quarter: "Q2 2023", chain: "Hilton brands", audience: 48.9, index: 218.4, region: "North America" },
    { quarter: "Q2 2023", chain: "Hyatt Hotel Group", audience: 24.8, index: 146.2, region: "North America" },
    { quarter: "Q2 2023", chain: "InterContinental Hotels Group", audience: 28.5, index: 158.3, region: "Global" },
    { quarter: "Q2 2023", chain: "Jumeirah Hotels and Resorts", audience: 0.8, index: 45.3, region: "Middle East" },
    { quarter: "Q2 2023", chain: "Marriott Bonvoy Hotels", audience: 59.2, index: 238.7, region: "North America" },
    { quarter: "Q2 2023", chain: "Melia Hotel Group", audience: 6.4, index: 79.3, region: "Europe" },
    { quarter: "Q2 2023", chain: "OYO Rooms", audience: 0.9, index: 11.3, region: "Asia" },
    { quarter: "Q2 2023", chain: "Radisson Hotel Group", audience: 14.6, index: 117.9, region: "Europe" },
    { quarter: "Q2 2023", chain: "Rotana Hotels and Resorts", audience: 0.6, index: 35.1, region: "Middle East" },
    { quarter: "Q2 2023", chain: "Whitbread PLC", audience: 1.2, index: 108.2, region: "Europe" },
    { quarter: "Q2 2023", chain: "Wyndham Hotels Group", audience: 15.3, index: 127.5, region: "North America" },

    { quarter: "Q3 2023", chain: "Accor Hotel Group", audience: 5.9, index: 49.2, region: "Europe" },
    { quarter: "Q3 2023", chain: "BWH Hotel Group", audience: 5.3, index: 65.7, region: "Global" },
    { quarter: "Q3 2023", chain: "Choice Hotels Group", audience: 18.9, index: 157.3, region: "North America" },
    { quarter: "Q3 2023", chain: "Hilton brands", audience: 47.3, index: 215.6, region: "North America" },
    { quarter: "Q3 2023", chain: "Hyatt Hotel Group", audience: 24.1, index: 142.5, region: "North America" },
    { quarter: "Q3 2023", chain: "InterContinental Hotels Group", audience: 26.8, index: 148.2, region: "Global" },
    { quarter: "Q3 2023", chain: "Jumeirah Hotels and Resorts", audience: 1.1, index: 53.2, region: "Middle East" },
    { quarter: "Q3 2023", chain: "Marriott Bonvoy Hotels", audience: 60.5, index: 245.8, region: "North America" },
    { quarter: "Q3 2023", chain: "Melia Hotel Group", audience: 6.9, index: 87.4, region: "Europe" },
    { quarter: "Q3 2023", chain: "OYO Rooms", audience: 1.2, index: 14.8, region: "Asia" },
    { quarter: "Q3 2023", chain: "Radisson Hotel Group", audience: 12.8, index: 102.5, region: "Europe" },
    { quarter: "Q3 2023", chain: "Rotana Hotels and Resorts", audience: 1.4, index: 87.3, region: "Middle East" },
    { quarter: "Q3 2023", chain: "Whitbread PLC", audience: 0.7, index: 56.9, region: "Europe" },
    { quarter: "Q3 2023", chain: "Wyndham Hotels Group", audience: 16.4, index: 134.2, region: "North America" },

    { quarter: "Q4 2023", chain: "Accor Hotel Group", audience: 6.1, index: 51.8, region: "Europe" },
    { quarter: "Q4 2023", chain: "BWH Hotel Group", audience: 4.8, index: 57.9, region: "Global" },
    { quarter: "Q4 2023", chain: "Choice Hotels Group", audience: 19.5, index: 162.4, region: "North America" },
    { quarter: "Q4 2023", chain: "Hilton brands", audience: 46.7, index: 213.5, region: "North America" },
    { quarter: "Q4 2023", chain: "Hyatt Hotel Group", audience: 23.7, index: 141.2, region: "North America" },
    { quarter: "Q4 2023", chain: "InterContinental Hotels Group", audience: 25.9, index: 143.7, region: "Global" },
    { quarter: "Q4 2023", chain: "Jumeirah Hotels and Resorts", audience: 1.2, index: 59.4, region: "Middle East" },
    { quarter: "Q4 2023", chain: "Marriott Bonvoy Hotels", audience: 61.1, index: 250.3, region: "North America" },
    { quarter: "Q4 2023", chain: "Melia Hotel Group", audience: 7.1, index: 92.6, region: "Europe" },
    { quarter: "Q4 2023", chain: "OYO Rooms", audience: 1.3, index: 15.5, region: "Asia" },
    { quarter: "Q4 2023", chain: "Radisson Hotel Group", audience: 12.1, index: 97.6, region: "Europe" },
    { quarter: "Q4 2023", chain: "Rotana Hotels and Resorts", audience: 1.7, index: 105.2, region: "Middle East" },
    { quarter: "Q4 2023", chain: "Whitbread PLC", audience: 0.5, index: 37.8, region: "Europe" },
    { quarter: "Q4 2023", chain: "Wyndham Hotels Group", audience: 16.8, index: 139.5, region: "North America" },

    { quarter: "Q1 2024", chain: "Accor Hotel Group", audience: 6.3, index: 53.7, region: "Europe" },
    { quarter: "Q1 2024", chain: "BWH Hotel Group", audience: 4.1, index: 51.4, region: "Global" },
    { quarter: "Q1 2024", chain: "Choice Hotels Group", audience: 20.4, index: 170.4, region: "North America" },
    { quarter: "Q1 2024", chain: "Hilton brands", audience: 45.2, index: 209.9, region: "North America" },
    { quarter: "Q1 2024", chain: "Hyatt Hotel Group", audience: 23.4, index: 139.8, region: "North America" },
    { quarter: "Q1 2024", chain: "InterContinental Hotels Group", audience: 25.6, index: 142.6, region: "Global" },
    { quarter: "Q1 2024", chain: "Jumeirah Hotels and Resorts", audience: 1.3, index: 62.2, region: "Middle East" },
    { quarter: "Q1 2024", chain: "Marriott Bonvoy Hotels", audience: 61.8, index: 254.1, region: "North America" },
    { quarter: "Q1 2024", chain: "Melia Hotel Group", audience: 7.3, index: 95.8, region: "Europe" },
    { quarter: "Q1 2024", chain: "OYO Rooms", audience: 1.4, index: 16.5, region: "Asia" },
    { quarter: "Q1 2024", chain: "Radisson Hotel Group", audience: 11.5, index: 93.1, region: "Europe" },
    { quarter: "Q1 2024", chain: "Rotana Hotels and Resorts", audience: 1.9, index: 126.2, region: "Middle East" },
    { quarter: "Q1 2024", chain: "Whitbread PLC", audience: 0, index: 0, region: "Europe" },
    { quarter: "Q1 2024", chain: "Wyndham Hotels Group", audience: 17.2, index: 147.8, region: "North America" }
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
    const categories = categorizeHotels();
    
    if (categories['Ultra Luxury'].includes(chain)) return COLORS.primary;
    if (categories['Luxury'].includes(chain)) return COLORS.secondary;
    if (categories['Upscale'].includes(chain)) return COLORS.tertiary;
    if (categories['Mid-range'].includes(chain)) return COLORS.quaternary;
    
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
    const topChains = getSortedData().slice(0, 5).map(item => item.chain);
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      chains.forEach(chain => {
        if (topChains.includes(chain)) {
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
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 'dataMax']} />
          <YAxis 
            dataKey="chain" 
            type="category" 
            width={140}
            tickLine={false}
            axisLine={false}
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            formatter={(value) => [`${value.toFixed(1)}${viewType === 'audience' ? '%' : ''}`, viewType === 'audience' ? 'Audience' : 'Index']}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: COLORS.secondary,
              borderRadius: '4px'
            }}
          />
          <Legend wrapperStyle={{ paddingTop: 10 }} />
          <Bar 
            dataKey={viewType === 'audience' ? 'audience' : 'index'} 
            name={viewType === 'audience' ? 'Audience %' : 'Index'} 
            fill={COLORS.primary}
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
    const topChains = getSortedData().slice(0, 5).map(item => item.chain);
    
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="quarter" 
            angle={-45} 
            textAnchor="end" 
            height={70}
            style={{ fontSize: '12px' }}
          />
          <YAxis domain={[0, 'auto']} />
          <Tooltip 
            formatter={(value, name) => [`${value.toFixed(1)}${viewType === 'audience' ? '%' : ''}`, name]}
            labelStyle={{ fontWeight: 'bold' }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: COLORS.secondary,
              borderRadius: '4px'
            }}
          />
          <Legend wrapperStyle={{ paddingTop: 10 }} />
          {topChains.map((chain, index) => (
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-[#8d1c3e] mb-6">Accommodation Hotel Chains</h2>
      
      <p className="mb-6 text-gray-700">
        The analysis of hotel chains preferred by premium travelers provides valuable insight into their favorite destinations,
        as these chains have a strong presence in specific regions. If a high percentage of premium travelers prefer chains with
        significant operations in Asia or Europe, it clearly indicates where they prefer to stay.
      </p>
      
      {/* Controles de visualización */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 mr-2">Metric:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-3 py-1 text-sm font-medium rounded-l-md border ${
                viewType === 'audience' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewType('audience')}
            >
              Audience %
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium rounded-r-md border ${
                viewType === 'index' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewType('index')}
            >
              Index
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 mr-2">View:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-3 py-1 text-sm font-medium border ${
                chartView === 'current' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('current')}
            >
              Current
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium border-t border-b ${
                chartView === 'trends' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('trends')}
            >
              Trends
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium border-t border-b ${
                chartView === 'treemap' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('treemap')}
            >
              TreeMap
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium border-t border-b ${
                chartView === 'distribution' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('distribution')}
            >
              Distribution
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium rounded-r-md border ${
                chartView === 'radar' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('radar')}
            >
              Categories
            </button>
          </div>
        </div>
      </div>
      
      {/* Visualización principal */}
      <div className="mb-8">
        {chartView === 'current' && renderBarChart()}
        {chartView === 'trends' && renderLineChart()}
        {chartView === 'treemap' && renderTreemapChart()}
        {chartView === 'distribution' && renderRegionDistributionChart()}
        {chartView === 'radar' && renderRadarChart()}
      </div>
      
      {/* Insights */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f9f7f3] p-4 rounded-lg border-l-4 border-[#8d1c3e]">
            <h4 className="font-medium text-[#8d1c3e] mb-2">North American Dominance</h4>
            <p className="text-sm text-gray-700">
              Chains based in North America (Marriott, Hilton) dominate preferences with an index above 200,
              indicating a strong affinity towards destinations with significant presence of these brands.
            </p>
          </div>
          <div className="bg-[#f9f7f3] p-4 rounded-lg border-l-4 border-[#b8a88f]">
            <h4 className="font-medium text-[#8d1c3e] mb-2">Middle East Opportunity</h4>
            <p className="text-sm text-gray-700">
              Despite their low audience, Rotana and Jumeirah show relatively high indices,
              suggesting a niche of travelers with strong affinity towards Middle Eastern hotel experiences.
            </p>
          </div>
          <div className="bg-[#f9f7f3] p-4 rounded-lg border-l-4 border-[#1a4d2e]">
            <h4 className="font-medium text-[#8d1c3e] mb-2">Weakness in Asia</h4>
            <p className="text-sm text-gray-700">
              Asian chains like OYO show the lowest indices, indicating less affinity
              towards destinations where these chains have a strong presence.
            </p>
          </div>
          <div className="bg-[#f9f7f3] p-4 rounded-lg border-l-4 border-[#d4a017]">
            <h4 className="font-medium text-[#8d1c3e] mb-2">Luxury Trend</h4>
            <p className="text-sm text-gray-700">
              Ultra-luxury and luxury category chains consistently show the highest indices,
              confirming premium travelers' preference for high-end accommodation experiences.
            </p>
          </div>
        </div>
      </div>
      
      {/* Implicaciones estratégicas */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Implications for Qatar</h3>
        <div className="bg-[#f3f4f6] p-4 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
              <span className="text-sm text-gray-700">
                <strong>Partnerships with North American chains:</strong> Develop strategic alliances with Marriott and Hilton
                to attract their loyal guests, through cross-point programs and special promotions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
              <span className="text-sm text-gray-700">
                <strong>Regional balance:</strong> Attract more international chains from various regions to
                create a hotel ecosystem that appeals to premium travelers from different origin markets.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
              <span className="text-sm text-gray-700">
                <strong>Ultra-luxury segment development:</strong> Encourage the development of more ultra-luxury properties
                leveraging Jumeirah's favorable index, to enhance Qatar's perception as a premium destination.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
              <span className="text-sm text-gray-700">
                <strong>Targeted marketing:</strong> Focus marketing efforts on loyalty program members
                of the main chains, especially during low-occupancy seasons.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelChainsAnalysis; 
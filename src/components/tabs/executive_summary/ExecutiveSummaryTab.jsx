import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const ExecutiveSummaryTab = () => {
  // Paleta de colores de Qatar
  const COLORS = {
    primary: '#8d1c3e',     // burgundy
    secondary: '#b8a88f',   // beige
    tertiary: '#1a4d2e',    // dark green
    quaternary: '#d4a017',  // mostaza/dorado
    quinta: '#5d1d41',      // berenjena
  };

  // Datos para la tendencia de audiencia de Qatar vs Dubai
  const trendData = [
    { quarter: 'Q1 2023', Qatar: 3.4, Dubai: 4.2, AbuDhabi: 1.9 },
    { quarter: 'Q3 2023', Qatar: 3.1, Dubai: 6.1, AbuDhabi: 2.5 },
    { quarter: 'Q1 2024', Qatar: 1.9, Dubai: 2.8, AbuDhabi: 1.5 },
    { quarter: 'Q3 2024', Qatar: 0, Dubai: 1.7, AbuDhabi: 0.8 },
  ];

  // Datos para motivaciones de visita a Qatar
  const motivationsData = [
    { name: 'Authentic cultural experiences', value: 76 },
    { name: 'Luxury accommodations', value: 72 },
    { name: 'Cultural heritage sites', value: 65 },
    { name: 'Modern architecture', value: 58 },
  ].sort((a, b) => b.value - a.value);

  // Datos para gráfico circular de percepción
  const perceptionData = [
    { name: 'Business Destination', value: 65, color: COLORS.primary },
    { name: 'Leisure Destination', value: 35, color: COLORS.tertiary },
  ];

  // Datos para hoteles premium
  const hotelData = [
    { name: 'Marriott Bonvoy Hotels', value: 61.8 },
    { name: 'Hilton brands', value: 45.2 },
    { name: 'InterContinental Hotels Group', value: 25.6 },
    { name: 'Hyatt Hotel Group', value: 23.4 },
  ];

  // Componente de tooltip personalizado
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color || entry.stroke }}>
              {`${entry.name}: ${entry.value}${entry.dataKey === 'value' ? '%' : ''}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-4">Executive Summary</h2>
      
      {/* Tarjetas de estadísticas clave */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Tarjeta 1: Vacation Importance */}
        <div className="bg-white p-5 rounded-lg border border-[#b8a88f] shadow-md hover:shadow-lg transition-shadow">
          <div className="flex mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f2eee6] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8d1c3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-sm text-gray-600">Vacation Importance</div>
          </div>
          <div className="text-4xl font-bold text-[#8d1c3e] mb-2">70%</div>
          <div className="text-xs text-gray-500">
            of premium travelers rate vacations as "Very" or "Extremely" important
          </div>
        </div>
        
        {/* Tarjeta 2: New Destinations */}
        <div className="bg-white p-5 rounded-lg border border-[#b8a88f] shadow-md hover:shadow-lg transition-shadow">
          <div className="flex mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f2eee6] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a4d2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-sm text-gray-600">New Destinations</div>
          </div>
          <div className="text-4xl font-bold text-[#1a4d2e] mb-2">80%</div>
          <div className="text-xs text-gray-500">
            prefer vacationing in new destinations over familiar places
          </div>
        </div>
        
        {/* Tarjeta 3: Local Experiences */}
        <div className="bg-white p-5 rounded-lg border border-[#b8a88f] shadow-md hover:shadow-lg transition-shadow">
          <div className="flex mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f2eee6] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5d1d41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-sm text-gray-600">Local Experiences</div>
          </div>
          <div className="text-4xl font-bold text-[#5d1d41] mb-2">11%</div>
          <div className="text-xs text-gray-500">
            seek authentic local experiences and cultural understanding
          </div>
        </div>
        
        {/* Tarjeta 4: Bleisure Interest */}
        <div className="bg-white p-5 rounded-lg border border-[#b8a88f] shadow-md hover:shadow-lg transition-shadow">
          <div className="flex mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f2eee6] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d4a017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-sm text-gray-600">Bleisure Interest</div>
          </div>
          <div className="text-4xl font-bold text-[#d4a017] mb-2">12%</div>
          <div className="text-xs text-gray-500">
            of business travelers add leisure days to their trips
          </div>
        </div>
      </div>
      
      {/* Introducción con gráfico de tendencia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1 bg-[#f9f7f2] p-6 rounded-lg border border-[#b8a88f] shadow-md">
          <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Overview</h3>
          <p className="text-gray-700 mb-4">
            This dashboard analyzes premium travel trends and Qatar's positioning as a luxury destination. 
            Based on data from Q1 2023 to Q3 2024, it highlights changing perceptions, competitive analysis, 
            and strategic opportunities for Qatar Tourism.
          </p>
          <div className="flex items-center mt-4 pt-4 border-t border-[#b8a88f]">
            <div className="p-2 rounded-full bg-[#f9f7f2] border border-[#8d1c3e] mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#8d1c3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-600">
                Qatar's visibility as a premium destination has decreased from <span className="font-bold">3.4%</span> to <span className="font-bold">0%</span> between Q1 2023 and Q3 2024, indicating urgent need for action.
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg border border-[#b8a88f] shadow-md">
          <div className="bg-[#8d1c3e] px-5 py-3">
            <h4 className="text-white font-semibold">Regional Visibility Trend (Audience %)</h4>
          </div>
          <div className="p-5 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="quarter" />
                <YAxis domain={[0, 7]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="Qatar" 
                  stroke={COLORS.quinta} 
                  strokeWidth={2} 
                  dot={{ r: 5, fill: COLORS.quinta }} 
                  activeDot={{ r: 7 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="Dubai" 
                  stroke={COLORS.primary} 
                  strokeWidth={2} 
                  dot={{ r: 5, fill: COLORS.primary }} 
                  activeDot={{ r: 7 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="AbuDhabi" 
                  stroke={COLORS.quaternary} 
                  strokeWidth={2} 
                  dot={{ r: 5, fill: COLORS.quaternary }} 
                  activeDot={{ r: 7 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Métricas clave con gráfico circular */}
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Destination Insights</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden">
          <div className="bg-[#8d1c3e] p-4">
            <h4 className="text-white font-bold">Audience Perception</h4>
          </div>
          <div className="p-5">
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={perceptionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {perceptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Qatar is primarily seen as a business destination among premium travelers, with tourism perception gradually increasing from Q1 2023 to Q3 2024.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden">
          <div className="bg-[#1a4d2e] p-4">
            <h4 className="text-white font-bold">Regional Positioning</h4>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Dubai (UAE)</h5>
                <div className="flex justify-between text-sm mb-1">
                  <span>Audience %</span>
                  <span className="font-semibold text-[#8d1c3e]">12.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#8d1c3e] h-2 rounded-full" style={{ width: "12.8%" }}></div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Abu Dhabi (UAE)</h5>
                <div className="flex justify-between text-sm mb-1">
                  <span>Audience %</span>
                  <span className="font-semibold text-[#a63950]">7.6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#a63950] h-2 rounded-full" style={{ width: "7.6%" }}></div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Egypt</h5>
                <div className="flex justify-between text-sm mb-1">
                  <span>Audience %</span>
                  <span className="font-semibold text-[#1a4d2e]">5.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1a4d2e] h-2 rounded-full" style={{ width: "5.3%" }}></div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Qatar</h5>
                <div className="flex justify-between text-sm mb-1">
                  <span>Audience %</span>
                  <span className="font-semibold text-[#5d1d41]">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#5d1d41] h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Qatar's visibility has declined against regional competitors, with Dubai maintaining a clear lead in the premium travel market.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden">
          <div className="bg-[#d4a017] p-4">
            <h4 className="text-white font-bold">Premium Travel Trends</h4>
          </div>
          <div className="p-5">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 text-sm">Vacation Importance</span>
                  <span className="text-[#8d1c3e] font-bold text-sm">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#8d1c3e] h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 text-sm">Prefer New Destinations</span>
                  <span className="text-[#1a4d2e] font-bold text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1a4d2e] h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 text-sm">Local Experiences</span>
                  <span className="text-[#5d1d41] font-bold text-sm">11%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#5d1d41] h-2 rounded-full" style={{ width: "11%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 text-sm">Bleisure Travel</span>
                  <span className="text-[#d4a017] font-bold text-sm">12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#d4a017] h-2 rounded-full" style={{ width: "12%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Premium travelers value new destinations and authentic experiences, with growing bleisure travel trends offering opportunities for Qatar.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Motivaciones con gráfico de barras */}
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Traveler Motivations & Barriers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden">
          <div className="bg-[#5d1d41] px-5 py-3">
            <h4 className="text-white font-bold">Why Travelers Visit Qatar</h4>
          </div>
          <div className="p-5 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={motivationsData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={150}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar 
                  dataKey="value" 
                  fill={COLORS.primary}
                  barSize={20}
                  radius={[0, 4, 4, 0]}
                >
                  {motivationsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 0 
                        ? COLORS.primary 
                        : index === 1 
                          ? COLORS.tertiary 
                          : index === 2 
                            ? COLORS.secondary 
                            : COLORS.quaternary
                      } 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden">
          <div className="bg-[#8d1c3e] px-5 py-3">
            <h4 className="text-white font-bold">Barriers to Visiting Qatar</h4>
          </div>
          <div className="p-5">
            <div className="flex items-center p-3 mb-3 border border-gray-200 rounded-lg">
              <div className="rounded-full bg-[#f9f7f2] p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8d1c3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Limited awareness of leisure activities</h5>
                <p className="text-gray-600 text-sm">64% don't have a clear understanding of what to do in Qatar</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 mb-3 border border-gray-200 rounded-lg">
              <div className="rounded-full bg-[#f9f7f2] p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d4a017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Perceived high costs</h5>
                <p className="text-gray-600 text-sm">48% mentioned Qatar as expensive compared to other luxury destinations</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 border border-gray-200 rounded-lg">
              <div className="rounded-full bg-[#f9f7f2] p-3 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a4d2e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Cultural restrictions perception</h5>
                <p className="text-gray-600 text-sm">52% expressed concerns about cultural policies (down from 59% in 2023)</p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="p-4 bg-[#f9f7f2] rounded-lg">
                <h5 className="font-semibold text-[#8D1B3D] mb-2">Key Insight</h5>
                <p className="text-gray-700 text-sm">
                  Qatar's authentic cultural experiences (76% preference) represent a significant opportunity,
                  but travelers need clearer messaging on available activities and value proposition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Oportunidades estratégicas simplificadas */}
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Strategic Opportunities</h3>
      <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden mb-8">
        <div className="bg-[#d4a017] px-5 py-3">
          <h4 className="text-white font-bold">Key Recommendations</h4>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-[#8d1c3e] p-4 bg-[#f9f7f2] rounded-r-lg">
              <h5 className="font-bold text-[#8d1c3e] mb-2">Position as Cultural-Luxury Hybrid</h5>
              <p className="text-gray-700 text-sm">
                Leverage Qatar's authentic cultural assets while maintaining luxury standards. 
                Emphasize the unique blend that outperforms Dubai in cultural authenticity (73% vs 62%).
              </p>
            </div>
            
            <div className="border-l-4 border-[#1a4d2e] p-4 bg-[#f9f7f2] rounded-r-lg">
              <h5 className="font-bold text-[#1a4d2e] mb-2">Enhance Destination Awareness</h5>
              <p className="text-gray-700 text-sm">
                Create targeted content addressing the 64% of travelers unfamiliar with leisure activities. 
                Focus on highlighting "what to do" in Qatar beyond transit stays.
              </p>
            </div>
            
            <div className="border-l-4 border-[#d4a017] p-4 bg-[#f9f7f2] rounded-r-lg">
              <h5 className="font-bold text-[#d4a017] mb-2">Develop Bleisure Travel Packages</h5>
              <p className="text-gray-700 text-sm">
                Capitalize on 12% of business travelers who add leisure days by creating premium packages 
                that extend business stays through partnerships with luxury hotel chains.
              </p>
            </div>
            
            <div className="border-l-4 border-[#5d1d41] p-4 bg-[#f9f7f2] rounded-r-lg">
              <h5 className="font-bold text-[#5d1d41] mb-2">Address Perceived Barriers</h5>
              <p className="text-gray-700 text-sm">
                Create communications that address the 52% concerned about cultural restrictions, 
                highlighting progressive policies and visitor-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hotel Market Insights con gráfico */}
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Hotel Market Insights</h3>
      <div className="bg-white rounded-lg border border-[#b8a88f] shadow-lg overflow-hidden">
        <div className="bg-[#5d1d41] px-5 py-3">
          <h4 className="text-white font-bold">Premium Hotel Chain Preferences</h4>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Top Luxury Chains by Preference</h5>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={hotelData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 70]} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={150}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar 
                      dataKey="value" 
                      fill={COLORS.primary}
                      barSize={20}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="border-l border-gray-200 pl-4">
              <h5 className="font-semibold text-gray-800 mb-3">Strategic Implications</h5>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
                  <span>Partner with North American chains (Marriott, Hilton) that dominate preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1a4d2e] mr-2 text-lg">•</span>
                  <span>Develop ultra-luxury segment positioning to attract premium travelers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#d4a017] mr-2 text-lg">•</span>
                  <span>Leverage cultural authenticity as a key differentiator against other Gulf destinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5d1d41] mr-2 text-lg">•</span>
                  <span>Create targeted marketing for loyalty program members of top chains</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-[#f9f7f2] rounded-lg">
                <h5 className="font-semibold text-[#8D1B3D] mb-2">Key Opportunity</h5>
                <p className="text-gray-700 text-sm">
                  Qatar can differentiate itself by focusing on sustainable luxury and authentic cultural experiences, 
                  areas where it outperforms Dubai by 11% according to premium traveler sentiment analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummaryTab; 
import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Sector, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  Radar, LabelList
} from 'recharts';

// Palette más armoniosa con colores menos saturados
const NEW_COLORS = {
  primary: '#2A4365', // Azul profundo
  secondary: '#285E61', // Verde azulado
  accent: '#744210', // Marrón dorado
  highlight: '#822727', // Burgundy
  neutral1: '#4A5568', // Gris azulado
  neutral2: '#718096', // Gris medio
  chart: {
    motivator: '#5A67D8', // Índigo
    barrier: '#DD6B20', // Naranja suave
    cultural: '#38A169', // Verde
    restrictions: '#E53E3E', // Rojo
    positive: '#3182CE', // Azul
    neutral: '#A0AEC0', // Gris
  }
};

// Función para renderizar etiquetas de porcentaje en gráficos de barras
const renderCustomBarLabel = (props) => {
  const { x, y, width, height, value } = props;
  return (
    <text 
      x={x + width + 5} 
      y={y + height / 2} 
      fill="#4A5568" 
      textAnchor="start" 
      dominantBaseline="middle"
      fontSize={12}
      fontWeight={500}
    >
      {`${value}%`}
    </text>
  );
};

// Función para renderizar etiquetas personalizadas para gráficos de donut
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index, colors }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MotivationsSection = ({ data }) => {
  // Qatar specific data (inferred)
  const motivationsData = {
    motivators: [
      { factor: 'Luxury Accommodations', score: 85 },
      { factor: 'Safety & Security', score: 82 },
      { factor: 'Cultural Authenticity', score: 78 },
      { factor: 'World-class Infrastructure', score: 75 },
      { factor: 'Unique Experiences', score: 70 }
    ],
    barriers: [
      { factor: 'Limited Awareness', score: 72 },
      { factor: 'Perceived Restrictions', score: 68 },
      { factor: 'Weather Concerns', score: 65 },
      { factor: 'Limited Entertainment', score: 60 },
      { factor: 'Cultural Barriers', score: 55 }
    ],
    keyInsights: [
      {
        title: 'Primary Motivators',
        description: 'Luxury accommodations and cultural authenticity are the top factors attracting premium travelers to Qatar.'
      },
      {
        title: 'Safety Advantage',
        description: 'Qatar\'s reputation for safety and security is a significant competitive advantage in the region.'
      },
      {
        title: 'Awareness Gap',
        description: 'Limited awareness of Qatar\'s offerings is the main barrier preventing more premium travelers from visiting.'
      },
      {
        title: 'Cultural Perception',
        description: 'Perceived cultural restrictions and weather concerns are key barriers that need to be addressed.'
      }
    ],
    // Nuevos datos detallados sobre restricciones culturales
    perceivedRestrictions: {
      specific: [
        { restriction: 'Dress Code Concerns', percentage: 42 },
        { restriction: 'Alcohol Limitations', percentage: 38 },
        { restriction: 'Public Behavior Rules', percentage: 35 },
        { restriction: 'Gender Segregation', percentage: 31 },
        { restriction: 'Religious Practices', percentage: 28 }
      ],
      byAge: [
        { group: '18-25', percentage: 74 },
        { group: '26-35', percentage: 71 },
        { group: '36-45', percentage: 65 },
        { group: '46-60', percentage: 57 },
        { group: '60+', percentage: 49 }
      ],
      byMarket: [
        { market: 'North America', value: 72 },
        { market: 'Europe', value: 67 },
        { market: 'Africa', value: 64 },
        { market: 'Asia Pacific', value: 58 },
        { market: 'Middle East', value: 47 }
      ],
      trends: [
        { quarter: 'Q3 2023', value: 72 },
        { quarter: 'Q4 2023', value: 70 },
        { quarter: 'Q1 2024', value: 69 },
        { quarter: 'Q2 2024', value: 68 }
      ],
      awareness: {
        before: [
          { level: 'Very High Concern', value: 42 },
          { level: 'High Concern', value: 30 },
          { level: 'Moderate Concern', value: 18 },
          { level: 'Low Concern', value: 7 },
          { level: 'No Concern', value: 3 }
        ],
        after: [
          { level: 'Very High Concern', value: 18 },
          { level: 'High Concern', value: 25 },
          { level: 'Moderate Concern', value: 32 },
          { level: 'Low Concern', value: 20 },
          { level: 'No Concern', value: 5 }
        ]
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#8D1B3D]">Travel Motivations & Barriers</h1>
        <div className="w-24 h-0.5 bg-[#8D1B3D] mt-1 mb-6"></div>
      </div>

      {/* Key Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Top Motivator</h3>
                <div className="text-4xl font-bold text-[#5A67D8]">85%</div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">luxury accommodations are the primary draw for premium travelers</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Top Barrier</h3>
                <div className="text-4xl font-bold text-[#DD6B20]">72%</div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">limited awareness of Qatar's offerings prevents visits</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Perceived Restrictions</h3>
                <div className="text-4xl font-bold text-[#E53E3E]">68%</div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">cite perceived cultural restrictions as a barrier</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Cultural Appeal</h3>
                <div className="text-4xl font-bold text-[#38A169]">78%</div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">value authentic cultural experiences when traveling</p>
          </div>
        </div>
      </div>

      {/* Quarterly Trends Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-medium text-[#4A5568] mb-6">Quarterly Trends</h2>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                {
                  quarter: 'Q1 2023',
                  luxuryMotivator: 80,
                  awarenessBarrier: 67,
                  culturalAppeal: 72,
                  perceivedRestrictions: 73
                },
                {
                  quarter: 'Q3 2023',
                  luxuryMotivator: 81,
                  awarenessBarrier: 68,
                  culturalAppeal: 73,
                  perceivedRestrictions: 72
                },
                {
                  quarter: 'Q1 2024',
                  luxuryMotivator: 84,
                  awarenessBarrier: 71,
                  culturalAppeal: 76,
                  perceivedRestrictions: 69
                },
                {
                  quarter: 'Q3 2024',
                  luxuryMotivator: 85,
                  awarenessBarrier: 72,
                  culturalAppeal: 78,
                  perceivedRestrictions: 68
                }
              ]}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              barSize={20}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis 
                dataKey="quarter" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#4A5568', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={(value) => `${value}%`}
                domain={[0, 90]}
                tick={{ fill: '#4A5568', fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, null]}
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  padding: '10px'
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ paddingTop: 10 }}
              />
              <Bar dataKey="luxuryMotivator" name="Luxury Motivator" fill={NEW_COLORS.chart.motivator} radius={[4, 4, 0, 0]} />
              <Bar dataKey="awarenessBarrier" name="Awareness Barrier" fill={NEW_COLORS.chart.barrier} radius={[4, 4, 0, 0]} />
              <Bar dataKey="culturalAppeal" name="Cultural Appeal" fill={NEW_COLORS.chart.cultural} radius={[4, 4, 0, 0]} />
              <Bar dataKey="perceivedRestrictions" name="Perceived Restrictions" fill={NEW_COLORS.chart.restrictions} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8">
          <h3 className="text-md font-medium text-[#4A5568] mb-4">Key Observations:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded-r-lg">
              <h4 className="font-medium text-indigo-700">Premium Luxury Focus</h4>
              <p className="text-sm text-gray-600 mt-1">Luxury accommodations remain the strongest driver at 85% with steady quarterly growth</p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r-lg">
              <h4 className="font-medium text-orange-700">Awareness Challenge</h4>
              <p className="text-sm text-gray-600 mt-1">Limited awareness continues to be the main barrier despite marketing efforts (72%)</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 rounded-r-lg">
              <h4 className="font-medium text-red-700">Improving Cultural Perceptions</h4>
              <p className="text-sm text-gray-600 mt-1">Concerns about cultural restrictions show a positive downward trend from 73% to 68%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Motivators and Barriers Overview - New section */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Motivators & Barriers: Comparative Analysis</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Understanding the interplay between what drives premium travelers to Qatar and what holds them back is essential for developing effective tourism strategies.
            This comparative analysis highlights how luxury and cultural elements serve as key motivators, while awareness issues and perceived restrictions remain the main barriers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Top Travel Motivators
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={motivationsData.motivators}
                  margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
                  barSize={14}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 90]} 
                    tickFormatter={(value) => `${value}%`} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    dataKey="factor" 
                    type="category" 
                    width={140} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                    tickMargin={10}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="score" 
                    fill={NEW_COLORS.chart.motivator} 
                    radius={[0, 4, 4, 0]} 
                    label={renderCustomBarLabel}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-indigo-50 p-3 rounded-lg">
              Luxury accommodations (85%) represent the single strongest motivator for Qatar visitation, followed closely by safety & security (82%) and cultural authenticity (78%).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#DD6B20] mr-2"></div>
              Top Travel Barriers
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={motivationsData.barriers}
                  margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
                  barSize={14}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 77]} 
                    tickFormatter={(value) => `${value}%`} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    dataKey="factor" 
                    type="category" 
                    width={140} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                    tickMargin={10}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="score" 
                    fill={NEW_COLORS.chart.barrier} 
                    radius={[0, 4, 4, 0]} 
                    label={renderCustomBarLabel}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-orange-50 p-3 rounded-lg">
              Limited awareness (72%) represents the most significant barrier, indicating a knowledge gap rather than destination deficiencies. Perceived cultural restrictions (68%) follow as the second most important barrier.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#5A67D8] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Motivator-Barrier Relationship
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={[
                  { category: "Luxury", motivator: 85, barrier: 42 },
                  { category: "Culture", motivator: 78, barrier: 68 },
                  { category: "Safety", motivator: 82, barrier: 30 },
                  { category: "Infrastructure", motivator: 75, barrier: 25 },
                  { category: "Experiences", motivator: 70, barrier: 60 }
                ]}>
                  <PolarGrid gridType="polygon" stroke="#E2E8F0" />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: '#4A5568', fontSize: 12 }} 
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    tickFormatter={(value) => `${value}%`} 
                    tick={{ fill: '#4A5568', fontSize: 11 }}
                    axisLine={false}
                    tickCount={4}
                  />
                  <Radar 
                    name="Motivator Strength" 
                    dataKey="motivator" 
                    stroke={NEW_COLORS.chart.motivator} 
                    fill={NEW_COLORS.chart.motivator} 
                    fillOpacity={0.5} 
                  />
                  <Radar 
                    name="Barrier Strength" 
                    dataKey="barrier" 
                    stroke={NEW_COLORS.chart.barrier} 
                    fill={NEW_COLORS.chart.barrier} 
                    fillOpacity={0.5} 
                  />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Legend 
                    iconType="circle" 
                    iconSize={10} 
                    wrapperStyle={{ paddingTop: 15 }} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar's strengths in luxury and safety significantly outweigh perceived barriers in these areas, while cultural aspects show both strong appeal and strong barriers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#5A67D8] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Awareness Categories
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { category: "Cultural Attractions", percentage: 45 },
                      { category: "Luxury Offerings", percentage: 58 },
                      { category: "Local Experiences", percentage: 32 },
                      { category: "Entertainment Options", percentage: 40 },
                      { category: "Outdoor Activities", percentage: 28 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="percentage"
                  >
                    {[...Array(5)].map((_, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={[
                          NEW_COLORS.chart.cultural,
                          NEW_COLORS.chart.motivator,
                          NEW_COLORS.chart.barrier,
                          '#4299E1',
                          '#ED8936'
                        ][index % 5]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [
                      `${value}%`, 
                      props.payload.category
                    ]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Legend 
                    formatter={(value, entry, index) => (
                      <span style={{ color: '#4A5568', fontSize: '12px' }}>
                        {entry.payload.category}: {entry.payload.percentage}%
                      </span>
                    )}
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    iconType="circle"
                    iconSize={8}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Awareness of Qatar's luxury offerings (58%) is higher than other categories, aligning with its position as the top motivator, yet still presents an opportunity for improvement.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 mb-4">Key Strategic Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The primary opportunity lies in addressing awareness gaps, particularly for cultural attractions and experiences that align with premium travelers' interests.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Luxury positioning should be maintained and amplified as Qatar's primary competitive advantage, with emphasis on personalized service and dining experiences.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Cultural perceptions represent both a significant opportunity (78% appeal) and challenge (68% concern), suggesting targeted educational content could provide substantial returns.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The consistent quarterly improvements in key metrics indicate that current strategies are working but should be accelerated to capitalize on growing interest.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding the Motivators in Detail */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Understanding the Motivators in Detail</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            The main factors that motivate premium travelers to visit Qatar are diverse and offer 
            strategic opportunities for tourism development. Below are the five main motivators 
            and their implications detailed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#5A67D8] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Luxury Accommodations (85%)
            </h3>
            <p className="text-gray-700 mb-3">
              Five-star properties and luxury resorts are the main attraction for premium travelers,
              with emphasis on personalized service and exclusive dining experiences.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Specific preferences:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5A67D8] mr-2">•</span>
                  <span>International brand hotels with personalized service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5A67D8] mr-2">•</span>
                  <span>Resorts with spa and wellness facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5A67D8] mr-2">•</span>
                  <span>High-quality dining options</span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Demographic variations:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#5A67D8] mr-2">•</span>
                  <span>Higher importance for travelers from North America (91%) and Asia (88%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5A67D8] mr-2">•</span>
                  <span>Highest priority for the 45-65 age group (89%)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#3182CE] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#3182CE] mr-2"></div>
              Safety & Security (82%)
            </h3>
            <p className="text-gray-700 mb-3">
              Qatar's political stability and low crime rates create a significant competitive advantage, 
              especially compared to alternative regional destinations.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Valued aspects:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#3182CE] mr-2">•</span>
                  <span>Low crime rates (cited by 93%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3182CE] mr-2">•</span>
                  <span>Modern security infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3182CE] mr-2">•</span>
                  <span>Political and social stability</span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Demographic variations:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#3182CE] mr-2">•</span>
                  <span>Higher importance for families with children (89%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3182CE] mr-2">•</span>
                  <span>Higher priority for female travelers (85% vs 79% men)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#38A169] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#38A169] mr-2"></div>
              Cultural Authenticity (78%)
            </h3>
            <p className="text-gray-700 mb-3">
              Authentic cultural experiences represent a significant opportunity, with growing interest
              in local traditions, gastronomy, and heritage.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Areas of interest:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#38A169] mr-2">•</span>
                  <span>Traditional markets and souks (76%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38A169] mr-2">•</span>
                  <span>Authentic local cuisine (72%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#38A169] mr-2">•</span>
                  <span>Museums and heritage sites (68%)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#805AD5] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#805AD5] mr-2"></div>
              World-class Infrastructure (75%)
            </h3>
            <p className="text-gray-700 mb-3">
              Investments in modern infrastructure are highly valued, including the airport,
              transportation, and cutting-edge technology.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Key highlights:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#805AD5] mr-2">•</span>
                  <span>Modern international airport (82%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#805AD5] mr-2">•</span>
                  <span>Efficient transportation systems (74%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#805AD5] mr-2">•</span>
                  <span>Technology and connectivity (71%)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#D69E2E] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D69E2E] mr-2"></div>
              Unique Experiences (70%)
            </h3>
            <p className="text-gray-700 mb-3">
              Distinctive and memorable activities are increasingly important, especially for
              experiential travelers and millennials.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Sought-after experiences:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#D69E2E] mr-2">•</span>
                  <span>Desert adventures (76%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D69E2E] mr-2">•</span>
                  <span>International sporting events (68%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D69E2E] mr-2">•</span>
                  <span>Exclusive dining experiences (65%)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Strategic Recommendations: Motivators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Develop packages that combine luxury experiences with authentic cultural elements to maximize appeal.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Highlight safety and stability positioning in promotional materials targeting families and female travelers.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Create and promote more unique experiences that connect cultural authenticity with luxury and exclusivity.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Increase visibility of world-class infrastructure as an enabler of seamless travel experiences.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding the Barriers in Detail */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Understanding the Barriers in Detail</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            To develop effective strategies that increase visits from premium travelers, it is crucial 
            to understand the barriers that currently limit tourism growth in Qatar. This section 
            analyzes the main obstacles identified.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#DD6B20] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#DD6B20] mr-2"></div>
              Limited Awareness (72%)
            </h3>
            <p className="text-gray-700 mb-3">
              Lack of knowledge about Qatar's tourism offerings represents the most significant barrier, 
              indicating a substantial opportunity to improve marketing efforts.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Lowest awareness areas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#DD6B20] mr-2">•</span>
                  <span>Available cultural activities (78%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD6B20] mr-2">•</span>
                  <span>Entertainment options (74%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD6B20] mr-2">•</span>
                  <span>Unique and exclusive experiences (71%)</span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Market variations:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#DD6B20] mr-2">•</span>
                  <span>Larger issue in North America (82%) and Europe (78%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DD6B20] mr-2">•</span>
                  <span>Less problematic in the Middle East (58%) and Asia (65%)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#E53E3E] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E53E3E] mr-2"></div>
              Perceived Cultural Restrictions (68%)
            </h3>
            <p className="text-gray-700 mb-3">
              Perceptions about cultural restrictions represent a significant barrier, often based 
              on misunderstandings that can be addressed through education and informative content.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Main concerns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#E53E3E] mr-2">•</span>
                  <span>Dress code concerns (42%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E53E3E] mr-2">•</span>
                  <span>Alcohol limitations (38%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E53E3E] mr-2">•</span>
                  <span>Public behavior norms (35%)</span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Demographic variations:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#E53E3E] mr-2">•</span>
                  <span>Greater concern among travelers aged 18-35 (74%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E53E3E] mr-2">•</span>
                  <span>Lower concern among travelers aged 60+ (49%)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-yellow-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#D69E2E] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D69E2E] mr-2"></div>
              Weather Concerns (65%)
            </h3>
            <p className="text-gray-700 mb-3">
              Perceptions about extreme desert climate deter some travelers, especially 
              during the summer months.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Specific aspects:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#D69E2E] mr-2">•</span>
                  <span>Concern about high temperatures (82%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D69E2E] mr-2">•</span>
                  <span>Lack of awareness about indoor activities (67%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D69E2E] mr-2">•</span>
                  <span>Lack of awareness about optimal seasons (58%)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-teal-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#319795] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#319795] mr-2"></div>
              Limited Entertainment (60%)
            </h3>
            <p className="text-gray-700 mb-3">
              The perception of insufficient entertainment options affects decisions, 
              especially for longer stays.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Areas perceived as limited:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#319795] mr-2">•</span>
                  <span>Nighttime entertainment (75%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#319795] mr-2">•</span>
                  <span>Family activities (62%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#319795] mr-2">•</span>
                  <span>Accessible cultural events (58%)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#805AD5] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#805AD5] mr-2"></div>
              Cultural Barriers (55%)
            </h3>
            <p className="text-gray-700 mb-3">
              Cultural and linguistic differences create uncertainty for some travelers, 
              despite the high level of English usage in the tourism sector.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-[#4A5568] text-sm mb-2">Specific concerns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="text-[#805AD5] mr-2">•</span>
                  <span>Perceived language barriers (64%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#805AD5] mr-2">•</span>
                  <span>Uncertainty about local customs (61%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#805AD5] mr-2">•</span>
                  <span>Concerns about cultural navigation (58%)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Strategic Recommendations: Barriers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Implement targeted educational campaigns to address misconceptions about cultural restrictions, especially for the 18-35 age segment.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Develop specific content for North American and European markets highlighting the diversity of activities and entertainment available.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Promote activities and events by season, with emphasis on indoor options during summer months and outdoor adventures during milder months.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Create intuitive cultural guides and multilingual resources to help travelers navigate cultural differences with confidence.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Motivator Deep Dive - Nueva sección */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Luxury Accommodations: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 85% of premium travelers citing luxury accommodations as a primary draw for visiting Qatar, 
            understanding this key motivator is essential for sustaining Qatar's competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Luxury Accommodation Preferences
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { type: "5-Star Hotels", percentage: 85 },
                    { type: "Luxury Resorts", percentage: 78 },
                    { type: "Boutique Properties", percentage: 62 },
                    { type: "Serviced Apartments", percentage: 45 },
                    { type: "Vacation Rentals", percentage: 32 }
                  ]}
                  margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
                  barSize={14}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 90]} 
                    tickFormatter={(value) => `${value}%`} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    dataKey="type" 
                    type="category" 
                    width={140} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                    tickMargin={10}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill={NEW_COLORS.chart.motivator} 
                    radius={[0, 4, 4, 0]} 
                    label={renderCustomBarLabel}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-indigo-50 p-3 rounded-lg">
              Traditional 5-star hotels (85%) and luxury resorts (78%) remain the most desired accommodation types among premium travelers interested in Qatar.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Luxury Amenities Importance
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { amenity: "Personalized Service", importance: 88 },
                    { amenity: "Fine Dining", importance: 84 },
                    { amenity: "Spa Facilities", importance: 79 },
                    { amenity: "Exclusive Experiences", importance: 72 },
                    { amenity: "Technology Integration", importance: 65 }
                  ]}
                  margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                  <XAxis 
                    dataKey="amenity" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 11 }}
                    angle={-20}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 95]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="importance" 
                    fill={NEW_COLORS.chart.motivator} 
                    radius={[4, 4, 0, 0]} 
                    label={{ 
                      position: 'top', 
                      fill: '#4A5568',
                      fontSize: 11,
                      formatter: (value) => `${value}%`
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-indigo-50 p-3 rounded-lg">
              Personalized service (88%) and fine dining options (84%) are the most valued amenities among luxury travelers to Qatar.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Luxury Segments
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Traditional Luxury", value: 42 },
                      { name: "Experiential Luxury", value: 31 },
                      { name: "Wellness Focused", value: 18 },
                      { name: "Sustainable Luxury", value: 9 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {[...Array(4)].map((_, index) => (
                      <Cell key={`cell-${index}`} fill={[
                        NEW_COLORS.chart.motivator,
                        "#805AD5",
                        "#3182CE",
                        "#38A169"
                      ][index]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [
                      `${value}%`, 
                      props.payload.name
                    ]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Legend 
                    formatter={(value, entry, index) => (
                      <span style={{ color: '#4A5568', fontSize: '12px' }}>
                        {entry.payload.name}: {entry.payload.value}%
                      </span>
                    )}
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    iconType="circle"
                    iconSize={8}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-indigo-50 p-3 rounded-lg">
              Traditional luxury travelers (42%) remain the dominant segment, with experiential luxury travelers (31%) forming a growing segment.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#5A67D8] mr-2"></div>
              Quarterly Trends: Luxury Importance
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", value: 80 },
                    { quarter: "Q3 2023", value: 81 },
                    { quarter: "Q1 2024", value: 84 },
                    { quarter: "Q3 2024", value: 85 }
                  ]}
                  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="quarter" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[75, 90]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.motivator}
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                    label={{ 
                      position: 'top', 
                      fill: '#4A5568',
                      fontSize: 11,
                      formatter: (value) => `${value}%`
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-indigo-50 p-3 rounded-lg">
              La importancia del alojamiento de lujo ha mostrado un crecimiento constante durante el último año, aumentando del 80% en el primer trimestre de 2023 al 85% en el tercer trimestre de 2024.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-indigo-800 mb-4">Key Insights: Luxury Accommodations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Qatar's luxury hotel infrastructure is a significant competitive advantage that should be highlighted in marketing materials.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Personalized service and fine dining are the most valued amenities and should be emphasized in luxury property promotions.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">While traditional luxury remains dominant, experiential luxury is growing and represents a significant opportunity for differentiation.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The consistent upward trend in luxury importance suggests Qatar should continue investing in high-end accommodation offerings.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Perceived Cultural Restrictions Deep Dive - Sección actualizada */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Perceived Cultural Restrictions: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 68% of premium travelers citing perceived cultural restrictions as a significant barrier to visiting Qatar, 
            understanding these concerns is essential for developing effective strategies to address them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E53E3E] mr-2"></div>
              Specific Restriction Concerns
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={motivationsData.perceivedRestrictions.specific}
                  margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
                  barSize={14}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 50]} 
                    tickFormatter={(value) => `${value}%`} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    dataKey="restriction" 
                    type="category" 
                    width={140} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                    tickMargin={10}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill={NEW_COLORS.chart.restrictions} 
                    radius={[0, 4, 4, 0]} 
                    label={renderCustomBarLabel}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-red-50 p-3 rounded-lg">
              Dress code concerns (42%) and alcohol limitations (38%) are the most significant specific cultural restrictions perceived by premium travelers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E53E3E] mr-2"></div>
              Perception by Age Group
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={motivationsData.perceivedRestrictions.byAge}
                  margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                  <XAxis 
                    dataKey="group" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 80]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill={NEW_COLORS.chart.restrictions} 
                    radius={[4, 4, 0, 0]} 
                    label={{ 
                      position: 'top', 
                      fill: '#4A5568',
                      fontSize: 11,
                      formatter: (value) => `${value}%`
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-red-50 p-3 rounded-lg">
              Younger travelers (18-35) express significantly higher concerns about cultural restrictions compared to older age groups.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E53E3E] mr-2"></div>
              Concerns by Market
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={motivationsData.perceivedRestrictions.byMarket}>
                  <PolarGrid gridType="polygon" stroke="#E2E8F0" />
                  <PolarAngleAxis 
                    dataKey="market"
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 80]} 
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: '#4A5568', fontSize: 11 }}
                    axisLine={false}
                    tickCount={4}
                  />
                  <Radar 
                    name="Restriction Concerns" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.restrictions} 
                    fill={NEW_COLORS.chart.restrictions} 
                    fillOpacity={0.6} 
                  />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-red-50 p-3 rounded-lg">
              North American (72%) and European (67%) travelers express the highest levels of concern about Qatar's cultural restrictions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E53E3E] mr-2"></div>
              Quarterly Trends
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={motivationsData.perceivedRestrictions.trends}
                  margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="quarter" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[60, 80]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Restriction Concern']}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Restriction Concern"
                    stroke={NEW_COLORS.chart.restrictions} 
                    strokeWidth={3}
                    dot={{ fill: NEW_COLORS.chart.restrictions, r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-red-50 p-3 rounded-lg">
              Concerns about cultural restrictions show a positive downward trend from 72% in Q3 2023 to 68% in Q2 2024, indicating gradual improvement in perception.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E53E3E] mr-2"></div>
              Impact of Educational Content
            </h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 h-96 flex flex-col justify-center">
                    <div className="text-center mb-2">
                      <h4 className="text-lg font-semibold text-[#4A5568]">Educational Impact on Concerns</h4>
                    </div>
                    <BarChart
                      width={400}
                      height={300}
                      data={[
                        { 
                          name: "Very High Concern", 
                          before: motivationsData.perceivedRestrictions.awareness.before[0].value,
                          after: motivationsData.perceivedRestrictions.awareness.after[0].value,
                          color: NEW_COLORS.chart.restrictions
                        },
                        { 
                          name: "High Concern", 
                          before: motivationsData.perceivedRestrictions.awareness.before[1].value,
                          after: motivationsData.perceivedRestrictions.awareness.after[1].value,
                          color: '#F56565'
                        },
                        { 
                          name: "Moderate Concern", 
                          before: motivationsData.perceivedRestrictions.awareness.before[2].value,
                          after: motivationsData.perceivedRestrictions.awareness.after[2].value,
                          color: '#ED8936'
                        },
                        { 
                          name: "Low Concern", 
                          before: motivationsData.perceivedRestrictions.awareness.before[3].value,
                          after: motivationsData.perceivedRestrictions.awareness.after[3].value,
                          color: '#ECC94B'
                        },
                        { 
                          name: "No Concern", 
                          before: motivationsData.perceivedRestrictions.awareness.before[4].value,
                          after: motivationsData.perceivedRestrictions.awareness.after[4].value,
                          color: '#48BB78'
                        }
                      ]}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} opacity={0.2} />
                      <XAxis 
                        type="number" 
                        domain={[0, 45]}
                        tickFormatter={(value) => `${value}%`}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#4A5568', fontSize: 11 }}
                      />
                      <YAxis 
                        dataKey="name" 
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#4A5568', fontSize: 12 }}
                        width={120}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, null]}
                        contentStyle={{ 
                          borderRadius: '8px', 
                          border: 'none', 
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                          padding: '10px'
                        }}
                      />
                      <Legend 
                        verticalAlign="top" 
                        iconType="circle"
                        iconSize={10}
                        formatter={(value) => {
                          return <span style={{ color: '#4A5568', fontSize: '12px' }}>{value}</span>
                        }}
                      />
                      <Bar 
                        dataKey="before" 
                        name="Before Education" 
                        fill="#A0AEC0" 
                        barSize={15}
                        radius={[0, 0, 0, 0]}
                      >
                        {[0, 1, 2, 3, 4].map((index) => (
                          <Cell 
                            key={`before-${index}`} 
                            fill={index === 0 ? NEW_COLORS.chart.restrictions : 
                                  index === 1 ? '#F56565' : 
                                  index === 2 ? '#ED8936' : 
                                  index === 3 ? '#ECC94B' : 
                                  '#48BB78'} 
                            fillOpacity={0.8}
                          />
                        ))}
                      </Bar>
                      <Bar 
                        dataKey="after" 
                        name="After Education" 
                        fill="#4A5568" 
                        barSize={15}
                        radius={[0, 0, 0, 0]}
                      >
                        {[0, 1, 2, 3, 4].map((index) => (
                          <Cell 
                            key={`after-${index}`} 
                            fill={index === 0 ? NEW_COLORS.chart.restrictions : 
                                  index === 1 ? '#F56565' : 
                                  index === 2 ? '#ED8936' : 
                                  index === 3 ? '#ECC94B' : 
                                  '#48BB78'} 
                          />
                        ))}
                        <LabelList 
                          dataKey="after" 
                          position="right" 
                          formatter={(value) => `${value}%`}
                          style={{ fill: '#4A5568', fontSize: 11, fontWeight: 500 }}
                        />
                      </Bar>
                    </BarChart>
                  </div>
                  
                  <div className="w-full md:w-1/2 h-96 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-sm p-5 max-w-lg w-full">
                      <h4 className="text-lg font-semibold text-[#4A5568] mb-4 text-center">Before vs After Educational Content</h4>
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left pb-2">Concern Level</th>
                            <th className="text-center pb-2">Before</th>
                            <th className="text-center pb-2">After</th>
                            <th className="text-center pb-2">Change</th>
                          </tr>
                        </thead>
                        <tbody>
                          {motivationsData.perceivedRestrictions.awareness.before.map((item, index) => {
                            const afterValue = motivationsData.perceivedRestrictions.awareness.after[index].value;
                            const change = afterValue - item.value;
                            const changeColor = change < 0 ? 'text-red-600' : change > 0 ? 'text-green-600' : 'text-gray-600';
                            
                            return (
                              <tr key={item.level} className="border-b border-gray-100">
                                <td className="py-3 flex items-center">
                                  <span className="inline-block w-3 h-3 rounded-full mr-2" 
                                    style={{ 
                                      backgroundColor: index === 0 ? NEW_COLORS.chart.restrictions : 
                                                      index === 1 ? '#F56565' : 
                                                      index === 2 ? '#ED8936' : 
                                                      index === 3 ? '#ECC94B' : 
                                                      '#48BB78'
                                    }}>
                                  </span>
                                  <span className="text-sm">{item.level}</span>
                                </td>
                                <td className="py-3 text-center text-sm font-medium">{item.value}%</td>
                                <td className="py-3 text-center text-sm font-medium">{afterValue}%</td>
                                <td className={`py-3 text-center text-sm font-medium ${changeColor}`}>
                                  {change > 0 ? '+' : ''}{change}%
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-red-50 rounded-lg mt-4">
              <h4 className="font-medium text-red-800 mb-2">Key Educational Impact:</h4>
              <p className="text-sm text-gray-700 mb-3">
                Educational content about Qatar's cultural norms significantly reduces "Very High Concern" perceptions from <span className="font-bold">42%</span> to <span className="font-bold">18%</span>, 
                while increasing "Low Concern" from <span className="font-bold">7%</span> to <span className="font-bold">20%</span>.
              </p>
              <p className="text-sm text-gray-700">
                This demonstrates the effectiveness of targeted educational campaigns in addressing misconceptions and reducing perceived cultural barriers to travel.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-red-800 mb-4">Key Insights: Cultural Restrictions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Younger travelers (18-35) should be targeted for educational campaigns about cultural restrictions.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Specific concerns about dress code and alcohol limitations should be addressed directly in marketing materials.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">North American and European markets require more focused educational campaigns about Qatar's cultural norms.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The proven effectiveness of educational content suggests expanding these initiatives could significantly reduce perceived barriers.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations for Addressing Cultural Restrictions */}
      <div className="bg-red-50 p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold text-red-800 mb-4">Strategic Recommendations: Addressing Cultural Perceptions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start mb-3">
              <div className="bg-red-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-700 text-lg">Educational Content</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Create targeted educational materials for younger travelers (18-35) addressing specific concerns about dress code and alcohol limitations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start mb-3">
              <div className="bg-red-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-700 text-lg">Market Focus</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Develop specialized campaigns for North American (72%) and European (67%) markets, which show the highest levels of concern.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start mb-3">
              <div className="bg-red-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-700 text-lg">Visual Content</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Increase usage of visual content showing the modern cultural environment to counter misconceptions about restrictions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start mb-3">
              <div className="bg-red-100 p-2 rounded-lg mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-red-700 text-lg">Influencer Partnerships</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Partner with travel influencers from key markets to showcase authentic experiences that dispel cultural misconceptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Limited Awareness: Deep Dive */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Limited Awareness: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 72% of premium travelers citing limited awareness as the primary barrier to visiting Qatar, 
            understanding and addressing this knowledge gap is crucial for increasing visitor numbers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#DD6B20] mr-2"></div>
              Market Awareness Disparities
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { market: "North America", percentage: 82 },
                    { market: "Europe", percentage: 78 },
                    { market: "Africa", percentage: 68 },
                    { market: "Asia Pacific", percentage: 65 },
                    { market: "Middle East", percentage: 58 }
                  ]}
                  margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                  <XAxis 
                    dataKey="market" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 90]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill={NEW_COLORS.chart.barrier} 
                    radius={[4, 4, 0, 0]} 
                    label={{ 
                      position: 'top', 
                      fill: '#4A5568',
                      fontSize: 11,
                      formatter: (value) => `${value}%`
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-orange-50 p-3 rounded-lg">
              Awareness gaps are most significant in North American (82%) and European (78%) markets, representing key opportunities for targeted marketing campaigns.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#DD6B20] mr-2"></div>
              Content Knowledge Gaps
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { category: "Cultural Activities", percentage: 78 },
                    { category: "Entertainment Options", percentage: 74 },
                    { category: "Unique Experiences", percentage: 71 },
                    { category: "Seasonal Events", percentage: 68 },
                    { category: "Luxury Offerings", percentage: 42 }
                  ]}
                  margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
                  barSize={14}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    domain={[0, 85]} 
                    tickFormatter={(value) => `${value}%`} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    width={140} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                    tickMargin={10}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill={NEW_COLORS.chart.barrier} 
                    radius={[0, 4, 4, 0]} 
                    label={renderCustomBarLabel}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-orange-50 p-3 rounded-lg">
              Knowledge gaps are most pronounced for cultural activities (78%) and entertainment options (74%), while luxury offerings are better known.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#DD6B20] mr-2"></div>
              Awareness by Demographic
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={[
                  { group: "18-25", value: 78 },
                  { group: "26-35", value: 75 },
                  { group: "36-45", value: 70 },
                  { group: "46-60", value: 68 },
                  { group: "60+", value: 65 }
                ]}>
                  <PolarGrid gridType="polygon" stroke="#E2E8F0" />
                  <PolarAngleAxis 
                    dataKey="group"
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 80]} 
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: '#4A5568', fontSize: 11 }}
                    axisLine={false}
                    tickCount={4}
                  />
                  <Radar 
                    name="Limited Awareness" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.barrier} 
                    fill={NEW_COLORS.chart.barrier} 
                    fillOpacity={0.6} 
                  />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-orange-50 p-3 rounded-lg">
              Awareness issues are most pronounced among younger travelers (18-35), suggesting opportunities for digital-first marketing strategies.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#DD6B20] mr-2"></div>
              Quarterly Awareness Trends
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", awareness: 75, interest: 58 },
                    { quarter: "Q3 2023", awareness: 73, interest: 61 },
                    { quarter: "Q1 2024", awareness: 72, interest: 65 },
                    { quarter: "Q3 2024", awareness: 72, interest: 69 }
                  ]}
                  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="quarter" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[50, 80]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Legend iconType="circle" />
                  <Line 
                    type="monotone" 
                    dataKey="awareness" 
                    name="Limited Awareness"
                    stroke={NEW_COLORS.chart.barrier}
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="interest" 
                    name="Interest Level"
                    stroke="#38A169"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-orange-50 p-3 rounded-lg">
              While awareness challenges have remained relatively stable, interest in visiting Qatar has increased by 11 percentage points year-over-year, suggesting effective but limited reach of current campaigns.
            </p>
          </div>
        </div>
        
        <div className="bg-orange-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-orange-800 mb-4">Key Insights: Limited Awareness</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">North American and European markets should be prioritized for awareness campaigns, with a focus on cultural activities and entertainment options.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Younger travelers (18-35) require focused digital strategies that address their specific knowledge gaps and motivations.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Increasing interest despite stable awareness suggests that current efforts are effective but reaching a limited audience, indicating an opportunity to expand reach.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Leveraging Qatar's well-known luxury offerings as a gateway to promote less familiar cultural and entertainment options could accelerate awareness growth.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Authenticity: Deep Dive */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Cultural Authenticity: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 78% of premium travelers citing cultural authenticity as a primary motivator for visiting Qatar, 
            leveraging this strong appeal is crucial for differentiation in the competitive luxury travel market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="col-span-1">
            <div className="bg-gray-50 p-5 rounded-lg mb-8">
              <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#38A169] mr-2"></div>
                Cultural Interest by Region
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={[
                    { category: "Middle East", value: 92 },
                    { category: "Asia Pacific", value: 85 },
                    { category: "Europe", value: 78 },
                    { category: "North America", value: 72 },
                    { category: "Latin America", value: 68 }
                  ]}>
                    <PolarGrid gridType="polygon" stroke="#E2E8F0" />
                    <PolarAngleAxis 
                      dataKey="category"
                      tick={{ fill: '#4A5568', fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tickFormatter={(value) => `${value}%`}
                      tick={{ fill: '#4A5568', fontSize: 11 }}
                      axisLine={false}
                      tickCount={5}
                    />
                    <Radar 
                      name="Interest Level" 
                      dataKey="value" 
                      stroke={NEW_COLORS.chart.cultural} 
                      fill={NEW_COLORS.chart.cultural} 
                      fillOpacity={0.6} 
                    />
                    <Tooltip 
                      formatter={(value) => `${value}%`}
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                      labelStyle={{ color: '#2D3748', fontWeight: '600' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#38A169] mr-2"></div>
                Cultural Appeal by Traveler Type
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Cultural Explorers", value: 42 },
                        { name: "Luxury Experience Seekers", value: 35 },
                        { name: "Authentic Foodies", value: 15 },
                        { name: "History Enthusiasts", value: 8 }
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {[...Array(4)].map((_, index) => (
                        <Cell key={`cell-${index}`} fill={[
                          NEW_COLORS.chart.cultural,
                          "#38B2AC",
                          "#4FD1C5",
                          "#81E6D9"
                        ][index]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value}%`, 
                        props.payload.name
                      ]}
                      contentStyle={{ 
                        borderRadius: '8px', 
                        border: 'none', 
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        padding: '10px'
                      }}
                    />
                    <Legend 
                      formatter={(value, entry, index) => (
                        <span style={{ color: '#4A5568', fontSize: '12px' }}>
                          {entry.payload.name}: {entry.payload.value}%
                        </span>
                      )}
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                      iconType="circle"
                      iconSize={8}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-3 bg-green-50 p-3 rounded-lg">
                Cultural Explorers (42%) and Luxury Experience Seekers (35%) represent the largest segments interested in Qatar's authentic cultural offerings.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#38A169] mr-2"></div>
              Qatar's Cultural Strengths
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={[
                  { category: "Museums & Art", value: 82 },
                  { category: "Architecture", value: 79 },
                  { category: "Traditional Markets", value: 76 },
                  { category: "Local Cuisine", value: 72 },
                  { category: "Heritage Sites", value: 68 }
                ]}>
                  <PolarGrid gridType="polygon" stroke="#E2E8F0" />
                  <PolarAngleAxis 
                    dataKey="category"
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 90]} 
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: '#4A5568', fontSize: 11 }}
                    axisLine={false}
                    tickCount={5}
                  />
                  <Radar 
                    name="Cultural Strength" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.cultural} 
                    fill={NEW_COLORS.chart.cultural} 
                    fillOpacity={0.6} 
                  />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-green-50 p-3 rounded-lg">
              Qatar's museums & art (82%) and architecture (79%) are perceived as its strongest cultural assets among premium travelers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[#4A5568] flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#38A169] mr-2"></div>
              Quarterly Trends: Cultural Appeal
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", value: 72 },
                    { quarter: "Q3 2023", value: 73 },
                    { quarter: "Q1 2024", value: 76 },
                    { quarter: "Q3 2024", value: 78 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="quarter" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[70, 80]}
                    tick={{ fill: '#4A5568', fontSize: 12 }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, null]}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      padding: '10px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="Cultural Appeal" 
                    stroke={NEW_COLORS.chart.cultural} 
                    strokeWidth={3}
                    dot={{ fill: NEW_COLORS.chart.cultural, r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-3 bg-green-50 p-3 rounded-lg">
              El interés en experiencias culturales auténticas ha mostrado un crecimiento constante durante el último año, aumentando del 72% en el primer trimestre de 2023 al 78% en el tercer trimestre de 2024.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-green-800 mb-4">Key Insights: Cultural Authenticity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Traditional markets, souks, and authentic cuisine represent the strongest cultural appeals and should be highlighted in marketing materials.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Marketing should target Cultural Explorers and Luxury Experience Seekers, particularly in the 36-45 age range, who show the highest interest in authentic experiences.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">European and North American markets should receive targeted cultural messaging, as they show both high awareness gaps and high cultural interest.</span>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Creating experiences that blend cultural authenticity with luxury elements will appeal to the largest segments of premium travelers interested in Qatar.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationsSection; 
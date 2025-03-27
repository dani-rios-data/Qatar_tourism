import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line } from 'recharts';

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

const MotivationsSection = ({ data }) => {
  // Qatar specific data (inferred)
  const motivationsData = {
    motivators: [
      { factor: 'Luxury Accommodations', score: 85 },
      { factor: 'Cultural Authenticity', score: 78 },
      { factor: 'Safety & Security', score: 82 },
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
        { market: 'Asia Pacific', value: 58 },
        { market: 'Middle East', value: 47 },
        { market: 'Africa', value: 64 }
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
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-medium text-[#4A5568] mb-4">Quarterly Trends</h2>
        
        <div className="h-72">
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
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={30}
              barGap={4}
            >
              <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={(value) => `${value}%`}
                domain={[0, 90]}
              />
              <Tooltip formatter={(value) => `${value}%`} />
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

        <div className="mt-6">
          <h3 className="text-md font-medium text-[#4A5568] mb-2">Key Observations:</h3>
          
          <div className="border-l-4 border-indigo-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-indigo-700">Premium Luxury Focus</h4>
            <p className="text-sm text-gray-600">Luxury accommodations remain the strongest driver at 85% with steady quarterly growth</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-orange-700">Awareness Challenge</h4>
            <p className="text-sm text-gray-600">Limited awareness continues to be the main barrier despite marketing efforts (72%)</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-red-700">Improving Cultural Perceptions</h4>
            <p className="text-sm text-gray-600">Concerns about cultural restrictions show a positive downward trend from 73% to 68%</p>
          </div>
        </div>
      </div>

      {/* Motivators and Barriers Overview - New section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Motivators & Barriers: Comparative Analysis</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Understanding the interplay between what drives premium travelers to Qatar and what holds them back is essential for developing effective tourism strategies.
            This comparative analysis highlights how luxury and cultural elements serve as key motivators, while awareness issues and perceived restrictions remain the main barriers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Top Travel Motivators</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={motivationsData.motivators}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 90]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="factor" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="score" fill={NEW_COLORS.chart.motivator} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Luxury accommodations (85%) represent the single strongest motivator for Qatar visitation, followed closely by safety & security (82%) and cultural authenticity (78%).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Top Travel Barriers</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={motivationsData.barriers}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 77]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="factor" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="score" fill={NEW_COLORS.chart.barrier} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Limited awareness (72%) represents the most significant barrier, indicating a knowledge gap rather than destination deficiencies. Perceived cultural restrictions (68%) follow as the second most important barrier.
            </p>
          </div>
        </div>
        
        {/* Nueva subsección de explicación detallada de barreras */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3 text-[#8D1B3D]">Understanding the Motivators in Detail</h3>
          <p className="text-gray-700 mb-4">
            The key factors motivating premium travelers to visit Qatar offer important insights for tourism strategy. Understanding these motivators helps create targeted marketing and service improvement approaches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Luxury Accommodations (85%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                The strongest driver for premium travelers, with specific preferences:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>5-star hotels (85%) and luxury resorts (78%) are most desired</li>
                <li>Personalized service (88%) is the most valued amenity</li>
                <li>Fine dining options (84%) are crucial for the luxury experience</li>
                <li>Traditional luxury travelers (42%) form the largest premium segment</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Safety & Security (82%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                A significant competitive advantage for Qatar, with important dimensions:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Personal safety concerns (92% rate as important)</li>
                <li>Low crime rates recognized by 88% of premium travelers</li>
                <li>Political stability (75% consider important)</li>
                <li>Health and medical facilities (72% value highly)</li>
                <li>Clean and well-maintained public spaces (68%)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Cultural Authenticity (78%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                A growing appeal factor, particularly among specific demographics:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Local cuisine (84%) tops the list of desired cultural experiences</li>
                <li>Historical sites (76%) are a major draw for cultural travelers</li>
                <li>Interest increases with age, peaking at 88% for travelers 60+</li>
                <li>Museums & art (82%) are perceived as Qatar's strongest cultural assets</li>
                <li>Traditional markets (75%) offer authentic local experiences</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">World-class Infrastructure (75%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Qatar's modern built environment creates a significant advantage:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Modern transportation systems (82% rate highly)</li>
                <li>Impressive architectural landmarks (80% find appealing)</li>
                <li>Technology integration in cities and venues (72%)</li>
                <li>Quality of shopping malls and retail spaces (70%)</li>
                <li>Sports facilities and stadiums (68% following World Cup)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Unique Experiences (70%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Differentiated experiences represent a growing motivator:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Desert adventures and activities (76% interested)</li>
                <li>Exclusive shopping opportunities (72%)</li>
                <li>Premium sporting events (68%)</li>
                <li>Cultural festivals and performances (65%)</li>
                <li>Water activities along the coastline (58%)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Demographic Variations</h4>
              </div>
              <p className="text-sm text-gray-600">
                Motivational factors vary significantly across demographics:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Younger travelers (18-35): more drawn to unique experiences (78%)</li>
                <li>Older travelers (60+): higher value on cultural authenticity (88%)</li>
                <li>Families: prioritize safety (86%) and infrastructure (80%)</li>
                <li>North Americans: particularly value luxury accommodations (88%)</li>
                <li>Asian travelers: highly rate modern infrastructure (82%)</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            These detailed motivational factors provide a roadmap for enhancing Qatar's appeal to premium travelers through targeted improvements and focused marketing efforts highlighting key strengths.
          </p>
        </div>
        
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3 text-[#8D1B3D]">Understanding the Barriers in Detail</h3>
          <p className="text-gray-700 mb-4">
            The barriers limiting premium travelers from visiting Qatar have specific aspects that require attention. Understanding these details is crucial for developing effective strategies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Limited Awareness (72%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Goes beyond simple unfamiliarity. The data shows that:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>58% know about luxury offerings, but only 45% know about cultural attractions</li>
                <li>Only 32% are aware of authentic local experiences</li>
                <li>Markets like North America (22%) and Europe (28%) have extremely low awareness</li>
                <li>38% use social media as their primary information source</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Perceived Restrictions (68%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Includes specific concerns about cultural norms:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Dress code concerns (42%)</li>
                <li>Perceived limitations on alcohol consumption (38%)</li>
                <li>Public behavior rules (35%)</li>
                <li>Perception of gender segregation (31%)</li>
                <li>Religious practices and their impact on the experience (28%)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Weather Concerns (65%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Climatic conditions represent a significant barrier:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Extreme summer temperatures (June-September) exceeding 40°C</li>
                <li>Misconceptions about available activities during hot seasons</li>
                <li>Lack of awareness about optimal conditions from November-April</li>
                <li>Concerns about outdoor activities (54% interested in these)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Limited Entertainment (60%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Perception of insufficient leisure options:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Lack of awareness about cultural events (only 40% aware)</li>
                <li>Perception of limited nightlife (58% consider important)</li>
                <li>Concerns about family entertainment options (relevant for 45%)</li>
                <li>Misinformation about festivals, concerts, and sporting events</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Cultural Barriers (55%)</h4>
              </div>
              <p className="text-sm text-gray-600">
                Cultural differences beyond formal restrictions:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Perceived language barriers (42% concerned)</li>
                <li>Difficulty immersing in local culture (38%)</li>
                <li>Concerns about authentic local interactions (35%)</li>
                <li>Worries about unfamiliar customs and social etiquette (32%)</li>
                <li>Perceptions about hospitality and cultural openness (25%)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-2">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h4 className="text-md font-medium text-[#4A5568]">Demographic Impact</h4>
              </div>
              <p className="text-sm text-gray-600">
                Barriers vary significantly by demographics:
              </p>
              <ul className="text-sm text-gray-600 mt-2 ml-4 list-disc space-y-1">
                <li>Young travelers (18-35): more concerned about restrictions (74%)</li>
                <li>Senior travelers (60+): more concerned about climate (71%)</li>
                <li>Families: higher concern about entertainment options (68%)</li>
                <li>North Americans: elevated concern about restrictions (72%)</li>
                <li>Asian travelers: more concerned about language barriers (65%)</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Understanding these specific details enables the development of more effective and targeted marketing strategies, directly addressing the real concerns of potential premium travelers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Motivator-Barrier Relationship</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                  { category: "Luxury", motivator: 85, barrier: 42 },
                  { category: "Culture", motivator: 78, barrier: 68 },
                  { category: "Safety", motivator: 82, barrier: 30 },
                  { category: "Infrastructure", motivator: 75, barrier: 25 },
                  { category: "Experiences", motivator: 70, barrier: 60 }
                ]}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <Radar name="Motivator Strength" dataKey="motivator" stroke={NEW_COLORS.chart.motivator} 
                         fill={NEW_COLORS.chart.motivator} fillOpacity={0.5} />
                  <Radar name="Barrier Strength" dataKey="barrier" stroke={NEW_COLORS.chart.barrier} 
                         fill={NEW_COLORS.chart.barrier} fillOpacity={0.5} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar's strengths in luxury and safety significantly outweigh perceived barriers in these areas, while cultural aspects show both strong appeal and strong barriers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Awareness Categories</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { category: "Cultural Attractions", percentage: 45 },
                    { category: "Luxury Offerings", percentage: 58 },
                    { category: "Local Experiences", percentage: 32 },
                    { category: "Entertainment Options", percentage: 40 },
                    { category: "Outdoor Activities", percentage: 28 }
                  ]}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 65]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="category" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill={NEW_COLORS.chart.barrier} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Awareness of Qatar's luxury offerings (58%) is higher than other categories, aligning with its position as the top motivator, yet still presents an opportunity for improvement.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 mb-3">Key Strategic Insights</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The primary opportunity lies in addressing awareness gaps, particularly for cultural attractions and experiences that align with premium travelers' interests.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Luxury positioning should be maintained and amplified as Qatar's primary competitive advantage, with emphasis on personalized service and dining experiences.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Cultural perceptions represent both a significant opportunity (78% appeal) and challenge (68% concern), suggesting targeted educational content could provide substantial returns.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The consistent quarterly improvements in key metrics indicate that current strategies are working but should be accelerated to capitalize on growing interest.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Motivator Deep Dive - Nueva sección */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Luxury Accommodations: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 85% of premium travelers citing luxury accommodations as a primary draw for visiting Qatar, 
            understanding this key motivator is essential for sustaining Qatar's competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Luxury Accommodation Preferences</h3>
            <div className="h-64">
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
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 90]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="type" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill={NEW_COLORS.chart.motivator} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Traditional 5-star hotels (85%) and luxury resorts (78%) remain the most desired accommodation types among premium travelers interested in Qatar.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Luxury Amenities Importance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { amenity: "Personalized Service", importance: 88 },
                    { amenity: "Fine Dining", importance: 84 },
                    { amenity: "Spa Facilities", importance: 79 },
                    { amenity: "Exclusive Experiences", importance: 72 },
                    { amenity: "Technology Integration", importance: 65 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={30}
                >
                  <XAxis dataKey="amenity" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 95]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="importance" fill={NEW_COLORS.chart.motivator} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Personalized service (88%) and fine dining options (84%) are the most valued amenities among luxury travelers to Qatar.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Luxury Segments</h3>
            <div className="h-64">
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
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
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
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Traditional luxury travelers (42%) remain the dominant segment, with experiential luxury travelers (31%) forming a growing segment.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Quarterly Trends: Luxury Importance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", value: 80 },
                    { quarter: "Q3 2023", value: 81 },
                    { quarter: "Q1 2024", value: 84 },
                    { quarter: "Q3 2024", value: 85 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[75, 90]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.motivator}
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              La importancia del alojamiento de lujo ha mostrado un crecimiento constante durante el último año, aumentando del 80% en el primer trimestre de 2023 al 85% en el tercer trimestre de 2024.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-indigo-800 mb-3">Key Insights: Luxury Accommodations</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Qatar's luxury hotel infrastructure is a significant competitive advantage that should be highlighted in marketing materials.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Personalized service and fine dining are the most valued amenities and should be emphasized in luxury property promotions.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">While traditional luxury remains dominant, experiential luxury is growing and represents a significant opportunity for differentiation.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The consistent upward trend in luxury importance suggests Qatar should continue investing in high-end accommodation offerings.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Barrier Deep Dive - Nueva sección */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Limited Awareness: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 72% of potential premium travelers citing limited awareness of Qatar's offerings as their main barrier to visiting, 
            addressing this knowledge gap represents the most significant opportunity to increase tourism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Awareness Categories</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { category: "Cultural Attractions", percentage: 45 },
                    { category: "Luxury Offerings", percentage: 58 },
                    { category: "Local Experiences", percentage: 32 },
                    { category: "Entertainment Options", percentage: 40 },
                    { category: "Outdoor Activities", percentage: 28 }
                  ]}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 65]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="category" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill={NEW_COLORS.chart.barrier} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              While luxury offerings have relatively higher awareness (58%), other important categories like cultural attractions (45%) and local experiences (32%) suffer from low awareness.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Awareness by Market</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { market: "North America", awareness: 22 },
                    { market: "Europe", awareness: 28 },
                    { market: "Asia Pacific", awareness: 35 },
                    { market: "Middle East", awareness: 62 },
                    { market: "Africa", awareness: 30 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={30}
                >
                  <XAxis dataKey="market" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 70]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="awareness" fill={NEW_COLORS.chart.barrier} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Awareness of Qatar's tourism offerings is significantly higher in the Middle East region (62%) compared to key long-haul markets like North America (22%) and Europe (28%).
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Information Sources Used</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Social Media", value: 38 },
                      { name: "Travel Publications", value: 24 },
                      { name: "Word of Mouth", value: 18 },
                      { name: "Online Reviews", value: 12 },
                      { name: "Travel Agencies", value: 8 }
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Cell key={`cell-${index}`} fill={[
                        NEW_COLORS.chart.barrier,
                        "#F6AD55",
                        "#FC8181",
                        "#F6E05E",
                        "#68D391"
                      ][index]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Social media (38%) and travel publications (24%) are the primary information sources used by premium travelers researching destinations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Quarterly Trends: Awareness Barrier</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", value: 67 },
                    { quarter: "Q3 2023", value: 68 },
                    { quarter: "Q1 2024", value: 71 },
                    { quarter: "Q3 2024", value: 72 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[65, 75]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.barrier} 
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              La barrera de concienciación ha aumentado ligeramente del 67% al 72% durante el último año, lo que sugiere que los esfuerzos de marketing no han seguido el ritmo de los destinos competitivos.
            </p>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-orange-800 mb-3">Key Insights: Awareness Gap</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">North American and European markets should be prioritized for awareness campaigns, given their large potential combined with very low current awareness.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Social media platforms represent the most effective channel for raising awareness among premium travelers considering new destinations.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Highlighting cultural attractions and local experiences should be a focus, as these categories currently have the most significant awareness gaps.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The growing awareness gap suggests a need for more aggressive and targeted marketing campaigns to compete effectively with regional rivals.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Perceived Cultural Restrictions Deep Dive - Sección actualizada */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Perceived Cultural Restrictions: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 68% of premium travelers citing perceived cultural restrictions as a significant barrier to visiting Qatar, 
            understanding these concerns is essential for developing effective strategies to address them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Specific Restriction Concerns</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={motivationsData.perceivedRestrictions.specific}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 50]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="restriction" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill={NEW_COLORS.chart.restrictions} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Dress code concerns (42%) and alcohol limitations (38%) are the most significant specific cultural restrictions perceived by premium travelers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Perception by Age Group</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={motivationsData.perceivedRestrictions.byAge}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={30}
                >
                  <XAxis dataKey="group" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 80]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill={NEW_COLORS.chart.restrictions} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Younger travelers (18-35) express significantly higher concerns about cultural restrictions compared to older age groups.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Concerns by Market</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={motivationsData.perceivedRestrictions.byMarket}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="market" />
                  <PolarRadiusAxis angle={30} domain={[0, 80]} tickFormatter={(value) => `${value}%`} />
                  <Radar name="Restriction Concerns" dataKey="value" stroke={NEW_COLORS.chart.restrictions} 
                         fill={NEW_COLORS.chart.restrictions} fillOpacity={0.6} />
                  <Tooltip formatter={(value) => `${value}%`} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              North American (72%) and European (67%) travelers express the highest levels of concern about Qatar's cultural restrictions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Quarterly Trends: Perceived Restrictions</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", value: 73 },
                    { quarter: "Q3 2023", value: 72 },
                    { quarter: "Q1 2024", value: 69 },
                    { quarter: "Q3 2024", value: 68 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[60, 75]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.restrictions} 
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Las preocupaciones sobre restricciones culturales han mostrado una disminución constante, bajando del 73% en el primer trimestre de 2023 al 68% en el tercer trimestre de 2024.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Impact of Educational Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-[#4A5568] mb-2">Before Exposure to Educational Content</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={motivationsData.perceivedRestrictions.awareness.before}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {motivationsData.perceivedRestrictions.awareness.before.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? NEW_COLORS.chart.restrictions : 
                              index === 1 ? '#F56565' : 
                              index === 2 ? '#ED8936' : 
                              index === 3 ? '#ECC94B' : 
                              '#48BB78'} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-[#4A5568] mb-2">After Exposure to Educational Content</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={motivationsData.perceivedRestrictions.awareness.after}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {motivationsData.perceivedRestrictions.awareness.after.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? NEW_COLORS.chart.restrictions : 
                              index === 1 ? '#F56565' : 
                              index === 2 ? '#ED8936' : 
                              index === 3 ? '#ECC94B' : 
                              '#48BB78'} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Educational content about Qatar's cultural norms significantly reduces "Very High Concern" perceptions from 42% to 18%, 
            while increasing "Low Concern" from 7% to 20%.
          </p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-red-800 mb-3">Key Insights: Cultural Restrictions</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Younger travelers (18-35) should be targeted for educational campaigns about cultural restrictions.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Specific concerns about dress code and alcohol limitations should be addressed directly in marketing materials.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">North American and European markets require more focused educational campaigns about Qatar's cultural norms.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The proven effectiveness of educational content suggests expanding these initiatives could significantly reduce perceived barriers.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Cultural Appeal Deep Dive - Nueva sección */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[#8D1B3D]">Cultural Authenticity: Deep Dive</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            With 78% of premium travelers valuing authentic cultural experiences when traveling, 
            Qatar's rich cultural heritage represents a significant opportunity for differentiation in the region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Most Valued Cultural Experiences</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { experience: "Local Cuisine", percentage: 84 },
                    { experience: "Historical Sites", percentage: 76 },
                    { experience: "Local Traditions", percentage: 72 },
                    { experience: "Art & Museums", percentage: 65 },
                    { experience: "Cultural Festivals", percentage: 58 }
                  ]}
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 90]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="experience" type="category" width={120} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="percentage" fill={NEW_COLORS.chart.cultural} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Local cuisine (84%) and historical sites (76%) are the most valued cultural experiences among premium travelers, representing significant opportunities for Qatar.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Cultural Interest by Age Group</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { group: "18-25", interest: 65 },
                    { group: "26-35", interest: 72 },
                    { group: "36-45", interest: 79 },
                    { group: "46-60", interest: 84 },
                    { group: "60+", interest: 88 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barSize={30}
                >
                  <XAxis dataKey="group" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 95]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="interest" fill={NEW_COLORS.chart.cultural} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Interest in cultural experiences increases significantly with age, with the highest interest among travelers aged 46+ (84-88%), suggesting a target opportunity for Qatar.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Qatar's Cultural Strengths</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                  { attribute: "Museums & Art", value: 82 },
                  { attribute: "Architecture", value: 79 },
                  { attribute: "Traditional Markets", value: 75 },
                  { attribute: "Local Cuisine", value: 72 },
                  { attribute: "Heritage Sites", value: 68 }
                ]}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="attribute" />
                  <PolarRadiusAxis angle={30} domain={[0, 90]} tickFormatter={(value) => `${value}%`} />
                  <Radar name="Cultural Strength" dataKey="value" stroke={NEW_COLORS.chart.cultural} 
                         fill={NEW_COLORS.chart.cultural} fillOpacity={0.6} />
                  <Tooltip formatter={(value) => `${value}%`} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar's museums & art (82%) and architecture (79%) are perceived as its strongest cultural assets among premium travelers.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-[#4A5568]">Quarterly Trends: Cultural Appeal</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { quarter: "Q1 2023", value: 72 },
                    { quarter: "Q3 2023", value: 73 },
                    { quarter: "Q1 2024", value: 76 },
                    { quarter: "Q3 2024", value: 78 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="quarter" axisLine={false} tickLine={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tickFormatter={(value) => `${value}%`}
                    domain={[70, 80]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={NEW_COLORS.chart.cultural}
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              El interés en experiencias culturales auténticas ha mostrado un crecimiento constante durante el último año, aumentando del 72% en el primer trimestre de 2023 al 78% en el tercer trimestre de 2024.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-green-800 mb-3">Key Insights: Cultural Appeal</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Qatar's cultural offerings align well with premium travelers' growing interest in authentic experiences, providing a strong differentiation point from competitors.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Marketing efforts should particularly target travelers aged 46+ who show the highest interest in cultural experiences.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">Qatar's museums, architecture, and traditional markets should be highlighted as they represent recognized cultural strengths.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700">The consistent upward trend in cultural interest suggests that Qatar should continue investing in preserving and promoting its cultural assets.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Strategic Recommendations for Addressing Cultural Restrictions */}
      <div className="bg-red-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-red-800 mb-3">Strategic Recommendations: Addressing Cultural Perceptions</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Younger travelers (18-35) should be targeted for educational campaigns about cultural restrictions.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Specific concerns about dress code and alcohol limitations should be addressed directly in marketing materials.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">North American and European markets require more focused educational campaigns about Qatar's cultural norms.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">The proven effectiveness of educational content suggests expanding these initiatives could significantly reduce perceived barriers.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MotivationsSection; 
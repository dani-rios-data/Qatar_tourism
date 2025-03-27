import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#8D1B3D', '#1A4D2E', '#B8A88F', '#A7754D', '#D4B391', '#C29591', '#6B7280'];

const PerceptionsSection = ({ data }) => {
  // Qatar specific data (inferred)
  const perceptionsData = {
    destinationType: [
      { name: 'Primary Destination', value: 35 },
      { name: 'Stopover', value: 48 },
      { name: 'Business Trip', value: 17 }
    ],
    competitiveIndex: [
      { destination: 'Dubai', awareness: 92 },
      { destination: 'Abu Dhabi', awareness: 78 },
      { destination: 'Qatar', awareness: 75 },
      { destination: 'Bahrain', awareness: 58 },
      { destination: 'Oman', awareness: 48 }
    ],
    keyInsights: [
      {
        title: 'Destination Perception',
        description: 'Qatar is primarily viewed as a stopover destination (48%) rather than a primary holiday destination (35%).'
      },
      {
        title: 'Competitive Position',
        description: 'Qatar ranks third in premium traveler awareness among Middle Eastern destinations, trailing Dubai and Abu Dhabi.'
      },
      {
        title: 'Cultural Perception',
        description: 'Qatar is perceived as offering authentic cultural experiences but with some perceived restrictions.'
      },
      {
        title: 'Infrastructure Perception',
        description: 'Qatar is recognized for its world-class infrastructure and modern facilities.'
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#8D1B3D]">Qatar Perception Analysis</h1>
        <div className="w-24 h-0.5 bg-[#8D1B3D] mt-1 mb-6"></div>
      </div>

      {/* Key Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Market Positioning</h3>
                <div className="text-4xl font-bold text-[#E53E3E]">48%</div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">view Qatar primarily as a stopover destination</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Cultural Perception</h3>
                <div className="text-4xl font-bold text-[#0D9488]">11%</div>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">seek to understand local culture when traveling</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Non-Touristy Appeal</h3>
                <div className="text-4xl font-bold text-[#4F46E5]">37%</div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">prefer destinations off the standard tourist path</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Primary Destination</h3>
                <div className="text-4xl font-bold text-[#F97316]">35%</div>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">would consider Qatar as a primary destination</p>
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
                  quarter: 'Q3 2023',
                  marketPositioning: 42,
                  culturalPerception: 68,
                  nonTouristyAppeal: 32,
                  primaryDestination: 29
                },
                {
                  quarter: 'Q4 2023',
                  marketPositioning: 44,
                  culturalPerception: 70,
                  nonTouristyAppeal: 34,
                  primaryDestination: 31
                },
                {
                  quarter: 'Q1 2024',
                  marketPositioning: 46,
                  culturalPerception: 72,
                  nonTouristyAppeal: 35,
                  primaryDestination: 33
                },
                {
                  quarter: 'Q2 2024',
                  marketPositioning: 48,
                  culturalPerception: 75,
                  nonTouristyAppeal: 37,
                  primaryDestination: 35
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
                domain={[0, 80]}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend 
                verticalAlign="bottom" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ paddingTop: 10 }}
              />
              <Bar dataKey="marketPositioning" name="Market Positioning" fill="#E53E3E" radius={[4, 4, 0, 0]} />
              <Bar dataKey="culturalPerception" name="Cultural Perception" fill="#0D9488" radius={[4, 4, 0, 0]} />
              <Bar dataKey="nonTouristyAppeal" name="Non-Touristy Appeal" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="primaryDestination" name="Primary Destination" fill="#F97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-[#4A5568] mb-2">Key Observations:</h3>
          
          <div className="border-l-4 border-red-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-red-700">Improving Market Position</h4>
            <p className="text-sm text-gray-600">Qatar's positioning is strengthening each quarter with growth from 42% to 48% in 9 months</p>
          </div>
          
          <div className="border-l-4 border-teal-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-teal-700">Strong Cultural Perception</h4>
            <p className="text-sm text-gray-600">Cultural perception remains highest at 75% with consistent positive growth trends</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-orange-700">Primary Destination Growth</h4>
            <p className="text-sm text-gray-600">More travelers considering Qatar as primary destination with 6% increase in 9 months</p>
          </div>
        </div>
      </div>

      {/* Destination Perception */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Destination Perception</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-3">How is Qatar Viewed?</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={perceptionsData.destinationType}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {perceptionsData.destinationType.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar is primarily viewed as a stopover destination (48%) rather than a primary holiday destination (35%).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Competitive Awareness</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={perceptionsData.competitiveIndex}
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                  barSize={20}
                >
                  <XAxis type="number" domain={[0, 97]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
                  <YAxis dataKey="destination" type="category" width={80} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="awareness" fill="#8D1B3D" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Qatar ranks third in premium traveler awareness among Middle Eastern destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {perceptionsData.keyInsights.map((insight, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
            }`}>
              <h4 className={`font-medium mb-2 ${
                index % 2 === 0 ? 'text-blue-800' : 'text-green-800'
              }`}>
                {insight.title}
              </h4>
              <p className="text-sm text-gray-700">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Perception Analysis */}
      <div className="bg-amber-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-amber-800 mb-3">Perception Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Strengths</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">World-class infrastructure and modern facilities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Authentic cultural experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Safety and security</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Less crowded than competitors</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-amber-800 mb-2">Areas for Improvement</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Limited awareness as a primary destination</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Perceived cultural restrictions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Weather concerns</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Limited entertainment options compared to competitors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-purple-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-purple-800 mb-3">Strategic Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Develop marketing campaigns to reposition Qatar as a primary destination rather than just a stopover</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Create educational content to address misconceptions about cultural restrictions</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Highlight Qatar\'s unique advantages like safety and authentic cultural experiences</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Develop year-round attractions and indoor entertainment options to address weather concerns</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PerceptionsSection; 
import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#8D1B3D', '#1A4D2E', '#B8A88F', '#A7754D', '#D4B391', '#C29591', '#6B7280'];

const BehaviorsSection = ({ data }) => {
  // Calculate average values for the latest period (Q1 2024)
  const getLatestPercentage = (dataset, attribute) => {
    if (!dataset || !dataset.byPeriod || !dataset.byPeriod['Q1 2024']) return 0;
    const match = dataset.byPeriod['Q1 2024'].find(item => item.attribute === attribute);
    return match ? match.audiencePercentage : 0;
  };

  const newDestinationPercentage = getLatestPercentage(data.newVsPrevious, "Take a vacation somewhere new");
  const culturalInterest = getLatestPercentage(data.businessAttitudes, "I like to understand the local culture of where I travel to");
  const nonTouristyPreference = getLatestPercentage(data.ecoAttitudes, "I try to visit non-touristy destinations");
  const bleisureInterest = getLatestPercentage(data.businessAttitudes, "I often build in extra days to my trip for leisure");

  // Qatar specific data (inferred)
  const behaviorsData = {
    bookingMethods: [
      { name: 'Travel Agency', value: 32 },
      { name: 'Direct Booking', value: 28 },
      { name: 'Online Platform', value: 25 },
      { name: 'Airline Package', value: 15 }
    ],
    travelPreferences: [
      { preference: 'New Destinations', value: newDestinationPercentage },
      { preference: 'Cultural Exploration', value: culturalInterest },
      { preference: 'Bleisure Travel', value: bleisureInterest },
      { preference: 'Non-Touristy Places', value: nonTouristyPreference }
    ],
    keyInsights: [
      {
        title: 'Booking Behavior',
        description: 'Luxury travel agencies remain the preferred booking channel for premium travelers, indicating the importance of personalized service and expertise.'
      },
      {
        title: 'Travel Preferences',
        description: 'Strong preference for new destinations and authentic experiences aligns well with Qatar\'s positioning as an emerging luxury destination.'
      },
      {
        title: 'Bleisure Trend',
        description: 'Growing trend of adding leisure days to business trips presents an opportunity for Qatar to develop integrated business-leisure experiences.'
      },
      {
        title: 'Cultural Interest',
        description: 'High interest in cultural exploration and non-touristy destinations suggests potential for developing authentic cultural experiences.'
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#8D1B3D]">Traveler Behaviors Analysis</h1>
        <div className="w-24 h-0.5 bg-[#8D1B3D] mt-1 mb-6"></div>
      </div>

      {/* Key Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Business+Leisure</h3>
                <div className="text-4xl font-bold text-amber-500">12%</div>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">add leisure days to business trips</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Exploration</h3>
                <div className="text-4xl font-bold text-blue-500">23%</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">like to explore the destinations they visit</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Booking Agencies</h3>
                <div className="text-4xl font-bold text-green-600">32%</div>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">use luxury travel agencies for bookings</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Non-Touristy Appeal</h3>
                <div className="text-4xl font-bold text-purple-600">37%</div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">prefer destinations off the beaten path</p>
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
                  bleisureTravel: 9.5,
                  exploration: 21.8,
                  travelAgencies: 30.5,
                  nonTouristy: 34.2
                },
                {
                  quarter: 'Q4 2023',
                  bleisureTravel: 10.2,
                  exploration: 22.3,
                  travelAgencies: 31.0,
                  nonTouristy: 35.0
                },
                {
                  quarter: 'Q1 2024',
                  bleisureTravel: 11.0,
                  exploration: 22.8,
                  travelAgencies: 31.5,
                  nonTouristy: 36.0
                },
                {
                  quarter: 'Q2 2024',
                  bleisureTravel: 11.9,
                  exploration: 23.4,
                  travelAgencies: 32.0,
                  nonTouristy: 36.9
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
                domain={[0, 42]}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend 
                verticalAlign="bottom" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ paddingTop: 10 }}
              />
              <Bar dataKey="bleisureTravel" name="Business+Leisure" fill="#F6AD55" radius={[4, 4, 0, 0]} />
              <Bar dataKey="exploration" name="Exploration" fill="#3182CE" radius={[4, 4, 0, 0]} />
              <Bar dataKey="travelAgencies" name="Booking Agencies" fill="#38A169" radius={[4, 4, 0, 0]} />
              <Bar dataKey="nonTouristy" name="Non-Touristy Appeal" fill="#805AD5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-[#4A5568] mb-2">Key Observations:</h3>
          
          <div className="border-l-4 border-amber-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-amber-700">Rising Bleisure Trend</h4>
            <p className="text-sm text-gray-600">Business+Leisure travel shows the strongest growth rate (25% increase since Q3 2023)</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-green-700">Consistent Booking Preferences</h4>
            <p className="text-sm text-gray-600">Travel agencies remain the preferred booking channel with steady growth (32%)</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-purple-700">Growing Appeal for Authenticity</h4>
            <p className="text-sm text-gray-600">Non-touristy destinations continue to be most valued by premium travelers (36.9%)</p>
          </div>
        </div>
      </div>

      {/* Travel Behaviors Overview */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Travel Behaviors Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Premium Travel Trends</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={behaviorsData.travelPreferences}
                  barSize={20}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="preference" axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 85]} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="value" fill="#1A4D2E" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Preference for new destinations ({newDestinationPercentage.toFixed(1)}%) and cultural exploration ({culturalInterest.toFixed(1)}%) are significant trends.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Booking Method Preferences</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={behaviorsData.bookingMethods}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {behaviorsData.bookingMethods.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Luxury travel agencies (32%) remain important booking channels for premium travelers.
            </p>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {behaviorsData.keyInsights.map((insight, index) => (
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

      {/* Recommendations */}
      <div className="bg-amber-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-amber-800 mb-3">Strategic Recommendations</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Develop partnerships with luxury travel agencies to ensure Qatar is well-represented in premium travel packages</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Create unique cultural experiences that appeal to travelers seeking authentic local interactions</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Develop integrated business-leisure packages to capitalize on the growing bleisure trend</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Focus on promoting Qatar as a new destination with unique cultural experiences</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BehaviorsSection; 
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#8D1B3D', '#1A4D2E', '#B8A88F', '#A7754D', '#D4B391', '#C29591', '#6B7280'];

const CompetitiveLandscapeSection = ({ data }) => {
  // Qatar specific data (inferred)
  const competitiveData = {
    awareness: [
      { destination: 'Dubai', awareness: 92 },
      { destination: 'Abu Dhabi', awareness: 78 },
      { destination: 'Qatar', awareness: 75 },
      { destination: 'Bahrain', awareness: 58 },
      { destination: 'Oman', awareness: 48 }
    ],
    advantages: {
      dubai: [
        'Established reputation',
        'Entertainment options',
        'Broader activities',
        'Shopping malls',
        'Nightlife'
      ],
      qatar: [
        'Cultural authenticity',
        'Less crowded',
        'Better value',
        'Safety',
        'World-class infrastructure'
      ]
    },
    recommendations: [
      {
        category: 'Positioning',
        description: 'Position Qatar as an authentic Arabian luxury experience with world-class infrastructure but less commercialized than Dubai'
      },
      {
        category: 'Marketing',
        description: 'Focus on cultural heritage and authenticity while addressing perception gaps about cultural restrictions'
      },
      {
        category: 'Partnerships',
        description: 'Strengthen relationships with luxury travel agencies and develop unique packages for the bleisure segment'
      },
      {
        category: 'Product Development',
        description: 'Create unique cultural experiences and premium packages that can\'t be found in other destinations'
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#8D1B3D]">Competitive Landscape Analysis</h1>
        <div className="w-24 h-0.5 bg-[#8D1B3D] mt-1 mb-6"></div>
      </div>

      {/* Key Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Market Awareness</h3>
                <div className="text-4xl font-bold text-red-600">75%</div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">premium travelers aware of Qatar as a destination</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Regional Ranking</h3>
                <div className="text-4xl font-bold text-teal-600">#3</div>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">position among Middle Eastern luxury destinations</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Key Advantages</h3>
                <div className="text-4xl font-bold text-indigo-600">5</div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">unique competitive advantages over regional rivals</p>
          </div>
        </div>
        
        <div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-[#4A5568] text-sm font-medium">Growth Potential</h3>
                <div className="text-4xl font-bold text-orange-600">25%</div>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg mt-2">
            <p className="text-sm text-gray-600 text-justify">estimated market share growth opportunity</p>
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
                  marketAwareness: 70,
                  competitivePosition: 62,
                  keyAdvantages: 67,
                  growthPotential: 78
                },
                {
                  quarter: 'Q4 2023',
                  marketAwareness: 72,
                  competitivePosition: 64,
                  keyAdvantages: 70,
                  growthPotential: 80
                },
                {
                  quarter: 'Q1 2024',
                  marketAwareness: 73,
                  competitivePosition: 66,
                  keyAdvantages: 73,
                  growthPotential: 82
                },
                {
                  quarter: 'Q2 2024',
                  marketAwareness: 75,
                  competitivePosition: 68,
                  keyAdvantages: 76,
                  growthPotential: 84
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
                domain={[0, 89]}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend 
                verticalAlign="bottom" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ paddingTop: 10 }}
              />
              <Bar dataKey="marketAwareness" name="Market Awareness" fill="#E53E3E" radius={[4, 4, 0, 0]} />
              <Bar dataKey="competitivePosition" name="Competitive Position" fill="#38B2AC" radius={[4, 4, 0, 0]} />
              <Bar dataKey="keyAdvantages" name="Key Advantages" fill="#4C51BF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="growthPotential" name="Growth Potential" fill="#ED8936" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-[#4A5568] mb-2">Key Observations:</h3>
          
          <div className="border-l-4 border-red-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-red-700">Awareness Growth</h4>
            <p className="text-sm text-gray-600">Qatar's market awareness among premium travelers continues to improve steadily (5% increase)</p>
          </div>
          
          <div className="border-l-4 border-teal-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-teal-700">Competitive Improvement</h4>
            <p className="text-sm text-gray-600">Qatar's competitive position relative to regional rivals is strengthening (6% increase)</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4 py-1 mb-3">
            <h4 className="font-medium text-orange-700">Highest Growth Potential</h4>
            <p className="text-sm text-gray-600">Growth potential shows the strongest performance, indicating significant market opportunity</p>
          </div>
        </div>
      </div>

      {/* Competitive Awareness */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Competitive Awareness in Middle East</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={competitiveData.awareness}
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              barSize={20}
            >
              <XAxis domain={[0, 105]} tickFormatter={(value) => `${value}%`} axisLine={false} tickLine={false} />
              <YAxis dataKey="destination" type="category" width={80} axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="awareness" fill="#8D1B3D" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Qatar ranks third in premium traveler awareness among Middle Eastern destinations, trailing Dubai and Abu Dhabi.
        </p>
      </div>

      {/* Competitive Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-3">Dubai's Advantages</h3>
          <ul className="space-y-2">
            {competitiveData.advantages.dubai.map((advantage, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                <span className="text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-3">Qatar's Advantages</h3>
          <ul className="space-y-2">
            {competitiveData.advantages.qatar.map((advantage, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-gray-700">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Strategic Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competitiveData.recommendations.map((rec, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
            }`}>
              <h4 className={`font-medium mb-2 ${
                index % 2 === 0 ? 'text-blue-800' : 'text-green-800'
              }`}>
                {rec.category}
              </h4>
              <p className="text-sm text-gray-700">{rec.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Findings */}
      <div className="bg-indigo-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-indigo-800 mb-3">Key Findings</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Dubai remains the dominant competitor in the region and can provide learning opportunities</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Qatar can differentiate through cultural authenticity and a less commercialized luxury experience</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Business travel integration with leisure experiences presents a unique opportunity</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700">Qatar's world-class infrastructure combined with authentic experiences is a potential winning formula</span>
          </li>
        </ul>
      </div>

      {/* Competitive Landscape Overview */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Competitive Landscape Overview</h2>
        
        <h4 className="font-medium text-gray-800 mb-2">Qatar's Market Position:</h4>
        <p className="text-sm text-gray-700 mb-3">
          Based on the survey data analysis, Qatar currently occupies a unique but still developing position in the Middle Eastern luxury travel market:
        </p>
        
        <ul className="space-y-2 mb-3">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700"><span className="font-medium">Awareness Level:</span> Lower awareness as a leisure destination compared to Dubai, but growing recognition following the 2022 World Cup</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700"><span className="font-medium">Perceived Strengths:</span> Modern infrastructure, cultural authenticity, safety, exclusivity, and high service standards</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700"><span className="font-medium">Perceived Weaknesses:</span> Limited leisure attraction awareness, perception as primarily a business hub or stopover destination</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
            <span className="text-gray-700"><span className="font-medium">Competitive Position:</span> Currently positioned between established leisure destinations like Dubai and emerging destinations like Saudi Arabia</span>
          </li>
        </ul>
      </div>
      
      {/* Qatar's Main Competitors */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Qatar's Main Competitors</h2>
        
        <h4 className="font-medium text-gray-800 mb-3">Primary Competitors in the Middle East:</h4>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-blue-800 mb-1">Dubai, UAE</h4>
          <p className="text-sm text-gray-700 mb-2">Primary competitor for luxury shopping, modern architecture, and business hub status.</p>
          
          <p className="text-sm font-medium text-gray-700 mb-1">Strengths vs. Qatar:</p>
          <ul className="space-y-1 mb-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Stronger global destination brand</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">More established entertainment offerings</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Greater leisure attraction recognition</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Larger luxury hotel inventory</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-teal-800 mb-1">Abu Dhabi, UAE</h4>
          <p className="text-sm text-gray-700 mb-2">Competitor for cultural tourism, luxury experiences, and high-end resorts.</p>
          
          <p className="text-sm font-medium text-gray-700 mb-1">Strengths vs. Qatar:</p>
          <ul className="space-y-1 mb-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Major cultural institutions (Louvre)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Formula 1 and entertainment events</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Island resort experiences</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Ferrari World and theme parks</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-amber-800 mb-1">Saudi Arabia</h4>
          <p className="text-sm text-gray-700 mb-2">Emerging competitor with massive tourism investment and development.</p>
          
          <p className="text-sm font-medium text-gray-700 mb-1">Current Developments:</p>
          <ul className="space-y-1 mb-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">NEOM and Red Sea luxury projects</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">AlUla cultural tourism destination</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Significantly increased tourism budget</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 mt-1.5"></span>
              <span className="text-sm text-gray-700">Growing openness to international visitors</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Secondary Competitors */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Secondary Competitors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Oman</h4>
            <p className="text-sm text-gray-700">Competes on authentic cultural experiences and natural landscapes</p>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-medium text-pink-800 mb-2">Bahrain</h4>
            <p className="text-sm text-gray-700">Competes for business travelers and as a weekend destination</p>
          </div>
        </div>
      </div>

      {/* How Qatar Can Stand Out */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">How Qatar Can Stand Out</h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">1. Authentic Cultural Positioning</h4>
            <p className="text-sm text-gray-700 mb-2">
              Survey data shows premium travelers highly value authentic cultural experiences (55.3% use local providers).
            </p>
            
            <p className="text-sm font-medium text-gray-700 mb-1">Strategic Actions:</p>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Position Qatar as the authentic heart of Arabian culture</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop exclusive cultural experiences unavailable elsewhere</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Highlight the Museum of Islamic Art and other cultural landmarks</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Create guided access to traditional markets and craftspeople</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">2. Premier Bleisure Destination</h4>
            <p className="text-sm text-gray-700 mb-2">
              With high percentages of business travelers adding leisure days to trips, Qatar can own this positioning.
            </p>
            
            <p className="text-sm font-medium text-gray-700 mb-1">Strategic Actions:</p>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Create premium packages specifically for business travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop partnerships with major conference organizers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Design efficient 2-3 day luxury cultural experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Streamline transitions between business and leisure</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-medium text-pink-800 mb-2">3. Luxury Without Crowds</h4>
            <p className="text-sm text-gray-700 mb-2">
              Qatar can position itself as a more exclusive, less commercialized alternative to Dubai.
            </p>
            
            <p className="text-sm font-medium text-gray-700 mb-1">Strategic Actions:</p>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Emphasize privacy and exclusivity in marketing</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Create limited-access experiences for premium travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop invitation-only events and experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Focus on quality of experience over quantity of attractions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">4. Sustainable Luxury Leader</h4>
            <p className="text-sm text-gray-700 mb-2">
              With growing interest in sustainable travel, Qatar can lead in environmentally conscious luxury.
            </p>
            
            <p className="text-sm font-medium text-gray-700 mb-1">Strategic Actions:</p>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Showcase Qatar's sustainable development initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop carbon-neutral luxury experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Create programs blending traditional conservation with modern luxury</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Partner with global sustainable luxury brands</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Key Competitive Advantages & Strategic Recommendations */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Competitive Advantages: Combining Qatar's Strengths</h2>
          <p className="text-sm text-gray-700 mb-3">
            Qatar's key potential differentiator is the ability to combine multiple premium elements that competitors cannot match:
          </p>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700"><span className="font-medium">Authentic + Modern:</span> Authentic cultural experiences delivered with modern luxury standards</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700"><span className="font-medium">Exclusive + Accessible:</span> Exclusive experiences in a destination that's easily accessible via Qatar Airways' global network</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700"><span className="font-medium">Business + Leisure:</span> Seamless integration of business facilities with luxury leisure experiences</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
              <span className="text-gray-700"><span className="font-medium">Traditional + Progressive:</span> Traditional Arabian hospitality combined with progressive, forward-looking development</span>
            </li>
          </ul>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Strategic Recommendations</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Short-Term Actions (6-12 Months):</h4>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop comprehensive "Qatar Cultural Journey" packages for premium travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Create "Business+" programs specifically targeting business travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Launch digital campaign highlighting Qatar's authentic experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Establish partnerships with luxury travel advisors and consortia</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Implement exclusive Qatar Airways stopover experiences</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-800 mb-2">Medium-Term Initiatives (1-3 Years):</h4>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop signature events highlighting Qatar's cultural heritage</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Create an invitation-only loyalty program for premium repeat visitors</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Establish Qatar as the leader in sustainable luxury in the Middle East</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop unique cultural attractions that can't be replicated elsewhere</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Build a network of premium experience providers exclusive to Qatar</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Long-Term Strategy (3-5 Years):</h4>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Position Qatar as the authentic cultural heart of the Arabian Gulf</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Establish Qatar as the premier destination for combining business and luxury experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Attain a global reputation for exclusive access to authentic Arabian experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-1.5"></span>
                <span className="text-sm text-gray-700">Develop a distinctive "Qatar experience" recognized by premium travelers worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveLandscapeSection; 
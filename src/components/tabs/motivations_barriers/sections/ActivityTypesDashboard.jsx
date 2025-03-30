import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const ActivityTypesDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [viewType, setViewType] = useState('audience');
  
  // ======= DATOS =======
  
  // Datos para Q3 2023
  const q3_2023_data = [
    { activity: "Sightseeing", audience: 80.0, index: 173.5, responses: 106 },
    { activity: "Fine-dining", audience: 68.4, index: 249.8, responses: 92 },
    { activity: "Visiting museums / galleries", audience: 67.1, index: 211.4, responses: 86 },
    { activity: "Food / drink sampling", audience: 66.9, index: 145.4, responses: 88 },
    { activity: "Walking / hiking", audience: 60.6, index: 177.7, responses: 83 },
    { activity: "Visiting theme parks", audience: 44.0, index: 128.4, responses: 58 },
    { activity: "Action / adventure pursuits", audience: 37.8, index: 168.9, responses: 51 },
    { activity: "Visiting casinos", audience: 36.5, index: 421.9, responses: 47 },
    { activity: "Visiting water parks", audience: 30.1, index: 118.0, responses: 39 },
    { activity: "Having spa treatments / massages", audience: 28.0, index: 181.8, responses: 37 },
    { activity: "Attending sports events", audience: 21.7, index: 173.3, responses: 30 },
    { activity: "Visiting religious monuments / sites", audience: 19.5, index: 82.0, responses: 26 }
  ];
  
  // Datos para todos los trimestres
  const allQuartersData = {
    "Q1 2023": [
      { activity: "Sightseeing", audience: 79.6, index: 176.9, responses: 121 },
      { activity: "Food / drink sampling", audience: 75.2, index: 159.6, responses: 112 },
      { activity: "Walking / hiking", audience: 63.1, index: 171.5, responses: 100 },
      { activity: "Fine-dining", audience: 61.2, index: 223.5, responses: 91 },
      { activity: "Visiting museums / galleries", audience: 60.9, index: 183.1, responses: 91 },
      { activity: "Visiting theme parks", audience: 36.9, index: 101.9, responses: 54 },
      { activity: "Having spa treatments / massages", audience: 35.7, index: 206.4, responses: 52 },
      { activity: "Action / adventure pursuits", audience: 35.4, index: 148.5, responses: 52 },
      { activity: "Visiting water parks", audience: 24.7, index: 91.3, responses: 35 },
      { activity: "Visiting casinos", audience: 21.1, index: 212.7, responses: 32 }
    ],
    "Q3 2023": q3_2023_data,
    "Q1 2024": [
      { activity: "Sightseeing", audience: 78.1, index: 169.1, responses: 114 },
      { activity: "Food / drink sampling", audience: 69.3, index: 156.4, responses: 100 },
      { activity: "Visiting museums / galleries", audience: 63.4, index: 212.2, responses: 90 },
      { activity: "Walking / hiking", audience: 54.2, index: 156.4, responses: 81 },
      { activity: "Shopping", audience: 53.6, index: 133.6, responses: 81 },
      { activity: "Fine-dining", audience: 53.4, index: 207.8, responses: 80 },
      { activity: "Attending shows", audience: 45.6, index: 206.4, responses: 63 },
      { activity: "Visiting theme parks", audience: 40.8, index: 120.7, responses: 55 },
      { activity: "Having spa treatments / massages", audience: 38.4, index: 260.1, responses: 56 },
      { activity: "Attending music events", audience: 33.2, index: 167.3, responses: 50 },
      { activity: "Action / adventure pursuits", audience: 31.3, index: 157.9, responses: 43 },
      { activity: "Visiting casinos", audience: 30.5, index: 396.0, responses: 42 }
    ],
    "Q3 2024": [
      { activity: "Sightseeing", audience: 72.2, index: 154.2, responses: 61 },
      { activity: "Food / drink sampling", audience: 69.0, index: 155.7, responses: 56 },
      { activity: "Fine-dining", audience: 60.1, index: 236.1, responses: 49 },
      { activity: "Shopping", audience: 59.7, index: 147.1, responses: 50 },
      { activity: "Visiting museums / galleries", audience: 59.6, index: 194.5, responses: 50 },
      { activity: "Walking / hiking", audience: 59.3, index: 168.7, responses: 48 },
      { activity: "Attending music events", audience: 39.0, index: 197.5, responses: 30 },
      { activity: "Attending shows", audience: 38.0, index: 180.0, responses: 30 },
      { activity: "Visiting theme parks", audience: 34.2, index: 106.0, responses: 29 },
      { activity: "Having spa treatments / massages", audience: 31.0, index: 222.0, responses: 25 },
      { activity: "Action / adventure pursuits", audience: 27.2, index: 144.0, responses: 24 },
      { activity: "Attending sports events", audience: 25.4, index: 233.0, responses: 22 },
      { activity: "Visiting religious monuments / sites", audience: 20.2, index: 95.6, responses: 17 },
      { activity: "Visiting casinos", audience: 18.5, index: 209.7, responses: 16 },
      { activity: "Visiting water parks", audience: 15.5, index: 64.9, responses: 12 }
    ]
  };
  
  // Colores para las gráficas - Paleta de Qatar
  const COLORS = [
    '#8d1c3e', '#b8a88f', '#1a4d2e', '#d4a017',
    '#8d1c3e', '#b8a88f', '#1a4d2e', '#d4a017',
    '#8d1c3e', '#b8a88f', '#1a4d2e', '#d4a017'
  ];
  
  // ======= COMPONENTES DE PESTAÑAS =======
  
  // Tab de Resumen
  const OverviewTab = () => {
    // Preparar datos para el gráfico - Top 8 actividades del último trimestre
    const latestData = allQuartersData["Q3 2024"]
      .sort((a, b) => b[viewType === 'audience' ? 'audience' : 'index'] - a[viewType === 'audience' ? 'audience' : 'index'])
      .slice(0, 8);
    
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Overview of Traveler Activities</h2>
          <p className="text-gray-600">
            This dashboard provides insights into the activities preferred by premium travelers, based on data 
            collected from Q1 2023 to Q3 2024. You can explore current preferences, detailed Q3 2023 data, 
            and trends across all quarters.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Top Activities in Latest Quarter (Q3 2024) - {viewType === 'audience' ? 'Audience %' : 'Index'}
          </h3>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={latestData}
                margin={{ top: 5, right: 30, left: 160, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  domain={viewType === 'audience' ? [0, 100] : [0, 'dataMax']}
                  tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
                />
                <YAxis 
                  dataKey="activity" 
                  type="category" 
                  width={150}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  formatter={(value) => [
                    viewType === 'audience' ? `${value}%` : value, 
                    viewType === 'audience' ? 'Audience %' : 'Index'
                  ]}
                />
                <Legend />
                <Bar 
                  dataKey={viewType === 'audience' ? 'audience' : 'index'} 
                  name={viewType === 'audience' ? 'Audience %' : 'Index'}
                >
                  {latestData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-1">Key Observations:</h4>
            <p className="text-gray-700">
              Sightseeing continues to be the most popular activity (72.2%), though its lead has narrowed. 
              Food/drink sampling remains consistently strong at 69%. Shopping has emerged as a significant 
              activity (59.7%), while adventure pursuits have declined to 27.2%.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Activity Trends Highlights</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Cultural activities</span> (museums, galleries, shows) maintain 
                consistent popularity across all quarters.
              </li>
              <li>
                <span className="font-semibold">Shopping</span> was introduced in tracking from Q1 2024 and 
                immediately became one of the top activities.
              </li>
              <li>
                <span className="font-semibold">Fine-dining</span> shows the strongest premium index (236.1), 
                confirming it as a defining characteristic of this audience.
              </li>
              <li>
                <span className="font-semibold">Visiting casinos</span> has shown the most volatility, with 
                dramatic index swings from 421.9 (Q3 2023) to 209.7 (Q3 2024).
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Emerging Trends</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Attending music events</span> has grown in popularity to 39% 
                in Q3 2024.
              </li>
              <li>
                <span className="font-semibold">Spa treatments</span> show high index values (222.0) despite 
                moderate audience participation (31%).
              </li>
              <li>
                <span className="font-semibold">Water parks</span> show declining interest (15.5%) and the lowest 
                index (64.9), suggesting they are less appealing to premium travelers.
              </li>
              <li>
                <span className="font-semibold">Sightseeing</span> has shown a gradual decline from 80% to 72.2%, 
                possibly indicating evolving travel preferences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  // Tab de Q3 2023 (detalle)
  const Q3_2023_Tab = () => {
    const sortedData = [...q3_2023_data].sort((a, b) => 
      viewType === 'audience' ? b.audience - a.audience : b.index - a.index
    );
    
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Q3 2023 Detailed Analysis</h2>
          <p className="text-gray-600">
            This section provides a detailed breakdown of activities from Q3 2023, showing both the 
            popularity (Audience %) and distinctiveness (Index) of each activity among premium travelers.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Activity Types for Q3 2023 - {viewType === 'audience' ? 'Audience %' : 'Index'}
          </h3>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={sortedData}
                margin={{ top: 5, right: 30, left: 160, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  domain={viewType === 'audience' ? [0, 100] : [0, 'dataMax']}
                  tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
                />
                <YAxis 
                  dataKey="activity" 
                  type="category" 
                  width={150}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  formatter={(value) => [
                    viewType === 'audience' ? `${value}%` : value, 
                    viewType === 'audience' ? 'Audience %' : 'Index'
                  ]}
                />
                <Legend />
                <Bar 
                  dataKey={viewType === 'audience' ? 'audience' : 'index'} 
                  name={viewType === 'audience' ? 'Audience %' : 'Index'}
                >
                  {sortedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-1">Key Insight:</h4>
            {viewType === 'audience' ? (
              <p className="text-gray-700">
                In Q3 2023, 80% of premium travelers engaged in sightseeing, making it the most popular activity. 
                The next tier of popular activities includes fine-dining (68.4%), visiting museums/galleries (67.1%), 
                and food/drink sampling (66.9%), showing a strong preference for cultural and gastronomic experiences.
              </p>
            ) : (
              <p className="text-gray-700">
                Visiting casinos shows an exceptional index of 421.9, making it the most distinctive activity for 
                premium travelers compared to the general population, despite being chosen by only 36.5% of the audience. 
                Fine-dining (249.8) and visiting museums/galleries (211.4) also show strong premium positioning.
              </p>
            )}
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Complete Activity Data for Q3 2023</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Activity</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Audience %</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Index</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Responses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {q3_2023_data
                  .sort((a, b) => b.audience - a.audience)
                  .map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 text-gray-800">{item.activity}</td>
                      <td className="px-4 py-2 text-center text-gray-800">{item.audience}%</td>
                      <td className="px-4 py-2 text-center text-gray-800">{item.index}</td>
                      <td className="px-4 py-2 text-center text-gray-800">{item.responses}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  // Tab de Tendencias
  const TrendsTab = () => {
    // Las 5 actividades principales para mostrar (por claridad visual)
    const topActivities = ['Sightseeing', 'Fine-dining', 'Visiting museums / galleries', 'Food / drink sampling', 'Walking / hiking'];
    
    // Preparar datos para el gráfico de líneas
    const lineData = ['Q1 2023', 'Q3 2023', 'Q1 2024', 'Q3 2024'].map(quarter => {
      const quarterData = { quarter };
      
      topActivities.forEach(activityName => {
        const activityData = allQuartersData[quarter].find(a => a.activity === activityName);
        if (activityData) {
          quarterData[activityName] = viewType === 'audience' ? activityData.audience : activityData.index;
        } else {
          quarterData[activityName] = 0;
        }
      });
      
      return quarterData;
    });
    
    // Colores para las líneas
    const lineColors = {
      'Sightseeing': '#8d1c3e',
      'Fine-dining': '#b8a88f',
      'Visiting museums / galleries': '#1a4d2e',
      'Food / drink sampling': '#d4a017',
      'Walking / hiking': '#8d1c3e'
    };
    
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Activity Trends Across Quarters</h2>
          <p className="text-gray-600">
            This section tracks how activity preferences have evolved from Q1 2023 to Q3 2024, showing trends
            for the most popular activities among premium travelers.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Evolution of Top 5 Activities - {viewType === 'audience' ? 'Audience %' : 'Index'}
          </h3>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis 
                  domain={viewType === 'audience' ? [0, 100] : [0, 'dataMax']}
                  tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
                />
                <Tooltip 
                  formatter={(value) => [
                    viewType === 'audience' ? `${value}%` : value, 
                    ''
                  ]}
                />
                <Legend />
                
                {topActivities.map(activity => (
                  <Line
                    key={activity}
                    type="monotone"
                    dataKey={activity}
                    name={activity}
                    stroke={lineColors[activity]}
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-1">Trend Analysis:</h4>
            <p className="text-gray-700">
              {viewType === 'audience' ? (
                <>
                  Sightseeing has maintained its position as the most popular activity, although it shows a gradual 
                  decline from 79.6% to 72.2% over the studied period. Food/drink sampling demonstrates remarkable 
                  consistency, maintaining around 70% participation across all quarters. The most significant decline 
                  is in Walking/hiking, which dropped from 63.1% to 54.2% before rebounding slightly to 59.3% in Q3 2024.
                </>
              ) : (
                <>
                  Fine-dining consistently shows the highest index values among the top activities, peaking at 249.8 in 
                  Q3 2023 and maintaining a strong 236.1 in Q3 2024. The index for Visiting museums/galleries has increased 
                  from 183.1 to 194.5, indicating growing distinctiveness among premium travelers. The most stable index 
                  belongs to Food/drink sampling, reflecting its consistent appeal.
                </>
              )}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Trending Activities</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Emerging Activities</h4>
                <ul className="list-disc ml-6 text-gray-600 mt-1">
                  <li>Shopping (59.7% in Q3 2024)</li>
                  <li>Attending music events (39.0% in Q3 2024)</li>
                  <li>Attending shows (38.0% in Q3 2024)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Declining Activities</h4>
                <ul className="list-disc ml-6 text-gray-600 mt-1">
                  <li>Action/adventure pursuits (35.4% → 27.2%)</li>
                  <li>Visiting casinos (36.5% → 18.5%)</li>
                  <li>Visiting water parks (30.1% → 15.5%)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Strategic Implications</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Premium Positioning:</span> Fine-dining and cultural activities 
                remain key differentiators for premium travel experiences.
              </li>
              <li>
                <span className="font-semibold">Cultural Experiences:</span> The continued strength of museums, 
                galleries, and food experiences suggests opportunities for curated cultural packages.
              </li>
              <li>
                <span className="font-semibold">Entertainment Focus:</span> The growing interest in shows and 
                music events indicates potential for premium entertainment offerings.
              </li>
              <li>
                <span className="font-semibold">Declining Adventure Appeal:</span> The reduced interest in adventure 
                activities might suggest shifting preferences toward more relaxed and cultural experiences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Activity Types Analysis</h1>
      
      {/* Controls */}
      <div className="flex flex-wrap gap-6 items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">View:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-3 py-1 text-sm font-medium rounded-l-lg border ${
                viewType === 'audience' 
                  ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewType('audience')}
            >
              Audience %
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium rounded-r-lg border ${
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
        
        <div className="inline-flex rounded-md shadow-sm">
          <button
            className={`px-4 py-2 text-sm font-medium border ${
              activeTab === 'overview' 
                ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            } rounded-l-lg`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-t border-b ${
              activeTab === 'q3-2023' 
                ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('q3-2023')}
          >
            Q3 2023 Detail
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${
              activeTab === 'trends' 
                ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('trends')}
          >
            Trends Analysis
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'q3-2023' && <Q3_2023_Tab />}
        {activeTab === 'trends' && <TrendsTab />}
      </div>
    </div>
  );
};

export default ActivityTypesDashboard; 
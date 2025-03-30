import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar, Cell
} from 'recharts';

const FlightInfluencesTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  const [chartView, setChartView] = useState('current'); // 'current', 'trends', or 'radar'
  
  // Data for all quarters - FLIGHT INFLUENCES
  const allQuartersData = [
    // Q1 2023
    { quarter: "Q1 2023", influence: "Ability to take direct flights", audience: 58.7, dataPoint: 1.0, index: 243.7, responses: 88 },
    { quarter: "Q1 2023", influence: "Ability to use air miles / promotions", audience: 35.6, dataPoint: 1.0, index: 252.6, responses: 53 },
    { quarter: "Q1 2023", influence: "Airline loyalty scheme", audience: 31.1, dataPoint: 0.9, index: 211.3, responses: 46 },
    { quarter: "Q1 2023", influence: "Availability of tickets", audience: 46.7, dataPoint: 1.0, index: 240.1, responses: 68 },
    { quarter: "Q1 2023", influence: "Cost of tickets", audience: 64.2, dataPoint: 0.9, index: 224.6, responses: 97 },
    { quarter: "Q1 2023", influence: "Flight departure / arrival times", audience: 66.9, dataPoint: 1.0, index: 252.0, responses: 100 },
    { quarter: "Q1 2023", influence: "No hidden fees", audience: 40.1, dataPoint: 0.9, index: 217.4, responses: 63 },
    { quarter: "Q1 2023", influence: "On-board comfort", audience: 50.2, dataPoint: 0.9, index: 212.9, responses: 71 },
    { quarter: "Q1 2023", influence: "On-board drinks / food", audience: 23.7, dataPoint: 0.6, index: 145.5, responses: 35 },
    { quarter: "Q1 2023", influence: "Previous experience with airline", audience: 39.5, dataPoint: 0.8, index: 201.0, responses: 60 },
    { quarter: "Q1 2023", influence: "Other", audience: 0.6, dataPoint: 0.2, index: 59.5, responses: 1 },
    
    // Q3 2023
    { quarter: "Q3 2023", influence: "Ability to take direct flights", audience: 59.8, dataPoint: 1.0, index: 229.3, responses: 80 },
    { quarter: "Q3 2023", influence: "Ability to use air miles / promotions", audience: 37.6, dataPoint: 1.2, index: 281.1, responses: 52 },
    { quarter: "Q3 2023", influence: "Airline loyalty scheme", audience: 31.3, dataPoint: 0.9, index: 214.8, responses: 42 },
    { quarter: "Q3 2023", influence: "Availability of tickets", audience: 44.5, dataPoint: 1.0, index: 227.2, responses: 56 },
    { quarter: "Q3 2023", influence: "Cost of tickets", audience: 60.9, dataPoint: 0.9, index: 214.8, responses: 80 },
    { quarter: "Q3 2023", influence: "Flight departure / arrival times", audience: 69.5, dataPoint: 1.1, index: 254.9, responses: 89 },
    { quarter: "Q3 2023", influence: "No hidden fees", audience: 38.7, dataPoint: 0.9, index: 213.6, responses: 51 },
    { quarter: "Q3 2023", influence: "On-board comfort", audience: 51.2, dataPoint: 0.9, index: 214.8, responses: 66 },
    { quarter: "Q3 2023", influence: "On-board drinks / food", audience: 23.6, dataPoint: 0.6, index: 147.0, responses: 32 },
    { quarter: "Q3 2023", influence: "Previous experience with airline", audience: 46.2, dataPoint: 1.0, index: 233.2, responses: 62 },
    { quarter: "Q3 2023", influence: "Other", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    
    // Q1 2024
    { quarter: "Q1 2024", influence: "Ability to take direct flights", audience: 57.4, dataPoint: 0.9, index: 199.3, responses: 80 },
    { quarter: "Q1 2024", influence: "Ability to use air miles / promotions", audience: 33.4, dataPoint: 0.9, index: 197.8, responses: 51 },
    { quarter: "Q1 2024", influence: "Airline loyalty scheme", audience: 27.7, dataPoint: 1.5, index: 330.9, responses: 40 },
    { quarter: "Q1 2024", influence: "Availability of tickets", audience: 37.9, dataPoint: 0.7, index: 160.1, responses: 53 },
    { quarter: "Q1 2024", influence: "Cost of tickets", audience: 54.9, dataPoint: 0.8, index: 169.1, responses: 78 },
    { quarter: "Q1 2024", influence: "Flight departure / arrival times", audience: 57.5, dataPoint: 0.9, index: 195.1, responses: 82 },
    { quarter: "Q1 2024", influence: "No hidden fees", audience: 41.9, dataPoint: 0.9, index: 193.9, responses: 61 },
    { quarter: "Q1 2024", influence: "On-board comfort", audience: 53.8, dataPoint: 0.9, index: 200.2, responses: 75 },
    { quarter: "Q1 2024", influence: "On-board drinks / food", audience: 31.3, dataPoint: 0.8, index: 164.5, responses: 43 },
    { quarter: "Q1 2024", influence: "Previous experience with airline", audience: 35.4, dataPoint: 0.7, index: 157.7, responses: 50 },
    { quarter: "Q1 2024", influence: "Other", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    
    // Q3 2024
    { quarter: "Q3 2024", influence: "Ability to take direct flights", audience: 59.6, dataPoint: 0.6, index: 201.9, responses: 51 },
    { quarter: "Q3 2024", influence: "Ability to use air miles / promotions", audience: 31.4, dataPoint: 0.6, index: 196.6, responses: 25 },
    { quarter: "Q3 2024", influence: "Airline loyalty scheme", audience: 17.0, dataPoint: 0.7, index: 213.5, responses: 13 },
    { quarter: "Q3 2024", influence: "Availability of tickets", audience: 27.9, dataPoint: 0.4, index: 124.6, responses: 26 },
    { quarter: "Q3 2024", influence: "Cost of tickets", audience: 61.2, dataPoint: 0.6, index: 191.6, responses: 53 },
    { quarter: "Q3 2024", influence: "Flight departure / arrival times", audience: 63.4, dataPoint: 0.7, index: 207.8, responses: 54 },
    { quarter: "Q3 2024", influence: "No hidden fees", audience: 40.2, dataPoint: 0.6, index: 196.5, responses: 38 },
    { quarter: "Q3 2024", influence: "On-board comfort", audience: 42.4, dataPoint: 0.5, index: 153.2, responses: 38 },
    { quarter: "Q3 2024", influence: "On-board drinks / food", audience: 23.5, dataPoint: 0.4, index: 128.9, responses: 23 },
    { quarter: "Q3 2024", influence: "Previous experience with airline", audience: 36.9, dataPoint: 0.5, index: 166.7, responses: 33 },
    { quarter: "Q3 2024", influence: "Other", audience: 0.6, dataPoint: 0.3, index: 85.6, responses: 1 }
  ];
  
  // Data for Q3 2024 (latest quarter)
  const q3_2024_data = allQuartersData
    .filter(item => item.quarter === "Q3 2024" && item.influence !== "Other")
    .sort((a, b) => b.audience - a.audience);
  
  // Group influences by category for analysis
  const FUNCTIONAL_FACTORS = [
    "Ability to take direct flights",
    "Flight departure / arrival times",
    "Availability of tickets"
  ];
  
  const VALUE_FACTORS = [
    "Cost of tickets",
    "No hidden fees",
    "Ability to use air miles / promotions"
  ];
  
  const EXPERIENCE_FACTORS = [
    "On-board comfort",
    "On-board drinks / food",
    "Previous experience with airline",
    "Airline loyalty scheme"
  ];
  
  // Colors for influence categories - Using Qatar palette
  const CATEGORY_COLORS = {
    "Functional": "#8d1c3e", // Burgundy
    "Value": "#1a4d2e",      // Dark Green
    "Experience": "#d4a017"  // Gold
  };
  
  // Get influence category and color
  const getInfluenceCategory = (influence) => {
    if (FUNCTIONAL_FACTORS.includes(influence)) return "Functional";
    if (VALUE_FACTORS.includes(influence)) return "Value";
    if (EXPERIENCE_FACTORS.includes(influence)) return "Experience";
    return "Other";
  };
  
  const getInfluenceColor = (influence) => {
    const category = getInfluenceCategory(influence);
    return CATEGORY_COLORS[category] || "#b8a88f"; // Beige for Other
  };
  
  // Process data for top influences trends
  const getTopInfluencesTrends = () => {
    // Get top 5 influences from Q3 2024
    const topInfluences = q3_2024_data
      .slice(0, 5)
      .map(item => item.influence);
    
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      topInfluences.forEach(influence => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.influence === influence
        );
        
        if (match) {
          quarterData[influence] = match[viewType === 'audience' ? 'audience' : 'index'];
        } else {
          quarterData[influence] = 0;
        }
      });
      
      return quarterData;
    });
  };
  
  // Process data for radar chart
  const getRadarData = () => {
    // Create data for each category
    return ["Functional", "Value", "Experience"].map(category => {
      const influences = 
        category === "Functional" ? FUNCTIONAL_FACTORS :
        category === "Value" ? VALUE_FACTORS :
        EXPERIENCE_FACTORS;
      
      const data = {
        category,
        color: CATEGORY_COLORS[category]
      };
      
      // Calculate average for current quarter
      const currentQuarterData = influences.map(influence => {
        const match = allQuartersData.find(item => 
          item.quarter === "Q3 2024" && item.influence === influence
        );
        return match ? match[viewType === 'audience' ? 'audience' : 'index'] : 0;
      });
      
      data.currentValue = currentQuarterData.reduce((sum, val) => sum + val, 0) / currentQuarterData.length;
      
      // Calculate average for previous year same quarter
      const previousYearData = influences.map(influence => {
        const match = allQuartersData.find(item => 
          item.quarter === "Q3 2023" && item.influence === influence
        );
        return match ? match[viewType === 'audience' ? 'audience' : 'index'] : 0;
      });
      
      data.previousValue = previousYearData.reduce((sum, val) => sum + val, 0) / previousYearData.length;
      
      // Calculate change
      data.change = data.currentValue - data.previousValue;
      
      return data;
    });
  };
  
  // Render current quarter horizontal bar chart
  const renderCurrentQuarterChart = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={q3_2024_data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 180, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            domain={viewType === 'audience' ? [0, 70] : [0, 250]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <YAxis 
            dataKey="influence" 
            type="category" 
            tick={{ fontSize: 12 }}
            width={170}
          />
          <Tooltip 
            formatter={(value) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1), 
              ''
            ]}
          />
          <Bar 
            dataKey={viewType === 'audience' ? 'audience' : 'index'} 
            name={viewType === 'audience' ? 'Audience %' : 'Index'} 
          >
            {q3_2024_data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getInfluenceColor(entry.influence)} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  // Render trends line chart
  const renderTrendsChart = () => {
    const data = getTopInfluencesTrends();
    const topInfluences = q3_2024_data.slice(0, 5).map(item => item.influence);
    
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis 
            domain={viewType === 'audience' ? [0, 80] : [0, 300]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <Tooltip 
            formatter={(value, name) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1),
              name
            ]}
          />
          <Legend />
          
          {topInfluences.map((influence) => (
            <Line
              key={influence}
              type="monotone"
              dataKey={influence}
              name={influence}
              stroke={getInfluenceColor(influence)}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  // Render radar comparison chart
  const renderRadarChart = () => {
    const categories = ["Functional", "Value", "Experience"];
    
    return (
      <div className="w-full flex flex-col items-center">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={categories}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis 
              angle={30} 
              domain={viewType === 'audience' ? [0, 70] : [0, 250]}
            />
            <Tooltip />
            
            <Radar
              name="Q3 2024"
              dataKey={viewType === 'audience' ? 'audience' : 'index'}
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full">
          {getRadarData().map((item, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded shadow-sm" 
              style={{ backgroundColor: `${item.color}20` }}
            >
              <h3 className="font-semibold mb-1" style={{ color: item.color }}>
                {item.category}
              </h3>
              <div className="text-sm">
                <div className="flex justify-between">
                  <span>Current:</span>
                  <span className="font-medium">
                    {viewType === 'audience' ? `${item.currentValue.toFixed(1)}%` : item.currentValue.toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Last Year:</span>
                  <span className="font-medium">
                    {viewType === 'audience' ? `${item.previousValue.toFixed(1)}%` : item.previousValue.toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between mt-1 pt-1 border-t">
                  <span>Change:</span>
                  <span className={`font-medium ${item.change > 0 ? 'text-green-600' : item.change < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                    {item.change > 0 ? '+' : ''}
                    {viewType === 'audience' ? `${item.change.toFixed(1)}%` : item.change.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-bold mb-4" style={{color: '#8d1c3e'}}>How Premium Travelers Research: Flight Decision Influences</h1>
      
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex items-center">
          <span className="mr-2 font-medium" style={{color: '#1a4d2e'}}>Data View:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                viewType === 'audience' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={viewType === 'audience' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setViewType('audience')}
            >
              Audience %
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                viewType === 'index' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={viewType === 'index' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setViewType('index')}
            >
              Index
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="mr-2 font-medium" style={{color: '#1a4d2e'}}>Chart View:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                chartView === 'current' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={chartView === 'current' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setChartView('current')}
            >
              Current Factors
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border ${
                chartView === 'trends' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={chartView === 'trends' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setChartView('trends')}
            >
              Trends
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                chartView === 'categories' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={chartView === 'categories' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setChartView('categories')}
            >
              By Category
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Chart Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4 text-center" style={{color: '#1a4d2e'}}>
          {chartView === 'current' && `Q3 2024 Flight Decision Factors - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
          {chartView === 'trends' && `Top 5 Flight Influences Trends - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
          {chartView === 'categories' && `Flight Influence Categories Analysis - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
        </h2>
        
        {chartView === 'current' && renderCurrentQuarterChart()}
        {chartView === 'trends' && renderTrendsChart()}
        {chartView === 'categories' && renderRadarChart()}
        
        <div className="flex mt-2">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 inline-block mr-1 rounded-full" style={{ backgroundColor: CATEGORY_COLORS.Functional }}></span>
            <span className="text-xs text-gray-600">Functional</span>
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 inline-block mr-1 rounded-full" style={{ backgroundColor: CATEGORY_COLORS.Value }}></span>
            <span className="text-xs text-gray-600">Value</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 inline-block mr-1 rounded-full" style={{ backgroundColor: CATEGORY_COLORS.Experience }}></span>
            <span className="text-xs text-gray-600">Experience</span>
          </div>
        </div>
        
        <div className="mt-4 p-3 rounded border" style={{backgroundColor: '#f9f7f2', borderColor: '#b8a88f'}}>
          <h3 className="font-semibold mb-1" style={{color: '#8d1c3e'}}>Key Insights:</h3>
          {chartView === 'current' && (
            <p className="text-gray-700">
              For premium travelers, practical factors dominate flight decisions with Flight Times (63.4%), 
              Cost (61.2%), and Direct Flights (59.6%) as the top three influences. Experience factors like 
              On-board Comfort (42.4%) and Previous Experience (36.9%) follow. Notably, Airline Loyalty (17.0%) 
              has the lowest influence among major factors yet maintains a high index (213.5), indicating 
              its distinctiveness among premium travelers.
            </p>
          )}
          {chartView === 'trends' && (
            <p className="text-gray-700">
              Flight decision factors have remained relatively stable over time, with Flight Times and Cost 
              consistently in the top positions. Notable shifts include a decrease in the importance of 
              Airline Loyalty (31.1% to 17.0%) and On-board Comfort (50.2% to 42.4%) since Q1 2023. 
              Direct Flights has maintained a stable high influence (58.7% to 59.6%), confirming its 
              enduring importance to premium travelers.
            </p>
          )}
          {chartView === 'categories' && (
            <p className="text-gray-700">
              Comparing categories, Functional factors (e.g., flight times, direct flights) remain the most 
              influential with an average {viewType === 'audience' ? 'audience of 50.3%' : 'index of 178.1'}, 
              followed by Value factors at {viewType === 'audience' ? '44.3%' : '194.9'}, and Experience factors at 
              {viewType === 'audience' ? '29.9%' : '165.6'}. Since Q3 2023, Experience factors have shown the largest 
              decline while Value factors have remained relatively stable.
            </p>
          )}
        </div>
      </div>
      
      {/* Data Table Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{color: '#1a4d2e'}}>Quarterly Comparison - Top 6 Factors</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Influence Factor</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2023</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2023</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2024</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2024</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {q3_2024_data.slice(0, 6).map((currentItem, idx) => {
                const influence = currentItem.influence;
                const values = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"].map(quarter => {
                  const item = allQuartersData.find(
                    data => data.quarter === quarter && data.influence === influence
                  );
                  return item ? item[viewType === 'audience' ? 'audience' : 'index'] : 0;
                });
                
                // Calculate trend: positive, negative, stable
                const start = values[0];
                const end = values[3];
                let trend;
                let trendColor;
                
                if (end > start * 1.1) {
                  trend = "↑";
                  trendColor = "text-green-600";
                } else if (end < start * 0.9) {
                  trend = "↓";
                  trendColor = "text-red-600";
                } else {
                  trend = "→";
                  trendColor = "text-gray-600";
                }
                
                return (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 text-xs font-medium text-gray-800" style={{ color: getInfluenceColor(influence) }}>
                      {influence}
                    </td>
                    {values.map((value, vidx) => (
                      <td key={vidx} className="px-2 py-2 text-center text-xs text-gray-800">
                        {value.toFixed(1)}{viewType === 'audience' ? "%" : ""}
                      </td>
                    ))}
                    <td className={`px-2 py-2 text-center text-lg font-bold ${trendColor}`}>
                      {trend}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Key Observations */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{color: '#1a4d2e'}}>Key Research & Booking Insights</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span style={{color: '#8d1c3e'}} className="mr-2 text-lg">•</span>
            <span><strong>Practicality Over Luxury:</strong> Premium travelers prioritize practical factors 
            (flight times, direct flights) above exclusive perks, suggesting they value time efficiency 
            and convenience over luxury offerings.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#1a4d2e'}} className="mr-2 text-lg">•</span>
            <span><strong>Value Consciousness:</strong> Despite their premium status, cost factors remain 
            highly influential (61.2%), indicating premium travelers remain value-conscious, looking for 
            quality but not at any price.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#d4a017'}} className="mr-2 text-lg">•</span>
            <span><strong>Loyalty Program Shift:</strong> The significant decrease in loyalty scheme 
            influence (31.1% to 17.0%) suggests a potential weakening of traditional loyalty mechanisms 
            among premium travelers.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#b8a88f'}} className="mr-2 text-lg">•</span>
            <span><strong>Transparency Importance:</strong> "No hidden fees" (40.2%) ranks notably high, 
            indicating premium travelers value transparency and straightforward booking experiences.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#8d1c3e'}} className="mr-2 text-lg">•</span>
            <span><strong>Experience Distinction:</strong> While experience factors rank lower in absolute 
            terms, factors like Airline Loyalty maintain high indices (213.5), showing these are distinctive 
            traits of premium travelers even if not the most frequent drivers.</span>
          </li>
        </ul>
      </div>
      
      {/* Strategic Implications */}
      <div className="p-4 rounded-lg border" style={{backgroundColor: '#f9f7f2', borderColor: '#b8a88f'}}>
        <h2 className="text-lg font-semibold mb-3" style={{color: '#8d1c3e'}}>Research & Booking Strategy Implications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2" style={{color: '#1a4d2e'}}>Digital Platforms & Search</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Filter Prominence:</span> Flight search tools should highlight 
                direct flight options, departure/arrival times, and transparent pricing to align with premium 
                traveler priorities.
              </li>
              <li>
                <span className="font-semibold">Time-Efficiency Messaging:</span> Marketing focused on time-saving 
                benefits of direct flights and convenient schedules will resonate strongly with premium travelers.
              </li>
              <li>
                <span className="font-semibold">Value Presentation:</span> Premium booking platforms should emphasize 
                value transparency rather than just luxury elements, with clear pricing and fee structure.
              </li>
              <li>
                <span className="font-semibold">Comfort Visualization:</span> Visual content showcasing on-board 
                comfort remains important despite its decline, as 42.4% still cite it as a key factor.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2" style={{color: '#1a4d2e'}}>Loyalty & Experience Strategies</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Loyalty Program Evolution:</span> The declining influence of loyalty 
                schemes suggests a need to refresh programs to focus on practical benefits (direct flights, 
                convenient times) rather than traditional perks.
              </li>
              <li>
                <span className="font-semibold">Transparent Rewards:</span> Develop loyalty benefits that align with 
                value consciousness, such as transparent upgrade pricing and fee waivers.
              </li>
              <li>
                <span className="font-semibold">Experience Reliability:</span> Previous airline experience remains 
                influential (36.9%), indicating the importance of consistent service quality and reliability.
              </li>
              <li>
                <span className="font-semibold">Multi-Channel Approach:</span> While digital clearly dominates research, 
                the influence of previous experience suggests word-of-mouth and reputation still play important roles 
                in the premium segment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfluencesTrends; 
import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  BarChart, Bar, Cell
} from 'recharts';

const ReasonsForNotTravelingTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  
  // Data for all quarters - REASONS FOR NOT TRAVELING
  const allQuartersData = [
    // Q1 2023
    { quarter: "Q1 2023", reason: "I don't have the time", audience: 1.4, dataPoint: 0.3, index: 66.8, responses: 1 },
    { quarter: "Q1 2023", reason: "It's too expensive", audience: 0.4, dataPoint: 0.0, index: 11.8, responses: 1 },
    { quarter: "Q1 2023", reason: "I don't have anyone to go with", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", reason: "I'm not interested", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", reason: "I'm worried about my safety", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", reason: "It's too much to organise", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", reason: "The impact on the environment", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", reason: "None of these", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    
    // Q3 2023
    { quarter: "Q3 2023", reason: "I'm worried about my safety", audience: 1.6, dataPoint: 1.0, index: 231.7, responses: 1 },
    { quarter: "Q3 2023", reason: "It's too expensive", audience: 1.6, dataPoint: 0.3, index: 63.6, responses: 1 },
    { quarter: "Q3 2023", reason: "I don't have the time", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", reason: "I don't have anyone to go with", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", reason: "I'm not interested", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", reason: "It's too much to organise", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", reason: "The impact on the environment", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", reason: "None of these", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    
    // Q1 2024
    { quarter: "Q1 2024", reason: "I don't have the time", audience: 2.5, dataPoint: 1.0, index: 214.3, responses: 1 },
    { quarter: "Q1 2024", reason: "I don't have anyone to go with", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2024", reason: "I'm not interested", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2024", reason: "I'm worried about my safety", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2024", reason: "It's too expensive", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2024", reason: "It's too much to organise", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2024", reason: "The impact on the environment", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2024", reason: "None of these", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    
    // Q3 2024
    { quarter: "Q3 2024", reason: "It's too expensive", audience: 1.7, dataPoint: 0.2, index: 61.8, responses: 1 },
    { quarter: "Q3 2024", reason: "I don't have anyone to go with", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", reason: "I don't have the time", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", reason: "I'm not interested", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", reason: "I'm worried about my safety", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", reason: "It's too much to organise", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", reason: "The impact on the environment", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", reason: "None of these", audience: 0, dataPoint: 0, index: 0, responses: 0 }
  ];
  
  // Data for Q3 2024 (latest quarter)
  const q3_2024_data = allQuartersData.filter(item => item.quarter === "Q3 2024" && (item.audience > 0 || item.index > 0));
  
  // Colors for the different reasons - Using Qatar palette
  const REASON_COLORS = {
    "I don't have the time": "#8d1c3e", // Burdeos
    "It's too expensive": "#d4a017", // Dorado
    "I'm worried about my safety": "#1a4d2e", // Verde oscuro
    "I don't have anyone to go with": "#b8a88f", // Beige
    "I'm not interested": "#8d1c3e", // Burdeos
    "It's too much to organise": "#d4a017", // Dorado
    "The impact on the environment": "#1a4d2e", // Verde oscuro
    "None of these": "#b8a88f" // Beige
  };
  
  // Process data for line chart (temporal evolution)
  const getTrendsData = () => {
    // Get unique reasons that have data
    const reasons = [...new Set(allQuartersData
      .filter(item => item.audience > 0 || item.index > 0)
      .map(item => item.reason))];
    
    // For each quarter, create an object with values for each reason
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      reasons.forEach(reason => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.reason === reason
        );
        
        if (match && (match.audience > 0 || match.index > 0)) {
          quarterData[reason] = match[viewType === 'audience' ? 'audience' : 'index'];
        } else {
          quarterData[reason] = 0;
        }
      });
      
      return quarterData;
    });
  };

  // Render line chart for temporal trends
  const renderTrendsChart = () => {
    const data = getTrendsData();
    const significantReasons = Object.keys(data[0])
      .filter(key => key !== 'quarter')
      .filter(reason => {
        return data.some(item => item[reason] > 0);
      });
    
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis 
            domain={viewType === 'audience' ? [0, 5] : [0, 250]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <Tooltip 
            formatter={(value) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1), 
              ''
            ]}
          />
          <Legend />
          
          {significantReasons.map((reason) => (
            <Line
              key={reason}
              type="monotone"
              dataKey={reason}
              name={reason}
              stroke={REASON_COLORS[reason] || "#000000"}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Render bar chart for current quarter
  const renderCurrentQuarterChart = () => {
    // Prep data for bar chart - only reasons with values
    const currentData = q3_2024_data.filter(item => 
      (viewType === 'audience' ? item.audience > 0 : item.index > 0)
    ).sort((a, b) => 
      viewType === 'audience' ? b.audience - a.audience : b.index - a.index
    );
    
    if (currentData.length === 0) {
      return (
        <div className="text-center p-8 text-gray-500">
          No significant data available for Q3 2024
        </div>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={currentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number"
            domain={viewType === 'audience' ? [0, 5] : [0, 100]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <YAxis 
            dataKey="reason" 
            type="category" 
            width={150}
            tick={{ fontSize: 12 }}
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
            {currentData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={REASON_COLORS[entry.reason] || "#000000"} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Get insights based on the data
  const getInsightsByQuarter = () => {
    const insights = {
      "Q1 2023": "Lack of time was the primary barrier (1.4%) with cost as a secondary concern (0.4%). Both had relatively low index values, suggesting these barriers are not highly distinctive for this audience.",
      "Q3 2023": "Safety concerns emerged as a significant barrier (1.6%) with a very high index of 231.7, indicating this is highly distinctive for premium travelers. Cost remained at 1.6% but with a lower index of 63.6.",
      "Q1 2024": "Time constraints reached their peak as a barrier (2.5%) with a high index value of 214.3, suggesting this was both common and distinctive for the premium travel segment during this period.",
      "Q3 2024": "Cost has become the primary barrier (1.7%) though with a relatively modest index of 61.8, suggesting this is a widespread concern not unique to premium travelers."
    };

    return insights;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Reasons for Not Traveling Analysis</h1>
      
      <div className="mb-6">
        <p className="text-gray-600">
          This analysis explores the various reasons why premium travelers choose not to travel, 
          examining how these barriers have evolved over time from Q1 2023 to Q3 2024.
          The data reveals shifting patterns in travel constraints and concerns.
        </p>
      </div>
      
      {/* Controls */}
      <div className="flex items-center mb-6">
        <span className="mr-2 text-gray-700 font-medium">Data View:</span>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
              viewType === 'audience' 
                ? 'bg-[#8d1c3e] text-white border-[#8d1c3e]' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setViewType('audience')}
          >
            Audience %
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
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
      
      {/* Main Chart Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
          Reasons for Not Traveling Trends (Q1 2023 - Q3 2024) - {viewType === 'audience' ? 'Audience %' : 'Index'}
        </h2>
        
        {renderTrendsChart()}
        
        <div className="mt-4 bg-[#f9f5ea] p-3 rounded border border-[#e8dbc1]">
          <h3 className="font-semibold text-[#8d1c3e] mb-1">Key Trend Insights:</h3>
          {viewType === 'audience' ? (
            <p className="text-gray-700">
              The reasons for not traveling have varied significantly over time. "Lack of time" was prominent in Q1 2023 (1.4%) 
              and peaked in Q1 2024 (2.5%) but disappeared in Q3 2024. Safety concerns only appeared as a barrier in Q3 2023 (1.6%). 
              "Too expensive" has been the most consistent barrier, appearing in multiple quarters and becoming the sole significant 
              reason in Q3 2024 (1.7%).
            </p>
          ) : (
            <p className="text-gray-700">
              The index values reveal which barriers are most distinctive for premium travelers. Safety concerns showed the highest 
              distinctiveness in Q3 2023 (index: 231.7), followed by time constraints in Q1 2024 (index: 214.3). Cost concerns 
              have maintained a more moderate index value (between 11.8 and 63.6), suggesting this barrier is less distinctive to 
              premium travelers compared to the general population.
            </p>
          )}
        </div>
      </div>
      
      {/* Current Quarter and Data Table Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Q3 2024 Barriers to Travel</h2>
          {renderCurrentQuarterChart()}
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Quarterly Progression</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Reason</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2023</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2023</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2024</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2024</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Pattern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[...new Set(allQuartersData
                  .filter(item => item.audience > 0 || item.index > 0)
                  .map(item => item.reason)
                )].map((reason, idx) => {
                  const values = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"].map(quarter => {
                    const item = allQuartersData.find(
                      data => data.quarter === quarter && data.reason === reason
                    );
                    return item ? item[viewType === 'audience' ? 'audience' : 'index'] : 0;
                  });
                  
                  // Determine pattern: consistent, emerging, declining, volatile
                  let pattern;
                  let patternColor;
                  
                  const nonZeroValues = values.filter(v => v > 0);
                  const increasingTrend = values[3] > values[0] && nonZeroValues.length > 1;
                  const decreasingTrend = values[0] > values[3] && values[0] > 0;
                  const volatileTrend = nonZeroValues.length > 1 && !increasingTrend && !decreasingTrend;
                  const intermittentTrend = nonZeroValues.length === 1;
                  
                  if (increasingTrend) {
                    pattern = "Emerging";
                    patternColor = "text-[#1a4d2e]";
                  } else if (decreasingTrend) {
                    pattern = "Declining";
                    patternColor = "text-[#8d1c3e]";
                  } else if (volatileTrend) {
                    pattern = "Volatile";
                    patternColor = "text-[#d4a017]";
                  } else if (intermittentTrend) {
                    pattern = "Intermittent";
                    patternColor = "text-[#b8a88f]";
                  } else {
                    pattern = "—";
                    patternColor = "text-gray-600";
                  }
                  
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs text-gray-800">{reason}</td>
                      {values.map((value, vidx) => (
                        <td key={vidx} className="px-2 py-2 text-center text-xs text-gray-800">
                          {value > 0 ? `${value.toFixed(1)}${viewType === 'audience' ? "%" : ""}` : "—"}
                        </td>
                      ))}
                      <td className={`px-2 py-2 text-center text-xs font-medium ${patternColor}`}>
                        {pattern}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Latest Quarter Highlight - Now full width */}
      <div className="mb-6 bg-[#f6f3ea] p-4 rounded-lg border border-[#d4a017]">
        <h3 className="text-lg font-semibold text-[#8d1c3e] mb-2">Latest Quarter Highlight:</h3>
        <p className="text-gray-700">
          In Q3 2024, cost is the only significant barrier to travel reported by premium travelers (1.7%). 
          With an index of 61.8, this suggests that while cost is a factor, it's less pronounced among premium 
          travelers compared to the general population. Notably, time constraints and safety concerns that were 
          significant in earlier quarters no longer appear as barriers.
        </p>
      </div>
      
      {/* Key Observations */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Observations</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
            <span><strong>Shifting Barriers:</strong> The primary reasons for not traveling have changed dramatically 
            over time, suggesting a dynamic travel environment with evolving constraints.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a017] mr-2 text-lg">•</span>
            <span><strong>Cost Consistency:</strong> Cost has been the most persistent barrier, appearing in multiple 
            quarters and becoming the sole factor in the latest period.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1a4d2e] mr-2 text-lg">•</span>
            <span><strong>Safety Spike:</strong> Safety concerns showed a notable spike in Q3 2023 with the highest 
            index value of any factor (231.7), indicating a temporary but significant concern.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#b8a88f] mr-2 text-lg">•</span>
            <span><strong>Time Constraints Pattern:</strong> Time constraints peaked in Q1 2024 (2.5%) but then 
            completely disappeared as a barrier by Q3 2024.</span>
          </li>
        </ul>
      </div>
      
      {/* Strategic Implications */}
      <div className="bg-[#f8f4ef] p-4 rounded-lg border border-[#b8a88f]">
        <h2 className="text-lg font-semibold text-[#8d1c3e] mb-3">Strategic Implications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-[#1a4d2e] mb-2">Marketing Opportunities</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Value Messaging:</span> With cost being the current primary barrier, 
                emphasize value over price points, focusing on experience quality and exclusivity.
              </li>
              <li>
                <span className="font-semibold">Time-Efficiency:</span> Although time constraints have disappeared as 
                a stated barrier, developing time-efficient premium travel options could provide a competitive edge.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-[#1a4d2e] mb-2">Product Development</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Pricing Strategy:</span> Consider examining premium travel 
                pricing strategies to address persistent cost concerns without diminishing premium positioning.
              </li>
              <li>
                <span className="font-semibold">Safety Features:</span> Maintain safety features as a 
                core product element, especially after the significant concerns seen in Q3 2023.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsForNotTravelingTrends; 
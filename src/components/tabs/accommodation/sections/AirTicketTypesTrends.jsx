import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

const AirTicketTypesTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  
  // Data for all quarters - AIR TRAVEL TICKET TYPES
  const allQuartersData = [
    // Q1 2023
    { quarter: "Q1 2023", ticketType: "Business Class", audience: 11.5, dataPoint: 0.6, index: 134.2, responses: 18 },
    { quarter: "Q1 2023", ticketType: "First Class", audience: 11.4, dataPoint: 0.7, index: 170.9, responses: 16 },
    { quarter: "Q1 2023", ticketType: "Premium Economy", audience: 21.9, dataPoint: 1.0, index: 238.0, responses: 33 },
    
    // Q3 2023
    { quarter: "Q3 2023", ticketType: "Business Class", audience: 14.4, dataPoint: 1.0, index: 235.2, responses: 21 },
    { quarter: "Q3 2023", ticketType: "First Class", audience: 7.9, dataPoint: 0.7, index: 155.6, responses: 11 },
    { quarter: "Q3 2023", ticketType: "Premium Economy", audience: 23.9, dataPoint: 1.3, index: 306.5, responses: 30 },
    
    // Q1 2024
    { quarter: "Q1 2024", ticketType: "Business Class", audience: 16.8, dataPoint: 0.9, index: 205.9, responses: 25 },
    { quarter: "Q1 2024", ticketType: "First Class", audience: 13.4, dataPoint: 1.0, index: 208.6, responses: 19 },
    { quarter: "Q1 2024", ticketType: "Premium Economy", audience: 22.7, dataPoint: 1.1, index: 238.4, responses: 30 },
    
    // Q3 2024
    { quarter: "Q3 2024", ticketType: "Business Class", audience: 12.3, dataPoint: 0.5, index: 164.1, responses: 10 },
    { quarter: "Q3 2024", ticketType: "First Class", audience: 14.8, dataPoint: 0.8, index: 255.5, responses: 13 },
    { quarter: "Q3 2024", ticketType: "Premium Economy", audience: 14.8, dataPoint: 0.5, index: 171.2, responses: 13 }
  ];
  
  // Data for Q3 2024 (latest quarter)
  const q3_2024_data = allQuartersData.filter(item => item.quarter === "Q3 2024");
  
  // Colors for the different ticket types - Using Qatar palette
  const TICKET_COLORS = {
    "Business Class": "#8d1c3e", // Burgundy
    "First Class": "#d4a017",    // Gold
    "Premium Economy": "#1a4d2e" // Dark Green
  };
  
  // Process data for trends over time
  const getTrendsData = () => {
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      ["Business Class", "First Class", "Premium Economy"].forEach(ticketType => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.ticketType === ticketType
        );
        
        if (match) {
          quarterData[ticketType] = match[viewType === 'audience' ? 'audience' : 'index'];
        } else {
          quarterData[ticketType] = 0;
        }
      });
      
      return quarterData;
    });
  };

  // Render line chart for trends
  const renderTrendsChart = () => {
    const data = getTrendsData();
    
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis 
            domain={viewType === 'audience' ? [0, 30] : [0, 350]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <Tooltip 
            formatter={(value, name) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1),
              name
            ]}
          />
          <Legend />
          
          {["Business Class", "First Class", "Premium Economy"].map((type) => (
            <Line
              key={type}
              type="monotone"
              dataKey={type}
              name={type}
              stroke={TICKET_COLORS[type]}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Prepare data for pie chart
  const getPieChartData = () => {
    return q3_2024_data.map(item => ({
      name: item.ticketType,
      value: item.audience,
      index: item.index,
      fill: TICKET_COLORS[item.ticketType]
    }));
  };

  // Render current quarter distribution
  const renderCurrentQuarterChart = () => {
    const data = getPieChartData();
    
    return (
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name, props) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : props.payload.index.toFixed(1),
              name
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  // Calculate total premium segment (Business + First)
  const calculatePremiumSegment = (quarter) => {
    const quarterData = allQuartersData.filter(item => item.quarter === quarter);
    
    const businessClass = quarterData.find(item => item.ticketType === "Business Class")?.audience || 0;
    const firstClass = quarterData.find(item => item.ticketType === "First Class")?.audience || 0;
    
    return (businessClass + firstClass).toFixed(1);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-bold mb-4" style={{color: '#8d1c3e'}}>Premium Air Travel: Ticket Type Preferences</h1>
      
      {/* Controls */}
      <div className="flex items-center mb-4">
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
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Current Quarter */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-center" style={{color: '#1a4d2e'}}>
            Q3 2024 Air Ticket Types Distribution
          </h2>
          {renderCurrentQuarterChart()}
          <div className="mt-2 p-3 rounded border" style={{backgroundColor: '#f9f7f2', borderColor: '#b8a88f'}}>
            <h3 className="font-semibold mb-1" style={{color: '#8d1c3e'}}>Current Distribution:</h3>
            <p className="text-sm text-gray-700">
              In Q3 2024, First Class and Premium Economy share equal audience penetration (14.8%), 
              with Business Class following closely at 12.3%. The combined premium segment 
              (First + Business) represents 27.1% of premium travelers, indicating strong luxury air travel preference.
            </p>
          </div>
        </div>
        
        {/* Trends Chart */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-center" style={{color: '#1a4d2e'}}>
            Air Ticket Type Trends (Q1 2023 - Q3 2024)
          </h2>
          {renderTrendsChart()}
          <div className="mt-2 p-3 rounded border" style={{backgroundColor: '#f9f7f2', borderColor: '#b8a88f'}}>
            <h3 className="font-semibold mb-1" style={{color: '#8d1c3e'}}>Trend Insights:</h3>
            <p className="text-sm text-gray-700">
              First Class has shown the most growth, rising from 11.4% to 14.8%, while Premium Economy has 
              declined from its peak of 23.9% to 14.8%. Business Class usage has fluctuated, 
              reaching its highest point in Q1 2024 (16.8%) before declining in the latest quarter.
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Metrics Table */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{color: '#1a4d2e'}}>Quarterly Premium Segment Evolution</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Quarter</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Business Class</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">First Class</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Premium Economy</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Premium Segment Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"].map((quarter, idx) => {
                const quarterData = allQuartersData.filter(item => item.quarter === quarter);
                
                return (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 text-xs font-medium text-gray-700">{quarter}</td>
                    <td className="px-3 py-2 text-center text-xs" style={{ color: TICKET_COLORS["Business Class"] }}>
                      {quarterData.find(item => item.ticketType === "Business Class")?.audience.toFixed(1)}%
                    </td>
                    <td className="px-3 py-2 text-center text-xs" style={{ color: TICKET_COLORS["First Class"] }}>
                      {quarterData.find(item => item.ticketType === "First Class")?.audience.toFixed(1)}%
                    </td>
                    <td className="px-3 py-2 text-center text-xs" style={{ color: TICKET_COLORS["Premium Economy"] }}>
                      {quarterData.find(item => item.ticketType === "Premium Economy")?.audience.toFixed(1)}%
                    </td>
                    <td className="px-3 py-2 text-center text-xs font-semibold text-gray-800">
                      {calculatePremiumSegment(quarter)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Key Insights */}
      <div className="p-4 rounded-lg border" style={{backgroundColor: '#f9f7f2', borderColor: '#b8a88f'}}>
        <h2 className="text-lg font-semibold mb-3" style={{color: '#8d1c3e'}}>Key Travel Insights</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span style={{color: '#d4a017'}} className="mr-2 text-lg">•</span>
            <span><strong>Premium Preference:</strong> First Class has the highest index (255.5) in Q3 2024, indicating strong distinctiveness among premium travelers.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#d4a017'}} className="mr-2 text-lg">•</span>
            <span><strong>Shifting Patterns:</strong> Premium Economy has seen the largest decline (from 23.9% to 14.8%), potentially indicating a shift toward higher-tier options.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#d4a017'}} className="mr-2 text-lg">•</span>
            <span><strong>Premium Segment Strength:</strong> The combined premium segment (Business + First Class) remains stable at approximately 27%, revealing consistent luxury travel preference.</span>
          </li>
          <li className="flex items-start">
            <span style={{color: '#d4a017'}} className="mr-2 text-lg">•</span>
            <span><strong>Strategic Implications:</strong> The growth in First Class preference suggests increasing willingness to invest in top-tier travel experiences, aligning with luxury destination preferences.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirTicketTypesTrends; 
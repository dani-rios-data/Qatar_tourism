import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  BarChart, Bar, Cell, PieChart, Pie, Sector
} from 'recharts';

const PriceAttitudeTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Data for all quarters - ATTITUDES TOWARDS PRICE
  const allQuartersData = [
    // Q1 2023
    { quarter: "Q1 2023", attitude: "I look for the cheapest options", audience: 2.6, dataPoint: 0.1, index: 23.6, responses: 4 },
    { quarter: "Q1 2023", attitude: "I look for reasonable options, but not the cheapest", audience: 26.1, dataPoint: 0.3, index: 67.8, responses: 38 },
    { quarter: "Q1 2023", attitude: "I look for mid-range options", audience: 39.2, dataPoint: 0.6, index: 140.8, responses: 58 },
    { quarter: "Q1 2023", attitude: "I look for options towards the top range", audience: 16.4, dataPoint: 0.9, index: 226.2, responses: 26 },
    { quarter: "Q1 2023", attitude: "I look for top-range options as I get the best experience", audience: 14.1, dataPoint: 1.1, index: 276.0, responses: 20 },
    
    // Q3 2023
    { quarter: "Q3 2023", attitude: "I look for the cheapest options", audience: 0.7, dataPoint: 0.0, index: 6.6, responses: 1 },
    { quarter: "Q3 2023", attitude: "I look for reasonable options, but not the cheapest", audience: 15.2, dataPoint: 0.2, index: 38.4, responses: 23 },
    { quarter: "Q3 2023", attitude: "I look for mid-range options", audience: 41.9, dataPoint: 0.6, index: 141.4, responses: 54 },
    { quarter: "Q3 2023", attitude: "I look for options towards the top range", audience: 26.1, dataPoint: 1.6, index: 372.5, responses: 34 },
    { quarter: "Q3 2023", attitude: "I look for top-range options as I get the best experience", audience: 14.6, dataPoint: 1.3, index: 307.3, responses: 19 },
    
    // Q1 2024
    { quarter: "Q1 2024", attitude: "I look for the cheapest options", audience: 1.8, dataPoint: 0.1, index: 17.3, responses: 2 },
    { quarter: "Q1 2024", attitude: "I look for reasonable options, but not the cheapest", audience: 22.2, dataPoint: 0.3, index: 56.6, responses: 30 },
    { quarter: "Q1 2024", attitude: "I look for mid-range options", audience: 32.8, dataPoint: 0.5, index: 106.8, responses: 50 },
    { quarter: "Q1 2024", attitude: "I look for options towards the top range", audience: 25.5, dataPoint: 1.4, index: 307.6, responses: 38 },
    { quarter: "Q1 2024", attitude: "I look for top-range options as I get the best experience", audience: 15.2, dataPoint: 1.3, index: 280.0, responses: 19 },
    
    // Q3 2024
    { quarter: "Q3 2024", attitude: "I look for the cheapest options", audience: 2.1, dataPoint: 0.1, index: 21.0, responses: 2 },
    { quarter: "Q3 2024", attitude: "I look for reasonable options, but not the cheapest", audience: 23.3, dataPoint: 0.2, index: 59.1, responses: 21 },
    { quarter: "Q3 2024", attitude: "I look for mid-range options", audience: 39.7, dataPoint: 0.4, index: 125.7, responses: 30 },
    { quarter: "Q3 2024", attitude: "I look for options towards the top range", audience: 16.9, dataPoint: 0.7, index: 219.3, responses: 13 },
    { quarter: "Q3 2024", attitude: "I look for top-range options as I get the best experience", audience: 16.2, dataPoint: 1.3, index: 421.0, responses: 15 }
  ];
  
  // Data for Q3 2024 (latest quarter)
  const q3_2024_data = allQuartersData.filter(item => item.quarter === "Q3 2024");
  
  // For category labeling and color scheme - ordered from lowest to highest price sensitivity
  const PRICE_ATTITUDES = [
    "I look for top-range options as I get the best experience",
    "I look for options towards the top range",
    "I look for mid-range options",
    "I look for reasonable options, but not the cheapest",
    "I look for the cheapest options"
  ];
  
  // Simplified labels for charts
  const SIMPLIFIED_LABELS = {
    "I look for top-range options as I get the best experience": "Top-range",
    "I look for options towards the top range": "Towards top-range",
    "I look for mid-range options": "Mid-range",
    "I look for reasonable options, but not the cheapest": "Reasonable",
    "I look for the cheapest options": "Cheapest"
  };
  
  // Colors for the different attitudes - Using Qatar palette
  const ATTITUDE_COLORS = {
    "I look for top-range options as I get the best experience": "#8d1c3e", // Burgundy
    "I look for options towards the top range": "#1a4d2e", // Dark Green
    "I look for mid-range options": "#d4a017", // Gold
    "I look for reasonable options, but not the cheapest": "#b8a88f", // Beige
    "I look for the cheapest options": "#5e5e5e" // Dark Gray (for contrast)
  };
  
  // Group premium vs value-oriented
  const PREMIUM_ATTITUDES = [
    "I look for top-range options as I get the best experience",
    "I look for options towards the top range"
  ];
  
  const MID_ATTITUDES = [
    "I look for mid-range options"
  ];
  
  const VALUE_ATTITUDES = [
    "I look for reasonable options, but not the cheapest",
    "I look for the cheapest options"
  ];
  
  // Process data for line chart (trends by attitude)
  const getTrendsData = () => {
    // Get unique quarters
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    // Create an object for each attitude
    return PRICE_ATTITUDES.map(attitude => {
      const attitudeData = { attitude: SIMPLIFIED_LABELS[attitude] || attitude };
      
      quarters.forEach(quarter => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.attitude === attitude
        );
        
        if (match) {
          attitudeData[quarter] = match[viewType === 'audience' ? 'audience' : 'index'];
        } else {
          attitudeData[quarter] = 0;
        }
      });
      
      return attitudeData;
    });
  };
  
  // Process data for aggregate trends (premium vs. value)
  const getAggregatedTrendData = () => {
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      // Calculate premium segment
      quarterData['Premium'] = PREMIUM_ATTITUDES.reduce((total, attitude) => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.attitude === attitude
        );
        return total + (match ? match.audience : 0);
      }, 0);
      
      // Calculate mid-range segment
      quarterData['Mid-range'] = MID_ATTITUDES.reduce((total, attitude) => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.attitude === attitude
        );
        return total + (match ? match.audience : 0);
      }, 0);
      
      // Calculate value segment
      quarterData['Value'] = VALUE_ATTITUDES.reduce((total, attitude) => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.attitude === attitude
        );
        return total + (match ? match.audience : 0);
      }, 0);
      
      return quarterData;
    });
  };

  // For pie chart
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, value, percent } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#333" fontSize={14}>
          {payload.shortName}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>
          {`${value.toFixed(1)}%`}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontSize={11}>
          {`(${(percent * 100).toFixed(1)}%)`}
        </text>
      </g>
    );
  };

  // Prepare data for pie chart
  const getPieChartData = () => {
    return q3_2024_data.map(item => ({
      name: item.attitude,
      shortName: SIMPLIFIED_LABELS[item.attitude] || item.attitude,
      value: item.audience,
      index: item.index,
      fill: ATTITUDE_COLORS[item.attitude]
    })).sort((a, b) => PRICE_ATTITUDES.indexOf(a.name) - PRICE_ATTITUDES.indexOf(b.name));
  };

  // Render the line chart for attitude trends
  const renderAttitudeTrendsChart = () => {
    const data = getTrendsData();
    
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="attitude" />
          <YAxis 
            domain={viewType === 'audience' ? [0, 50] : [0, 450]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <Tooltip 
            formatter={(value, name) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1),
              name
            ]}
          />
          <Legend />
          
          {["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"].map((quarter, index) => (
            <Line
              key={quarter}
              type="monotone"
              dataKey={quarter}
              name={quarter}
              stroke={["#8d1c3e", "#1a4d2e", "#d4a017", "#b8a88f"][index]}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Render the stacked bar chart for premium vs value
  const renderSegmentTrendsChart = () => {
    const data = getAggregatedTrendData();
    
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, '']} />
          <Legend />
          <Bar dataKey="Premium" stackId="a" fill="#8d1c3e" name="Premium" />
          <Bar dataKey="Mid-range" stackId="a" fill="#d4a017" name="Mid-range" />
          <Bar dataKey="Value" stackId="a" fill="#b8a88f" name="Value-oriented" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Render pie chart for current quarter
  const renderCurrentQuarterPieChart = () => {
    const data = getPieChartData();
    
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            dataKey={viewType === 'audience' ? 'value' : 'index'}
            onMouseEnter={(_, index) => setActiveIndex(index)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill || ATTITUDE_COLORS[entry.name] || "#000000"} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1),
              viewType === 'audience' ? 'Audience' : 'Index'
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Attitudes Towards Price Analysis</h1>
      
      <div className="mb-6">
        <p className="text-gray-600">
          This analysis explores how premium travelers approach pricing when making travel decisions, 
          from those seeking the cheapest options to those prioritizing top-range experiences. 
          The data tracks the evolution of these attitudes from Q1 2023 to Q3 2024.
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
      
      {/* Current Quarter Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center">
            Q3 2024 Price Attitude Distribution
          </h2>
          {renderCurrentQuarterPieChart()}
          <div className="mt-2 text-sm text-center text-gray-500">
            <p>Click or hover over segments for details</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Q3 2024 Key Insights</h2>
          
          <div className="space-y-4">
            <div className="bg-[#f9e8ed] p-3 rounded border border-[#e7c8d1]">
              <h3 className="font-semibold text-[#8d1c3e] mb-1">Premium Segment Analysis:</h3>
              <p className="text-gray-700">
                In Q3 2024, 33.1% of premium travelers prioritize top or near-top range options, showing a 
                strong preference for quality over price. The "top-range" segment shows the highest 
                distinctiveness with an index of 421.0, over 4x the general population.
              </p>
            </div>
            
            <div className="bg-[#f8f2d8] p-3 rounded border border-[#e7deb8]">
              <h3 className="font-semibold text-[#d4a017] mb-1">Majority Positioning:</h3>
              <p className="text-gray-700">
                Mid-range options continue to dominate preference at 39.7%, indicating that even premium 
                travelers often seek balance between quality and value. This segment has a moderate 
                index of 125.7, showing some distinctiveness but less pronounced than the premium segment.
              </p>
            </div>
            
            <div className="bg-[#e8eae0] p-3 rounded border border-[#d1d6c2]">
              <h3 className="font-semibold text-[#1a4d2e] mb-1">Value-Conscious Segment:</h3>
              <p className="text-gray-700">
                25.4% of premium travelers remain value-conscious, with 23.3% looking for "reasonable options" 
                and only 2.1% seeking the cheapest options. The low index values (59.1 and 21.0 respectively) 
                confirm these attitudes are significantly underrepresented compared to the general population.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trends Charts Section */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Price Attitude Segments Over Time - {viewType === 'audience' ? 'Audience %' : 'Index'} 
          </h2>
          {renderSegmentTrendsChart()}
          <div className="mt-4 bg-[#f9f5ea] p-3 rounded border border-[#e8dbc1]">
            <h3 className="font-semibold text-[#8d1c3e] mb-1">Key Trend Observations:</h3>
            {viewType === 'audience' ? (
              <p className="text-gray-700">
                The premium segment (top and near-top range) has fluctuated between 30-40% over the observed period, 
                with Q3 2023 showing the highest premium orientation (40.7%). Mid-range preferences remain dominant 
                but have varied from 32.8% to 41.9%. Value-oriented attitudes (reasonable and cheapest options) 
                show relatively stable representation between 23-28%.
              </p>
            ) : (
              <p className="text-gray-700">
                The distinctiveness of premium attitudes has increased dramatically, with the top-range segment reaching 
                its highest index of 421.0 in Q3 2024, up significantly from 276.0 in Q1 2023. Mid-range preferences 
                show moderate but stable distinctiveness (indices between 106.8-141.4). Value-oriented attitudes consistently 
                show indices well below 100, confirming these are not distinctive traits of premium travelers.
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Attitude Trends Chart Section */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Attitude Evolution by Quarter - {viewType === 'audience' ? 'Audience %' : 'Index'}
          </h2>
          {renderAttitudeTrendsChart()}
        </div>
      </div>
      
      {/* Data Table Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Quarterly Progression</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Price Attitude</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2023</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2023</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2024</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2024</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {PRICE_ATTITUDES.map((attitude, idx) => {
                const values = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"].map(quarter => {
                  const item = allQuartersData.find(
                    data => data.quarter === quarter && data.attitude === attitude
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
                  trendColor = "text-[#1a4d2e]";
                } else if (end < start * 0.9) {
                  trend = "↓";
                  trendColor = "text-[#8d1c3e]";
                } else {
                  trend = "→";
                  trendColor = "text-gray-600";
                }
                
                return (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-2 text-xs text-gray-800">{SIMPLIFIED_LABELS[attitude] || attitude}</td>
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
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Observations</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
            <span><strong>Balanced Portfolio:</strong> Premium travelers maintain a balanced portfolio of price attitudes, 
            with significant representation across top-range (16.2%), near-top (16.9%), and mid-range (39.7%) preferences.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1a4d2e] mr-2 text-lg">•</span>
            <span><strong>Growing Premium Distinctiveness:</strong> The index for top-range options has increased from 276.0 to 421.0, 
            indicating this attitude is becoming increasingly distinctive of premium travelers.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a017] mr-2 text-lg">•</span>
            <span><strong>Mid-Range Dominance:</strong> Across all quarters, mid-range options consistently capture the largest 
            share of premium travelers (32.8-41.9%), highlighting the importance of balanced value propositions.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#b8a88f] mr-2 text-lg">•</span>
            <span><strong>Minimal Budget Focus:</strong> The "cheapest options" segment remains consistently small (0.7-2.6%) 
            and highly undistinctive (indices: 6.6-23.6), confirming premium travelers rarely prioritize lowest price.</span>
          </li>
          <li className="flex items-start">
            <span className="text-gray-600 mr-2 text-lg">•</span>
            <span><strong>Fluctuating Premium Segment:</strong> The premium segment (top and near-top combined) shows 
            quarterly fluctuations between 30.5% and 40.7%, suggesting varying price sensitivity over time.</span>
          </li>
        </ul>
      </div>
      
      {/* Strategic Implications */}
      <div className="bg-[#f8f4ef] p-4 rounded-lg border border-[#b8a88f]">
        <h2 className="text-lg font-semibold text-[#8d1c3e] mb-3">Strategic Implications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-[#1a4d2e] mb-2">Pricing Strategy Recommendations</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Premium Tier Expansion:</span> Given the high distinctiveness (index: 421.0) 
                of the top-range segment, develop and expand exclusive premium offerings with clearly articulated benefits.
              </li>
              <li>
                <span className="font-semibold">Mid-Market Focus:</span> Maintain strong focus on mid-range options (39.7% of audience) 
                with premium elements to capture the largest segment of premium travelers.
              </li>
              <li>
                <span className="font-semibold">Value Communication:</span> For the 23.3% seeking "reasonable options," emphasize value 
                through bundling and added benefits rather than direct discounting.
              </li>
              <li>
                <span className="font-semibold">Tiered Experience Design:</span> Create clearly differentiated tiers of service and 
                experience to appeal to the distinct price attitude segments identified.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-[#1a4d2e] mb-2">Marketing Implications</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Quality Messaging:</span> Emphasize quality and experience benefits for the 33.1% 
                of travelers seeking premium options, avoiding price-focused messaging.
              </li>
              <li>
                <span className="font-semibold">Balanced Value Proposition:</span> For the dominant mid-range segment, highlight 
                balanced value propositions that emphasize quality-to-price ratio.
              </li>
              <li>
                <span className="font-semibold">Segmented Campaigns:</span> Develop distinctly positioned campaigns for the three 
                primary segments (premium, mid-range, value-conscious).
              </li>
              <li>
                <span className="font-semibold">Special Offers Structure:</span> Design special offers that maintain premium 
                positioning through added value rather than direct discounting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceAttitudeTrends; 
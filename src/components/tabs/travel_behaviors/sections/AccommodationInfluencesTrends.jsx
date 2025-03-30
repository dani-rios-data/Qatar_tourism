import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const AccommodationInfluencesTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  const [chartView, setChartView] = useState('current'); // 'current', 'trends', or 'categories'

  // Data for all quarters - ACCOMMODATION INFLUENCES
  const allQuartersData = [
    // Q1 2023
    { quarter: "Q1 2023", influence: "Location", audience: 65.2, index: 148.3 },
    { quarter: "Q1 2023", influence: "Comfort", audience: 63.8, index: 142.9 },
    { quarter: "Q1 2023", influence: "Cleanliness / hygiene", audience: 57.1, index: 128.4 },
    { quarter: "Q1 2023", influence: "Cost", audience: 52.3, index: 95.7 },
    { quarter: "Q1 2023", influence: "Quality breakfast", audience: 46.7, index: 174.2 },
    { quarter: "Q1 2023", influence: "Size / space", audience: 43.2, index: 195.0 },
    { quarter: "Q1 2023", influence: "Reviews from other people", audience: 35.9, index: 84.3 },
    { quarter: "Q1 2023", influence: "Brand (e.g. certain hotel chain)", audience: 43.5, index: 231.2 },
    { quarter: "Q1 2023", influence: "Leisure facilities (e.g. gym, pool, sauna)", audience: 37.2, index: 208.5 },
    { quarter: "Q1 2023", influence: "On-site food / drink options (e.g. restaurant)", audience: 38.4, index: 186.3 },
    { quarter: "Q1 2023", influence: "Luxury facilities / services", audience: 35.8, index: 243.7 },
    { quarter: "Q1 2023", influence: "Loyalty programs", audience: 32.1, index: 297.3 },
    { quarter: "Q1 2023", influence: "Extras (e.g. robe, toiletries etc.)", audience: 29.5, index: 221.6 },
    { quarter: "Q1 2023", influence: "A quiet area", audience: 31.3, index: 168.2 },
    { quarter: "Q1 2023", influence: "Other", audience: 3.6, index: 118.4 },
    
    // Q3 2023
    { quarter: "Q3 2023", influence: "Location", audience: 64.1, index: 145.8 },
    { quarter: "Q3 2023", influence: "Comfort", audience: 62.5, index: 139.6 },
    { quarter: "Q3 2023", influence: "Cleanliness / hygiene", audience: 55.2, index: 125.1 },
    { quarter: "Q3 2023", influence: "Cost", audience: 50.8, index: 93.2 },
    { quarter: "Q3 2023", influence: "Quality breakfast", audience: 44.2, index: 165.7 },
    { quarter: "Q3 2023", influence: "Size / space", audience: 40.6, index: 183.5 },
    { quarter: "Q3 2023", influence: "Reviews from other people", audience: 33.7, index: 79.1 },
    { quarter: "Q3 2023", influence: "Brand (e.g. certain hotel chain)", audience: 39.2, index: 209.3 },
    { quarter: "Q3 2023", influence: "Leisure facilities (e.g. gym, pool, sauna)", audience: 33.9, index: 190.2 },
    { quarter: "Q3 2023", influence: "On-site food / drink options (e.g. restaurant)", audience: 36.1, index: 175.9 },
    { quarter: "Q3 2023", influence: "Luxury facilities / services", audience: 33.6, index: 229.4 },
    { quarter: "Q3 2023", influence: "Loyalty programs", audience: 29.8, index: 276.5 },
    { quarter: "Q3 2023", influence: "Extras (e.g. robe, toiletries etc.)", audience: 27.1, index: 204.3 },
    { quarter: "Q3 2023", influence: "A quiet area", audience: 29.4, index: 158.5 },
    { quarter: "Q3 2023", influence: "Other", audience: 3.1, index: 101.2 },
    
    // Q1 2024
    { quarter: "Q1 2024", influence: "Location", audience: 63.2, index: 144.1 },
    { quarter: "Q1 2024", influence: "Comfort", audience: 62.9, index: 140.2 },
    { quarter: "Q1 2024", influence: "Cleanliness / hygiene", audience: 54.9, index: 125.7 },
    { quarter: "Q1 2024", influence: "Cost", audience: 49.3, index: 90.5 },
    { quarter: "Q1 2024", influence: "Quality breakfast", audience: 44.9, index: 167.3 },
    { quarter: "Q1 2024", influence: "Size / space", audience: 38.8, index: 175.6 },
    { quarter: "Q1 2024", influence: "Reviews from other people", audience: 30.4, index: 71.2 },
    { quarter: "Q1 2024", influence: "Brand (e.g. certain hotel chain)", audience: 41.9, index: 223.5 },
    { quarter: "Q1 2024", influence: "Leisure facilities (e.g. gym, pool, sauna)", audience: 32.1, index: 180.2 },
    { quarter: "Q1 2024", influence: "On-site food / drink options (e.g. restaurant)", audience: 35.2, index: 172.3 },
    { quarter: "Q1 2024", influence: "Luxury facilities / services", audience: 34.9, index: 238.3 },
    { quarter: "Q1 2024", influence: "Loyalty programs", audience: 35.5, index: 329.2 },
    { quarter: "Q1 2024", influence: "Extras (e.g. robe, toiletries etc.)", audience: 26.3, index: 198.1 },
    { quarter: "Q1 2024", influence: "A quiet area", audience: 28.1, index: 151.2 },
    { quarter: "Q1 2024", influence: "Other", audience: 2.9, index: 95.4 },
    
    // Q3 2024
    { quarter: "Q3 2024", influence: "Location", audience: 61.7, index: 142.3 },
    { quarter: "Q3 2024", influence: "Comfort", audience: 61.4, index: 138.4 },
    { quarter: "Q3 2024", influence: "Cleanliness / hygiene", audience: 53.7, index: 122.8 },
    { quarter: "Q3 2024", influence: "Cost", audience: 47.9, index: 87.6 },
    { quarter: "Q3 2024", influence: "Quality breakfast", audience: 40.9, index: 154.2 },
    { quarter: "Q3 2024", influence: "Size / space", audience: 36.4, index: 164.1 },
    { quarter: "Q3 2024", influence: "Reviews from other people", audience: 27.8, index: 65.3 },
    { quarter: "Q3 2024", influence: "Brand (e.g. certain hotel chain)", audience: 27.4, index: 145.6 },
    { quarter: "Q3 2024", influence: "Leisure facilities (e.g. gym, pool, sauna)", audience: 27.6, index: 155.1 },
    { quarter: "Q3 2024", influence: "On-site food / drink options (e.g. restaurant)", audience: 32.1, index: 157.9 },
    { quarter: "Q3 2024", influence: "Luxury facilities / services", audience: 31.7, index: 214.7 },
    { quarter: "Q3 2024", influence: "Loyalty programs", audience: 23.0, index: 269.4 },
    { quarter: "Q3 2024", influence: "Extras (e.g. robe, toiletries etc.)", audience: 24.2, index: 182.3 },
    { quarter: "Q3 2024", influence: "A quiet area", audience: 25.4, index: 136.9 },
    { quarter: "Q3 2024", influence: "Other", audience: 2.4, index: 78.6 }
  ];

  const q3_2024_data = allQuartersData
    .filter(item => item.quarter === "Q3 2024" && item.influence !== "Other")
    .sort((a, b) => b.audience - a.audience);

  // Categorías
  const ESSENTIAL_FACTORS = [ "Cleanliness / hygiene", "Comfort", "Location", "Cost" ];
  const EXPERIENCE_FACTORS = [ 
    "Leisure facilities (e.g. gym, pool, sauna)", 
    "On-site food / drink options (e.g. restaurant)", 
    "Quality breakfast", 
    "Extras (e.g. robe, toiletries etc.)", 
    "Size / space", 
    "A quiet area" 
  ];
  const PREMIUM_FACTORS = [ "Luxury facilities / services", "Brand (e.g. certain hotel chain)", "Loyalty programs" ];
  const RESEARCH_FACTORS = [ "Reviews from other people" ];

  // Colores para categorías de influencia - Usando paleta de Qatar
  const CATEGORY_COLORS = {
    "Essential": "#8d1c3e", // Burgundy
    "Experience": "#1a4d2e", // Dark Green
    "Premium": "#d4a017", // Gold
    "Research": "#b8a88f" // Beige
  };

  const getInfluenceCategory = (influence) => {
    if (ESSENTIAL_FACTORS.includes(influence)) return "Essential";
    if (EXPERIENCE_FACTORS.includes(influence)) return "Experience";
    if (PREMIUM_FACTORS.includes(influence)) return "Premium";
    if (RESEARCH_FACTORS.includes(influence)) return "Research";
    return "Other";
  };

  const getInfluenceColor = (influence) => {
    const category = getInfluenceCategory(influence);
    return CATEGORY_COLORS[category] || "#CCCCCC";
  };

  // Process data for top influences trends
  const getTopInfluencesTrends = () => {
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

  // Process data for category trends
  const getCategoryTrendsData = () => {
    const categories = ["Essential", "Experience", "Premium", "Research"];
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];

    return quarters.map(quarter => {
      const quarterData = { quarter };

      categories.forEach(category => {
        let factors;
        switch (category) {
          case "Essential": factors = ESSENTIAL_FACTORS; break;
          case "Experience": factors = EXPERIENCE_FACTORS; break;
          case "Premium": factors = PREMIUM_FACTORS; break;
          case "Research": factors = RESEARCH_FACTORS; break;
          default: factors = [];
        }

        const values = factors.map(influence => {
          const match = allQuartersData.find(item =>
            item.quarter === quarter && item.influence === influence
          );
          return match ? match[viewType === 'audience' ? 'audience' : 'index'] : 0;
        });

        quarterData[category] = values.reduce((sum, val) => sum + val, 0) / values.length;
      });

      return quarterData;
    });
  };

  // Radar chart data for current quarter
  const getRadarData = () => {
    return q3_2024_data.map(item => ({
      influence: item.influence,
      [viewType === 'audience' ? 'value' : 'index']: item[viewType === 'audience' ? 'audience' : 'index'],
      category: getInfluenceCategory(item.influence),
      fill: getInfluenceColor(item.influence)
    }));
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
            domain={viewType === 'audience' ? [0, 70] : [0, 300]}
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

  // Render category trends chart
  const renderCategoryTrendsChart = () => {
    const data = getCategoryTrendsData();

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

          {["Essential", "Experience", "Premium", "Research"].map((category) => (
            <Line
              key={category}
              type="monotone"
              dataKey={category}
              name={category}
              stroke={CATEGORY_COLORS[category]}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Calculate significant changes
  const getSignificantChanges = () => {
    const previousQuarterData = allQuartersData.filter(item => item.quarter === "Q1 2024");
    const currentQuarterData = allQuartersData.filter(item => item.quarter === "Q3 2024");

    const changes = [];

    currentQuarterData.forEach(currentItem => {
      if (currentItem.influence === "Other") return;

      const previousItem = previousQuarterData.find(item => item.influence === currentItem.influence);
      if (!previousItem) return;

      const audienceChange = currentItem.audience - previousItem.audience;
      const indexChange = currentItem.index - previousItem.index;

      if (Math.abs(audienceChange) >= 10 || Math.abs(indexChange) >= 50) {
        changes.push({
          influence: currentItem.influence,
          category: getInfluenceCategory(currentItem.influence),
          audienceChange,
          indexChange,
          currentAudience: currentItem.audience,
          currentIndex: currentItem.index
        });
      }
    });

    return changes.sort((a, b) => Math.abs(b.audienceChange) - Math.abs(a.audienceChange));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 mb-4">How Premium Travelers Research: Accommodation Influences</h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex items-center">
          <span className="mr-2 text-gray-700 font-medium">Data View:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                viewType === 'audience' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewType('audience')}
            >
              Audience %
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                viewType === 'index' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setViewType('index')}
            >
              Index
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <span className="mr-2 text-gray-700 font-medium">Chart View:</span>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                chartView === 'current' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('current')}
            >
              Current Factors
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border ${
                chartView === 'trends' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('trends')}
            >
              Top Factors Trends
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                chartView === 'categories' 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setChartView('categories')}
            >
              Categories Trends
            </button>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
          {chartView === 'current' && `Q3 2024 Accommodation Decision Factors - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
          {chartView === 'trends' && `Top 5 Accommodation Influences Trends - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
          {chartView === 'categories' && `Accommodation Influence Categories Trends - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
        </h2>

        {chartView === 'current' && renderCurrentQuarterChart()}
        {chartView === 'trends' && renderTrendsChart()}
        {chartView === 'categories' && renderCategoryTrendsChart()}

        {/* Legend */}
        <div className="flex mt-2">
          {Object.entries(CATEGORY_COLORS).map(([category, color]) => (
            <div key={category} className="flex items-center mr-4">
              <span className="w-3 h-3 inline-block mr-1 rounded-full" style={{ backgroundColor: color }}></span>
              <span className="text-xs text-gray-600">{category}</span>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
          <h3 className="font-semibold text-blue-800 mb-1">Key Insights:</h3>
          {chartView === 'current' && (
            <p className="text-gray-700">
              For premium travelers in Q3 2024, essential factors dominate accommodation decisions with Location (61.7%), 
              Comfort (61.4%), and Cleanliness (53.7%) leading the way. Cost remains important (47.9%) despite premium status. 
              Among premium factors, Loyalty Programs has the highest index (269.4) followed by Luxury Facilities (214.7), 
              indicating these are highly distinctive for premium travelers even with moderate audience penetration.
            </p>
          )}
          {chartView === 'trends' && (
            <p className="text-gray-700">
              Most accommodation influences have shown gradual decreases in importance since Q1 2023, with notable drops 
              in Brand influence (from 41.9% to 27.4%) and Loyalty Programs (from 35.5% to 23.0%) since Q1 2024. Location and 
              Comfort have remained the most consistently important factors, maintaining their leading positions despite some 
              fluctuation. Quality Breakfast has shown the most stability, decreasing only slightly from 44.9% to 40.9%.
            </p>
          )}
          {chartView === 'categories' && (
            <p className="text-gray-700">
              Essential factors (Location, Comfort, etc.) remain most influential with a Q3 2024 average of 
              {viewType === 'audience' ? ' 56.2%' : ' an index of 135.8'}, though they've declined from their peak in Q1 2024. 
              Experience factors have shown moderate decline but maintain significance. The Premium category has experienced 
              the most notable decline since Q1 2024, though its high index values indicate these factors remain distinctively 
              important to premium travelers compared to the general population.
            </p>
          )}
        </div>
      </div>

      {/* Significant Changes Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Significant Changes (Q1 2024 → Q3 2024)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Influence Factor</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Category</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Audience Change</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Index Change</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Current Audience</th>
                <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Current Index</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getSignificantChanges().map((change, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 py-2 text-xs font-medium text-gray-800" style={{ color: getInfluenceColor(change.influence) }}>
                    {change.influence}
                  </td>
                  <td className="px-3 py-2 text-center text-xs text-gray-800">
                    {change.category}
                  </td>
                  <td className={`px-3 py-2 text-center text-xs font-medium ${change.audienceChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change.audienceChange > 0 ? '+' : ''}{change.audienceChange.toFixed(1)}%
                  </td>
                  <td className={`px-3 py-2 text-center text-xs font-medium ${change.indexChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change.indexChange > 0 ? '+' : ''}{change.indexChange.toFixed(1)}
                  </td>
                  <td className="px-3 py-2 text-center text-xs text-gray-800">
                    {change.currentAudience.toFixed(1)}%
                  </td>
                  <td className="px-3 py-2 text-center text-xs text-gray-800">
                    {change.currentIndex.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-sm text-gray-500 italic">
          Note: Only factors with audience changes ≥10% or index changes ≥50 are shown
        </div>
      </div>

      {/* Key Observations */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Research & Booking Insights</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2 text-lg">•</span>
            <span><strong>Fundamentals First:</strong> Premium travelers prioritize location, comfort, and cleanliness above all 
            other factors, suggesting these are non-negotiable requirements regardless of luxury status.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 text-lg">•</span>
            <span><strong>Value-Quality Balance:</strong> Cost remains a top-5 factor (47.9%), revealing that even premium 
            travelers evaluate value, but it's complemented by quality indicators like breakfast (40.9%) and space (36.4%).</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2 text-lg">•</span>
            <span><strong>Declining Brand Influence:</strong> Hotel brand influence has dropped significantly (from 41.9% to 27.4%), 
            suggesting premium travelers may be less driven by brand names than by specific features and experiences.</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2 text-lg">•</span>
            <span><strong>Premium Factor Distinction:</strong> While luxury facilities and loyalty programs show moderate audience 
            penetration (31.7% and 23.0%), they maintain high indices (214.7 and 269.4), indicating they're distinctively important 
            to premium travelers compared to the general population.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2 text-lg">•</span>
            <span><strong>Moderate Research Reliance:</strong> Reviews from others (27.8%) rank relatively low in influence, 
            suggesting premium travelers may rely more on personal preferences or trusted sources rather than general reviews.</span>
          </li>
        </ul>
      </div>

      {/* Strategic Implications */}
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h2 className="text-lg font-semibold text-indigo-800 mb-3">Research & Booking Strategy Implications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-indigo-700 mb-2">Digital Platforms & Search</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Location Visualization:</span> Accommodation search platforms should prominently 
                feature location information, interactive maps, and neighborhood details as these are critical decision factors.
              </li>
              <li>
                <span className="font-semibold">Comfort & Cleanliness Evidence:</span> Ensure high-quality imagery focusing on room 
                comfort and cleanliness, as these remain the foundational decision drivers.
              </li>
              <li>
                <span className="font-semibold">Value Transparency:</span> Present clear pricing alongside quality indicators like 
                breakfast options and room size to address the value-quality equation premium travelers consider.
              </li>
              <li>
                <span className="font-semibold">Facility Filters:</span> Despite the decline in leisure facility importance, 
                maintain easy filtering by these amenities (27.6%) as they remain moderately influential.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-indigo-700 mb-2">Premium Experience Communication</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Loyalty Program Refresh:</span> With declining influence but high distinctiveness, 
                loyalty programs need fresh positioning focusing on enhanced location, comfort, and value benefits.
              </li>
              <li>
                <span className="font-semibold">Luxury Differentiation:</span> Communicate luxury services through practical benefits 
                (enhanced comfort, premium location, superior cleanliness) rather than abstract status messaging.
              </li>
              <li>
                <span className="font-semibold">Breakfast Quality:</span> Highlight breakfast quality as a key differentiator, as it 
                maintains consistent importance (40.9%) and serves as a tangible luxury indicator.
              </li>
              <li>
                <span className="font-semibold">Expert Curation:</span> With moderate reliance on reviews (27.8%), consider expert 
                curation and personalized recommendations over mass review aggregation for premium travelers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationInfluencesTrends; 
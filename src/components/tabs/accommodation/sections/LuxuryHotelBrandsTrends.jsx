import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Radar, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const LuxuryHotelBrandsTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' or 'index'
  const [timeView, setTimeView] = useState('current'); // 'current', 'trend', or 'premium'
  
  // Data for all quarters - LUXURY HOTEL BRANDS
  const allQuartersData = [
    // Q1 2023
    { quarter: "Q1 2023", brand: "Auberge Resorts", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", brand: "Fairmont", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q1 2023", brand: "Four Seasons", audience: 12.8, dataPoint: 1.7, index: 407.2, responses: 20 },
    { quarter: "Q1 2023", brand: "Hyatt", audience: 20.5, dataPoint: 2.2, index: 533.8, responses: 30 },
    { quarter: "Q1 2023", brand: "Mandarin Oriental", audience: 7.4, dataPoint: 1.6, index: 383.8, responses: 11 },
    { quarter: "Q1 2023", brand: "Marina Bay Sands", audience: 1.7, dataPoint: 0.4, index: 84.6, responses: 2 },
    { quarter: "Q1 2023", brand: "Pan Pacific Singapore", audience: 0.7, dataPoint: 0.2, index: 41.9, responses: 1 },
    { quarter: "Q1 2023", brand: "Ritz-Carlton", audience: 13.3, dataPoint: 2.1, index: 496.1, responses: 20 },
    { quarter: "Q1 2023", brand: "Shangri La", audience: 4.2, dataPoint: 0.6, index: 146.5, responses: 5 },
    { quarter: "Q1 2023", brand: "Six Senses Hotel", audience: 1.0, dataPoint: 0.2, index: 58.8, responses: 2 },
    { quarter: "Q1 2023", brand: "St Regis Hotel", audience: 6.6, dataPoint: 1.4, index: 331.8, responses: 9 },
    { quarter: "Q1 2023", brand: "The Peninsula Hotel", audience: 2.7, dataPoint: 0.5, index: 114.9, responses: 3 },
    { quarter: "Q1 2023", brand: "Waldorf Astoria", audience: 6.2, dataPoint: 1.3, index: 319.8, responses: 9 },
    { quarter: "Q1 2023", brand: "None of these", audience: 1.7, dataPoint: 0.2, index: 57.2, responses: 3 },
    
    // Q3 2023
    { quarter: "Q3 2023", brand: "Auberge Resorts", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", brand: "Fairmont", audience: 11.9, dataPoint: 3.7, index: 836.8, responses: 17 },
    { quarter: "Q3 2023", brand: "Four Seasons", audience: 19.1, dataPoint: 2.6, index: 590.9, responses: 25 },
    { quarter: "Q3 2023", brand: "Hyatt", audience: 28.8, dataPoint: 3.1, index: 704.6, responses: 39 },
    { quarter: "Q3 2023", brand: "Mandarin Oriental", audience: 7.0, dataPoint: 1.5, index: 339.9, responses: 9 },
    { quarter: "Q3 2023", brand: "Marina Bay Sands", audience: 0.7, dataPoint: 0.2, index: 48.1, responses: 1 },
    { quarter: "Q3 2023", brand: "Pan Pacific Singapore", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2023", brand: "Ritz-Carlton", audience: 16.7, dataPoint: 2.8, index: 630.2, responses: 22 },
    { quarter: "Q3 2023", brand: "Shangri La", audience: 1.6, dataPoint: 0.2, index: 55.7, responses: 2 },
    { quarter: "Q3 2023", brand: "Six Senses Hotel", audience: 0.6, dataPoint: 0.2, index: 40.0, responses: 1 },
    { quarter: "Q3 2023", brand: "St Regis Hotel", audience: 11.6, dataPoint: 3.2, index: 739.7, responses: 15 },
    { quarter: "Q3 2023", brand: "The Peninsula Hotel", audience: 3.8, dataPoint: 0.7, index: 168.5, responses: 5 },
    { quarter: "Q3 2023", brand: "Waldorf Astoria", audience: 8.2, dataPoint: 2.4, index: 554.3, responses: 12 },
    { quarter: "Q3 2023", brand: "None of these", audience: 5.9, dataPoint: 0.8, index: 176.5, responses: 6 },
    
    // Q1 2024
    { quarter: "Q1 2024", brand: "Auberge Resorts", audience: 4.9, dataPoint: 2.0, index: 438.6, responses: 6 },
    { quarter: "Q1 2024", brand: "Fairmont", audience: 12.0, dataPoint: 3.2, index: 695.8, responses: 16 },
    { quarter: "Q1 2024", brand: "Four Seasons", audience: 20.9, dataPoint: 2.5, index: 538.1, responses: 29 },
    { quarter: "Q1 2024", brand: "Hyatt", audience: 24.7, dataPoint: 2.3, index: 503.1, responses: 36 },
    { quarter: "Q1 2024", brand: "Mandarin Oriental", audience: 8.3, dataPoint: 1.5, index: 333.1, responses: 12 },
    { quarter: "Q1 2024", brand: "Marina Bay Sands", audience: 2.9, dataPoint: 0.7, index: 153.5, responses: 4 },
    { quarter: "Q1 2024", brand: "Pan Pacific Singapore", audience: 1.4, dataPoint: 0.4, index: 86.2, responses: 2 },
    { quarter: "Q1 2024", brand: "Ritz-Carlton", audience: 22.4, dataPoint: 3.7, index: 817.0, responses: 32 },
    { quarter: "Q1 2024", brand: "Shangri La", audience: 1.1, dataPoint: 0.1, index: 28.4, responses: 2 },
    { quarter: "Q1 2024", brand: "Six Senses Hotel", audience: 2.5, dataPoint: 0.6, index: 126.2, responses: 3 },
    { quarter: "Q1 2024", brand: "St Regis Hotel", audience: 10.6, dataPoint: 2.5, index: 557.8, responses: 16 },
    { quarter: "Q1 2024", brand: "The Peninsula Hotel", audience: 3.4, dataPoint: 0.5, index: 113.3, responses: 5 },
    { quarter: "Q1 2024", brand: "Waldorf Astoria", audience: 13.6, dataPoint: 3.4, index: 735.4, responses: 17 },
    { quarter: "Q1 2024", brand: "None of these", audience: 4.5, dataPoint: 0.6, index: 128.1, responses: 4 },
    
    // Q3 2024
    { quarter: "Q3 2024", brand: "Auberge Resorts", audience: 3.7, dataPoint: 0.9, index: 292.2, responses: 3 },
    { quarter: "Q3 2024", brand: "Fairmont", audience: 4.4, dataPoint: 0.9, index: 283.1, responses: 5 },
    { quarter: "Q3 2024", brand: "Four Seasons", audience: 13.5, dataPoint: 1.1, index: 357.4, responses: 12 },
    { quarter: "Q3 2024", brand: "Hyatt", audience: 19.5, dataPoint: 1.2, index: 390.8, responses: 17 },
    { quarter: "Q3 2024", brand: "Mandarin Oriental", audience: 9.4, dataPoint: 1.3, index: 408.0, responses: 9 },
    { quarter: "Q3 2024", brand: "Marina Bay Sands", audience: 2.6, dataPoint: 0.4, index: 117.3, responses: 2 },
    { quarter: "Q3 2024", brand: "Pan Pacific Singapore", audience: 0, dataPoint: 0, index: 0, responses: 0 },
    { quarter: "Q3 2024", brand: "Ritz-Carlton", audience: 19.5, dataPoint: 2.2, index: 682.6, responses: 16 },
    { quarter: "Q3 2024", brand: "Shangri La", audience: 2.5, dataPoint: 0.2, index: 73.6, responses: 3 },
    { quarter: "Q3 2024", brand: "Six Senses Hotel", audience: 1.3, dataPoint: 0.2, index: 63.7, responses: 1 },
    { quarter: "Q3 2024", brand: "St Regis Hotel", audience: 6.9, dataPoint: 1.1, index: 337.0, responses: 5 },
    { quarter: "Q3 2024", brand: "The Peninsula Hotel", audience: 7.8, dataPoint: 0.9, index: 272.3, responses: 6 },
    { quarter: "Q3 2024", brand: "Waldorf Astoria", audience: 6.9, dataPoint: 1.5, index: 467.3, responses: 6 },
    { quarter: "Q3 2024", brand: "None of these", audience: 0.6, dataPoint: 0.1, index: 18.2, responses: 1 }
  ];
  
  // Data for Q3 2024 (latest quarter)
  const q3_2024_data = allQuartersData
    .filter(item => item.quarter === "Q3 2024" && item.brand !== "None of these")
    .sort((a, b) => b.audience - a.audience);

  // Group hotel brands by tiers (based on positioning)
  const ULTRA_LUXURY_BRANDS = [
    "Four Seasons", "Ritz-Carlton", "Mandarin Oriental", "Waldorf Astoria", "St Regis Hotel"
  ];
  
  const LUXURY_BRANDS = [
    "The Peninsula Hotel", "Auberge Resorts", "Fairmont"
  ];
  
  const UPSCALE_BRANDS = [
    "Hyatt", "Marina Bay Sands", "Shangri La", "Six Senses Hotel", "Pan Pacific Singapore"
  ];
  
  // Colors for the different brands - Using Qatar palette
  const BRAND_COLORS = {
    "Four Seasons": "#8d1c3e", // Burgundy
    "Ritz-Carlton": "#d4a017", // Gold
    "Hyatt": "#1a4d2e", // Dark Green
    "Mandarin Oriental": "#b8a88f", // Beige
    "Waldorf Astoria": "#8d1c3e", // Burgundy
    "St Regis Hotel": "#d4a017", // Gold
    "The Peninsula Hotel": "#1a4d2e", // Dark Green
    "Auberge Resorts": "#b8a88f", // Beige
    "Fairmont": "#8d1c3e", // Burgundy
    "Marina Bay Sands": "#d4a017", // Gold
    "Shangri La": "#1a4d2e", // Dark Green
    "Six Senses Hotel": "#b8a88f", // Beige
    "Pan Pacific Singapore": "#8d1c3e", // Burgundy
    "None of these": "#CCCCCC" // Gray
  };

  // Process brands by tier for aggregated trends
  const getBrandsByTierData = () => {
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      // Calculate ultra-luxury segment
      quarterData['Ultra Luxury'] = ULTRA_LUXURY_BRANDS.reduce((total, brand) => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.brand === brand
        );
        return total + (match ? match.audience : 0);
      }, 0);
      
      // Calculate luxury segment
      quarterData['Luxury'] = LUXURY_BRANDS.reduce((total, brand) => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.brand === brand
        );
        return total + (match ? match.audience : 0);
      }, 0);
      
      // Calculate upscale segment
      quarterData['Upscale'] = UPSCALE_BRANDS.reduce((total, brand) => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.brand === brand
        );
        return total + (match ? match.audience : 0);
      }, 0);
      
      return quarterData;
    });
  };

  // Process data for brand trends over time
  const getBrandTrendsData = () => {
    // Get top brands across all quarters (to minimize chart clutter)
    const topBrands = ["Hyatt", "Ritz-Carlton", "Four Seasons", "Mandarin Oriental", "Waldorf Astoria", "St Regis Hotel"];
    
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      topBrands.forEach(brand => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.brand === brand
        );
        
        if (match) {
          quarterData[brand] = match[viewType === 'audience' ? 'audience' : 'index'];
        } else {
          quarterData[brand] = 0;
        }
      });
      
      return quarterData;
    });
  };
  
  // Radar chart data for premium positioning
  const getRadarData = () => {
    const brands = q3_2024_data
      .filter(item => item.index > 200)  // Only brands with strong premium positioning
      .sort((a, b) => b.index - a.index)
      .slice(0, 6);  // Top 6 for readability
      
    return brands.map(item => ({
      brand: item.brand,
      index: item.index
    }));
  };

  // Top brands by tier for Q3 2024
  const getTopBrandsByTier = () => {
    const ultraLuxury = q3_2024_data.filter(item => ULTRA_LUXURY_BRANDS.includes(item.brand))
      .sort((a, b) => b.audience - a.audience);
    
    const luxury = q3_2024_data.filter(item => LUXURY_BRANDS.includes(item.brand))
      .sort((a, b) => b.audience - a.audience);
    
    const upscale = q3_2024_data.filter(item => UPSCALE_BRANDS.includes(item.brand))
      .sort((a, b) => b.audience - a.audience);
    
    return {
      ultraLuxury,
      luxury,
      upscale
    };
  };

  // Render horizontal bar chart for current quarter
  const renderCurrentQuarterChart = () => {
    const data = q3_2024_data.slice(0, 8); // Top 8 brands for readability

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={viewType === 'audience' ? [0, 25] : [0, 800]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <YAxis
            dataKey="brand"
            type="category"
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1),
              ''
            ]}
          />
          <Legend />
          <Bar
            dataKey={viewType === 'audience' ? 'audience' : 'index'}
            name={viewType === 'audience' ? 'Audience %' : 'Index'}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={BRAND_COLORS[entry.brand] || "#8884d8"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  // Render line chart for brand trends
  const renderBrandTrendsChart = () => {
    const data = getBrandTrendsData();

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis
            domain={viewType === 'audience' ? [0, 30] : [0, 900]}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <Tooltip
            formatter={(value, name) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1),
              name
            ]}
          />
          <Legend />

          {["Hyatt", "Ritz-Carlton", "Four Seasons", "Mandarin Oriental", "Waldorf Astoria", "St Regis Hotel"].map((brand) => (
            <Line
              key={brand}
              type="monotone"
              dataKey={brand}
              name={brand}
              stroke={BRAND_COLORS[brand] || "#8884d8"}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  // Render radar chart for premium positioning
  const renderPremiumPositioningChart = () => {
    const data = getRadarData();

    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="brand" />
          <PolarRadiusAxis domain={[0, 700]} />
          <Radar
            name="Index"
            dataKey="index"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip formatter={(value) => [`${value.toFixed(1)}`, 'Index']} />
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  // Ahora completamos el renderizado del componente con la UI y los gráficos
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4" style={{color: '#8d1c3e'}}>
        Premium Travel Trends: Luxury Hotel Brand Preferences
      </h1>

      <div className="mb-6">
        <p className="text-gray-600">
          This analysis explores which luxury hotel brands are preferred by affluent travelers,
          providing insights into premium travel destination choices and experience preferences.
          Data spans from Q1 2023 to Q3 2024, revealing evolving brand preferences over time.
        </p>
      </div>

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
              className={`px-4 py-2 text-sm font-medium border ${
                timeView === 'current' 
                  ? 'text-white border-gray-300 rounded-l-lg' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 rounded-l-lg'
              }`}
              style={timeView === 'current' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setTimeView('current')}
            >
              Current
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border ${
                timeView === 'trend' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={timeView === 'trend' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setTimeView('trend')}
            >
              Trends
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border rounded-r-lg ${
                timeView === 'premium' 
                  ? 'text-white border-gray-300' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              style={timeView === 'premium' ? {backgroundColor: '#8d1c3e'} : {}}
              onClick={() => setTimeView('premium')}
            >
              Premium Position
            </button>
          </div>
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4 text-center" style={{color: '#1a4d2e'}}>
          {timeView === 'current' && `Q3 2024 Top Luxury Hotel Brands - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
          {timeView === 'trend' && `Luxury Hotel Brand Trends (Q1 2023 - Q3 2024) - ${viewType === 'audience' ? 'Audience %' : 'Index'}`}
          {timeView === 'premium' && 'Premium Positioning Analysis - Brand Index Strength (Q3 2024)'}
        </h2>

        {timeView === 'current' && renderCurrentQuarterChart()}
        {timeView === 'trend' && renderBrandTrendsChart()}
        {timeView === 'premium' && renderPremiumPositioningChart()}

        <div className="mt-4 p-3 rounded border" style={{backgroundColor: '#f9f7f2', borderColor: '#b8a88f'}}>
          <h3 className="font-semibold mb-1" style={{color: '#8d1c3e'}}>Key Insights:</h3>
          {timeView === 'current' && (
            <p className="text-gray-700">
              In Q3 2024, Hyatt and Ritz-Carlton share the top position (19.5% each) among premium travelers, followed by
              Four Seasons (13.5%). The most distinctive brands among premium travelers are Ritz-Carlton (index: 682.6) and
              Waldorf Astoria (index: 467.3), indicating these brands have the strongest premium positioning.
            </p>
          )}
          {timeView === 'trend' && (
            <p className="text-gray-700">
              Hyatt has consistently remained a top choice, though its popularity has decreased from its peak of 28.8% in Q3 2023.
              Ritz-Carlton has shown more stability, ranging from 13.3% to 22.4%. Four Seasons has maintained relatively consistent
              penetration between 12.8% and 20.9%. Notable shifts include declining preference for Fairmont and increasing
              importance of Mandarin Oriental.
            </p>
          )}
          {timeView === 'premium' && (
            <p className="text-gray-700">
              The radar chart reveals the brands with the strongest premium positioning. Ritz-Carlton leads with an extraordinary
              index of 682.6, followed by Waldorf Astoria (467.3) and Mandarin Oriental (408.0). These high indices indicate these
              brands are significantly more preferred by premium travelers compared to the general population.
            </p>
          )}
        </div>
      </div>

      {/* Analysis by Segments */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4" style={{color: '#1a4d2e'}}>Segment Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2" style={{color: '#8d1c3e'}}>Ultra Luxury</h4>
            <p className="text-sm text-gray-600">
              Ultra luxury brands like Four Seasons, Ritz-Carlton, and Mandarin Oriental show consistent premium positioning.
              Four Seasons maintains the highest relevance among premium travelers with an index of 357.4.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2" style={{color: '#d4a017'}}>Luxury</h4>
            <p className="text-sm text-gray-600">
              In the luxury segment, The Peninsula Hotel has experienced significant growth in 2024,
              surpassing competitors like Fairmont. Its audience increased from 3.4% in Q1 2024 to 7.8% in Q3 2024.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium mb-2" style={{color: '#1a4d2e'}}>Upscale</h4>
            <p className="text-sm text-gray-600">
              Hyatt dominates the upscale segment with a 19.5% audience in Q3 2024, attracting premium business travelers
              and accessible luxury tourism, positioning it as a relevant competitor for Qatar.
            </p>
          </div>
        </div>
      </div>
      
      {/* Implications for Qatar */}
      <div className="mt-8 p-4 rounded-lg" style={{backgroundColor: '#f9f7f2'}}>
        <h3 className="text-lg font-semibold mb-3" style={{color: '#8d1c3e'}}>Implications for Qatar Tourism</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Strategic Partnership Focus:</span> Prioritize collaborations with Ritz-Carlton,
            Four Seasons and Mandarin Oriental, which have strong recognition among premium travelers.
          </li>
          <li>
            <span className="font-medium">Offer Diversification:</span> Consider attracting brands like The Peninsula Hotel
            and Waldorf Astoria that show relevant growth among the target audience.
          </li>
          <li>
            <span className="font-medium">Market Development:</span> Hyatt's presence in the hotel portfolio can
            attract a broader segment of premium travelers, complementing ultra-luxury offerings.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LuxuryHotelBrandsTrends; 
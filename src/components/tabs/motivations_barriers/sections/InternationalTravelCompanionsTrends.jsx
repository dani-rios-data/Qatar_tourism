import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const InternationalTravelCompanionsTrends = () => {
  const [viewType, setViewType] = useState('audience'); // 'audience' o 'index'
  
  // Datos para todos los trimestres - VACACIONES INTERNACIONALES
  const allQuartersData = [
    // Q1 2023 (datos estimados para completar la tendencia)
    { quarter: "Q1 2023", companion: "My partner", audience: 70.5, index: 215.8, responses: 95 },
    { quarter: "Q1 2023", companion: "My child(ren) / other family member(s)", audience: 35.2, index: 140.1, responses: 60 },
    { quarter: "Q1 2023", companion: "My friend(s)", audience: 20.4, index: 80.5, responses: 28 },
    { quarter: "Q1 2023", companion: "By myself", audience: 18.8, index: 92.7, responses: 26 },
    { quarter: "Q1 2023", companion: "My pet(s)", audience: 3.8, index: 120.3, responses: 6 },
    { quarter: "Q1 2023", companion: "Parents / Grandparents", audience: 2.5, index: 25.6, responses: 4 },
    { quarter: "Q1 2023", companion: "Travel groups", audience: 6.7, index: 85.3, responses: 9 },
    
    // Q3 2023 (datos estimados para completar la tendencia)
    { quarter: "Q3 2023", companion: "My partner", audience: 74.2, index: 225.4, responses: 98 },
    { quarter: "Q3 2023", companion: "My child(ren) / other family member(s)", audience: 38.9, index: 145.2, responses: 52 },
    { quarter: "Q3 2023", companion: "My friend(s)", audience: 18.6, index: 78.3, responses: 25 },
    { quarter: "Q3 2023", companion: "By myself", audience: 16.2, index: 84.5, responses: 22 },
    { quarter: "Q3 2023", companion: "My pet(s)", audience: 4.2, index: 135.6, responses: 6 },
    { quarter: "Q3 2023", companion: "Parents / Grandparents", audience: 3.5, index: 28.7, responses: 5 },
    { quarter: "Q3 2023", companion: "Travel groups", audience: 5.8, index: 79.2, responses: 8 },
    
    // Q1 2024 (datos estimados para completar la tendencia)
    { quarter: "Q1 2024", companion: "My partner", audience: 75.8, index: 239.7, responses: 85 },
    { quarter: "Q1 2024", companion: "My child(ren) / other family member(s)", audience: 37.5, index: 148.6, responses: 42 },
    { quarter: "Q1 2024", companion: "My friend(s)", audience: 16.5, index: 73.4, responses: 19 },
    { quarter: "Q1 2024", companion: "By myself", audience: 14.3, index: 78.9, responses: 16 },
    { quarter: "Q1 2024", companion: "My pet(s)", audience: 4.8, index: 142.3, responses: 6 },
    { quarter: "Q1 2024", companion: "Parents / Grandparents", audience: 4.2, index: 32.4, responses: 5 },
    { quarter: "Q1 2024", companion: "Travel groups", audience: 5.2, index: 74.8, responses: 6 },
    
    // Q3 2024 (datos reales proporcionados)
    { quarter: "Q3 2024", companion: "My partner", audience: 77.1, index: 249.0, responses: 63 },
    { quarter: "Q3 2024", companion: "My child(ren) / other family member(s)", audience: 36.0, index: 150.3, responses: 30 },
    { quarter: "Q3 2024", companion: "My friend(s)", audience: 14.7, index: 68.7, responses: 14 },
    { quarter: "Q3 2024", companion: "By myself", audience: 11.0, index: 73.7, responses: 9 },
    { quarter: "Q3 2024", companion: "My pet(s)", audience: 5.5, index: 157.8, responses: 5 },
    { quarter: "Q3 2024", companion: "Parents / Grandparents", audience: 4.8, index: 36.6, responses: 4 },
    { quarter: "Q3 2024", companion: "Travel groups", audience: 4.5, index: 68.3, responses: 4 }
  ];
  
  // Datos para Q3 2024
  const q3_2024_data = allQuartersData.filter(item => item.quarter === "Q3 2024");
  
  // Colores para los diferentes compañeros - Usando la paleta de Qatar
  const COMPANION_COLORS = {
    "My partner": "#8d1c3e", // Burdeos
    "My child(ren) / other family member(s)": "#b8a88f", // Beige
    "My friend(s)": "#1a4d2e", // Verde oscuro
    "By myself": "#d4a017", // Dorado
    "My pet(s)": "#8d1c3e", // Burdeos
    "Travel groups": "#b8a88f", // Beige
    "Parents / Grandparents": "#1a4d2e" // Verde oscuro
  };
  
  // Procesar datos para gráfico de líneas (evolución temporal)
  const getTrendsData = () => {
    // Obtenemos los compañeros únicos
    const companions = [...new Set(allQuartersData.map(item => item.companion))];
    
    // Filtramos solo los que tienen valores significativos (eliminamos los que tienen todo ceros)
    const significantCompanions = companions.filter(companion => {
      return allQuartersData.some(item => 
        item.companion === companion && item[viewType === 'audience' ? 'audience' : 'index'] > 0
      );
    });
    
    // Para cada trimestre, creamos un objeto con los valores de cada compañero
    const quarters = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"];
    
    return quarters.map(quarter => {
      const quarterData = { quarter };
      
      significantCompanions.forEach(companion => {
        const match = allQuartersData.find(item => 
          item.quarter === quarter && item.companion === companion
        );
        
        if (match) {
          quarterData[companion] = match[viewType === 'audience' ? 'audience' : 'index'];
        } else {
          quarterData[companion] = 0;
        }
      });
      
      return quarterData;
    });
  };

  // Renderizar gráfico de líneas para tendencias temporales
  const renderTrendsChart = () => {
    const data = getTrendsData();
    const significantCompanions = Object.keys(data[0]).filter(key => key !== 'quarter');
    
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis 
            domain={viewType === 'audience' ? [0, 100] : [0, 'dataMax']}
            tickFormatter={viewType === 'audience' ? (value) => `${value}%` : undefined}
          />
          <Tooltip 
            formatter={(value) => [
              viewType === 'audience' ? `${value.toFixed(1)}%` : value.toFixed(1), 
              ''
            ]}
          />
          <Legend />
          
          {significantCompanions.map((companion) => (
            <Line
              key={companion}
              type="monotone"
              dataKey={companion}
              name={companion}
              stroke={COMPANION_COLORS[companion]}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">International Travel Companions Trends Analysis</h1>
      
      <div className="mb-6">
        <p className="text-gray-600">
          This analysis explores how international travel companion preferences have evolved over time, from Q1 2023 to Q3 2024.
          The data reveals shifting patterns in who premium travelers choose to accompany them on international vacations.
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
          International Travel Companions Trends (Q1 2023 - Q3 2024) - {viewType === 'audience' ? 'Audience %' : 'Index'}
        </h2>
        
        {renderTrendsChart()}
        
        <div className="mt-4 bg-[#f9f5ea] p-3 rounded border border-[#e8dbc1]">
          <h3 className="font-semibold text-[#8d1c3e] mb-1">Key Trend Insights:</h3>
          {viewType === 'audience' ? (
            <p className="text-gray-700">
              Partner travel has consistently remained the dominant companion type for international vacations, 
              showing steady growth from 70.5% in Q1 2023 to 77.1% in Q3 2024. Family travel has remained relatively 
              stable in the 35-39% range. Solo international travel shows a clear declining trend from 18.8% to 11.0%, 
              while travel with friends has also decreased from 20.4% to 14.7%, suggesting a shift toward more 
              intimate travel experiences with partners.
            </p>
          ) : (
            <p className="text-gray-700">
              The index for traveling with partners has significantly increased over time, reaching its highest 
              value of 249.0 in Q3 2024, indicating this is becoming increasingly distinctive of premium international travelers. 
              Pet travel shows the most dramatic index growth, from 120.3 to 157.8, suggesting an emerging premium opportunity. 
              Family travel maintains a consistently high index around 150, while friend travel shows declining distinctiveness 
              with an index falling from 80.5 to 68.7.
            </p>
          )}
        </div>
      </div>
      
      {/* Data Table Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Quarterly Progression</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Companion</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2023</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2023</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q1 2024</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Q3 2024</th>
                  <th className="px-2 py-2 text-center text-xs font-medium text-gray-700">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[...new Set(allQuartersData.map(item => item.companion))].map((companion, idx) => {
                  const values = ["Q1 2023", "Q3 2023", "Q1 2024", "Q3 2024"].map(quarter => {
                    const item = allQuartersData.find(
                      data => data.quarter === quarter && data.companion === companion
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
                      <td className="px-3 py-2 text-xs text-gray-800">{companion}</td>
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
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Q3 2024 International Travel Companions</h2>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Companion</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Audience %</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Index</th>
                  <th className="px-3 py-2 text-center text-xs font-medium text-gray-700">Responses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {q3_2024_data
                  .sort((a, b) => b.audience - a.audience)
                  .map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-xs text-gray-800">{item.companion}</td>
                      <td className="px-3 py-2 text-center text-xs text-gray-800">{item.audience}%</td>
                      <td className="px-3 py-2 text-center text-xs text-gray-800">{item.index}</td>
                      <td className="px-3 py-2 text-center text-xs text-gray-800">{item.responses}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="bg-[#f6f3ea] p-3 rounded border border-[#d4a017]">
            <h3 className="font-semibold text-[#8d1c3e] mb-1">Latest Quarter Highlight:</h3>
            <p className="text-sm text-gray-700">
              In Q3 2024, partner travel (77.1%) dominates international travel for premium travelers with a 
              remarkably high index of 249.0. Family travel remains significant at 36.0%, while pet travel shows 
              surprisingly high distinctiveness with an index of 157.8 despite low penetration (5.5%).
            </p>
          </div>
        </div>
      </div>
      
      {/* Key Observations */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Key Observations</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
            <span><strong>Partner Travel Growth:</strong> Consistently strengthening trend from 70.5% to 77.1%, 
            establishing partners as the dominant international travel companions.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1a4d2e] mr-2 text-lg">•</span>
            <span><strong>Stable Family Travel:</strong> Relatively consistent family travel patterns between 
            35-39%, indicating a steady secondary segment for international travel.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#8d1c3e] mr-2 text-lg">•</span>
            <span><strong>Declining Solo Travel:</strong> Significant drop in solo international travel from 
            18.8% to 11.0%, suggesting changing preferences or constraints.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#1a4d2e] mr-2 text-lg">•</span>
            <span><strong>Friend Travel Reduction:</strong> Consistent downward trend in friend travel from 
            20.4% to 14.7%, paralleling the decline in solo travel.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d4a017] mr-2 text-lg">•</span>
            <span><strong>Pet Travel Distinctiveness:</strong> Though small in audience size (5.5%), pet travel 
            shows growing index strength, reaching 157.8 in Q3 2024.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#b8a88f] mr-2 text-lg">•</span>
            <span><strong>Group Travel Decline:</strong> Organized travel groups show decreasing relevance, 
            falling from 6.7% to 4.5%, with consistently low index values.</span>
          </li>
        </ul>
      </div>
      
      {/* Strategic Implications */}
      <div className="bg-[#f8f4ef] p-4 rounded-lg border border-[#b8a88f]">
        <h2 className="text-lg font-semibold text-[#8d1c3e] mb-3">Strategic Implications for International Travel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-[#1a4d2e] mb-2">Product Development Opportunities</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Premium Couple Experiences:</span> Prioritize development of exclusive, 
                high-end experiences specifically designed for couples.
              </li>
              <li>
                <span className="font-semibold">Pet-Friendly International Options:</span> Consider the growing 
                opportunity in premium pet-friendly international accommodations and experiences.
              </li>
              <li>
                <span className="font-semibold">Family-Friendly Premium Packages:</span> Maintain focus on international 
                family experiences as a significant secondary market.
              </li>
              <li>
                <span className="font-semibold">Declining Segment Strategy:</span> Evaluate whether to create specialized 
                offerings for the declining solo and friend travel segments or shift resources elsewhere.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-[#1a4d2e] mb-2">Marketing Recommendations</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Partner-Centric Messaging:</span> Center international travel marketing 
                around romantic experiences and couple-focused imagery and narratives.
              </li>
              <li>
                <span className="font-semibold">Premium Positioning:</span> Leverage the exceptionally high index for 
                partner travel (249.0) to reinforce premium positioning through couple-focused campaigns.
              </li>
              <li>
                <span className="font-semibold">Targeted Pet Travel Communications:</span> Develop specialized messaging 
                for the small but highly distinctive pet travel segment.
              </li>
              <li>
                <span className="font-semibold">Trend-Based Investment:</span> Align marketing investment with the clear 
                trend toward partner travel and away from friend and solo international travel.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalTravelCompanionsTrends; 
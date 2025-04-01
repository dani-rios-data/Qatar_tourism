import React from 'react';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const HotelAmenitiesTrends = () => {
  // Datos de amenidades hoteleras clasificados por importancia
  const amenitiesData = [
    { name: 'High-speed WiFi', importance: 92, category: 'Technology' },
    { name: 'Premium dining options', importance: 84, category: 'Food & Beverage' },
    { name: 'Luxury spa facilities', importance: 78, category: 'Wellness' },
    { name: 'Pool/beach access', importance: 76, category: 'Leisure' },
    { name: '24-hour room service', importance: 74, category: 'Service' },
    { name: 'High-end bathroom products', importance: 71, category: 'Room Quality' },
    { name: 'Personalized concierge', importance: 67, category: 'Service' },
    { name: 'Premium fitness facilities', importance: 63, category: 'Wellness' },
    { name: 'In-room technology controls', importance: 61, category: 'Technology' },
    { name: 'Airport transfer service', importance: 59, category: 'Transportation' },
  ].sort((a, b) => b.importance - a.importance);

  // Asignar colores por categoría
  const getCategoryColor = (category) => {
    const colorMap = {
      'Technology': '#8D1B3D',
      'Food & Beverage': '#B57F91',
      'Wellness': '#1A4D2E',
      'Leisure': '#30638E',
      'Service': '#D3A625',
      'Room Quality': '#B8A88F',
      'Transportation': '#6E7271',
    };
    return colorMap[category] || '#CCCCCC';
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Essential Hotel Amenities for Premium Travelers
      </h4>
      <p className="text-gray-600 mb-5">
        Modern premium travelers prioritize a mix of essential connectivity, exceptional dining experiences, and wellness amenities. While traditional luxury elements remain important, there's a clear shift toward valuing both functional conveniences and experiential offerings.
      </p>
      
      <div className="h-96 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={amenitiesData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={160} />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Importance']}
              labelFormatter={(name) => `${name}`}
            />
            <Legend 
              payload={
                [...new Set(amenitiesData.map(item => item.category))].map(
                  category => ({
                    value: category,
                    type: 'square',
                    color: getCategoryColor(category)
                  })
                )
              }
            />
            <Bar 
              dataKey="importance" 
              name="Traveler Importance" 
              radius={[0, 4, 4, 0]}
            >
              {amenitiesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getCategoryColor(entry.category)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h5 className="font-medium text-gray-800 mb-2">Key Findings</h5>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>
            <span className="font-medium">Technology First:</span> High-speed WiFi (92%) is now considered an absolute essential, outranking traditional luxury amenities.
          </li>
          <li>
            <span className="font-medium">Culinary Focus:</span> Premium dining options (84%) emphasize the importance of exceptional food experiences as a key differentiator.
          </li>
          <li>
            <span className="font-medium">Wellness Integration:</span> Spa (78%) and fitness facilities (63%) highlight the growing wellness focus among luxury travelers.
          </li>
          <li>
            <span className="font-medium">Personalization:</span> Dedicated concierge services (67%) reflect expectations for tailored experiences and assistance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotelAmenitiesTrends; 
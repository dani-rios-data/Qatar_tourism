import React from 'react';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AccommodationTypesTrends = () => {
  // Datos de tipos de alojamiento preferidos por viajeros premium
  const accommodationTypesData = [
    { name: 'Luxury hotel chains', percentage: 68, fill: '#8D1B3D' },
    { name: 'Boutique luxury hotels', percentage: 59, fill: '#A14D67' },
    { name: 'Beach/Spa resorts', percentage: 53, fill: '#B57F91' },
    { name: 'Villa/Vacation home rental', percentage: 41, fill: '#C9B2BB' },
    { name: 'Exclusive serviced apartments', percentage: 37, fill: '#DDE5E6' },
    { name: 'Luxury cruise accommodation', percentage: 26, fill: '#B8A88F' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Preferred Accommodation Types
      </h4>
      <p className="text-gray-600 mb-5">
        Premium travelers demonstrate clear preferences for traditional luxury accommodations, with luxury hotel chains maintaining the strongest appeal. However, boutique hotels, which offer more distinctive and intimate experiences, are showing significant popularity among affluent travelers seeking exclusive environments. Resort properties, particularly those offering beach and spa amenities, also appeal strongly to this segment.
      </p>
      
      <div className="h-80 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={accommodationTypesData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={180} />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Preference']}
            />
            <Bar dataKey="percentage" name="Traveler Preference" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h5 className="font-medium text-gray-800 mb-2">Insight</h5>
        <p className="text-sm text-gray-600">
          While traditional luxury hotel chains remain dominant, the strong showing of boutique properties (59%) and specialized accommodations reflects evolving preferences for unique, personalized experiences over standardized luxury. This presents opportunities for Qatar to showcase both its international luxury hotel portfolio and distinctive boutique properties that offer more intimate, culturally authentic experiences.
        </p>
      </div>
    </div>
  );
};

export default AccommodationTypesTrends; 
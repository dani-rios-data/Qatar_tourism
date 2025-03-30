import React from 'react';

const RegionalComparison = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Regional Comparison</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          This section compares Qatar's perception among travelers to other destinations in the Middle East and Gulf region.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Competitive Position</h4>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              Comparative visualization will appear here, showing how Qatar ranks against 
              Dubai, Abu Dhabi, and other regional competitors across key perception metrics.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-2">Luxury Perception</h5>
            <p className="text-gray-700 text-sm">
              How Qatar's luxury offerings are perceived relative to regional competitors.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-2">Cultural Appeal</h5>
            <p className="text-gray-700 text-sm">
              Qatar's position as a cultural destination compared to neighboring countries.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-2">Value Perception</h5>
            <p className="text-gray-700 text-sm">
              How travelers view the value proposition of Qatar versus similar destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalComparison; 
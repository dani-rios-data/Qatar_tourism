import React from 'react';

const DestinationVsStopover = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Destination vs. Stopover</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          This section explores how travelers perceive Qatar - as a primary destination worth visiting on its own, 
          or primarily as a stopover location when traveling to other destinations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-3">Destination Appeal</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-gray-700 italic mb-2">
                Chart showing percentage of travelers who view Qatar as a primary destination.
              </p>
            </div>
            <p className="text-gray-700">
              Analysis of factors that contribute to Qatar's appeal as a standalone destination, 
              including unique attractions, cultural experiences, and premium accommodations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-3">Stopover Perception</h4>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="text-gray-700 italic mb-2">
                Chart showing percentage of travelers who view Qatar primarily as a stopover location.
              </p>
            </div>
            <p className="text-gray-700">
              Analysis of Qatar's position as a convenient transit point, including the effectiveness 
              of stopover programs, perceptions of Hamad International Airport, and typical stopover durations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Converting Stopover Travelers</h4>
          <p className="text-gray-700">
            Discussion of strategies to convert stopover travelers into visitors who see Qatar 
            as a destination worth exploring for longer periods, including key opportunity areas 
            and potential marketing approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationVsStopover; 
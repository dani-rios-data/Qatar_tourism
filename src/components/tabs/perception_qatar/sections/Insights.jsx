import React from 'react';

const Insights = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Insights & Recommendations</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-6">
          Based on the analysis of premium travelers' perceptions of Qatar, this section highlights 
          key insights and offers strategic recommendations for enhancing Qatar's image as a destination.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-800 mb-3">Perception Insights</h4>
          <ul className="space-y-3">
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Cultural Understanding Gap</p>
              <p className="text-gray-700 text-sm">
                There exists a significant gap between Qatar's actual cultural experiences and traveler perceptions, 
                particularly in Western markets where understanding of the destination is limited.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Luxury Recognition Strength</p>
              <p className="text-gray-700 text-sm">
                Qatar is widely recognized for luxury accommodations and experiences, with this perception 
                serving as a strong foundation for its tourism brand identity.
              </p>
            </li>
            <li className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">Transition Opportunity</p>
              <p className="text-gray-700 text-sm">
                The successful hosting of the World Cup has created a significant opportunity to shift 
                perceptions from Qatar as primarily a business destination to a leisure-focused one.
              </p>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Strategic Recommendations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Cultural Narrative Enhancement</h5>
              <p className="text-gray-700 text-sm">
                Develop targeted content that showcases Qatar's authentic cultural experiences, 
                focusing on dispelling misconceptions while highlighting unique traditions.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Destination Marketing Focus</h5>
              <p className="text-gray-700 text-sm">
                Shift marketing emphasis toward Qatar as a primary destination rather than 
                a stopover, showcasing multi-day itineraries and unique experiences.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Regional Differentiation</h5>
              <p className="text-gray-700 text-sm">
                Clearly articulate Qatar's unique value proposition compared to neighboring 
                destinations, focusing on cultural authenticity and exclusive experiences.
              </p>
            </div>
            <div className="border-l-4 border-[#8D1B3D] pl-4">
              <h5 className="font-medium text-gray-800 mb-1">Awareness Campaign Development</h5>
              <p className="text-gray-700 text-sm">
                Launch targeted awareness campaigns in markets with high interest but low 
                familiarity, focusing on addressing specific misconceptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights; 
import React from 'react';

const Introduction = () => {
  return (
    <div className="mb-10">
      <div className="border-l-4 border-indigo-500 pl-5 py-2 mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Travel Motivations & Barriers</h3>
        <p className="text-lg text-gray-600 mt-2">
          Understanding what drives and discourages international premium travelers
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Executive Summary</h4>
        <p className="text-gray-700 mb-4">
          This dashboard explores the primary motivations and barriers influencing premium travelers' 
          decisions when choosing international destinations. Through comprehensive analysis of survey 
          data from Q1 2023 to Q3 2024, we've identified key trends in traveler preferences, the most 
          significant factors driving destination choice, and barriers that discourage visits to 
          specific regions.
        </p>
        <p className="text-gray-700 mb-4">
          The analysis reveals a significant shift toward seeking new destinations over familiar ones, 
          with attractions, weather, and relaxation emerging as leading factors in destination selection.
          For Qatar specifically, unique cultural experiences, luxury accommodations, and world-class dining 
          are the most appealing attributes, particularly for couples and families.
        </p>
        <p className="text-gray-700 mb-4">
          Conversely, safety concerns and political instability continue to be the primary barriers 
          to international travel, though Qatar is well-positioned to capitalize on its stable environment.
          Sustainability considerations have also emerged as increasingly important, with travelers 
          demonstrating growing preference for environmentally and culturally responsible travel experiences.
        </p>
        <p className="text-gray-700">
          These insights provide valuable direction for Qatar's tourism development and marketing strategies,
          highlighting opportunities to enhance its appeal by emphasizing security, unique cultural experiences,
          and sustainable tourism initiatives while addressing practical considerations like travel distance
          and visa processes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
          <h5 className="text-lg font-semibold text-indigo-800 mb-3">Key Finding: New Destinations</h5>
          <p className="text-gray-700">
            82% of premium travelers prefer exploring new destinations rather than returning to familiar ones,
            representing a 33% increase since Q1 2023. This trend highlights an opportunity for Qatar to 
            position itself as an exciting new destination for travelers seeking novel experiences.
          </p>
        </div>
        
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
          <h5 className="text-lg font-semibold text-amber-800 mb-3">Key Finding: Decision Factors</h5>
          <p className="text-gray-700">
            Unique attractions (75%), favorable weather (68%), and relaxation opportunities (62%) 
            are the primary factors driving destination choices. Safety considerations have risen 
            16 percentage points since 2023, becoming a significant decision factor.
          </p>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
          <h5 className="text-lg font-semibold text-green-800 mb-3">Key Finding: Sustainability</h5>
          <p className="text-gray-700">
            72% of travelers prefer destinations offering locally sourced food and products, and 68% 
            are willing to pay a premium for eco-friendly accommodations. These sustainability preferences 
            have increased significantly and represent an opportunity for Qatar's tourism positioning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction; 
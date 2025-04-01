import React from 'react';

// Importing section components
import NewVsPreviousDestinations from './sections/NewVsPreviousDestinations';
import FactorsInfluencingChoice from './sections/FactorsInfluencingChoice';
import CompanyOnVacations from './sections/CompanyOnVacations';

const TravelAttitudesTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Travel Attitudes</h2>
      
      {/* New Versus Previous Destinations Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">New Versus Previous Destinations</h3>
        <p className="text-gray-700 mb-4">
          Across all periods, there is a clear and consistent preference for discovering new destinations over returning to familiar ones, with the gap widening over time—highlighting a growing desire for novelty and exploration in travel behavior.
        </p>
        
        <div className="w-full">
          <NewVsPreviousDestinations />
        </div>
      </div>
      
      {/* Factors Influencing Choice Section */}
      <div id="factors-influencing" className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Factors Influencing Choice of Destination</h3>
        <p className="text-gray-700 mb-4">
          Travelers consistently prioritize relaxation, good weather, and unique experiences when choosing a destination, with safety, culture, and local cuisine also ranking high. Over time, preferences remain steady, though practical considerations like ease of access, accommodation options, and reviews continue to influence decisions significantly.
        </p>
        
        <div className="w-full">
          <FactorsInfluencingChoice />
        </div>
      </div>
      
      {/* Company on International Vacations Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Company on International Vacations (Q3 2024)</h3>
        <p className="text-gray-700 mb-4">
          International vacations are most commonly taken with a partner, followed by travel with children or other family members. Solo travel remains relatively stable across periods, while traveling with pets is consistently the least common option. Preferences have remained steady, with partner travel growing even more prominent over time.
        </p>
        
        <div className="w-full">
          <CompanyOnVacations />
        </div>
      </div>
    </div>
  );
};

export default TravelAttitudesTab; 
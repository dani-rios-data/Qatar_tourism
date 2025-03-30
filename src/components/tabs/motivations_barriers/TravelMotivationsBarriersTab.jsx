import React from 'react';

// Importing section components
import Introduction from './sections/Introduction';
import NewVsPreviousDestinations from './sections/NewVsPreviousDestinations';
import FactorsInfluencingChoice from './sections/FactorsInfluencingChoice';
import EcoExperienceAttitudes from './sections/EcoExperienceAttitudes';
import QatarConsiderationsCharts from './sections/QatarConsiderationsCharts';
import ActivityTypesDashboard from './sections/ActivityTypesDashboard';
import InternationalTravelCompanionsTrends from './sections/InternationalTravelCompanionsTrends';
import ReasonsForNotTravelingTrends from './sections/ReasonsForNotTravelingTrends';
import PriceAttitudeTrends from './sections/PriceAttitudeTrends';

const TravelMotivationsBarriersTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Travel Motivations & Barriers</h2>
      
      {/* Introduction */}
      <div className="mb-6 bg-white p-5 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Understanding Travel Motivations & Barriers</h3>
        <p className="text-gray-700">
          This section explores the primary drivers and obstacles influencing international premium travelers' decisions. Understanding these factors helps 
          identify what might attract visitors to Qatar or prevent them from choosing it as a destination.
        </p>
        
        <ul className="list-disc ml-6 text-gray-700 mt-3">
          <li className="mb-1"><span className="font-semibold">What are the main reasons a premium traveler from your market would visit Qatar?</span></li>
          <li className="mb-1"><span className="font-semibold">What are the biggest barriers stopping them from choosing Qatar?</span></li>
        </ul>
      </div>
      
      {/* Main Reasons to Visit Qatar - First Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What are the main reasons a premium traveler from your market would visit Qatar?</h3>
        <p className="text-gray-700 mb-4">
          Understanding the key motivators that would attract premium travelers to Qatar helps create targeted marketing strategies and improve destination appeal.
        </p>
        
        {/* New Versus Previous Destinations subsection */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-gray-700 mb-2">New Versus Previous Destinations</h4>
          <p className="text-gray-700 mb-4">
            This section shows whether travelers are seeking new experiences or prefer visiting familiar places. Understanding this behavior can help position Qatar as a fresh destination or reinforce return visits.
          </p>
          
          <div className="w-full">
            <div>
              <h5 className="text-sm font-semibold text-gray-600 mb-2">Ranking – Q3 2024 (Audience %)</h5>
              <NewVsPreviousDestinations />
            </div>
          </div>
        </div>
        
        {/* Factors Influencing Choice subsection */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-gray-700 mb-2">Factors Influencing Choice of Destination</h4>
          <p className="text-gray-700 mb-4">
            Explore how premium travelers' preferences evolved over time and which destination factors rank highest in the latest data.
            Select between Audience % and Index to change the metric.
          </p>
          
          <div className="w-full">
            <FactorsInfluencingChoice />
          </div>
        </div>
        
        {/* Eco & Experience Attitudes subsection */}
        <div>
          <h4 className="text-base font-semibold text-gray-700 mb-2">Eco & Experience Attitudes</h4>
          <p className="text-gray-700 mb-4">
            This dashboard tracks the evolution of eco-conscious and experience-seeking behaviors among premium travelers. Use the controls below to
            explore rankings and quarterly trends.
          </p>
          
          <div className="w-full">
            <EcoExperienceAttitudes />
          </div>
        </div>
      </div>
      
      {/* Activity Types Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Activity Types</h3>
        <p className="text-gray-700 mb-4">
          Understanding which activities premium travelers seek can help identify potential barriers when these activities are perceived as limited or unavailable in Qatar.
        </p>
        
        <div className="w-full">
          <ActivityTypesDashboard />
        </div>
      </div>
      
      {/* Company on International Vacations Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Company on International Vacations</h3>
        <p className="text-gray-700 mb-4">
          Travel companions can influence destination choices. This section examines whether Qatar is perceived as suitable for different travel groups (couples, families, solo travelers).
        </p>
        
        <div className="w-full">
          <InternationalTravelCompanionsTrends />
        </div>
      </div>
      
      {/* Barriers Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm backdrop-filter backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What are the biggest barriers stopping them from choosing Qatar?</h3>
        <p className="text-gray-700 mb-4">
          Identifying obstacles that prevent premium travelers from selecting Qatar as a destination is crucial for addressing misconceptions and improving the country's tourism appeal.
        </p>
        
        {/* Barriers content */}
        <div className="mb-6">
          <h4 className="text-base font-semibold text-gray-700 mb-2">Key Barriers Analysis</h4>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">1. Reasons for Not Traveling</h5>
              <ReasonsForNotTravelingTrends />
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">2. Attitudes Towards Price</h5>
              <PriceAttitudeTrends />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mantenemos los componentes completos en la sección oculta para compatibilidad */}
      <div className="hidden">
        <Introduction />
        <QatarConsiderationsCharts />
      </div>
    </div>
  );
};

export default TravelMotivationsBarriersTab; 
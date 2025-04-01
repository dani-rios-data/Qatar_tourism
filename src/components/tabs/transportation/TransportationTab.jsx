import React from 'react';
import AirlinesAnalysis from './sections/AirlinesAnalysis';
import AirTicketTypesAnalysis from './sections/AirTicketTypesAnalysis';
import PremiumTravelResearch from './sections/PremiumTravelResearch';

const TransportationTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Transportation</h2>
      
      {/* Airlines Analysis Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center mb-5 border-b border-gray-200 pb-2">
          <div className="text-[#8D1B3D] mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-800">
            Top 20 Airlines by Audience (Q3 2024)
          </h4>
        </div>
        
        <AirlinesAnalysis />
      </div>
      
      {/* Air Travel Ticket Types Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center mb-5 border-b border-gray-200 pb-2">
          <div className="text-[#8D1B3D] mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-800">
            Air Travel Ticket Types Most Often
          </h4>
        </div>
        
        <AirTicketTypesAnalysis />
      </div>
      
      {/* Premium Travelers Research Section */}
      <div className="mb-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center mb-5 border-b border-gray-200 pb-2">
          <div className="text-[#8D1B3D] mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
              <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
              <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-800">
            How Premium Travelers Research: Flight decision influence
          </h4>
        </div>
        
        <PremiumTravelResearch />
      </div>
    </div>
  );
};

export default TransportationTab; 
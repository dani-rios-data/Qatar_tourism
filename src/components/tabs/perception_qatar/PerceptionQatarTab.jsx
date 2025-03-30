import React from 'react';
import Introduction from './sections/Introduction';
import GeneralPerception from './sections/GeneralPerception';
import RegionalComparison from './sections/RegionalComparison';
import DestinationVsStopover from './sections/DestinationVsStopover';
import Insights from './sections/Insights';

// Importar los componentes de gráficos
import DonutChartAudience from './sections/DonutChartAudience';
import BarChartIndex from './sections/BarChartIndex';
import QatarTrendCharts from './sections/QatarTrendCharts';
import RegionalComparisonCharts from './sections/RegionalComparisonCharts';
import DestinationVsStopoverCharts from './sections/DestinationVsStopoverCharts';

const PerceptionQatarTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Perception of Qatar</h2>
      
      {/* Introduction Section */}
      <div className="mb-10">
        <div className="bg-[#f9f7f2] p-5 rounded-lg border border-[#b8a88f]">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Introduction</h3>
          <h4 className="text-lg font-semibold text-[#8D1B3D] mb-3">Understanding Perceptions of Qatar</h4>
          <p className="text-gray-700 leading-relaxed">
            This section explores how Qatar is perceived by premium international travelers. From visibility 
            within the region to emotional appeal and destination positioning, we analyze key data points 
            to assess its image as a travel destination. From a total of <span className="font-bold">106 Short Label Questions</span> available 
            in the dataset, we selected the most relevant ones to provide insight into travelers' perceptions of Qatar.
          </p>
        </div>
      </div>
      
      {/* General Perception Section */}
      <div className="mb-10">
        <div className="bg-[#f9f7f2] p-5 rounded-lg border border-[#b8a88f] mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">General Perception of Qatar</h3>
          <h4 className="text-lg font-semibold text-[#8D1B3D] mb-3">How is Qatar currently perceived among premium travelers?</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            To understand Qatar's overall image, we selected Short Label Questions that reflect its visibility 
            within the Middle East, alignment with travel values:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="mb-2"><span className="font-semibold">Africa and Middle Eastern Locations</span></li>
          </ul>
        </div>
        
        {/* Africa and Middle Eastern Locations section */}
        <div className="border border-[#b8a88f] rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#f3f4f6] px-5 py-4 border-b border-[#b8a88f]">
            <h4 className="text-lg font-semibold text-[#8D1B3D]">Africa and Middle Eastern Locations</h4>
          </div>
          
          <div className="p-5">
            <p className="text-gray-700 mb-5">
              This section explores how Qatar compares to other destinations within the Africa and Middle Eastern 
              region in terms of visibility and favorability among premium travelers.
            </p>
            
            <ul className="list-disc ml-6 text-gray-700 mb-6">
              <li className="mb-1">Data is from <span className="font-semibold">Q3 2024</span>, the latest available quarter.</li>
              <li className="mb-1">We use <span className="font-semibold">Audience %</span> to reflect how many in your target audience consider each destination.</li>
              <li>We use <span className="font-semibold">Index</span> to understand how relatively likely your audience is to consider each destination versus the global average.</li>
            </ul>
            
            {/* Graphics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg border border-[#b8a88f] shadow-sm">
                <h5 className="text-base font-semibold text-[#8D1B3D] mb-4 text-center">Audience % by Destination (Q3 2024)</h5>
                <DonutChartAudience />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-[#b8a88f] shadow-sm">
                <h5 className="text-base font-semibold text-[#8D1B3D] mb-4 text-center">Index by Destination (Q3 2024)</h5>
                <BarChartIndex />
              </div>
            </div>
            
            {/* Qatar Trend */}
            <div className="bg-[#f9f7f2] p-5 rounded-lg border border-[#d4a017]">
              <h5 className="text-lg font-semibold text-[#8D1B3D] mb-2">Highlight: Qatar</h5>
              <p className="text-gray-700 mb-5">
                Qatar has experienced a consistent decline in both visibility and appeal. While it started with a strong 
                Index of <span className="font-bold">135.1</span> and Audience % of <span className="font-bold">3.4%</span> in Q1 2023, it completely 
                dropped out of consideration by Q3 2024. This signals an urgent need to reassess Qatar's marketing 
                and positioning strategies in premium markets.
              </p>
              
              <QatarTrendCharts />
            </div>
          </div>
        </div>
      </div>
      
      {/* Regional Comparison Section */}
      <div className="mb-10">
        <div className="bg-[#f9f7f2] p-5 rounded-lg border border-[#b8a88f] mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Regional Comparison</h3>
          <h4 className="text-lg font-semibold text-[#8D1B3D] mb-3">How does Qatar compare to other Middle Eastern destinations in terms of awareness and appeal?</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            This section compares Qatar with other countries in the region. We focused on Short Label Questions that reveal travelers' regional preferences and destination awareness:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="mb-2"><span className="font-semibold">Regions for International Vacations</span></li>
            <li className="mb-2"><span className="font-semibold">Countries for International Vacations</span></li>
          </ul>
        </div>
        
        {/* Regional Comparison Charts */}
        <RegionalComparisonCharts />
      </div>
      
      {/* Destination vs. Stopover Section */}
      <div className="mb-10">
        <div className="bg-[#f9f7f2] p-5 rounded-lg border border-[#b8a88f] mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Destination vs. Stopover</h3>
          <h4 className="text-lg font-semibold text-[#8D1B3D] mb-3">Is Qatar seen primarily as a holiday destination or a stopover city?</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            To understand how travelers categorize Qatar in their journey planning, we selected Short Label Questions that explore the type of vacations they seek, openness to new destinations, and travel companionship:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li className="mb-2"><span className="font-semibold">Types of International Vacations</span></li>
            <li className="mb-2"><span className="font-semibold">Airlines Considered for Leisure</span></li>
            <li className="mb-2"><span className="font-semibold">Named Travel Loyalty Programs Used: Airlines</span></li>
            <li className="mb-2"><span className="font-semibold">Airlines Considered for Business Trips</span></li>
          </ul>
        </div>
        
        {/* Destination vs. Stopover Charts */}
        <DestinationVsStopoverCharts />
      </div>
      
      {/* Mantener las secciones originales para compatibilidad */}
      <div className="hidden">
        <Introduction />
        <GeneralPerception />
        <RegionalComparison />
        <DestinationVsStopover />
        <Insights />
      </div>
    </div>
  );
};

export default PerceptionQatarTab; 
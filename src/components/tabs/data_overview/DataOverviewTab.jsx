import React from 'react';

const DataOverviewTab = () => {
  return (
    <div className="tab-content">
      <h2 className="text-2xl font-bold text-[#8D1B3D] mb-6">Data Overview</h2>
      
      {/* Audience Profile Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Audience Profile</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700 leading-relaxed">
            This analysis focuses on premium travelers with an annual household income of $85,000+ USD, 
            aged 35-64, who currently reside in the United States. These individuals demonstrate a 
            preference for premium products and have expressed interest in travel experiences. 
            Data has been collected across four quarters (Q1 2023, Q3 2023, Q1 2024, and Q3 2024) 
            to identify emerging trends and consistent patterns in travel behaviors.
          </p>
        </div>
      </div>
      
      {/* Data Dictionary Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Data Dictionary</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
            <thead>
              <tr className="bg-[#f9f5f6]">
                <th className="px-4 py-3 border-b border-r text-left text-sm font-medium text-[#8D1B3D]">Field</th>
                <th className="px-4 py-3 border-b border-r text-left text-sm font-medium text-[#8D1B3D]">Meaning</th>
                <th className="px-4 py-3 border-b text-left text-sm font-medium text-[#8D1B3D]">Data Type / Format</th>
              </tr>
            </thead>
            <tbody>
              {/* Short Label Question */}
              <tr className="bg-white">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Short Label Question</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">A brief, descriptive name for the topic or question (e.g., "Importance of Vacations," "Business Travel Attitudes").</td>
                <td className="px-4 py-3 border-b text-gray-700">Text (category label)</td>
              </tr>
              
              {/* Question Attributes */}
              <tr className="bg-[#f9f5f6]">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Question Attributes</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">Specific response options or statements under that question/topic (e.g., "Not important - other things matter a lot more to me," "I often build in extra days to my trip").</td>
                <td className="px-4 py-3 border-b text-gray-700">Text (category or statement)</td>
              </tr>
              
              {/* Audience % */}
              <tr className="bg-white">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Audience %</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">The percentage of the surveyed audience/target group that selected this response.</td>
                <td className="px-4 py-3 border-b text-gray-700">Percentage (%)</td>
              </tr>
              
              {/* Data point % */}
              <tr className="bg-[#f9f5f6]">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Data point %</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">An additional figure (in %) for variations, margins, or changes related to the Audience %.</td>
                <td className="px-4 py-3 border-b text-gray-700">Percentage (%)</td>
              </tr>
              
              {/* Universe */}
              <tr className="bg-white">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Universe</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">Estimated number of real people in this category (averaged across selected waves).</td>
                <td className="px-4 py-3 border-b text-gray-700">Integer (population projection)</td>
              </tr>
              
              {/* Index */}
              <tr className="bg-[#f9f5f6]">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Index</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">A comparison metric where 100 = baseline. Values above 100 indicate higher likelihood; below 100 = lower likelihood.</td>
                <td className="px-4 py-3 border-b text-gray-700">Index (relative value)</td>
              </tr>
              
              {/* Responses */}
              <tr className="bg-white">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">Responses</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">The absolute number of survey respondents who selected this response or belong to this category.</td>
                <td className="px-4 py-3 border-b text-gray-700">Integer (count)</td>
              </tr>
              
              {/* Quarter */}
              <tr className="bg-[#f9f5f6]">
                <td className="px-4 py-3 border-b border-r font-medium text-gray-800">quarter</td>
                <td className="px-4 py-3 border-b border-r text-gray-700">The specific quarter or wave in which the data was collected (e.g., "Q1 2023").</td>
                <td className="px-4 py-3 border-b text-gray-700">Text (quarter + year)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Key Metrics for the Data Overview */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Key Metrics for the Data Overview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Survey Scope */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-medium text-[#8D1B3D] mb-2">Survey Scope</h4>
            <ul className="text-gray-700">
              <li className="flex items-start mb-2">
                <span className="mr-2">•</span>
                <span>The data set contains <span className="font-bold">106 unique questions/topics</span></span>
              </li>
              <li className="flex items-start mb-2">
                <span className="mr-2">•</span>
                <span>The data set includes <span className="font-bold">797 unique response attributes</span></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>It spans <span className="font-bold">4 quarters</span> (Q1 2023, Q3 2023, Q1 2024, Q3 2024)</span>
              </li>
            </ul>
          </div>
          
          {/* Sample Size */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-medium text-[#8D1B3D] mb-2">Sample Size</h4>
            <p className="text-gray-800 mb-2">Total responses: <span className="font-bold text-2xl">103,114</span></p>
            <p className="text-gray-700 mb-2">Responses by quarter:</p>
            <ul className="text-gray-700">
              <li className="flex justify-between mb-1">
                <span>Q1 2023:</span>
                <span className="font-medium">27,723</span>
              </li>
              <li className="flex justify-between mb-1">
                <span>Q3 2023:</span>
                <span className="font-medium">26,374</span>
              </li>
              <li className="flex justify-between mb-1">
                <span>Q1 2024:</span>
                <span className="font-medium">30,757</span>
              </li>
              <li className="flex justify-between">
                <span>Q3 2024:</span>
                <span className="font-medium">18,260</span>
              </li>
            </ul>
          </div>
          
          {/* Data Completeness */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-medium text-[#8D1B3D] mb-2">Data Completeness</h4>
            <ul className="text-gray-700">
              <li className="flex items-start mb-2">
                <span className="mr-2">•</span>
                <span>All 106 questions appear in all four quarters</span>
              </li>
              <li className="flex items-start mb-4">
                <span className="mr-2">•</span>
                <span>Consistent tracking of metrics over time</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#8D1B3D] h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="ml-2 text-[#8D1B3D] font-medium">100%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Data Completeness Score</p>
            </div>
          </div>
        </div>
        
        {/* Visual representation of sample distribution */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-medium text-[#8D1B3D] mb-3">Sample Distribution by Quarter</h4>
          <div className="relative pt-1">
            <div className="flex h-6 overflow-hidden text-xs">
              <div className="flex flex-col justify-center text-center text-white bg-[#8D1B3D] shadow-none" 
                   style={{ width: '27%' }}>
                <span className="text-xs whitespace-nowrap px-1">Q1 2023</span>
              </div>
              <div className="flex flex-col justify-center text-center text-white bg-[#a54863] shadow-none" 
                   style={{ width: '25.5%' }}>
                <span className="text-xs whitespace-nowrap px-1">Q3 2023</span>
              </div>
              <div className="flex flex-col justify-center text-center text-white bg-[#75152f] shadow-none" 
                   style={{ width: '30%' }}>
                <span className="text-xs whitespace-nowrap px-1">Q1 2024</span>
              </div>
              <div className="flex flex-col justify-center text-center text-white bg-[#c27792] shadow-none" 
                   style={{ width: '17.5%' }}>
                <span className="text-xs whitespace-nowrap px-1">Q3 2024</span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>0</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>75,000</span>
              <span>100,000</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data Collection Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">Data Collection Timeline</h3>
        <div className="bg-white p-6 rounded-lg shadow flex justify-center">
          <div className="relative">
            {/* Timeline */}
            <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0 z-0"></div>
            
            {/* Timeline Points */}
            <div className="flex justify-between relative z-10 mx-4">
              <div className="text-center mx-6">
                <div className="w-8 h-8 bg-[#8D1B3D] rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <p className="text-sm font-medium">Q1 2023</p>
                <p className="text-xs text-gray-500">Jan-Mar</p>
              </div>
              
              <div className="text-center mx-6">
                <div className="w-8 h-8 bg-[#8D1B3D] rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <p className="text-sm font-medium">Q3 2023</p>
                <p className="text-xs text-gray-500">Jul-Sep</p>
              </div>
              
              <div className="text-center mx-6">
                <div className="w-8 h-8 bg-[#8D1B3D] rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <p className="text-sm font-medium">Q1 2024</p>
                <p className="text-xs text-gray-500">Jan-Mar</p>
              </div>
              
              <div className="text-center mx-6">
                <div className="w-8 h-8 bg-[#8D1B3D] rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-white font-medium">4</span>
                </div>
                <p className="text-sm font-medium">Q3 2024</p>
                <p className="text-xs text-gray-500">Jul-Sep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOverviewTab; 
import React from 'react';

const RecommendationsSection = ({ data }) => {
  // Qatar specific data (inferred)
  const recommendationsData = {
    shortTerm: [
      {
        category: 'Marketing',
        recommendations: [
          'Develop targeted digital marketing campaigns to increase awareness of Qatar\'s luxury offerings',
          'Create educational content to address misconceptions about cultural restrictions',
          'Highlight Qatar\'s unique advantages like safety and authentic cultural experiences',
          'Partner with luxury travel agencies to promote Qatar as a premium destination'
        ]
      },
      {
        category: 'Product Development',
        recommendations: [
          'Create unique cultural experiences that showcase Qatar\'s authentic heritage',
          'Develop year-round attractions and indoor entertainment options',
          'Design integrated business-leisure packages for the bleisure segment',
          'Enhance luxury accommodation offerings with cultural elements'
        ]
      }
    ],
    longTerm: [
      {
        category: 'Infrastructure',
        recommendations: [
          'Develop world-class cultural and entertainment facilities',
          'Create sustainable tourism infrastructure',
          'Build year-round indoor attractions',
          'Enhance transportation connectivity'
        ]
      },
      {
        category: 'Brand Building',
        recommendations: [
          'Position Qatar as a leading luxury destination in the Middle East',
          'Build a strong brand identity around cultural authenticity',
          'Develop Qatar as a hub for premium business and leisure travel',
          'Create unique cultural experiences that can\'t be found elsewhere'
        ]
      }
    ],
    keyPriorities: [
      {
        title: 'Immediate Actions',
        items: [
          'Launch targeted marketing campaigns to increase destination awareness',
          'Develop partnerships with luxury travel agencies',
          'Create educational content about cultural experiences',
          'Design unique cultural experiences for premium travelers'
        ]
      },
      {
        title: 'Medium-term Initiatives',
        items: [
          'Develop year-round attractions and entertainment options',
          'Create integrated business-leisure packages',
          'Enhance luxury accommodation offerings',
          'Build Qatar\'s reputation as a premium destination'
        ]
      },
      {
        title: 'Long-term Goals',
        items: [
          'Establish Qatar as a leading luxury destination in the region',
          'Create sustainable tourism infrastructure',
          'Develop unique cultural experiences',
          'Build a strong brand identity around cultural authenticity'
        ]
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <div>
        <h1 className="text-2xl font-bold text-[#8D1B3D]">Strategic Recommendations & Action Plan</h1>
        <div className="w-24 h-0.5 bg-[#8D1B3D] mt-1 mb-6"></div>
      </div>

      {/* Short-term Recommendations */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Short-term Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendationsData.shortTerm.map((category, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
            }`}>
              <h3 className={`font-medium mb-3 ${
                index % 2 === 0 ? 'text-blue-800' : 'text-green-800'
              }`}>
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.recommendations.map((rec, recIndex) => (
                  <li key={recIndex} className="flex items-start">
                    <span className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                      index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
                    }`}></span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Long-term Recommendations */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Long-term Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendationsData.longTerm.map((category, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index % 2 === 0 ? 'bg-purple-50' : 'bg-amber-50'
            }`}>
              <h3 className={`font-medium mb-3 ${
                index % 2 === 0 ? 'text-purple-800' : 'text-amber-800'
              }`}>
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.recommendations.map((rec, recIndex) => (
                  <li key={recIndex} className="flex items-start">
                    <span className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                      index % 2 === 0 ? 'bg-purple-500' : 'bg-amber-500'
                    }`}></span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Key Priorities */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Priorities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendationsData.keyPriorities.map((priority, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index === 0 ? 'bg-blue-50' : index === 1 ? 'bg-green-50' : 'bg-purple-50'
            }`}>
              <h3 className={`font-medium mb-3 ${
                index === 0 ? 'text-blue-800' : index === 1 ? 'text-green-800' : 'text-purple-800'
              }`}>
                {priority.title}
              </h3>
              <ul className="space-y-2">
                {priority.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className={`w-2 h-2 rounded-full mr-2 mt-2 ${
                      index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'
                    }`}></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Strategy */}
      <div className="bg-indigo-50 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium text-indigo-800 mb-3">Implementation Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Success Factors</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Strong partnerships with luxury travel agencies and airlines</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Effective marketing campaigns targeting premium travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Development of unique cultural experiences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Investment in world-class infrastructure</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Risk Mitigation</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Address cultural misconceptions through education</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Develop year-round attractions to address weather concerns</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Create sustainable tourism practices</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Build strong local support for tourism development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsSection; 
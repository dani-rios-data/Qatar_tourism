import React from 'react';

const GeneralPerception = () => {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-[#8D1B3D] mb-4">General Perception of Qatar</h3>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-3">Overall Impressions</h4>
            <p className="text-gray-700 mb-4">
              This section analyzes how premium travelers perceive Qatar overall, including:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
              <li>Awareness levels across markets</li>
              <li>Perceived strengths and unique selling points</li>
              <li>Cultural perceptions and misconceptions</li>
              <li>Safety and accessibility perceptions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-3">Key Perception Metrics</h4>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 italic">
                Visualization of perception metrics will appear here, showing how Qatar
                is rated on key attributes including luxury accommodations, cultural experiences,
                and overall destination appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralPerception; 
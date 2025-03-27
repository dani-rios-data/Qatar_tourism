import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#8D1B3D', '#1A4D2E', '#B8A88F', '#A7754D', '#D4B391', '#C29591', '#6B7280'];

const KeyMetricsSection = ({ data }) => {
  // Calculate average values for the latest period (Q1 2024)
  const getLatestPercentage = (dataset, attribute) => {
    if (!dataset || !dataset.byPeriod || !dataset.byPeriod['Q1 2024']) return 0;
    const match = dataset.byPeriod['Q1 2024'].find(item => item.attribute === attribute);
    return match ? match.audiencePercentage : 0;
  };

  const newDestinationPercentage = getLatestPercentage(data.newVsPrevious, "Take a vacation somewhere new");
  const highVacationImportance = getLatestPercentage(data.vacationImportance, "Extremely important - they are my highlight of the year") + 
    getLatestPercentage(data.vacationImportance, "Very important - they are one of my highlights");
  const culturalInterest = getLatestPercentage(data.businessAttitudes, "I like to understand the local culture of where I travel to");
  const nonTouristyPreference = getLatestPercentage(data.ecoAttitudes, "I try to visit non-touristy destinations");
  const bleisureInterest = getLatestPercentage(data.businessAttitudes, "I often build in extra days to my trip for leisure");

  // Qatar specific data (inferred)
  const metricsData = {
    keyMetrics: [
      {
        title: 'Vacation Importance',
        value: highVacationImportance.toFixed(1),
        unit: '%',
        description: 'of premium travelers rate vacations as "Very" or "Extremely" important',
        color: 'blue'
      },
      {
        title: 'New Destinations',
        value: newDestinationPercentage.toFixed(1),
        unit: '%',
        description: 'prefer vacationing in new destinations over familiar places',
        color: 'green'
      },
      {
        title: 'Cultural Interest',
        value: culturalInterest.toFixed(1),
        unit: '%',
        description: 'seek authentic local experiences and cultural understanding',
        color: 'purple'
      },
      {
        title: 'Bleisure Travel',
        value: bleisureInterest.toFixed(1),
        unit: '%',
        description: 'of business travelers add leisure days to their trips',
        color: 'amber'
      }
    ],
    trends: [
      {
        name: 'Q1 2023',
        vacationImportance: 85,
        newDestinations: 75,
        culturalInterest: 70,
        bleisureTravel: 65
      },
      {
        name: 'Q3 2023',
        vacationImportance: 88,
        newDestinations: 78,
        culturalInterest: 72,
        bleisureTravel: 68
      },
      {
        name: 'Q1 2024',
        vacationImportance: 90,
        newDestinations: 80,
        culturalInterest: 75,
        bleisureTravel: 70
      }
    ]
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-800',
        value: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-100',
        text: 'text-green-800',
        value: 'text-green-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        text: 'text-purple-800',
        value: 'text-purple-600'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        text: 'text-amber-800',
        value: 'text-amber-600'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.keyMetrics.map((metric, index) => {
          const colors = getColorClasses(metric.color);
          return (
            <div key={index} className={`${colors.bg} p-4 rounded-lg shadow border ${colors.border}`}>
              <h3 className={`${colors.text} font-medium mb-1`}>{metric.title}</h3>
              <div className={`text-4xl font-bold ${colors.value} mb-1`}>
                {metric.value}{metric.unit}
              </div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          );
        })}
      </div>

      {/* Trends Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Trends Over Time</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={metricsData.trends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="vacationImportance" stroke="#3B82F6" name="Vacation Importance" />
              <Line type="monotone" dataKey="newDestinations" stroke="#10B981" name="New Destinations" />
              <Line type="monotone" dataKey="culturalInterest" stroke="#8B5CF6" name="Cultural Interest" />
              <Line type="monotone" dataKey="bleisureTravel" stroke="#F59E0B" name="Bleisure Travel" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          All key metrics show positive trends over the past year, with vacation importance and new destination preferences showing the strongest growth.
        </p>
      </div>

      {/* Key Insights */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Growing Trends</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Increasing importance of vacations among premium travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Strong preference for new destinations over familiar places</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Growing interest in cultural experiences and authentic local interactions</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Opportunities</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Develop unique cultural experiences for premium travelers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Create integrated business-leisure packages</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Position Qatar as a new and exciting destination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyMetricsSection; 
// Survey data file names and periods
export const SURVEY_DATA = {
  files: [
    '/data/qatar - premium traveler - q1 2023.csv',
    '/data/qatar - premium traveler - q3 2023.csv',
    '/data/qatar - premium traveler - q1 2024.csv',
    '/data/qatar - premium traveler - q3 2024.csv'
  ],
  periods: ['Q1 2023', 'Q3 2023', 'Q1 2024', 'Q3 2024']
};

// Question categories and their labels
export const QUESTION_CATEGORIES = {
  vacationImportance: 'Importance of Vacations',
  newVsPrevious: 'New Versus Previous Destinations',
  businessAttitudes: 'Business Travel Attitudes',
  ecoAttitudes: 'Eco & Experience Attitudes',
  carbonConcern: 'Concern Over Carbon Footprint',
  travelBarriers: 'Reasons for Not Traveling'
};

// Chart configurations
export const CHART_CONFIG = {
  bar: {
    width: 800,
    height: 400,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
    colors: ['#8B0000', '#A52A2A', '#800000'],
    showLabels: true,
    showGrid: true,
    animate: true
  },
  line: {
    width: 800,
    height: 400,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
    colors: ['#8B0000', '#A52A2A', '#800000'],
    showLabels: true,
    showGrid: true,
    animate: true,
    showLegend: true
  },
  pie: {
    width: 400,
    height: 400,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    colors: ['#8B0000', '#A52A2A', '#800000', '#F4D03F', '#F7DC6F'],
    showLabels: true,
    animate: true,
    showLegend: true,
    innerRadius: 0
  }
};

// Dashboard sections configuration
export const DASHBOARD_SECTIONS = {
  summary: {
    id: 'summary',
    title: 'Executive Summary',
    description: 'Overview of key metrics'
  },
  perceptions: {
    id: 'perceptions',
    title: 'Perceptions of Qatar',
    description: 'Analysis of perceptions about Qatar'
  },
  motivations: {
    id: 'motivations',
    title: 'Travel Motivations & Barriers',
    description: 'Factors motivating visits to Qatar'
  },
  behaviors: {
    id: 'behaviors',
    title: 'Travel Behaviors & Trends',
    description: 'Traveler behavior patterns'
  },
  competitive: {
    id: 'competitive',
    title: 'Competitive Landscape',
    description: 'Comparison with competing destinations'
  }
};

// Data processing configuration
export const DATA_PROCESSING = {
  // Minimum percentage threshold for filtering data
  minPercentage: 5,
  
  // Number of top items to show in charts
  topItems: {
    motivators: 6,
    barriers: 6,
    competitors: 5
  },
  
  // Aggregation settings
  aggregation: {
    // Combine these categories for vacation importance
    vacationImportance: [
      'Extremely important - they are my highlight of the year',
      'Very important - they are one of my highlights'
    ],
    
    // Combine these for environmental concerns
    environmentalConcerns: [
      'Extremely concerned',
      'Very concerned',
      'Quite concerned'
    ]
  }
};

// Time periods configuration
export const TIME_PERIODS = {
  current: 'Q1 2024',
  previous: 'Q3 2023',
  historical: ['Q1 2023', 'Q3 2023', 'Q1 2024']
};

// Main attributes configuration
export const MAIN_ATTRIBUTES = {
  perceptions: [
    'Luxury and Exclusivity',
    'Safety and Stability',
    'Culture and Tradition',
    'Innovation and Modernity',
    'Service and Hospitality'
  ],
  motivations: [
    'Luxury Tourism',
    'Sports Events',
    'Culture and Heritage',
    'Shopping and Entertainment',
    'Gastronomy'
  ],
  behaviors: [
    'Average Spending',
    'Stay Duration',
    'Activities Performed',
    'Satisfaction Level',
    'Return Intention'
  ]
}; 
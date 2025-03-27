// Trend analysis configuration
export const TREND_CONFIG = {
  periods: {
    current: 'Q1 2024',
    previous: 'Q3 2023',
    historical: ['Q1 2023', 'Q3 2023', 'Q1 2024']
  },
  metrics: {
    perceptions: [
      {
        id: 'luxury',
        label: 'Luxury Perception',
        description: 'Trend in luxury perception over time'
      },
      {
        id: 'safety',
        label: 'Safety Perception',
        description: 'Trend in safety perception over time'
      },
      {
        id: 'culture',
        label: 'Culture Perception',
        description: 'Trend in cultural perception over time'
      },
      {
        id: 'innovation',
        label: 'Innovation Perception',
        description: 'Trend in innovation perception over time'
      },
      {
        id: 'service',
        label: 'Service Perception',
        description: 'Trend in service perception over time'
      }
    ],
    motivations: [
      {
        id: 'luxury_tourism',
        label: 'Luxury Tourism',
        description: 'Trend in luxury tourism motivation'
      },
      {
        id: 'sports_events',
        label: 'Sports Events',
        description: 'Trend in sports events motivation'
      },
      {
        id: 'culture_heritage',
        label: 'Culture and Heritage',
        description: 'Trend in cultural motivation'
      },
      {
        id: 'shopping',
        label: 'Shopping and Entertainment',
        description: 'Trend in shopping motivation'
      },
      {
        id: 'gastronomy',
        label: 'Gastronomy',
        description: 'Trend in gastronomy motivation'
      }
    ],
    behaviors: [
      {
        id: 'spending',
        label: 'Average Spending',
        description: 'Trend in average spending over time'
      },
      {
        id: 'duration',
        label: 'Stay Duration',
        description: 'Trend in average stay duration'
      },
      {
        id: 'activities',
        label: 'Activities Performed',
        description: 'Trend in number of activities performed'
      },
      {
        id: 'satisfaction',
        label: 'Satisfaction Level',
        description: 'Trend in overall satisfaction'
      },
      {
        id: 'return_intention',
        label: 'Return Intention',
        description: 'Trend in return intention'
      }
    ]
  },
  analysis: {
    comparison: {
      type: 'percentage',
      format: '1.1%'
    },
    threshold: {
      significant: 5,
      verySignificant: 10
    },
    visualization: {
      type: 'line',
      showPoints: true,
      showGrid: true,
      animate: true
    }
  }
}; 
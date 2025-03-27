// Competitive analysis configuration
export const COMPETITIVE_CONFIG = {
  competitors: {
    dubai: {
      name: 'Dubai',
      description: 'Major luxury tourism destination in the region',
      strengths: [
        'Luxury Shopping',
        'Modern Architecture',
        'Entertainment Options',
        'International Events',
        'Transportation Hub'
      ],
      weaknesses: [
        'Cultural Authenticity',
        'Cost of Living',
        'Weather Conditions',
        'Traffic Congestion',
        'Cultural Restrictions'
      ]
    },
    abuDhabi: {
      name: 'Abu Dhabi',
      description: 'Cultural and luxury tourism destination',
      strengths: [
        'Cultural Heritage',
        'Luxury Hotels',
        'Beach Resorts',
        'Family Attractions',
        'Safety and Security'
      ],
      weaknesses: [
        'Limited Entertainment',
        'Higher Costs',
        'Weather Conditions',
        'Transportation Options',
        'Cultural Restrictions'
      ]
    }
  },
  metrics: {
    marketShare: {
      type: 'percentage',
      format: '1.1%'
    },
    growth: {
      type: 'percentage',
      format: '1.1%'
    },
    satisfaction: {
      type: 'rating',
      scale: 1
    }
  },
  analysis: {
    positioning: {
      dimensions: [
        {
          name: 'Luxury',
          description: 'Perception of luxury and exclusivity'
        },
        {
          name: 'Culture',
          description: 'Cultural authenticity and heritage'
        },
        {
          name: 'Innovation',
          description: 'Modern infrastructure and technology'
        }
      ]
    },
    advantages: {
      categories: [
        {
          name: 'Luxury Tourism',
          description: 'High-end tourism experiences'
        },
        {
          name: 'Cultural Heritage',
          description: 'Traditional and cultural attractions'
        },
        {
          name: 'Sports Events',
          description: 'Major sporting events and facilities'
        }
      ]
    },
    opportunities: {
      categories: [
        {
          name: 'Market Growth',
          description: 'Potential for market expansion'
        },
        {
          name: 'Product Development',
          description: 'New tourism product opportunities'
        },
        {
          name: 'Partnerships',
          description: 'Strategic partnership opportunities'
        }
      ]
    },
    threats: {
      categories: [
        {
          name: 'Competition',
          description: 'Competitive pressure from other destinations'
        },
        {
          name: 'Economic',
          description: 'Economic challenges and risks'
        },
        {
          name: 'Environmental',
          description: 'Environmental and sustainability challenges'
        }
      ]
    }
  },
  visualization: {
    positioning: {
      type: 'scatter',
      showLabels: true,
      showGrid: true,
      animate: true
    },
    advantages: {
      type: 'radar',
      showLabels: true,
      showGrid: true,
      animate: true
    },
    opportunitiesThreats: {
      type: 'matrix',
      showLabels: true,
      showGrid: true,
      animate: true
    }
  }
}; 
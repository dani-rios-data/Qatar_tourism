// Survey questions and categories
export const SURVEY_DATA = {
  questions: {
    demographics: [
      {
        id: 'age',
        text: 'What is your age?',
        type: 'numeric',
        required: true
      },
      {
        id: 'gender',
        text: 'What is your gender?',
        type: 'select',
        options: ['Male', 'Female', 'Other', 'Prefer not to say'],
        required: true
      },
      {
        id: 'nationality',
        text: 'What is your nationality?',
        type: 'text',
        required: true
      }
    ],
    travel: [
      {
        id: 'purpose',
        text: 'What is your main purpose for visiting Qatar?',
        type: 'select',
        options: [
          'Leisure',
          'Business',
          'Sports Events',
          'Cultural Events',
          'Shopping',
          'Other'
        ],
        required: true
      },
      {
        id: 'duration',
        text: 'How long did you stay in Qatar?',
        type: 'select',
        options: [
          '1-3 days',
          '4-7 days',
          '8-14 days',
          '15-30 days',
          'More than 30 days'
        ],
        required: true
      },
      {
        id: 'accommodation',
        text: 'What type of accommodation did you stay in?',
        type: 'select',
        options: [
          'Luxury Hotel',
          'Standard Hotel',
          'Resort',
          'Serviced Apartment',
          'Other'
        ],
        required: true
      }
    ],
    spending: [
      {
        id: 'total_spending',
        text: 'What was your total spending during your stay?',
        type: 'select',
        options: [
          'Less than $1,000',
          '$1,000 - $3,000',
          '$3,000 - $5,000',
          '$5,000 - $10,000',
          'More than $10,000'
        ],
        required: true
      },
      {
        id: 'spending_categories',
        text: 'How did you distribute your spending?',
        type: 'matrix',
        categories: [
          'Accommodation',
          'Food & Beverage',
          'Shopping',
          'Entertainment',
          'Transportation'
        ],
        required: true
      }
    ],
    satisfaction: [
      {
        id: 'overall_satisfaction',
        text: 'How satisfied were you with your overall experience in Qatar?',
        type: 'rating',
        scale: 1,
        required: true
      },
      {
        id: 'return_intention',
        text: 'How likely are you to return to Qatar?',
        type: 'rating',
        scale: 1,
        required: true
      }
    ]
  },
  categories: {
    perceptions: [
      {
        id: 'luxury',
        text: 'Luxury and Exclusivity',
        description: 'Perception of Qatar as a luxury destination'
      },
      {
        id: 'safety',
        text: 'Safety and Stability',
        description: 'Perception of safety and political stability'
      },
      {
        id: 'culture',
        text: 'Culture and Tradition',
        description: 'Perception of cultural heritage and traditions'
      },
      {
        id: 'innovation',
        text: 'Innovation and Modernity',
        description: 'Perception of technological advancement and modern infrastructure'
      },
      {
        id: 'service',
        text: 'Service and Hospitality',
        description: 'Perception of service quality and hospitality'
      }
    ],
    motivations: [
      {
        id: 'luxury_tourism',
        text: 'Luxury Tourism',
        description: 'Desire for luxury experiences and exclusive services'
      },
      {
        id: 'sports_events',
        text: 'Sports Events',
        description: 'Interest in major sporting events and activities'
      },
      {
        id: 'culture_heritage',
        text: 'Culture and Heritage',
        description: 'Interest in cultural experiences and historical sites'
      },
      {
        id: 'shopping',
        text: 'Shopping and Entertainment',
        description: 'Interest in retail and entertainment options'
      },
      {
        id: 'gastronomy',
        text: 'Gastronomy',
        description: 'Interest in culinary experiences and dining'
      }
    ],
    behaviors: [
      {
        id: 'activities',
        text: 'Activities Performed',
        description: 'Types of activities engaged in during the visit'
      },
      {
        id: 'spending_patterns',
        text: 'Spending Patterns',
        description: 'Distribution of spending across different categories'
      },
      {
        id: 'accommodation_preferences',
        text: 'Accommodation Preferences',
        description: 'Types of accommodation chosen and reasons'
      },
      {
        id: 'transportation',
        text: 'Transportation Usage',
        description: 'Modes of transportation used during the visit'
      },
      {
        id: 'dining',
        text: 'Dining Habits',
        description: 'Dining preferences and experiences'
      }
    ]
  }
}; 
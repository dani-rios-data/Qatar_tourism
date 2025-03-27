// CSV file paths
export const CSV_FILES = {
  q1_2023: '/data/qatar - premium traveler - q1 2023.csv',
  q3_2023: '/data/qatar - premium traveler - q3 2023.csv',
  q1_2024: '/data/qatar - premium traveler - q1 2024.csv',
  q3_2024: '/data/qatar - premium traveler - q3 2024.csv'
};

// CSV column configurations
export const CSV_COLUMNS = {
  id: 'ID',
  period: 'Period',
  age: 'Age',
  gender: 'Gender',
  nationality: 'Nationality',
  travelPurpose: 'Travel Purpose',
  stayDuration: 'Stay Duration',
  accommodation: 'Accommodation',
  spending: 'Spending',
  satisfaction: 'Satisfaction',
  returnIntention: 'Return Intention',
  perceptions: {
    luxury: 'Luxury Perception',
    safety: 'Safety Perception',
    culture: 'Culture Perception',
    innovation: 'Innovation Perception',
    service: 'Service Perception'
  },
  motivations: {
    luxury: 'Luxury Motivation',
    sports: 'Sports Motivation',
    culture: 'Culture Motivation',
    shopping: 'Shopping Motivation',
    gastronomy: 'Gastronomy Motivation'
  },
  behaviors: {
    activities: 'Activities',
    spending: 'Spending Pattern',
    accommodation: 'Accommodation Type',
    transportation: 'Transportation',
    dining: 'Dining Preferences'
  }
};

// Data transformation configurations
export const DATA_TRANSFORM = {
  ageGroups: {
    '18-24': [18, 24],
    '25-34': [25, 34],
    '35-44': [35, 44],
    '45-54': [45, 54],
    '55+': [55, 100]
  },
  spendingGroups: {
    'Low': [0, 1000],
    'Medium': [1001, 3000],
    'High': [3001, 5000],
    'Very High': [5001, 10000],
    'Luxury': [10001, Infinity]
  },
  satisfactionLevels: {
    'Very Dissatisfied': [1, 2],
    'Dissatisfied': [2, 3],
    'Neutral': [3, 4],
    'Satisfied': [4, 5],
    'Very Satisfied': [5, 6]
  },
  returnProbability: {
    'Very Unlikely': [1, 2],
    'Unlikely': [2, 3],
    'Neutral': [3, 4],
    'Likely': [4, 5],
    'Very Likely': [5, 6]
  }
}; 
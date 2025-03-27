// Qatar's national colors and theme
export const COLORS = {
  primary: {
    main: '#8B0000', // Qatar's maroon
    light: '#A52A2A',
    dark: '#800000',
    contrast: '#FFFFFF'
  },
  secondary: {
    main: '#F4D03F', // Qatar's gold
    light: '#F7DC6F',
    dark: '#D4AC0D',
    contrast: '#000000'
  },
  accent: '#B8A88F', // Sand
  complementary: '#A7754D', // Brown
  neutral: '#D4B391', // Light Brown
  muted: '#C29591', // Rose
  gray: '#6B7280', // Gray

  // Additional colors for charts and UI
  chart: {
    primary: '#8D1B3D',
    secondary: '#1A4D2E',
    tertiary: '#B8A88F',
    quaternary: '#A7754D',
    quinary: '#D4B391',
    senary: '#C29591',
    septenary: '#6B7280'
  },

  // Background colors for cards and sections
  background: {
    default: '#FFFFFF',
    paper: '#F5F5F5',
    dark: '#1A1A1A'
  },

  // Text colors
  text: {
    primary: '#000000',
    secondary: '#666666',
    disabled: '#999999',
    contrast: '#FFFFFF'
  },

  border: {
    light: '#E0E0E0',
    main: '#BDBDBD',
    dark: '#757575'
  },

  chartColors: {
    primary: ['#8B0000', '#A52A2A', '#800000'],
    secondary: ['#F4D03F', '#F7DC6F', '#D4AC0D'],
    neutral: ['#666666', '#999999', '#CCCCCC'],
    success: ['#2E7D32', '#4CAF50', '#81C784'],
    warning: ['#F57C00', '#FF9800', '#FFB74D'],
    error: ['#C62828', '#EF5350', '#E57373']
  }
};

// Chart color arrays for different visualizations
export const CHART_COLORS = {
  default: [
    COLORS.chart.primary,
    COLORS.chart.secondary,
    COLORS.chart.tertiary,
    COLORS.chart.quaternary,
    COLORS.chart.quinary,
    COLORS.chart.senary,
    COLORS.chart.septenary
  ],
  
  // Specific color arrays for different chart types
  perception: [
    COLORS.chart.primary,
    COLORS.chart.secondary,
    COLORS.chart.tertiary
  ],
  
  motivation: [
    COLORS.chart.primary,
    COLORS.chart.secondary,
    COLORS.chart.tertiary,
    COLORS.chart.quaternary
  ],
  
  behavior: [
    COLORS.chart.primary,
    COLORS.chart.secondary,
    COLORS.chart.tertiary,
    COLORS.chart.quaternary,
    COLORS.chart.quinary
  ]
}; 
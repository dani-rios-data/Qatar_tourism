// Visualization configuration
export const VISUALIZATION_CONFIG = {
  charts: {
    bar: {
      default: {
        width: 800,
        height: 400,
        margin: { top: 20, right: 30, bottom: 30, left: 40 },
        showLabels: true,
        showGrid: true,
        animate: true,
        barPadding: 0.2,
        labelRotation: -45
      },
      horizontal: {
        width: 800,
        height: 400,
        margin: { top: 20, right: 30, bottom: 30, left: 120 },
        showLabels: true,
        showGrid: true,
        animate: true,
        barPadding: 0.2
      }
    },
    line: {
      default: {
        width: 800,
        height: 400,
        margin: { top: 20, right: 30, bottom: 30, left: 40 },
        showLabels: true,
        showGrid: true,
        animate: true,
        showLegend: true,
        lineWidth: 2,
        pointRadius: 4
      }
    },
    pie: {
      default: {
        width: 400,
        height: 400,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        showLabels: true,
        animate: true,
        showLegend: true,
        innerRadius: 0,
        labelRadius: 1.2
      },
      donut: {
        width: 400,
        height: 400,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        showLabels: true,
        animate: true,
        showLegend: true,
        innerRadius: 0.6,
        labelRadius: 1.2
      }
    },
    radar: {
      default: {
        width: 600,
        height: 600,
        margin: { top: 40, right: 40, bottom: 40, left: 40 },
        showLabels: true,
        showGrid: true,
        animate: true,
        showLegend: true,
        levels: 5,
        maxValue: 100
      }
    },
    scatter: {
      default: {
        width: 800,
        height: 600,
        margin: { top: 20, right: 30, bottom: 30, left: 40 },
        showLabels: true,
        showGrid: true,
        animate: true,
        showLegend: true,
        pointRadius: 4
      }
    }
  },
  colors: {
    primary: ['#8B0000', '#A52A2A', '#800000'],
    secondary: ['#F4D03F', '#F7DC6F', '#D4AC0D'],
    neutral: ['#666666', '#999999', '#CCCCCC'],
    success: ['#2E7D32', '#4CAF50', '#81C784'],
    warning: ['#F57C00', '#FF9800', '#FFB74D'],
    error: ['#C62828', '#EF5350', '#E57373']
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      small: '12px',
      medium: '14px',
      large: '16px',
      xlarge: '18px',
      xxlarge: '24px'
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  animation: {
    duration: 750,
    easing: 'easeCubicInOut'
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#FFFFFF',
    fontSize: '14px',
    padding: '8px 12px',
    borderRadius: '4px',
    pointerEvents: 'none'
  }
}; 
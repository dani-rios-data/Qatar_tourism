// Layout configuration
export const LAYOUT_CONFIG = {
  container: {
    maxWidth: '1440px',
    padding: '0 24px',
    margin: '0 auto'
  },
  grid: {
    columns: 12,
    gap: '24px',
    breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  sections: {
    padding: {
      top: '48px',
      bottom: '48px'
    },
    margin: {
      top: '0',
      bottom: '0'
    }
  },
  cards: {
    padding: '24px',
    borderRadius: '8px',
    elevation: {
      light: '0 2px 4px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
      high: '0 8px 16px rgba(0, 0, 0, 0.1)'
    }
  },
  header: {
    height: '64px',
    padding: '0 24px',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E0E0E0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  sidebar: {
    width: '280px',
    backgroundColor: '#FFFFFF',
    borderRight: '1px solid #E0E0E0',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    zIndex: 900,
    padding: '24px'
  },
  footer: {
    height: '64px',
    padding: '0 24px',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #E0E0E0',
    position: 'sticky',
    bottom: 0,
    zIndex: 1000
  },
  navigation: {
    itemHeight: '48px',
    padding: '0 16px',
    fontSize: '14px',
    fontWeight: 500,
    activeColor: '#8B0000',
    inactiveColor: '#666666',
    hoverColor: '#A52A2A'
  },
  typography: {
    h1: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: '24px'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.3,
      marginBottom: '16px'
    },
    h3: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: '12px'
    },
    body: {
      fontSize: '16px',
      lineHeight: 1.5,
      marginBottom: '16px'
    },
    small: {
      fontSize: '14px',
      lineHeight: 1.5,
      marginBottom: '8px'
    }
  }
}; 
import React from 'react';
import { COLORS } from '../data/constants/colors';

const Header = () => {
  return (
    <header style={{
      backgroundColor: COLORS.primary.main,
      padding: '20px',
      color: COLORS.text.contrast,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img 
          src="/assets/logo_Qatar.svg" 
          alt="Qatar Tourism Logo" 
          style={{
            width: '50px',
            height: '50px'
          }}
        />
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          margin: 0
        }}>
          Qatar Premium Travel Perception Dashboard
        </h1>
      </div>
      <div style={{
        fontSize: '0.9rem'
      }}>
        Bi-annual Premium Traveler Survey Analysis (2023-2024)
      </div>
    </header>
  );
};

export default Header; 
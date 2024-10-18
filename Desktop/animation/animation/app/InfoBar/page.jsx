import React from 'react';

const InfoBar = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      textAlign: 'center', 
      padding: '50px 0', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h2 style={{ 
        color: '#121858', 
        fontSize: '32px', 
        marginBottom: '10px' 
      }}>
        How does it work?
      </h2>
      <p style={{ 
        color: '#5D5D6C', 
        fontSize: '18px', 
        margin: 0 
      }}>
        Make a flexible data structure in 2 minutes.<br />
        Use our powerful features to customize your API.
      </p>
    </div>
  );
};

export default InfoBar;

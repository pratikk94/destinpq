import React from 'react';
import { Typography } from '@mui/material';

const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0', padding: '16px' }}>
      <Typography variant="h2" gutterBottom>About Us</Typography>
      <Typography variant="body1">Learn more about our company and our journey.</Typography>
    </section>
  );
};

export default AboutSection; 
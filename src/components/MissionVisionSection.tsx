import React from 'react';
import { Typography } from '@mui/material';

const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission-vision" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0', padding: '16px' }}>
      <Typography variant="h2" gutterBottom>Mission & Vision</Typography>
      <Typography variant="body1">Our mission is to deliver quality and excellence. Our vision is to innovate and lead.</Typography>
    </section>
  );
};

export default MissionVisionSection; 
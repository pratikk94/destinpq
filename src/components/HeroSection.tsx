import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
      <Typography variant="h2" gutterBottom style={{ color: '#ffffff', textAlign: 'center' }}>Fastest & Easiest Way to Generate Videos</Typography>
      <Typography variant="h6" gutterBottom style={{ color: '#cccccc', textAlign: 'center' }}>Generate unlimited videos with automatic captions, effects, backgrounds, and music.</Typography>
      <Box mt={2}>
        <Button variant="contained" sx={{ marginRight: 2 }}>Start 7 Days Trial →</Button>
        <Button variant="outlined">Learn More →</Button>
      </Box>
    </section>
  );
};

export default HeroSection; 
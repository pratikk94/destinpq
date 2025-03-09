import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d0d0d', padding: '16px' }}>
      <img src="https://source.unsplash.com/800x400/?technology,video" alt="AI Video" className="hero-image" />
      <Typography variant="h2" gutterBottom style={{ color: '#00bfff' }}>🎥 Create Stunning AI-Generated Videos in Seconds 🚀</Typography>
      <Typography variant="h6" gutterBottom>Transform your ideas into high-quality videos effortlessly with AI-powered video generation. No editing skills required!</Typography>
      <Box mt={2}>
        <Button variant="contained" sx={{ marginRight: 2 }}>✅ Generate a Video Now</Button>
        <Button variant="outlined">💡 See How It Works</Button>
      </Box>
    </section>
  );
};

export default HeroSection; 
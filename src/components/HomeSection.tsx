import React from 'react';
import { Typography, Box } from '@mui/material';

const HomeSection: React.FC = () => {
  return (
    <section id="home" style={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" gutterBottom>How It Works</Typography>
      <Typography variant="h6" gutterBottom>Turn Your Ideas into Videos Instantly</Typography>
      <Box>
        <Typography variant="body1">1️⃣ <strong>Describe Your Video</strong> – Enter a prompt, script, or idea.</Typography>
        <Typography variant="body1">2️⃣ <strong>Choose a Style</strong> – Select themes, voices, and animations.</Typography>
        <Typography variant="body1">3️⃣ <strong>Generate & Download</strong> – AI processes your request and delivers a professional-quality video.</Typography>
      </Box>
      <Typography variant="body1" mt={2}>👉 No complex editing. Just pure creativity.</Typography>
    </section>
  );
};

export default HomeSection; 
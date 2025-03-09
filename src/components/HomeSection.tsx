import React from 'react';
import { Typography, Box } from '@mui/material';
import './styles/home.css';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="how-it-works">
      <Typography variant="h4" gutterBottom>AI-Powered Your Video</Typography>
      <Box>
        <div className="step">
          <span className="step-icon">🎥</span>
          <Typography variant="body1"><strong>Describe Your Video</strong> – Enter a prompt, script, or idea.</Typography>
        </div>
        <div className="step">
          <span className="step-icon">🎨</span>
          <Typography variant="body1"><strong>Choose a Style</strong> – Select themes, voices, and animations.</Typography>
        </div>
        <div className="step">
          <span className="step-icon">💾</span>
          <Typography variant="body1"><strong>Generate & Download</strong> – AI processes your request and delivers a professional-quality video.</Typography>
        </div>
      </Box>
      <Typography variant="body1" mt={2} style={{ textAlign: 'center' }}>👉 No complex editing. Just pure creativity.</Typography>
    </section>
  );
};

export default HomeSection; 
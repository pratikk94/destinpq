import React from 'react';
import styles from './styles/home.module.css';
import { Typography, Button, Box } from '@mui/material';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className={styles['how-it-works']}>
      <Box>
        <Typography variant="h2" gutterBottom style={{ color: '#ffffff', textAlign: 'center' }}>
          Fastest & Easiest Way to Generate Videos
        </Typography>
        <Typography variant="h6" gutterBottom style={{ color: '#cccccc', textAlign: 'center' }}>
          Generate unlimited videos with automatic captions, effects, backgrounds, and music.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" sx={{ marginRight: 2 }}>Start 7 Days Trial →</Button>
          <Button variant="outlined">Learn More →</Button>
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom>AI-Powered Your Video</Typography>
          <Box>
            <div className={styles.step}>
              <span className={styles['step-icon']}>🎥</span>
              <Typography variant="body1">
                <strong>Describe Your Video</strong> – Enter a prompt, script, or idea.
              </Typography>
            </div>
            <div className={styles.step}>
              <span className={styles['step-icon']}>🎨</span>
              <Typography variant="body1">
                <strong>Choose a Style</strong> – Select themes, voices, and animations.
              </Typography>
            </div>
            <div className={styles.step}>
              <span className={styles['step-icon']}>💾</span>
              <Typography variant="body1">
                <strong>Generate & Download</strong> – AI processes your request and delivers a professional-quality video.
              </Typography>
            </div>
          </Box>
          <Typography variant="body1" mt={2} style={{ textAlign: 'center' }}>
            👉 No complex editing. Just pure creativity.
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default HomeSection; 
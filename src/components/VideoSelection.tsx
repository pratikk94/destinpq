import React from 'react';
import { Button, Box } from '@mui/material';
import styles from './styles/video.module.css';

const VideoSection: React.FC = () => {
  const handleScrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.gradientOverlay}></div>
      <Button className={styles.overlayButton} onClick={handleScrollToHome}>
        Go to Home
      </Button>
    </Box>
  );
};

export default VideoSection;

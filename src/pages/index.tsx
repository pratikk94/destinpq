import React from 'react';
import NavBar from '../components/NavBar';
import { Container } from '@mui/material';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import MissionVisionSection from '../components/MissionVisionSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '101vw' ,marginLeft: '-1%'}}>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <HeroSection />
        <HomeSection />
        <AboutSection />
        <MissionVisionSection />
        <ContactSection />
      </Container>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
      >
        <source src="/3129576-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;

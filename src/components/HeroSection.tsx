import React from 'react';

import AnimatedLogo from './AnimatedLogo';

const HeroSection: React.FC = () => {
  return (
    <div className="heroContainer">
      <div className="heroGradientOverlay"></div>
      <div className="heroContent">
        <section id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
           <div style={{ marginTop: '-20%' }}>
           <AnimatedLogo />
           </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection; 
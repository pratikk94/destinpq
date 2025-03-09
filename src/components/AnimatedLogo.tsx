import React from 'react';
import Image from 'next/image';
import styles from './styles/animatedLogo.module.css';

const AnimatedLogo: React.FC = () => {
  return (
    <div className={styles.animatedLogoContainer}>
      <Image 
        src="/logo.svg" 
        alt="Logo" 
        width={10}
        height={10}
        className={styles.animatedLogo} 
      />
    </div>
  );
};

export default AnimatedLogo;

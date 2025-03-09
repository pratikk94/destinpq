import React from 'react';
import { Typography } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c0c0c0', padding: '16px' }}>
      <Typography variant="h2" gutterBottom>Contact Us</Typography>
      <Typography variant="body1">Feel free to reach out to us with any questions or feedback.</Typography>
    </section>
  );
};

export default ContactSection; 
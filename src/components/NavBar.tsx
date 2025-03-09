import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif' }}>
          My Website
        </Typography>
        <Button color="inherit" onClick={() => handleScroll('home')} sx={{ fontFamily: 'Roboto, sans-serif' }}>Home</Button>
        <Button color="inherit" onClick={() => handleScroll('about')} sx={{ fontFamily: 'Roboto, sans-serif' }}>About Us</Button>
        <Button color="inherit" onClick={() => handleScroll('mission-vision')} sx={{ fontFamily: 'Roboto, sans-serif' }}>Mission & Vision</Button>
        <Button color="inherit" onClick={() => handleScroll('contact')} sx={{ fontFamily: 'Roboto, sans-serif' }}>Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

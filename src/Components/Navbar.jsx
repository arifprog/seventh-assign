import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const StyledDrawer = styled(Drawer)(({ }) => ({
    '& .MuiDrawer-paper': {
      width: '320px', 
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      boxSizing: 'border-box', 
      padding: 0,
      backgroundClip: 'content-box', 
    },
  }));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const links = [
    { to: '/', text: 'About Us' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/customers', text: 'Customers' },
    { to: '/solutions', text: 'Solutions' },
  ]; // Array of objects for links

  const btns = [
    { to: '/demo', text: 'Book a Demo' }, 
    { to: '/contact', text: 'Contact Us' }, 
  ];
  return (
    <>
      <AppBar position="static">
        <Toolbar className='flex justify-between bg-[#002228] border-b-1 border-[#183A40] '>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <div className='w-[91px] h-[20px] text-[ #0FF1F6] md:ml-14'>
            <img src="/image/Logo.png" alt="" /> 
          </div>
          <div>
            {!isMobile && links.map((link) => ( 
              <Button  component={Link}
              to={link.to}
                 sx={{fontFamily:'primary',textTransform:'capitalize',fontSize:'16px',
                '&:hover': {
                  backgroundColor: 'purple',
                  color: 'aqua',
                }
              }} key={link.text} color="inherit">
                {link.text}
              </Button>
            ))}
          </div>

          <div className="flex gap-4 md:mr-14">
            {!isMobile && btns.map((btn,index) => ( 
              <Button  component={Link} 
              to={btn.to}
                sx={{
                  fontFamily: 'primary',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  width: '122px',
                  height: '36px',
                  backgroundColor: index % 2 === 0 ? '#0FF1F6' : 'transparent',
                  color: index % 2 === 0 ? 'black' : 'white',
                  border: index % 2 !== 0 ? '1px solid white' : 'none',
                  borderRadius: '100px',
                  '&:hover': {
                    backgroundColor: index % 2 === 0 ? 'green' : 'pink',
                    color: index % 2 === 0 ? 'white' : 'black',
                  }
                }} 
                key={btn.text}
              >
                {btn.text}
              </Button>
            ))}
          </div>

        </Toolbar>
      </AppBar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {links.concat(btns).map((item) => (
            <Button  component={Link} 
            to={item.to} key={item.text} style={{ display: 'block', padding: '14px', color: 'aqua' }}> 
              {item.text}
            </Button>
          ))}
        </div>
      </StyledDrawer>
    </>
  );
};

export default Navbar;
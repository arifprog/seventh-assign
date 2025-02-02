import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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

  const links = ['Home', 'About', 'Services', 'Contact'];
  const btns = ['Book a Demo', 'Contact Us'];
  return (
      <>
          <AppBar position="static">
              <Toolbar className='flex justify-between bg-gray-800'>
                  {isMobile && (
                      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                          <MenuIcon />
                      </IconButton>
                  )}
                  <div className='w-[91px] h-[20px] text-[ #0FF1F6]'>
                    <img src="/image/Logo.png" alt="" />
                  </div>
                 <div>
                  {!isMobile && links.map((link) => ( 
                      <Button key={link} color="inherit">
                          {link}
                      </Button>
                  ))}
                  </div>
                  
                  <div className="flex space-x-4">
                  {!isMobile && btns.map((btn) => ( 
                      <Button key={btn} color="inherit">
                          {btn}
                      </Button>
                  ))}
                  </div>

                  
              </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                  {links.concat(btns).map((link) => (
                      <Button key={link} style={{ display: 'block', padding: '8px' }}>
                          {link}
                      </Button>
                  ))}
              </div>
          </Drawer>
      </>
  );
};

export default Navbar;
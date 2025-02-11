import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
     <Box> 
    
      <AppBar position="static"sx={{  width:'full',height:isMobile?'250px':'109px',bgcolor:'#07292F',display:isMobile?'grid':'flex',px:isMobile?4:10,py:2}}> 
      
          <Typography sx={{width:'72px',height:'16px',mx:isMobile?'auto':0,}}>
                    <img className='mt-6 'src="/image/Logo.png" alt="" />
          </Typography>
          <Typography variant="body1" color= '#96ACAF' sx={{fontSize:isMobile?'12px':'16px', textAlign:isMobile?'left':'right',}}>
          Copyright © 2023 Wizia. All rights reserved.
          </Typography>
      
      </AppBar>
    </Box>

    </>
  )
}

export default Footer

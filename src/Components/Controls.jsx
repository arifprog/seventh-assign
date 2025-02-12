import React from 'react';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function Controls() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const data = [
    'Quick to ramp',
    'Quick to scale up',
    'Easy to optimize',
    'Works with all your existing tools',
  ];

  return (
    <>
      <section className='w-full h-[564px] md:h-[564px] bg-[#002228] relative'>

        <img className='w-[90%] h-[564px] bg-no-repeat bg-cover bg-center mx-auto absolute top-0 left-0 right-0 z-0' src="/image/Frame.png" alt="frame" />

        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10'>

          <Container maxWidth="xl" sx={{ py: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column',px:isMobile ? '0px': 60}}>
              <Typography variant="h5" gutterBottom sx={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontSize: '40px',textAlign: 'left' }}>
                Train your aiDR on your...
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom sx={{ color: '#0FF1F6', fontFamily: 'Montserrat', fontSize: isMobile?'38px':'40px',textAlign: 'left',fontStyle:'italic' }}>
                preferred email st/
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFFa2', fontFamily: 'Work Sans', fontSize: isMobile?'22px':'24px',textAlign: 'left',marginRight:'50px'}}>
                You're in control. Train your aiDR on elements of your Marketing strategy.
              </Typography>
            </Box>
            <Grid container rowspacing={1} justifyContent="center" sx={{ py: 1, marginLeft: isMobile ? '0px' : '300px',marginRight: isMobile ? '0px' : '500px',display:'grid',gap:1}}>
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                  <Box sx={{ display: 'flex',padding:'1px 1px'}}>
                    <CheckCircleOutlinedIcon style={{ color: '#14BCB2', width: '24px', height: '34px' }} />
                    <Typography variant="h6" gutterBottom sx={{ ml: 1,color: '#14BCB2', fontFamily: 'Montserrat', fontSize: '20px',paddingLeft:'10px'}}>
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>



      </section>

    </>
  )
}

export default Controls;
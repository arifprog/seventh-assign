import React from 'react';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';




function Improvement() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const data = [
        {
            result: '32%',
            title: 'Improvement in Open Rates',
            
        },
        {
            result: '75%',
            title: 'Improvement in Ramp Time',
        },
        {
            result: '35%',
            title: 'Improvement in Meetings Booked',
        }
    
    ];
  return (
        <>
            <section className='w-full h-[564px] md:h-[564px] bg-[#002228] relative'>

                <img className='w-[90%] h-[564px] bg-no-repeat bg-cover bg-center mx-auto absolute top-0 left-0 right-0 z-0' src="/image/Frame18.png" alt="frame" />

                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10'>

                    <Container maxWidth="xl" sx={{ py: 8 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', px: isMobile ? '0px' : 8,mt:12 }}>
                          <Typography variant="h5" gutterBottom sx={{ color: '#FFFFFF', fontFamily: 'Montserrat', fontSize: isMobile ?'24px':'32px', textAlign: 'left',width:isMobile ? 'full':'591px',height:'78px',px:isMobile ?2:8 }}>
                          Allocate effort where your reps make an inpact.
                          </Typography>
                          <Typography variant="h5" color="primary" gutterBottom sx={{ color: '#0FF1F6', fontFamily: 'Montserrat', fontSize: isMobile ? '24px' : '32px', textAlign: 'left',fontStyle:'italic',px:isMobile ?2:8 }}>
                          Let us handle the rest.
                          </Typography>
                          <Typography variant="body1" gutterBottom sx={{ color: '#FFFFFFa2', fontFamily: 'Work Sans', fontSize: isMobile ? '18px' : '20px', textAlign: 'left',px:isMobile ?2:8,width:isMobile ? 'full':'582px',height:'52px' }}>
                          Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                          </Typography>
                      </Box>



                        <Grid container spacing={3} justifyContent="left" sx={{ py:isMobile ?7:4, marginLeft: isMobile ? '0px' : '0px',px:isMobile ?2:16 }}>
                            {data.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: 'full', height:isMobile ?'70px': '114px', }}>
                                        <Typography variant="body2" align="left" sx={{ color: '#0FF1F6', fontFamily: 'Montserrat', fontSize:isMobile ? '28px' : '40px'}}>
                                            {item.result}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom sx={{ mt: 0, textAlign: 'left', color: '#E9EEF1', fontFamily: 'Montserrat', fontSize:isMobile ?'18px': '20px',width:isMobile ? 'full':'162px',height:'52px' }}>
                                            {item.title}
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

export default Improvement;
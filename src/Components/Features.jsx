import React from 'react';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      icon: '/image/feature1.png',
      title: "You're in Control",
      description: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.',
    },
    {
      icon: '/image/feature2.png',
      title: 'Infinitely Scalable',
      description: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.',
    },
    {
      icon: '/image/feature3.png',
      title: 'Incredibly Flexible',
      description: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
    },
  ];

  return (
    <>
      <section className='w-full h-[70rem] md:h-[494px] bg-[#002228]'>
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Grid container spacing={10} justifyContent="center" sx={{ py: 8,marginLeft: isMobile ? '0px' : '100px', }}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', width: '384px', height: '254px', }}>
                  
                  <img src={item.icon} alt={item.title} style={{ width: '64px', height: '64px', }} />
                  
                  <Typography variant="h6" gutterBottom sx={{ mt: 2, textAlign: 'left', color: '#FFFFFF',fontFamily: 'Montserrat',fontSize: '28px'  }}>
                    {item.title}
                  </Typography>
                  
                  <Typography variant="body2" align="left" sx={{ color: '#FFFFFFe4',fontFamily: 'Work Sans',fontSize: '20px', paddingRight:'150px'}}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Features;
import React from 'react';
import { Container, Typography,Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

const Customers = () => {
  const customerLogos = [
    {
      imgSrc: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 
      alt: 'Google',
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png', 
      alt: 'Amazon',
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Bata.svg', 
      alt: 'Bata',
    },
    // Add more logos as needed
  ];

  return (
    <Container maxWidth="md" sx={{ my: 27 }}>
      <Typography variant="h4" gutterBottom>
        Our Customers
      </Typography>
      <Typography variant="body1" mb={4}>
        Vizia is trusted by leading companies around the world.
      </Typography>
      <Grid container spacing={6}>
        {customerLogos.map((logo, index) => (
          <Grid item xs={6} md={4} key={logo.alt}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <CardMedia
                  component="img"
                  style={{ maxWidth: '100px' }}
                  image={logo.imgSrc}
                  alt={logo.alt}
                />
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Customers;
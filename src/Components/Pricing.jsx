import React from 'react';
import { Container, Typography,Card, CardContent, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: '$29',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
    },
    {
      title: 'Professional',
      price: '$49',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
      ],
    },
  ];

  return (
    <section className='bg-[#03375f] '>
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Typography variant="h4" gutterBottom color='white'>
          Pricing
        </Typography>
        <Grid container spacing={3}>
          {pricingPlans.map((plan) => (
            <Grid item xs={12} sm={4} key={plan.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (plan.title === "Starter" ? 0 : 0.5 * (plan.title === "Professional" ? 1 : 2)) }} 
              > 
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {plan.title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      ${plan.price} / month
                    </Typography>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <Button variant="contained" color="primary">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Pricing;
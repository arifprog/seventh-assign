import React from 'react';
import { Container, Typography,Box, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';


const Solutions = () => {
  const solutions = [
    {
      title: 'AI-Powered Marketing',
      description: 'Revolutionize your marketing efforts with our AI-driven solutions, including personalized campaigns, predictive analytics, and automated content creation.',
       
    },
    {
      title: 'Data-Driven Insights',
      description: 'Uncover valuable insights from your data with our advanced analytics and reporting tools. Make informed decisions and optimize your business performance.',
       
    },
    {
      title: 'Customer Experience Optimization',
      description: 'Enhance customer satisfaction and loyalty with our solutions for personalized customer experiences, including chatbots and personalized recommendations.',
      
    },
  ];
  
  return (
    <section className='bg-gray-400'>
    <Container maxWidth="md" sx={{ my: 7 }}>
      <Typography variant="h4" gutterBottom>
        Our Solutions
      </Typography>
      <Grid container spacing={3}>
        {solutions.map((solution) => (
          <Grid item xs={12} sm={6} md={4} key={solution.title}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.8 * (solutions.indexOf(solution)) }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 }, }}
            > 
            <Card >
              <CardContent>
                {solution.icon && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <img src={solution.icon} alt={solution.title} style={{ maxWidth: '50px' }} /> 
                  </Box>
                )}
                <Typography variant="h5" component="h2">
                  {solution.title}
                </Typography>
                <Typography variant="body1">
                  {solution.description}
                </Typography>
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

export default Solutions;
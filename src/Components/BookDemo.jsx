import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const BookDemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Company:', company);
    // console.log('Message:', message);

    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <section className='bg-[#bdcbc4cf]'>
      <Container maxWidth="md" sx={{ my: 2 }}>
        <Typography variant="h4" gutterBottom>
          Book a Demo
        </Typography>
        <Typography variant="body1" mb={4}>
          Schedule a free demo to see how our solutions can help your business.
        </Typography>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5}} 
        >
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField 
              fullWidth 
              label="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              fullWidth 
              label="Email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              fullWidth 
              label="Company" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)} 
              variant="outlined" 
              margin="normal" 
            />
            <TextField 
              fullWidth 
              label="Message" 
              multiline 
              rows={4} 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              variant="outlined" 
              margin="normal" 
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Book a Demo
            </Button>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default BookDemo;
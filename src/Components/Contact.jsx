import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='bg-[#a6b4baab] '>
      <Container maxWidth="md" sx={{ my: 10}} >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" mb={4}>
          We'd love to hear from you! Please fill out the form below to get in touch.
        </Typography>
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9, delay: 0.9}}
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
              label="Message" 
              multiline 
              rows={4} 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              variant="outlined" 
              margin="normal" 
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
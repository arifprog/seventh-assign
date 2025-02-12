import React, { useState, useEffect, useRef } from 'react';
import {Typography,Box,MobileStepper,Button,Paper,Container,useMediaQuery,useTheme,} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; 
import { styled } from '@mui/material/styles';



const QuoteIcon = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat', 
  fontSize: '64px', 
  color: '#0FF1F6',
  position: 'relative',
  top: '-20px', 
  left: '10px'
}));

const testimonials = [
  {
    quote: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit...',
    name: 'John Doe',
    title: 'Chief Strategy Officer @ Company',
  },
  
  {
    quote: "Working with this team was an absolute pleasure.",
    name: 'Jane Smith',
    title: 'CEO @ Example Inc.',
  },
  {
    quote: "This company went above and beyond to ensure our project was a success.",
    name: "David Lee",
    title: "Founder, StartUp Co.",
  },
];

const Testimonial = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const containerRef = useRef(null);

  useEffect(() => {
    
    if (containerRef.current) {
      const contentHeight = containerRef.current.offsetHeight;
      containerRef.current.style.maxHeight = `${contentHeight}px`; 
    }
  }, [activeStep]); 


  return (
    <Container maxWidth="xl" sx={{ py:isMobile?2:8,backgroundColor:'#002228',height:'537px'}}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#002228', color: 'white',width: isMobile? 'full' :'920px', height:'400px',mx:isMobile? 'full' : 33,position: 'relative' }}> 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <QuoteIcon sx={{backgroundColor:'#183A40',width:'72px',height:'74px',borderRadius:'100%',paddingLeft:'20px'}}>“ </QuoteIcon>

          <Box ref={containerRef} sx={{ textAlign: 'center', px: isMobile ? 1 : 4, mb: 4 }}> 
            <Typography variant="h5" sx={{ fontFamily: 'Work Sans', mb: 2, color: 'white' }}> 
              {testimonials[activeStep].quote}
            </Typography>
            <Typography variant="h6" sx={{ fontFamily: 'Work Sans', color: '#0FF1F6' }}> 
              {testimonials[activeStep].name}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Work Sans', color: '#96ACAF' }}>
              {testimonials[activeStep].title}
            </Typography>
          </Box>

          { ! isMobile &&(
            <>
          <Button 
            size="small" 
            onClick={handleBack} 
            sx={{ 
              position: 'absolute', 
              left: 1, 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#0FF1F6',
              backgroundColor: '#96ACAF33',
              width: '38px',
              height: '38px',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)',
              border: '2px solid #0FF1F6'},
            }}
          >
            <ArrowBack/>
          </Button>
          <Button 
            size="small" 
            onClick={handleNext} 
            sx={{ 
              position: 'absolute', 
              right: 1, 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#0FF1F6',
              backgroundColor: '#96ACAF33',
              width: '38px',
              height: '38px',
              
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)',
              border: '2px solid #0FF1F6'},

            }}
          >
            <ArrowForward />
          </Button>
          </>
          )}
          
          {isMobile && (
          <MobileStepper/>
        )}


        <Box sx={{ display: 'flex', justifyContent: 'center', mt: isMobile ? 10 : 10 }}>
          {[...Array(maxSteps)].map((_, index) => (
            <Box
              key={index}
              onClick={() => handleStepChange(index)}
              sx={{
                width: activeStep === index ? 12 : 12,
                height: activeStep === index ? 12 : 12,
                borderRadius: '50%',
                backgroundColor: activeStep === index ? '#0FF1F6' : 'grey',
                margin: '0 12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: activeStep === index ? '#0FF1F6' : '#96ACAF',
                  transform: activeStep !== index ? 'scale(1.1)' : 'scale(1)',
                },
              }}
            />
          ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Testimonial;
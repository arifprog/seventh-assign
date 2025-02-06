import React from 'react'
import Button from '@mui/material/Button';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import Stack from '@mui/material/Stack';
function BetaButton({ className }) {
    return (
      <Stack direction="row" spacing={2}>
        <Button 
          sx={{ 
            width: '216px', 
            height: '52px',
            borderRadius: '100px',
            backgroundColor: '#0FF1F6',
            color: '#002228',
            fontFamily: 'primary',
            fontSize: '16px',
            textTransform: 'none',
            ...className 
          }} 
          variant="contained" 
          endIcon={<LaunchSharpIcon />}
        >
          Sign Up for the Beta
        </Button>
      </Stack>
    );
  }

export default BetaButton
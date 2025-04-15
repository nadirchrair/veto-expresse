import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const Part8 = () => {
  return (
    <Box sx={{ py: 6, ml:'40px', backgroundColor: '#fff', textAlign: 'center',display:'flex' }}>
        <Box sx={{}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Download Our
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Mobile App
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="center" mt={3}>
        <Grid item>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: 60 }}
            />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{ height: 60 }}
            />
          </a>
        </Grid>
      </Grid>
      </Box>
      <Box mt={6} display="flex" justifyContent="center">
        <img
          src="https://i.ibb.co/7g3Pz6S/phone-mockup.png" // You can replace this with your actual phone image URL
          alt="Mobile App Preview"
          style={{ maxWidth: '300px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
        />
      </Box>
    </Box>
  );
};

export default Part8;

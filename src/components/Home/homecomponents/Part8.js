import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import mobile from "../../../assets/mobile.png"
const Part8 = () => {
  return (
    <Box sx={{ py: 6, ml:'400px', backgroundColor: '#fff', textAlign: 'center',display:'flex' , mt:'54px'}}>
        <Box sx={{mr:14, mt:14}}>
      
      <Typography variant="h5"  sx={{fontFamily:'inter',fontWeight:'400',fontSize:'65.2px',color:'#484747'}}>
        Download Our
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="#4C4C4B" sx={{fontFamily:'inter',fontWeight:'400',fontSize:'65.2px',color:'#484747'}}>
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
      <Box mt={6} ml={14} display="flex" justifyContent="center">
        <img
          src={mobile} // You can replace this with your actual phone image URL
          alt="Mobile App Preview"
          style={{ maxWidth: '650px' }}
        />
      </Box>
    </Box>
  );
};

export default Part8;
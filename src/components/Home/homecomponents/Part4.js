import React from 'react';
import { Box, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PetsIcon from '@mui/icons-material/Pets';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const cardData = [
  { title: 'Veterinary ServicesVeterinary', color: 'white', icon: <ArrowOutwardIcon /> },
  { title: 'Virtual Consultations', color: '#246BFD', icon: <ArrowOutwardIcon /> },
  { title: 'Pet Profile', color: 'white', icon: <ArrowOutwardIcon /> },
  { title: 'Tips & Articles', color: '#0346AE', icon: <PetsIcon /> },
  { title: 'Pet Medicine & Accessories', color: '#333', icon: <LocalPharmacyIcon /> },
  { title: 'Pet Buy & Sell', color: '#333', icon: <ShoppingCartIcon /> },
];

const Part4 = () => {
  return (
    <Box sx={{
      minHeight: '695px',
      background: 'linear-gradient(to bottom, #205781, #003092EE, #D9D9D900)',
      p: 4,
      borderRadius:'53px',
      width:'1750.56px',
      ml:5,


    }}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              backgroundColor: item.color,
              color: item.color === '#333' ? 'white' : 'black',
              borderRadius: '45px',
              height: '412px',
              width:'512px',
              position: 'relative',
              boxShadow: 3,
            }}>
              <CardContent>
                <Typography variant="h6" fontWeight="400" fontFamily="inter" fontSize="48px" lineHeight="50px" letterSpacing="0.28px" pt="70px" >
                  {item.title}
                </Typography>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    color: item.color === '#333' ? 'white' : 'black'
                  }}
                >
                  {item.icon}
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Part4;

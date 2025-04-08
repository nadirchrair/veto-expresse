import React from 'react';
import { Box, Typography, Tabs, Tab, IconButton, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Part2 = () => {
  const professionals = [
    { name: 'mohammed', status: 'Available', clinic: 'ABC Pet Clinic', img: '/images/mohammed.jpg' },
    { name: 'noor', status: 'Available', clinic: 'ABC Pet Clinic', img: '/images/noor.jpg' },
    { name: 'islam', status: 'Available', clinic: 'ABC Pet Clinic', img: '/images/islam.jpg' },
    { name: 'fatima', status: 'Available', clinic: 'ABC Pet Clinic', img: '/images/fatima.jpg' },
  ];

  const categories = ['TOP PET DOCTORS', 'TOP VETERINAIRES', 'TOP PET-SITTER', 'TOP PET-SITTER'];

  return (
    <Box sx={{ bgcolor: 'linear-gradient(to right, #003973, #e5e5be)', p: 4, borderRadius: 5 }}>
      {/* Tabs */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={category}
            sx={{
              color: index === 0 ? 'white' : 'white',
              bgcolor: index === 0 ? '#0d47a1' : 'transparent',
              borderRadius: 10,
              px: 3,
              py: 1,
              mr: 2,
              border: '1px solid white',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#1565c0',
              },
            }}
          />
        ))}
        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton sx={{ color: 'white' }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>

      {/* Professionals Grid */}
      <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2 }}>
        {professionals.map((pro, idx) => (
          <Card
            key={idx}
            sx={{
              minWidth: 220,
              borderRadius: 3,
              boxShadow: 3,
              bgcolor: '#f5f5f5',
              flexShrink: 0
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={pro.img}
              alt={pro.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" textTransform="capitalize">
                {pro.name}
              </Typography>
              <Chip
                label={pro.status}
                color="success"
                size="small"
                sx={{ mt: 1, mb: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                {pro.clinic}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Part2;

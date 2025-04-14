import React from 'react';
import { Box, Typography, Avatar, Grid, Container, Paper, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Super Duper',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.',
  },
  {
    name: 'Jane Doe',
    role: 'Super Duper',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.',
  },
  {
    name: 'John Doe',
    role: 'Super Duper',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.',
  },
];

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: '24hr Delivery',
    subtitle: 'In 24 cities',
  },
  {
    icon: <PetsIcon fontSize="large" />,
    title: '1,50,000+',
    subtitle: 'Happy pet parents',
  },
  {
    icon: <MedicalServicesIcon fontSize="large" />,
    title: 'Complimentary vet Consult',
    subtitle: 'For every new member',
  },
  {
    icon: <LocalPharmacyIcon fontSize="large" />,
    title: 'Pet Pharmacy',
    subtitle: 'Exclusive',
  },
];

const Part6 = () => {
  return (
    <>
      {/* Testimonials Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight="bold">
          What They <span style={{ color: '#333' }}>Say</span>
        </Typography>
        <Grid container spacing={4} mt={2}>
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center' }}>
                <FormatQuoteIcon color="primary" fontSize="large" />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {item.text}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mt={3}>
                  <Avatar src={item.img} alt={item.name} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'linear-gradient(to right, #283eeb, #5871f9)', py: 4, color: 'white' }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box textAlign="center">
                {feature.icon}
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  {feature.title}
                </Typography>
                <Typography variant="caption">{feature.subtitle}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Part6;

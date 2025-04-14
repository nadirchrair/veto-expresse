import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  Avatar,
  useTheme
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

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

const Part7 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #003366, #6666cc, #004d66)',
        py: 4,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box textAlign="center">
                <Avatar
                  sx={{
                    bgcolor: 'white',
                    color: theme.palette.primary.main,
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 1,
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="subtitle1" fontWeight="bold" color="white">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {feature.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Part7;

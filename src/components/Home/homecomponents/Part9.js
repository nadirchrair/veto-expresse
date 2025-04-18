import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Container, Link, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, YouTube, Twitter } from '@mui/icons-material';

const services1 = ['Pet Buy & Sell', 'Pet Profile', 'Virtual Consultations'];
const services2 = ['Pet Medicine & Accessories', 'Veterinary', 'Services/Veterinary'];
const company = ['About Us', 'Contact Us', 'Career', 'Press Release'];
const socialIcons = [
  { icon: <Facebook />, url: '#' },
  { icon: <Instagram />, url: '#' },
  { icon: <LinkedIn />, url: '#' },
  { icon: <YouTube />, url: '#' },
  { icon: <Twitter />, url: '#' }
];

export default function Part9() {
  const renderTitles = () => (
    [1, 2, 3].map((i) => (
      <Box key={i} mb={2}>
        <Typography variant="h6" fontWeight="bold">{i}. Here Goes the title</Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
        </Typography>
      </Box>
    ))
  );

  return (
    <Box>
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          How to help your <span style={{ color: '#000' }}>Pet?</span>
        </Typography>

        <Grid container spacing={4} mt={4} alignItems="center">
          <Grid item xs={12} md={4}>{renderTitles()}</Grid>
          <Grid item xs={12} md={4}>
            <Box component="img" src="/path-to-german-shepherd.png" alt="dog" sx={{ maxHeight: 300 }} />
          </Grid>
          <Grid item xs={12} md={4}>{renderTitles()}</Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#1f1f1f', color: '#fff', py: 5, mt: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" fontWeight="bold">Veto Express</Typography>
              <Typography variant="body2" color="gray">
                Scale efficiently with every workload efficiently with every work
              </Typography>
              <Box mt={2} display="flex" gap={1}>
                <img src="/path-to-puppies.png" alt="puppies" style={{ height: 60 }} />
              </Box>
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="h6" fontWeight="bold">Service</Typography>
              {services1.map((s, idx) => (
                <Typography key={idx} variant="body2" color="gray">{s}</Typography>
              ))}
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="h6" fontWeight="bold">Service</Typography>
              {services2.map((s, idx) => (
                <Typography key={idx} variant="body2" color="gray">{s}</Typography>
              ))}
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography variant="h6" fontWeight="bold">Company</Typography>
              {company.map((c, idx) => (
                <Typography key={idx} variant="body2" color="gray">{c}</Typography>
              ))}
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="h6" fontWeight="bold">Social Media</Typography>
              <Stack direction="row" spacing={2} mt={1}>
                {socialIcons.map((s, idx) => (
                  <Link key={idx} href={s.url} color="inherit">{s.icon}</Link>
                ))}
              </Stack>
              <Box mt={2}>
                <img src="/path-to-cats.png" alt="cats" style={{ height: 60 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
} 

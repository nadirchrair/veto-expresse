import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
  Container,
  Stack,
  Avatar,
} from '@mui/material';
import { ShoppingCart, Search } from '@mui/icons-material';

export default function Part1() {
  return (
    <Box sx={{ flexGrow: 1,  maxHeight: '1042px', height:'1042px' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar src="/logo.png" alt="Veto Express" />
            <Typography variant="h6" fontWeight={700}>
              VETO EXPRESS
            </Typography>
          </Stack>

          {/* Navigation Links */}
          <Stack direction="row" spacing={4} alignItems="center">
            {['Home', 'About', 'Services', 'Profile'].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{ cursor: 'pointer', '&:hover': { fontWeight: 'bold' } }}
              >
                {item}
              </Typography>
            ))}
            <IconButton>
              <Search />
            </IconButton>
            <IconButton sx={{ bgcolor: '#b6f397', '&:hover': { bgcolor: '#a0e684' } }}>
              <ShoppingCart />
            </IconButton>
            <Button variant="outlined" sx={{ borderRadius: 5 }}>
              SignUp / Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#205781',
          color: 'white',
          mt:8,
          py: 10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          px: 3,
          height:'591px',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
          >
            {/* Text Content */}
            <Box flex={1}>
              <Typography variant="h3" fontWeight={300}>
                Comprehensive{' '}
                <Typography variant="h3" component="span" fontWeight="bold">
                  Pet Solutions
                </Typography>{' '}
                for Pet Parents.
              </Typography>
              <Typography variant="h6" mt={2}>
                One-stop hub for complete solutions
              </Typography>
              <Typography variant="body2" mt={4} sx={{ display: 'flex', alignItems: 'center' }}>
                🛟 Emergency Support
              </Typography>
            </Box>

            {/* Image */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Avatar
                alt="Pet Cat"
                src="/cat-image.jpg"
                sx={{ width: 300, height: 300, borderRadius: '50%' }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

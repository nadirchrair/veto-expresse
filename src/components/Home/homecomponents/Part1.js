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
import image from '../../../assets/homecat.png';
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
          <Stack direction="row" spacing={4} alignItems="center" sx={{mr:6}}>
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
            <Box flex={1} >
              <Box width="698px">
                <Box sx={{ borderLeft: '10px solid #EDEDED', pl: 3 }}>
              <Typography variant="h3" fontWeight={200} fontFamily="inter" fontSize="84px" lineHeight="96px" >
                Comprehensive{' '}
                </Typography>
                <Typography variant="h3" component="span" fontWeight={600} fontFamily="inter" fontSize="84px" lineHeight="96px" >
                  Pet Solutions
                </Typography>{' '}
                <Typography variant="h3" fontWeight={200} fontFamily="inter" fontSize="84px" lineHeight="96px" >
                for Pet Parents.

                </Typography>
              
              <Typography variant="h6" mt={2} fontWeight={300} fontFamily="inter" fontSize="32px" lineHeight="64px" color="#fff">
                One-stop hub for complete solutions
              </Typography>
              </Box>
              <Typography variant="body2" mt={8} sx={{ display: 'flex', alignItems: 'center' }}  fontWeight={500} fontFamily="inter" fontSize="21px" lineHeight="100%" color="#fff">
                🛟 Emergency Support
              </Typography>
              </Box>
            </Box>

            {/* Image */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                alt="Pet Cat"
                src={image}
                sx={{ width: '700px', height: '800px'}}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

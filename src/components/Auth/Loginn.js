// src/pages/Loginn.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice';

import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  CircularProgress
} from '@mui/material';
import { Facebook, Google, Twitter } from '@mui/icons-material';
import dogImages from '../../assets/dogpictures.jpeg';

const Loginn = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    contact: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', marginTop: '80px' }}>
      {/* Left side - Form */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'left', p: 6, marginLeft: '33px' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#003092EE', fontWeight: '600', fontFamily: 'inter', fontSize: '93px', paddingBottom: '35px' }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Typography sx={{ fontFamily: 'inter', fontSize: '16px', color: '#333333' }}>
            Mobile Number / Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            sx={{
              width: '614px',
              height: '62px',
              borderRadius: '10px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                border: '1px solid #ccc'
              }
            }}
          />

          <Typography sx={{ fontFamily: 'inter', fontSize: '16px', color: '#333333', pt: '10px' }}>
            Password
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{
              width: '614px',
              height: '62px',
              borderRadius: '10px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                border: '1px solid #ccc'
              }
            }}
          />

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2, width: '614px' }}>
            <FormControlLabel control={<Checkbox />} label="Remember password" />
            <Typography variant="body2" sx={{ cursor: 'pointer', color: '#5A6A5A' }}>
              Forgot password?
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            size="medium"
            disabled={loading}
            sx={{
              width: '280px',
              height: '72px',
              borderRadius: '40px',
              mt: '40px',
              py: 1.5,
              fontSize: '24px',
              backgroundColor: '#003092EE',
              textTransform: 'none'
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>
        </form>

        <Typography sx={{ my: 3 }}>OR CONTINUE WITH</Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton><Google /></IconButton>
          <IconButton><Facebook /></IconButton>
          <IconButton><Twitter /></IconButton>
        </Box>
      </Box>

      {/* Right side - Info */}
      <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', textAlign: 'left', marginTop: '150px', p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'inter', fontWeight: 400, fontSize: '32px', color: '#333333' }}>
          Don’t have an account?
        </Typography>

        <Typography sx={{
          marginTop: '12px',
          width: '523px',
          fontFamily: 'inter',
          fontSize: '25px',
          lineHeight: '130%',
          letterSpacing: '10%',
          color: '#5E5D5C'
        }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
        </Typography>

        <Button
          variant="outlined"
          size="medium"
          sx={{
            width: '280px',
            height: '72px',
            borderRadius: '40px',
            mt: '40px',
            py: 1.5,
            fontSize: '24px',
            textTransform: 'none'
          }}
        >
          Registration
        </Button>

        <Grid container justifyContent="right" sx={{ mt: 4, mr: 4 }}>
          <Box component="img" src={dogImages} sx={{ width: 150, height: 150, objectFit: 'cover' }} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Loginn;

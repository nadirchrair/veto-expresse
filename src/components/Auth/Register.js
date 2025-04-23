import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import image2 from '../../assets/image2.png';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmVisibility = () => setShowConfirm((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const { name, email, password, confirmPassword } = formData;
  
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      const response = await fetch('http://35.181.18.120:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom:name,
          nomEtablissement: "Tech Solutions",
          adresseMap: "123 Main Street, City",
          email,
          password,
          telephone: "+1234567890",
          businessActivity: "Software Development",
          typeActeur: "Vendeur",
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Registration successful!");
        // Optional: redirect user
        // window.location.href = "/login";
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      alert("An error occurred during registration.");
      console.error(error);
    }
  };
  

  

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={2}>
        {/* Left Side */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="200" color="#003092EE" fontSize="93.96px" fontFamily='inter' lineHeight='100%' >
            Welcome to
          </Typography>
          <Typography variant="h4" fontWeight="400" color="#003092EE" fontSize="93.96px" lineHeight='100%' mb={3}>
            Veto Express
          </Typography>
          <Box sx={{ marginTop: '50px', pr: '480px' }}>
            <Typography variant="body1" mt={2} fontWeight="400" color="#333" fontSize="20px" fontFamily='inter' lineHeight='100%'>
              Do you have an account?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '40px',
                px: 4,
                borderColor: '#003092EE',
                color: '#003092EE',
                mt: 6,
                width: '280px',
                height: '72px',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '24px',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '100%',
                  textTransform: "none",
                }}
              >
                Login
              </span>
            </Button>
            <Box component="img" src={image2} alt="puppies" sx={{ width: '130%', mt: 4, maxHeight: 350, objectFit: 'contain' }} />
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {/* Name */}
            <Typography variant="body1" gutterBottom sx={{
              fontFamily: "inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#333333",
            }}>
              Name
            </Typography>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              sx={{
                width: "614px",
                height: "62px",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                },
              }}
            />

            {/* email */}
            <Typography variant="body1" gutterBottom sx={{
              fontFamily: "inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#333333",
            }}>
              Mobile Number / Email
            </Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                width: "614px",
                height: "62px",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                },
              }}
              margin="normal"
            />

            {/* Password */}
            <Typography variant="body1" gutterBottom sx={{
              fontFamily: "inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#333333",
            }}>
              Password
            </Typography>
            <TextField
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                width: "614px",
                height: "62px",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                },
              }}
            />

            {/* Confirm Password */}
            <Typography variant="body1" gutterBottom sx={{
              fontFamily: "inter",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#333333",
            }}>
              Confirm Password
            </Typography>
            <TextField
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              type={showConfirm ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleConfirmVisibility}>
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                width: "614px",
                height: "62px",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                },
              }}
            />

            {/* Register Button */}
            <Button
              variant="contained"
              onClick={handleRegister}
              sx={{
                borderRadius: '40px',
                px: 4,
                backgroundColor: '#003092EE',
                color: '#fff',
                mt: 6,
                width: '280px',
                height: '72px',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '24px',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '100%',
                  textTransform: 'none',
                }}
              >
                Register
              </span>
            </Button>

            {/* OR CONTINUE WITH */}
            <Typography sx={{
              my: 3,
              fontFamily: 'inter',
              fontWeight: 400,
              lineHeight: '100%',
              color: '#333333',
            }}>
              OR CONTINUE WITH
            </Typography>

            <Box display="flex" justifyContent="left" gap={2}>
              <IconButton><GoogleIcon color="error" /></IconButton>
              <IconButton><FacebookIcon sx={{ color: '#3b5998' }} /></IconButton>
              <IconButton><TwitterIcon sx={{ color: '#1da1f2' }} /></IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;

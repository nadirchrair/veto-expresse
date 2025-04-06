import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Divider, 
  Grid,
  IconButton 
} from '@mui/material';
import { Facebook, Google, Twitter } from '@mui/icons-material';
import dogImages from '../../assets/dogpictures.jpeg';

const Loginn = () => {
  
  // Sample dog images (replace with your actual image paths)

  return (
    <Box 
      sx={{
        display: 'flex',
        minHeight: '100vh',
       
        marginTop:'80px'
      }}
    >
      {/* Left side with form */}
      <Box 
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left' ,
          p: 6,
          marginLeft:'33px',
         
        }}
      >
      
          <Typography variant="h4" component="h1" gutterBottom  sx={{color:'#003092EE',fontWeight:'600',fontFamily:'inter',fontSize:'93px',paddingBottom:'35px'}}>
            Login
          </Typography>
          
          <Typography variant="body1" gutterBottom   sx={{
                  fontFamily: "inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#333333",
                }}>
    Mobile Number / Email
  </Typography>
  <TextField
    fullWidth
    variant="outlined"
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
   <Typography variant="body1" gutterBottom   sx={{
                  fontFamily: "inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#333333",
                  pt:'10px'
                }}>
    password
  </Typography>
          
      
            <TextField
    fullWidth
    variant="outlined"
    margin="normal"
    type="password"
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
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 , width: "614px"}}>
            <FormControlLabel 
              control={<Checkbox />} 
              label="Remember password" 
              sx={{Color:'#B5B5B5'}}
            />
            <Typography 
              variant="body2" 
              
              sx={{ cursor: 'pointer' , Color:'#5A6A5A',}}
            >
              Forgot password?
            </Typography>
          </Box>
          
          <Button
  
  variant="contained"
  size="medium"
  sx={{
    width: "280px",
    height: "72px",
    borderRadius: "40px",
    mt: "40px", // Approximates top: 830px in layout, adjust if needed
     // Approximates left: 306px in layout, adjust if needed
    py: 1.5,
    fontSize:'24px',
    backgroundColor:'#003092EE',
    textTransform: "none", // Removes automatic uppercase

  }}
>
  Login
</Button>
          
          <Typography sx={{ my: 3 }}>OR CONTINUE WITH</Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
  <IconButton>
    <Google />
  </IconButton>
  <IconButton>
    <Facebook />
  </IconButton>
  <IconButton>
    <Twitter />
  </IconButton>
</Box>      
      </Box>
   
      {/* Right side with dog images */}
      <Box 
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          textAlign: 'left' ,
marginTop:'150px',
          p: 4,
          
          
        }}
      >
        <Typography
  variant="h4"
  gutterBottom
  sx={{
    marginTop: '32px',
    fontFamily: 'inter',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#333333', // optional: set to black or your preferred color
  }}
>
  Don’t have an account?
</Typography>
        <Typography   variant="p" sx={{ marginTop:'12px',width:'523px',height:'225px',  fontFamily: 'inter',
    fontWeight: 400,
    fontSize: '25px',
    lineHeight: '130%',
    letterSpacing: '10%',
    color: '#5E5D5C', }}
>In publishing and graphic design, Lorem ipsum is a placeholder 
          text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Typography>
          <Button
  
  variant="outlined"
  size="medium"
  sx={{
    width: "280px",
    height: "72px",
    borderRadius: "40px",
    mt: "40px", // Approximates top: 830px in layout, adjust if needed
     // Approximates left: 306px in layout, adjust if needed
    py: 1.5,
    fontSize:'24px',
   // backgroundColor:'#003092EE',
    textTransform: "none", // Removes automatic uppercase

  }}
>
  Registration
</Button>
        
        <Grid container  justifyContent="right" sx={{ mt: 4,mr:4 }}>
              <Box
                component="img"
                src={dogImages}
                sx={{
                  width: 150,
                  height: 150,
                  objectFit: 'cover',
                                 }}
              />
        </Grid>
          </Box>
    </Box>
  );
};

export default Loginn;
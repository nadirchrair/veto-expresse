import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  Divider,
  
} from '@mui/material';
import {
    VideoCall,  
    Pets,       
    EventAvailable 
  } from '@mui/icons-material';
const Part3 = () => {
  return (
    <Box maxwidth="100%"   display="flex" ml="160px">
      {/* Top Groomers Section */}
    
      {/* Hero Section with Gradient Background */}
      <Box sx={{width:'450px'}}>
      <Card sx={{ 
        width: "100%",
        background: 'linear-gradient(to bottom, #FFD15C, #FF7058)',
        borderRadius: 5,
        overflow: 'hidden',
        mb: 4,
        position: 'relative'
      }}>
        {/* Content Box */}
        <Box sx={{ 
          p: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white'
        }}>
          <Typography variant="h6" component="h4"  sx={{ fontWeight: '500', fontFamily:'inter' ,fontSize:'54px' , lineHeight:'82px'}}>
            See Our Top
            Groomers
          </Typography>
          
          <Typography variant="h5" component="h2" sx={{ mb: 6 , 
        color: '#fff',
              fontWeight: 'bold',
              px: 6,
              py: 2,
              mb:2,
              borderRaduis:'60px',
              fontSize: '1.2rem',
              border:'1px solid #fff'
            
           }}>
            Experienced & Expert Groomers
          </Typography>
          
          {/* Cat Image */}
          <Box sx={{
            width: 400,
            height: 400,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '8px solid rgba(255,255,255,0.3)',
            mb: 6
          }}>
            <img 
            //  src={catImage} 
              alt="Happy Cat" 
              style={{ 
                width: '50%', 
                height: '50%', 
                objectFit: 'cover' 
              }} 
            />
          </Box>
          
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              bgcolor: '#001', 
              color: '#fff',
              fontWeight: 'bold',
              px: 6,
              py: 2,
              mb:2,
              borderRaduis:'60%',
              fontSize: '1.2rem',
              '&:hover': {
                bgcolor: '#001'
              }
            }}
          >
            Discover The Service
          </Button>
        </Box>
      </Card>
      </Box>

      

      {/* VETO EXPRESS Section */}
      <Box sx={{ marginLeft:'280px'}}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" sx={{color:'#5E5D5C',fontWeight: '700', fontFamily:'inter' ,fontSize:'90px'}} >
          VETO EXPRESS
        </Typography>
        <Typography variant="body1" paragraph sx={{color:'#000',fontWeight: '400', fontFamily:'inter' ,fontSize:'20px' ,lineHeight:'45px',mt:2}}>
          First, revolutionizes pet care by seamlessly connecting individuals with top veterinarians, 
          pet stores, and essential services—all through a user-friendly mobile app and website. 
          With the added convenience of doorstep delivery, we make pet care effortless, 
          efficient, and just a tap away.
        </Typography>
      </Box>

<Divider  sx={{border:"2px solid #000" , width:"50%", mt:3 , mb:1}} />

<Box sx={{ my: 4 }}>
      {/* Flex container for both sections */}
      <Grid container spacing={4}>
        {/* Online Consultation Section */}
        <Grid item xs={12} md={6}>
          <Box  sx={{ height: '100%' }}>
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              
              p: 4
            }}>
              <VideoCall sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              
              <Typography variant="h4" component="h2" color="#5E5D5C"  fontWeight="700">
                Online Consultation
              </Typography>
              
              <Typography variant="body1" paragraph sx={{color:'#5E5D5C',fontWeight: '400', fontFamily:'inter' ,fontSize:'24px'}}>
                Connect virtually for expert advice and tailored care solutions, 
                ensuring your pet's well-being.
              </Typography>
              
              <Box sx={{ mt: 'auto', width: '100%' }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  startIcon={<EventAvailable />}
                  sx={{bgcolor:"#003092EE" ,color:"#fff",width:"170px", borderRaduis:"90px"}}
                >
                  Book now
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Grid>

        {/* In-Person Appointment Section */}
        <Grid item xs={12} md={6}>
          <Box  sx={{ height: '100%' }}>
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
             
              p: 4
            }}>
              <Pets sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
              
              <Typography variant="h4" component="h2" gutterBottom color="#5E5D5C"  fontWeight="700">
                In Person Appointment
              </Typography>
              
              <Typography variant="body1" paragraph sx={{color:'#5E5D5C',fontWeight: '400', fontFamily:'inter' ,fontSize:'24px'}}>
                Secure a face-to-face appointment for personalized care and immediate attention to your pet's needs.
              </Typography>
              
              <Box sx={{ mt: 'auto', width: '100%' }}>
                <Button 
                  variant="contained" 
                  sx={{bgcolor:"#003092EE" ,color:"#fff",width:"170px", borderRaduis:"90px"}}

                  fullWidth
                  startIcon={<EventAvailable />}
                >
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
      </Box>
    </Box>
  );
};

export default Part3;
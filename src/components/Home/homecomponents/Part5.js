// DeliveryPartners.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent, Button, CardMedia } from '@mui/material';
import { borderRadius, styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yalididne from '../../../assets/yalididne.png'
import Zexpresse from '../../../assets/Zexpresse.jpeg'

const partners = [
  { name: 'YALIDINE', logo: yalididne },
  { name: 'ZR EXPRESS', logo: Zexpresse },
  // Add more partners here...
  { name: 'YALIDINE', logo:yalididne },
  { name: 'ZR EXPRESS', logo: Zexpresse},
  { name: 'YALIDINE', logo:yalididne },
  
];

const DeliveryCard = styled(Card)({
  width: 290,
  margin: 'auto',
  textAlign: 'center',
  borderRadius: 12,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
});

export default function DeliveryPartners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // adjust based on screen size later
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ py: 8,px:4 ,mt:4}}>
      <Typography variant="h4" textAlign="center" sx={{ color:'#010F07',fontWeight:'600',fontSize:'95px',lineHeight:'32px',mb:12}}>
        Delivery Partners
      </Typography>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <Box key={index} px={1}>
            <DeliveryCard>
              <CardMedia
                component="img"
                height="240"
                width="320"
                image={partner.logo}
                alt={partner.name}
                sx={{ objectFit: 'contain', mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6">{partner.name}</Typography>
                <Button variant="outlined" size="small" sx={{ mt: 3, color:'#171717', borderRadius:'45px' }}>
                  Show More
                </Button>
              </CardContent>
            </DeliveryCard>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

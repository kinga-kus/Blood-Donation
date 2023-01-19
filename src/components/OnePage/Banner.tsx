import React from 'react';
import { Box, Typography, styled, Link, Button } from '@mui/material';
import CustomButton from '../CustomButton';
import bannerImage from '../../assets/bannerImage.jpg';

const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  background: '#FFFFFF',
  gap: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(5)
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5)
  }
}));

const BannerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '525px',
  marginTop: '30px'
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  fontFamily: 'Poppins',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px'
  }
}));

const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: 'regular',
  marginBottom: '90px'
}));

const BannerImage = styled('img')(({ theme }) => ({
  width: '500px',
  [theme.breakpoints.down('md')]: {
    width: '350px'
  }
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Typography variant="h6">Welcome...</Typography>
        <BannerTitle variant="h2" sx={{ lineHeight: '96px' }}>
          Blood Donation Center
        </BannerTitle>
        <BannerDescription variant="subtitle1">
          You can save many lives - become a blood donor. It's free, all you
          need is willingness!
        </BannerDescription>
        <Link
          href="/Blood-Donation/#mission"
          style={{ textDecoration: 'none' }}
        >
          <CustomButton
            backgroundColor="#CC2936"
            color="#fff"
            buttonText="Więcej"
          />
        </Link>
      </BannerContent>
      <Box>
        <BannerImage src={bannerImage} />
      </Box>
    </BannerContainer>
  );
};

export default Banner;

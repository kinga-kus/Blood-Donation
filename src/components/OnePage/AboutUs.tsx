import React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { CustomHeader, CustomQuote } from '../TitlesAndHeaders';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';

const images = [image1, image2];

const CustomBox = styled(Box)(({ theme }) => ({
  padding: '60px 50px',
  marginTop: '80px',
  backgroundColor: '#EEE5E9',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: theme.spacing(5)
  }
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '80px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: theme.spacing(5)
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5),
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left'
  }
}));

const CustomGrid = styled(Grid)(({ theme }) => ({
  marginTop: '84px',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

const AboutUs = () => {
  return (
    <CustomBox>
      <Box>
        <CustomHeader headerText="About Us" />
        <CustomTextBox>
          <CustomQuote quoteText="Your help will be a gift for the others" />
          <Typography sx={{ fontSize: 16, fontFamily: 'Poppins' }}>
            The priority task of the Blood Donation Centre in Krakow is to
            collect blood and its components from blood donors and process it to
            produce preparations necessary to save the life and health of
            patients requiring transfusions. The procedures used for the
            production of blood components, which consist of: qualification of
            the donor, collection, processing, testing, storage and transport of
            blood, guarantee the highest quality and safety for the recipients.
          </Typography>
        </CustomTextBox>
      </Box>
      <CustomGrid container spacing={2} columns={{ xs: 1, sm: 1, md: 8 }}>
        {images.map((img) => (
          <Grid item xs={1} md={4}>
            <Img src={img} />
          </Grid>
        ))}
      </CustomGrid>
    </CustomBox>
  );
};

export default AboutUs;

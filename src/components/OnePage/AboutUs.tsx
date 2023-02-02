import React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { CustomHeader, CustomQuote } from '../TitlesAndHeaders';
import Avatar1 from '../../assets/Avatar-1.png';
import Avatar2 from '../../assets/Avatar-2.png';
import Avatar3 from '../../assets/Avatar-3.png';

const department = [
  {
    image: Avatar1,
    name: 'Doctor Suzanna Gil',
    title: 'Deputy Medical Director'
  },
  { image: Avatar2, name: 'Doctor Gerald Nowak', title: 'Director' },
  {
    image: Avatar3,
    name: 'Doctor of Medicine Andrew Pol',
    title: 'Director of the Donor Department'
  }
];

const CustomBox = styled(Box)(({ theme }) => ({
  padding: '60px 50px',
  marginTop: '100px',
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
  marginTop: '10px',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '100%',
  height: '100%'
});

const AboutUs = () => {
  return (
    <CustomBox>
      <Box sx={{ marginBottom: '80px' }}>
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
      <Grid
        sx={{
          flexGrow: 1,
          marginBottom: '80px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%'
        }}
        container
        spacing={2}
        item
        xs={12}
      >
        {department.map((person) => (
          <Grid
            item
            sx={{
              height: 250,
              width: 250
            }}
          >
            <Img src={person.image} />
            <Box sx={{ padding: '20px' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: 600,
                  height: '60px',
                  color: '#08415C'
                }}
              >
                {person.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '12px'
                }}
              >
                {person.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default AboutUs;

import React from 'react';
import { Box, Grid, Icon, styled, Typography } from '@mui/material';

import { CustomHeader, CustomQuote, CustomContact } from '../TitlesAndHeaders';

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const CustomBox = styled(Box)(({ theme }) => ({
  padding: '60px 50px',
  marginTop: '80px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: theme.spacing(5)
  }
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
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

const informationTexts = [
  {
    icon: <PlaceOutlinedIcon />,
    label: 'Address',
    info: 'Ratujmy Życie 5 Street, Cracow, Poland'
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
    label: 'Phone',
    info: '123-456-789'
  },
  {
    icon: <EmailOutlinedIcon />,
    label: 'E-mail',
    info: 'centrumkrwiodawstwa@ck.pl'
  }
];

const CustomGrid = styled(Grid)(({ theme }) => ({
  marginTop: '84px',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const CustomContactBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  width: '217px',
  height: '110px'
}));

const Contact = () => {
  return (
    <CustomBox>
      <CustomHeader headerText="Contact Us" />
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <CustomQuote quoteText="Get In Touch" />
      </Box>
      <CustomTextBox>
        {informationTexts.map((infoText) => (
          <CustomContactBox>
            <Icon style={{ color: '#08415C', marginBottom: '8px' }}>
              {infoText.icon}
            </Icon>
            <CustomContact contactText={infoText.label} />
            <Typography
              sx={{ fontSize: 16, fontFamily: 'Poppins', marginTop: '8px' }}
            >
              {infoText.info}
            </Typography>
          </CustomContactBox>
        ))}
      </CustomTextBox>
    </CustomBox>
  );
};

export default Contact;

import React from 'react';
import { Box, Button, styled, Typography } from '@mui/material';

import CustomButton from '../CustomButton';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '85%'
  }
}));

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        my: 10
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: '#000339',
          my: 3
        }}
      >
        Misja
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#5A6473',
            textAlign: 'center'
          }}
        >
          Zadaniem priorytetowym Centrum Krwiodawstwa w Krakowie jest pobieranie
          krwi i jej składników od dawców krwi oraz przetwarzanie jej w celu
          wytworzenia preparatów niezbędnych dla ratowania życia i zdrowia
          pacjentów wymagających transfuzji.
        </Typography>
      </CustomBox>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#5A6473',
            textAlign: 'center',
            my: 5
          }}
        >
          Procedury stosowane do wytworzenia składników krwi na które składa
          się: kwalifikacja krwiodawcy, pobranie krwi, jej przetworzenie,
          zbadanie, przechowanie i transportowanie gwarantują najwyższą jakość i
          bezpieczeństwo dla biorców.
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default AboutUs;

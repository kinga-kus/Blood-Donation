import React from 'react';
import { Box, Button, styled, Typography, List, ListItem } from '@mui/material';

import CustomButton from './CustomButton';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '60%',
  [theme.breakpoints.down('md')]: {
    width: '85%'
  }
}));

const BulletListText = [
  { text: 'ratujesz życie i zdrowie drugiego człowieka' },
  {
    text: 'za każdym razem gdy oddajesz krew masz wykonywane badania laboratoryjne'
  },
  {
    text: 'w dniu oddania i następnego dnia przysługuje Ci zwolnienie z pracy, szkoły'
  },
  { text: 'otrzymujesz czekolady jako równoważnik kaloryczny' }
];

const BulletText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: '#5A6473',
  textAlign: 'left'
}));

const WhyWorth = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        my: 10,
        ml: 10
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
        Dlaczego warto?
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#5A6473',
            textAlign: 'left'
          }}
        >
          Oddawanie krwi jest bezpiecznie i nie stanowi zagrożenia dla Twojego
          zdrowia czy życia:
        </Typography>
        <List
          sx={{
            ml: 3,
            mb: 3,
            listStyleType: 'disc',
            '& .MuiListItem-root': {
              display: 'list-item'
            }
          }}
        >
          {BulletListText.map((bullet) => (
            <ListItem>
              <BulletText>{bullet.text}</BulletText>
            </ListItem>
          ))}
        </List>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Więcej"
        />
      </CustomBox>
    </Box>
  );
};

export default WhyWorth;

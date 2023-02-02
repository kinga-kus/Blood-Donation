import { Box } from '@mui/material';
import React from 'react';
import AboutUs from './AboutUs';
import ActualEvents from './ActualEvents';
import WhyWorth from './WhyWorth';

const MainInfo = () => {
  return (
    <Box sx={{ backgroundColor: '#EEE5E9' }}>
      <AboutUs />
      <ActualEvents />
      <WhyWorth />
    </Box>
  );
};

export default MainInfo;

import { Box, Button, styled, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ICustomHeader {
  headerText: string;
}

interface ICustomQuote {
  quoteText: string;
}

export const CustomHeader: FC<ICustomHeader> = ({ headerText }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '16px',
          color: '#CC2936',
          fontFamily: 'Poppins',
          fontWeight: 600
        }}
      >
        {headerText}
      </Typography>
    </Box>
  );
};

export const CustomQuote: FC<ICustomQuote> = ({ quoteText }) => {
  const QuoteTypography = styled(Typography)(({ theme }) => ({
    color: '#08415C',
    fontWeight: 500,
    fontSize: '40px',
    width: '380px'
  }));

  return (
    <Box>
      <QuoteTypography>{quoteText}</QuoteTypography>
    </Box>
  );
};

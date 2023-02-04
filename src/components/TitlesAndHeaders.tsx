import { Box, Button, styled, Typography } from '@mui/material';
import React, { FC } from 'react';

interface ICustomHeader {
  headerText: string;
}

interface ICustomQuote {
  quoteText: string;
}

interface ICustomDayNumber {
  dayNumber: string;
}

interface ICustomMonthText {
  monthText: string;
}

interface ICustomEventTitle {
  titleText: string;
}

interface ICustomContact {
  contactText: string;
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
    fontSize: '40px'
  }));

  return (
    <Box>
      <QuoteTypography>{quoteText}</QuoteTypography>
    </Box>
  );
};

export const CustomDayNumber: FC<ICustomDayNumber> = ({ dayNumber }) => {
  const NumberTypography = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: 700,
    fontSize: '48px',
    fontFamily: 'Poppins'
  }));

  return (
    <Box>
      <NumberTypography>{dayNumber}</NumberTypography>
    </Box>
  );
};

export const CustomMonthText: FC<ICustomMonthText> = ({ monthText }) => {
  const MonthTypography = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: 700,
    fontSize: '16px',
    fontFamily: 'Poppins',
    width: '100px'
  }));

  return (
    <Box>
      <MonthTypography>{monthText}</MonthTypography>
    </Box>
  );
};

export const CustomTitleEvent: FC<ICustomEventTitle> = ({ titleText }) => {
  const EventTitleTypography = styled(Typography)(({ theme }) => ({
    color: '#08415C',
    fontWeight: 400,
    fontSize: '20px',
    fontFamily: 'Poppins'
  }));

  return (
    <Box>
      <EventTitleTypography>{titleText}</EventTitleTypography>
    </Box>
  );
};

export const CustomContact: FC<ICustomContact> = ({ contactText }) => {
  const ContactTypography = styled(Typography)(({ theme }) => ({
    color: '#08415C',
    fontWeight: 700,
    fontSize: '20px',
    fontFamily: 'Poppins'
  }));

  return (
    <Box>
      <ContactTypography>{contactText}</ContactTypography>
    </Box>
  );
};

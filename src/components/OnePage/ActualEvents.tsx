import { Box, Typography, Container, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import {
  CustomHeader,
  CustomQuote,
  CustomDayNumber,
  CustomMonthText,
  CustomTitleEvent
} from '../TitlesAndHeaders';

const eventDays = [
  {
    day: '14',
    month: 'July',
    title: 'World Blood Donor Day',
    text: 'Donating blood is an act of solidarity. Join and save lives.'
  },
  {
    day: '15',
    month: 'July',
    title: 'Blood Donation Campaign',
    text: '9a.m. - 1p.m., Uratujmy Życie 5 Street, Cracow'
  },
  {
    day: '13',
    month: 'September',
    title: 'Blood Donation Campaign',
    text: '9a.m. - 1p.m., Krakowska 12 Street, Cracow'
  }
];

const quotes = [
  'You don’t have to be a doctor to save a life.',
  'It’s safe. It’s simple. It saves lives.'
];

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px 50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'center',
    padding: theme.spacing(5)
  }
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '80px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    width: '350px'
  }
}));

const ActualEvents = () => {
  return (
    <CustomBox id="actual-events">
      <Box>
        <CustomHeader headerText="Actual Events" />
        {eventDays.map((event) => (
          <CustomTextBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                width: 'auto'
              }}
            >
              <CustomDayNumber dayNumber={event.day} />
              <CustomMonthText monthText={event.month} />
            </Box>
            <Box sx={{ marginLeft: '20px' }}>
              <CustomTitleEvent titleText={event.title} />
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '14px'
                }}
              >
                {event.text}
              </Typography>
            </Box>
          </CustomTextBox>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'right',
          gap: '50px',
          marginTop: '40px'
        }}
      >
        {quotes.map((quote) => (
          <CustomQuote quoteText={quote} />
        ))}
      </Box>
    </CustomBox>
  );
};

export default ActualEvents;

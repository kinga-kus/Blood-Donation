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
  alignItems: 'center',
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
  alignItems: 'center',
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

const ActualEvents = () => {
  return (
    <CustomBox>
      <Box>
        <CustomHeader headerText="Actual Events" />
        {eventDays.map((event) => (
          <CustomTextBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                width: '160px'
              }}
            >
              <CustomDayNumber dayNumber={event.day} />
              <CustomMonthText monthText={event.month} />
            </Box>
            <Box sx={{ marginLeft: '83px' }}>
              <CustomTitleEvent titleText={event.title} />
              <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>
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
          textAlign: 'center',
          gap: '50px',
          marginLeft: '100px'
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

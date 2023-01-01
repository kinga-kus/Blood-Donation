import { Box, Typography, Container, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import actualEvent1 from '../../assets/event1.png';
import actualEvent2 from '../../assets/event2.png';
import actualEvent3 from '../../assets/event3.png';

const EventsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '70%',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'column'
  }
}));

const EventBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(2, 0, 2, 0)
  }
}));

const ActualEvents = () => {
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
        Aktualne wydarzenia
      </Typography>
      <EventsBox>
        <EventBox>
          <img src={actualEvent1} alt="actualEvent1" />
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}
            >
              Więcej
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </EventBox>
        <EventBox>
          <img src={actualEvent2} alt="actualEvent2" />
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}
            >
              Więcej
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </EventBox>
        <EventBox>
          <img src={actualEvent3} alt="actualEvent1" />
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}
            >
              Więcej
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </EventBox>
      </EventsBox>
    </Box>
  );
};

export default ActualEvents;

import {
  Container,
  Box,
  Typography,
  Button,
  ButtonProps,
  styled
} from '@mui/material';
import bloodDonationImg from '../assets/image1.png';
import CustomButtonWrapper from './CustomButtonWrapper';
import Navbar from './Navbar';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '50px',
  fontFamily: 'Poppins',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px'
  }
}));

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: '#E6F0FF', minHeight: '80vh' }}>
      <Navbar />
      <Container>
        <CustomBox>
          <Box sx={{ flex: 1 }}>
            <Title
              variant="h1"
              sx={{
                mt: 10
              }}
            >
              Centrum Krwiodawstwa
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#5A6473',
                my: 4
              }}
            >
              Możesz uratować życie wielu osobom - zostań dawcą krwi. To nic nie
              kosztuje, a wystarczą tylko chęci!
            </Typography>
            <CustomButtonWrapper
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Więcej"
            />
          </Box>
          <Box sx={{ flex: '1.25' }}>
            <img
              src={bloodDonationImg}
              alt="bloodDonationImg"
              style={{ maxWidth: '80%', marginBottom: '2rem' }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Banner;

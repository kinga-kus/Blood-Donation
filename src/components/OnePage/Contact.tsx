import React from 'react';
import {
  Box,
  Container,
  styled,
  Typography,
  Icon,
  TextField,
  Stack
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CustomButton from '../CustomButton';

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#17275F',
  height: '516px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 3, 0, 3),
    width: '90%'
  }
}));

const CustomBox = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  [theme.breakpoints.down('md')]: {
    padding: 0
  }
}));

const InformationText = [
  {
    icon: <PlaceOutlinedIcon />,
    label: 'Lokalizacja: ',
    info: 'Karaków ul. Ratujmy Życie 5'
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
    label: 'Telefon: ',
    info: '123-456-789'
  },
  {
    icon: <EmailOutlinedIcon />,
    label: 'E-mail: ',
    info: 'centrumkrwiodawstwa@ck.pl'
  }
];

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: '#C5C5C5'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  }
}));

const TextFieldLabel = [
  {
    label: 'Imię i nazwisko'
  },
  {
    label: 'Numer telefonu'
  },
  {
    label: 'Adres e-mail'
  },
  { label: 'Treść wiadomości' }
];

const Contact = () => {
  return (
    <CustomBox id="contact">
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Typography
          sx={{
            fontSize: '35px',
            color: 'black',
            fontWeight: 700
          }}
        >
          Kontakt
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: 'black',
            fontWeight: 500,
            my: 3
          }}
        >
          Wyślij do Nas wiadomość
        </Typography>
      </Box>
      <CustomContainer>
        <Box>
          <Stack
            component="form"
            sx={{
              '& > :not(style)': { width: '50ch' },
              my: 3,
              gap: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
          >
            {TextFieldLabel.map((field) => (
              <CustomTextField
                label={field.label}
                variant="outlined"
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: '#fff' } }}
              />
            ))}
          </Stack>
          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Wyślij"
          />
        </Box>
        <Box>
          {InformationText.map((infoItem) => (
            <Box sx={{ display: 'flex', my: 3 }}>
              <Icon style={{ color: 'white' }}>{infoItem.icon}</Icon>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#ccc',
                  fontWeight: 500,
                  marginLeft: 2
                }}
              >
                {infoItem.label}
                {infoItem.info}
              </Typography>
            </Box>
          ))}
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default Contact;

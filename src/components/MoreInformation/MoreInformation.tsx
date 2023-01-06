import React from 'react';
import {
  Box,
  Typography,
  styled,
  Container,
  List,
  ListItem
} from '@mui/material';

import Navbar from '../OnePage/Navbar';
import CannotBeADonorDialog from '../MoreInformation/CannotBeADonorDialog';
import Footer from '../OnePage/Footer';

import bloodTypes from '../../assets/bloodTypes.jpg';
import chocolateImage from '../../assets/chocolateImage.jpg';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: '35px',
  fontWeight: 'bold',
  color: '#000339',
  marginBottom: 10
}));

const DesctriptionText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: '#5A6473',
  textAlign: 'left'
}));

const DonorInfo = [
  'dowód osobisty',
  'legitymację studencką',
  'prawo jazdy',
  'paszport',
  ' dawca wielokrotny – również legitymację Honorowego Dawcy Krwi'
];

const donorRequirements = [
  'być zdrowy, wypoczęty, wyspany oraz po spożyciu lekkostrawnego i niskokalorycznego posiłku i wypiciu około 1,5 litra płynów w ciągu 24 godzin przed oddaniem krwi',
  'posiadać nr PESEL oraz powinien posługiwać się językiem polskim w mowie i piśmie w stopniu, który umożliwi mu bez udziału osób trzecich samodzielne zrozumienie treści kwestionariusza i wypełnienie go',
  'Oddawanie krwi jest zabiegiem całkowicie bezpiecznym dla Dawcy z uwagi na stosowanie w trakcie pobierania krwi wyłącznie sprzętu jednorazowego użytku',
  'O wszelkich wątpliwościach dotyczących wojego zdrowia należy powiadomić lekarza kwalifikującego do oddania krwi, a także oddać mu osobiście wypełniony Kwestionariusz dla Krwiodawcy zawierający pytania o przeszłość chorobową oraz prowadzony tryb życia kwalifikowanego kandydata',
  'Osoby wykonujące takie zawody jak: pilot, maszynista, kierowca autobusu, operator dźwigu, oraz pracujące na wysokości, uprawiające wspinaczkę, głębokie nurkowanie mogą powrócić do tych zajęć nie wcześniej niż 12 godz. po oddaniu krwi'
];

const whoCannotBeADonorShort = [
  'Nie mogą oddawać krwi osoby, które chorowały na wirusowe zapalenie wątroby (tzw. żółtaczkę zakaźną), nosiciele wirusa HIV oraz chorzy na AIDS. Krwi nie pobiera się od narkomanów, od osób mających kontakty seksualne z wieloma partnerami lub partnerkami, szczególnie znanymi od niedawna.',
  'Dawcami krwi nie powinni być osoby z aktywną lub przebytą poważną chorobą układu krążenia, układu nerwowego, układu pokarmowego, układu oddechowego, nerek, skóry (np. łuszczyca), układu immunologicznego, układu endokrynnego (np. cukrzyca, choroby tarczycy), tkanki łącznej.',
  'Nie można oddawać krwi zażywając leki (poza antykoncepcją hormonalną i niektórymi lekami na nadciśnienie).',
  'Dyskwalifikacją stałą objęci są kandydaci z chorobami krwi i układu krwiotwórczego...'
];

const afterBloodDonation = [
  'posiłek regeneracyjny',
  'zwolnienie z pracy w dniu oddania krwi',
  'legitymację Honorowego Dawcy Krwi',
  'bezpłatne wyniki badań'
];

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

const MoreInformation = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box sx={{ backgroundColor: '#E6F0FF' }}>
        <Navbar />
      </Box>
      <Container>
        <CustomBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left',
              alignItems: 'left',
              my: 10
            }}
          >
            <TitleText variant="h3">Skład i grupa krwi</TitleText>
            <DesctriptionText variant="body2">
              Krew składa się z erytrocytów (krwinki czerwone), leukocytów
              (krwinek białych), trombocytów (płytek krwi) oraz osocza
              (surowicy). Dorosły człowiek o przeciętnej masie ciała ma w sobie
              ok. 5-6 litrów krwi, czyli około 10 jej jednostek. Każdy z nas
              posiada tzw. grupę krwi, która stabilizuje się około 2. roku życia
              i pozostaje niezmienna już do końca. Jej oznaczenie jest kluczowe
              przy doborze krwi do przetoczeń wymaganych np. w trakcie zabiegów
              operacyjnych (np. przeszczepianie narządów), podczas leczenia
              chorób krwi lub w czasie ciąży.
            </DesctriptionText>
          </Box>
          <Box sx={{ alignSelf: 'center' }}>
            <Img src={bloodTypes} alt="bloodTypes" />
          </Box>
        </CustomBox>
        <CustomBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left',
              alignItems: 'left',
              my: 10
            }}
          >
            <TitleText variant="h3">Kto może oddać krew?</TitleText>
            <DesctriptionText>
              Zgłaszający się do oddania krwi ( 18 – 65 lat) powinien posiadać
              przy sobie dokument ze zdjęciem potwierdzający tożsamość i numer
              PESEL:
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
                {DonorInfo.map((bulletInfo) => (
                  <ListItem>
                    <Typography>{bulletInfo}</Typography>
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Wymagania:
              </Typography>
              <DesctriptionText sx={{ fontWeight: 700 }}>
                Każdy, kto zgłasza się do oddania krwi POWINIEN :
              </DesctriptionText>
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
                {donorRequirements.map((requirements) => (
                  <ListItem>
                    <DesctriptionText>{requirements}</DesctriptionText>
                  </ListItem>
                ))}
              </List>
            </DesctriptionText>
            <DesctriptionText sx={{ fontWeight: 700 }}>
              Każdy, kto zgłasza się do oddania krwi NIE MOŻE :
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
                <ListItem>
                  <DesctriptionText>
                    być po spożyciu alkoholu minimum 24 godziny przed oddaniem
                    krwi
                  </DesctriptionText>
                </ListItem>
              </List>
            </DesctriptionText>
          </Box>
        </CustomBox>
        <CustomBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left',
              alignItems: 'left',
              my: 10
            }}
          >
            <TitleText variant="h3">Kto NIE MOŻE oddać krew?</TitleText>
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
              {whoCannotBeADonorShort.map((cannot) => (
                <ListItem>
                  <DesctriptionText>{cannot}</DesctriptionText>
                </ListItem>
              ))}
            </List>
            <CannotBeADonorDialog />
          </Box>
        </CustomBox>
        <CustomBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left',
              alignItems: 'left',
              my: 10
            }}
          >
            <TitleText variant="h3">A po oddaniu krwi...</TitleText>
            <DesctriptionText variant="body2">
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
                {afterBloodDonation.map((after) => (
                  <ListItem>
                    <DesctriptionText>{after}</DesctriptionText>
                  </ListItem>
                ))}
              </List>
            </DesctriptionText>
          </Box>
          <Box sx={{ width: '400px' }}>
            <Img src={chocolateImage} alt="chocolateImage" />
          </Box>
        </CustomBox>
      </Container>
      <Box sx={{ backgroundColor: '#E6F0FF' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MoreInformation;

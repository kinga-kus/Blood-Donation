import React from 'react';
import { Box, Typography, styled, List, ListItem } from '@mui/material';

import { CustomHeader, CustomQuote } from '../TitlesAndHeaders';

import Navbar from '../OnePage/Navbar';
import CannotBeADonorDialog from '../MoreInformation/CannotBeADonorDialog';
import Footer from '../OnePage/Footer';

import bloodTypes from '../../assets/bloodTypes.jpg';

const DonorInfo = [
  'ID card',
  'student ID',
  'driving license',
  'passport',
  ' multiple donor - also the Honorary Blood Donor ID'
];

const donorRequirements = [
  'be healthy, rested, well-slept and after eating an easily digestible and low-calorie meal and drinking about 1.5 liters of fluids within 24 hours before donating blood',
  'have a PESEL number and should be able to use the Polish language in speech and writing to an extent that will enable them to independently understand the content of the questionnaire and complete it without the participation of third parties',
  'Blood donation is a completely safe procedure for the donor due to the use of only disposable equipment during blood collection',
  'Any doubts regarding your health should be reported to the doctor qualifying for blood donation, and the completed Blood Donor Questionnaire containing questions about the medical history and lifestyle of the qualified candidate should be handed over to him personally',
  'People performing professions such as: pilot, train driver, bus driver, crane operator, and working at height, climbing, deep diving can return to these activities no earlier than 12 hours. after donating blood'
];

const whoCannotBeADonorShort = [
  'People who suffered from viral hepatitis (so-called infectious hepatitis), HIV carriers and AIDS patients cannot donate blood. Blood is not taken from drug addicts, from people who have had sexual contacts with multiple partners or partners, especially recently known ones.',
  'Blood donors should not be people with active or serious diseases of the circulatory system, nervous system, digestive system, respiratory system, kidneys, skin (e.g. psoriasis), immune system, endocrine system (e.g. diabetes, thyroid diseases), connective tissue .',
  'You cannot donate blood while taking medication (except for hormonal contraception and some high blood pressure medications).',
  'The permanent disqualification applies to candidates with diseases of the blood and hematopoietic system...'
];

const afterBloodDonation = [
  'regenerative meal',
  'dismissal from work on the day of blood donation',
  'Honorary Blood Donor ID',
  'free test results'
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
  marginTop: '30px',
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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

const MoreInformation = () => {
  return (
    <>
      <Navbar />
      <CustomBox>
        <Box>
          <CustomHeader headerText="Composition and blood group" />
          <CustomTextBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                width: 'auto'
              }}
            >
              <Typography sx={{ fontFamily: 'Poppins' }}>
                Blood consists of erythrocytes (red blood cells), leukocytes
                (white blood cells), thrombocytes (platelets) and plasma
                (serum). An adult man of average body weight has in himself
                about 5-6 liters of blood, or about 10 blood units. Each of us
                has the so-called blood group, which stabilizes around the age
                of 2 and remains unchanged until the end. Its marking is crucial
                when selecting blood for transfusions required, e.g. during
                procedures operations (e.g. organ transplantation), during
                treatment blood diseases or during pregnancy.
              </Typography>
              <Box sx={{ alignSelf: 'center' }}>
                <Img src={bloodTypes} alt="bloodTypes" />
              </Box>
            </Box>
          </CustomTextBox>
        </Box>
      </CustomBox>
      <CustomBox sx={{ backgroundColor: '#EEE5E9', marginTop: '50px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            gap: '50px',
            marginTop: '20px'
          }}
        >
          <CustomQuote quoteText="Who can be a donor?" />
          <Typography sx={{ fontFamily: 'Poppins' }}>
            The applicant for blood donation (aged 18-65) should have with you a
            document with a photo confirming your identity and number PESEL:
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
            {DonorInfo.map((bulletInfo) => (
              <ListItem>
                <Typography sx={{ fontFamily: 'Poppins' }}>
                  {bulletInfo}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </CustomBox>
      <CustomBox>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            gap: '50px',
            marginTop: '20px'
          }}
        >
          <CustomHeader headerText="Requirements" />
          <Typography sx={{ fontFamily: 'Poppins' }}>
            Anyone who volunteers to donate blood SHOULD:
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
            {donorRequirements.map((requirements) => (
              <ListItem>
                <Typography sx={{ fontFamily: 'Poppins' }}>
                  {requirements}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography sx={{ fontFamily: 'Poppins' }}>
            Anyone who volunteers to donate blood CANNOT:
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
            {donorRequirements.map((requirements) => (
              <ListItem>
                <Typography sx={{ fontFamily: 'Poppins' }}>
                  {requirements}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </CustomBox>
      <CustomBox sx={{ backgroundColor: '#EEE5E9', marginTop: '50px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            gap: '50px',
            marginTop: '20px'
          }}
        >
          <CustomQuote quoteText="Who cannot be a donor?" />
          <Typography sx={{ fontFamily: 'Poppins' }}>
            The applicant for blood donation (aged 18-65) should have with you a
            document with a photo confirming your identity and number PESEL:
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
            {whoCannotBeADonorShort.map((cannot) => (
              <ListItem>
                <Typography sx={{ fontFamily: 'Poppins' }}>{cannot}</Typography>
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
          <CustomHeader headerText="What is after blood donation?" />
          <Typography variant="body2">
            <List
              sx={{
                ml: 3,
                listStyleType: 'disc',
                '& .MuiListItem-root': {
                  display: 'list-item'
                }
              }}
            >
              {afterBloodDonation.map((after) => (
                <ListItem>
                  <Typography>{after}</Typography>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>
        <CustomQuote quoteText="Have a chocolate and meet other donors!" />
      </CustomBox>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'center',
          mt: '40px'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '26px',
            mb: 2,
            color: '#CC2936'
          }}
        >
          If You have any other questions about a dontation - text or call us!
        </Typography>
        <CustomQuote quoteText="Become a donor today!" />
      </Box>
      <Footer />
    </>
  );
};

export default MoreInformation;

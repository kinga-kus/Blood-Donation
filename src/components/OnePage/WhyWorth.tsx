import React from 'react';
import { Box, styled, Typography, List, ListItem } from '@mui/material';
import { Link as MoreInfoLink, Route, Routes } from 'react-router-dom';

import CustomButton from '../CustomButton';
import { CustomHeader, CustomQuote } from '../TitlesAndHeaders';

import MoreInformation from '../MoreInformation/MoreInformation';

import happyPerson from '../../assets/happyPerson.png';

const CustomBox = styled(Box)(({ theme }) => ({
  padding: '60px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '80px',
  backgroundColor: '#EEE5E9',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: theme.spacing(5)
  }
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '80px',
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

const CustomImageBox = styled('img')(({ theme }) => ({
  width: '700px',
  height: '550px',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5),
    width: '80%',
    alignItems: 'center',
    textAlign: 'center'
  }
}));

const BulletListText = [
  { text: 'you save the life and health of another person,' },
  {
    text: 'every time you donate blood, you have laboratory tests performed,'
  },
  {
    text: 'on the day of delivery and the next day you are entitled to leave from work, school,'
  },
  { text: 'you get chocolate as a calorie equivalent.' }
];

const BulletText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: '#5A6473',
  textAlign: 'left'
}));

const WhyWorth = () => {
  return (
    <>
      <CustomBox>
        <Box>
          <CustomHeader headerText="Why Is It Worth?" />
          <CustomTextBox>
            <CustomQuote quoteText="Donating blood is safe and does not pose a threat to your health or life:" />
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
              {BulletListText.map((bullet) => (
                <ListItem>
                  <BulletText>{bullet.text}</BulletText>
                </ListItem>
              ))}
            </List>
            <MoreInfoLink to="/informacje" style={{ textDecoration: 'none' }}>
              <CustomButton
                backgroundColor="#CC2936"
                color="#fff"
                buttonText="READ MORE"
              />
            </MoreInfoLink>
          </CustomTextBox>
        </Box>
        <CustomImageBox src={happyPerson} />
      </CustomBox>
      <Routes>
        <Route path="/informacje" element={<MoreInformation />} />
      </Routes>
    </>
  );
};

export default WhyWorth;

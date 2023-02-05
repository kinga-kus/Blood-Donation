import React from 'react';
import { Box, Container, MenuItem, styled, Typography } from '@mui/material';
import { Routes, Route, Link as FooterLink, Link } from 'react-router-dom';
import Departments from '../FotterLinks/Departments';
import Gallery from '../FotterLinks/Gallery';
import Questions from '../FotterLinks/Questions';
import RegisterSteps from '../Registeration/Registeration';
import { HashLink } from 'react-router-hash-link';

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center'
  }
}));

const FooterLabels = [
  {
    header: 'About Us',
    links: [{ link: 'Departments', path: '/Blood-Donation/departments' }]
  },
  {
    header: 'News',
    links: [
      { link: 'Events', path: '/Blood-Donation#actual-events' },
      { link: 'Gallery', path: '/Blood-Donation/gallery' }
    ]
  },
  {
    header: 'Blood Donors',
    links: [
      { link: 'Registeration', path: '/Blood-Donation/registeration' },
      { link: 'Information', path: '/Blood-Donation/information' },
      { link: 'Questions', path: '/Blood-Donation/questions' }
    ]
  }
];

const FooterItem = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#EEE5E9',
  fontWeight: 300,
  fontFamily: 'poppins',
  cursor: 'pointer',
  '&:hover': {
    color: '#FFF'
  }
}));

const Footer = () => {
  return (
    <>
      <Box sx={{ marginTop: '140px', py: 10, backgroundColor: '#08415C' }}>
        <CustomContainer>
          <CustomContainer>
            {FooterLabels.map((label) => (
              <Box>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: '#FFF',
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                  {label.header}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {label.links.map((subcategory) => (
                    <HashLink
                      to={subcategory.path}
                      style={{ textDecoration: 'none' }}
                    >
                      <FooterItem>{subcategory.link}</FooterItem>
                    </HashLink>
                  ))}
                </Box>
              </Box>
            ))}
          </CustomContainer>
        </CustomContainer>
      </Box>
      <Routes>
        <Route path="/departments" element={<Departments />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/registeration" element={<RegisterSteps />} />
      </Routes>
    </>
  );
};

export default Footer;

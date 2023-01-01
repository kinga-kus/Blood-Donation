import React from 'react';
import { Box, Container, styled, Typography } from '@mui/material';

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center'
  }
}));

const FooterLink = styled('span')(({ theme }) => ({
  fontSize: '16px',
  color: '#7A7A7E',
  fontWeight: 300,
  fontFamily: 'poppins',
  cursor: 'pointer',
  '&:hover': {
    color: '#000'
  }
}));

const FooterLabels = [
  { header: 'O Nas', links: ['Oddziały', 'Mapa', 'Dyrekcja'] },
  {
    header: 'Aktualności',
    links: ['Wydarzenia', 'Galeria', 'Akcje wyjazdowe']
  },
  { header: 'Krwiodawcy', links: ['Rejestracja', 'Informacje', 'Pytania'] }
];

const Footer = () => {
  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          {FooterLabels.map((label) => (
            <Box>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#1C1C1D',
                  fontWeight: 700,
                  mb: 2
                }}
              >
                {label.header}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {label.links.map((subcategory) => (
                  <FooterLink>{subcategory}</FooterLink>
                ))}
              </Box>
            </Box>
          ))}
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;

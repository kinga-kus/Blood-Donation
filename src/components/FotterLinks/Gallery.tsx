import React from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  styled,
  Grid
} from '@mui/material';

import Navbar from '../OnePage/Navbar';
import Footer from '../OnePage/Footer';

import { CustomHeader, CustomQuote } from '../TitlesAndHeaders';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1576669802218-d535933f897c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    title: 'Bed',
    author: 'swabdesign'
  },
  {
    img: 'https://images.unsplash.com/photo-1578348105417-7fe97a10842d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    title: 'Books',
    author: 'Pavel Nekoranec'
  },
  {
    img: 'https://images.unsplash.com/photo-1524565026928-7c62b93cf22c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Sink',
    author: 'Charles Deluvio'
  },
  {
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80',
    title: 'Kitchen',
    author: 'Christian Mackie'
  },
  {
    img: 'https://images.unsplash.com/photo-1542868727-6ebd18386391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Blinds',
    author: 'Darren Richardson'
  },
  {
    img: 'https://images.unsplash.com/photo-1542884841-9f546e727bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Chairs',
    author: 'Taylor Simpson'
  },
  {
    img: 'https://images.unsplash.com/photo-1582719298818-904ce0e5cd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Laptop',
    author: 'Ben Kolde'
  },
  {
    img: 'https://images.unsplash.com/photo-1579154204845-5d7f8d4dc785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Doors',
    author: 'Philipp Berndt'
  },
  {
    img: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
    title: 'Coffee',
    author: 'Jen P.'
  },
  {
    img: 'https://images.unsplash.com/photo-1582719298866-977ee81c87d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Storage',
    author: 'Douglas Sheppard'
  },
  {
    img: 'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Candle',
    author: 'Fi Bell'
  },
  {
    img: 'https://images.unsplash.com/photo-1606206522398-de3bd05b1615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Coffee table',
    author: 'Hutomo Abrianto'
  }
];

const campaignData = [
  {
    date: '13th of August',
    title: 'In the Summer Time...',
    description: '...help the ones who needs it',
    img: 'https://images.unsplash.com/photo-1566410845311-1201aefbee6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    date: '30th of Septemper',
    title: 'Vampire Time',
    description: 'Because there is life in all blood',
    img: 'https://images.unsplash.com/photo-1583550634402-63c256b38c35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
  },
  {
    date: '6th of December',
    title: 'Ho ho ho, Merry Christmas',
    description: 'Join Santa Claus Team',
    img: 'https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80'
  }
];

const CustomBox = styled(Box)(({ theme }) => ({
  padding: '60px 50px',
  display: 'flex',
  marginTop: '30px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: theme.spacing(5)
  }
}));

const GalleryBox = styled(Box)(({ theme }) => ({
  width: 800,
  height: 450,
  overflowY: 'scroll',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left'
  }
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  width: '50%',
  marginLeft: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: '0px',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left'
  }
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  height: '100%'
});

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const campaignImgData = [
  'https://img.freepik.com/premium-zdjecie/grupa-dawcow-krwi-z-rurkami-z-zakraplaczem-siedzaca-w-rzedzie-na-krzeslach-w-szpitalu_274679-33736.jpg?w=1800',
  'https://img.freepik.com/premium-zdjecie/pielegniarka-przygotowuje-sie-do-pobrania-krwi-od-dawcow-w-centrum-krwiodawstwa_37274-23.jpg?w=1800',
  'https://img.freepik.com/premium-zdjecie/grupa-dawcow-krwi-w-rzedzie-lezaca-na-krzeslach-medycznych-w-centrum-krwiodawstwa_236854-39704.jpg?w=1800'
];

const CustomTitleBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  margin: 'auto',
  width: '800px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
    padding: theme.spacing(5)
  }
}));

const Gallery = () => {
  return (
    <>
      <Navbar />
      <CustomTitleBox>
        <CustomQuote quoteText="See Us and Our Spots!" />
      </CustomTitleBox>
      <CustomBox>
        <GalleryBox>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </GalleryBox>
        <CustomTextBox>
          <CustomHeader headerText="Visit Our Center in Cracow!" />
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            tempor odio. Mauris ornare aliquet risus, sit amet pulvinar lorem
            volutpat quis. Maecenas turpis sem, placerat eu mi at, dictum
            tincidunt tortor. Phasellus ullamcorper, nisi id pulvinar viverra,
            turpis libero vulputate ante, a imperdiet massa erat non eros.
            Praesent eu dui sed massa efficitur mollis a vitae purus. Ut
            scelerisque placerat felis, vitae feugiat purus scelerisque
            vulputate. Nam vestibulum non ipsum et semper.
          </Typography>
        </CustomTextBox>
      </CustomBox>
      <Box sx={{ padding: 4 }}>
        <CustomQuote quoteText="We are here for people that need Your help." />
        <Typography sx={{ fontFamily: 'Poppins' }}>
          See what our community have done during these years: blood donation
          campaign at 6th of December and more!
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {campaignData.map((campaign) => (
          <Grid
            container
            spacing={2}
            sx={{
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              marginTop: '40px'
            }}
          >
            <Grid item>
              <Grid sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={campaign.img} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ fontFamily: 'Poppins' }}
                  >
                    {campaign.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      color: '#CC2936',
                      fontFamily: 'Poppins',
                      fontWeight: 700
                    }}
                  >
                    {campaign.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: 'Poppins' }}
                  >
                    {campaign.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Box sx={{ padding: 4, marginTop: '50px' }}>
        <Typography sx={{ fontFamily: 'Poppins' }}>
          See what our community have done during these years: blood donation
          campaign at 6th of December and more!
        </Typography>
      </Box>
      <Box sx={{ width: '100%', display: 'flex' }}>
        {campaignImgData.map((images) => (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item>
              <Item>
                <Img src={images} loading="lazy" />
              </Item>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Gallery;

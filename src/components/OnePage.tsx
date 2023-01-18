import React from 'react';

import Navbar from './OnePage/Navbar';
import Banner from './OnePage/Banner';
import AboutUs from './OnePage/AboutUs';
import ActualEvents from './OnePage/ActualEvents';
import WhyWorth from './OnePage/WhyWorth';
import Contact from './OnePage/Contact';
import Footer from './OnePage/Footer';

const OnePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <ActualEvents />
      <WhyWorth />
      <Contact />
      <Footer />
    </>
  );
};

export default OnePage;

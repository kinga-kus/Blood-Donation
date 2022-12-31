import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import ActualEvents from './components/ActualEvents';
import WhyWorth from './components/WhyWorth';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Banner />
      <AboutUs />
      <ActualEvents />
      <WhyWorth />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

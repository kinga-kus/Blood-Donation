import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import ActualEvents from './components/ActualEvents';
import WhyWorth from './components/WhyWorth';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Banner />
      <AboutUs />
      <ActualEvents />
      <WhyWorth />
      <Contact />
    </>
  );
}

export default App;

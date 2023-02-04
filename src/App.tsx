import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Departments from './components/FotterLinks/Departments';
import Gallery from './components/FotterLinks/Gallery';
import Questions from './components/FotterLinks/Questions';
import MoreInformation from './components/MoreInformation/MoreInformation';
import OnePage from './components/OnePage';
import Registeration from './components/Registeration/Registeration';

function App() {
  return (
    <Routes>
      <Route path="/Blood-Donation" element={<OnePage />} />
      <Route path="/Blood-Donation/information" element={<MoreInformation />} />
      <Route path="/Blood-Donation/departments" element={<Departments />} />
      <Route path="/Blood-Donation/gallery" element={<Gallery />} />
      <Route path="/Blood-Donation/questions" element={<Questions />} />
      <Route path="/Blood-Donation/registeration" element={<Registeration />} />
    </Routes>
  );
}

export default App;

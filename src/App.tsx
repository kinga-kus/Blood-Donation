import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Departments from './components/FotterLinks/Departments';
import Gallery from './components/FotterLinks/Gallery';
import Questions from './components/FotterLinks/Questions';
import MoreInformation from './components/MoreInformation/MoreInformation';
import OnePage from './components/OnePage';
import RegisterSteps from './components/Registeration/RegisterSteps';
import Operation from './components/Registeration/RegisterSteps';

function App() {
  return (
    <Routes>
      <Route path="/Blood-Donation" element={<OnePage />} />
      <Route path="/rejestracja" element={<Operation />} />
      <Route path="/informacje" element={<MoreInformation />} />
      <Route path="/Blood-Donation/departments" element={<Departments />} />
      <Route path="/Blood-Donation/gallery" element={<Gallery />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/registeration" element={<RegisterSteps />} />
    </Routes>
  );
}

export default App;

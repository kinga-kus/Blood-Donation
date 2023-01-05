import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import MoreInformation from './components/MoreInformation/MoreInformation';
import OnePage from './components/OnePage';
import Operation from './components/Registeration/RegisterSteps';

function App() {
  return (
    <Routes>
      <Route path="/Blood-Donation" element={<OnePage />} />
      <Route path="/rejestracja" element={<Operation />} />
      <Route path="/informacje" element={<MoreInformation />} />
    </Routes>
  );
}

export default App;

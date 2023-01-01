import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import OnePage from './components/OnePage';
import Operation from './components/Registeration/Operation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnePage />} />
      <Route path="/rejestracja" element={<Operation />} />
    </Routes>
  );
}

export default App;

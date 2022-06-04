import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/navigation/header/Header';
import TeamBuilding from './pages/TeamBuilding';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto px-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/teambuilding" element={<TeamBuilding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;

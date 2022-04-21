import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/navigation/header/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto px-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;

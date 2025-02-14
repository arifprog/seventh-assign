import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Pricing from './Components/Pricing';
import Customers from './Components/Customers';
import Solutions from './Components/Solutions';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="customers" element={<Customers />} />
        <Route path="solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
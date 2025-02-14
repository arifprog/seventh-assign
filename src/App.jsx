import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Pricing from './Components/Pricing';
import Customers from './Components/Customers';
import Solutions from './Components/Solutions';
import BookDemo from './Components/BookDemo';
import Contact from './Components/Contact';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="customers" element={<Customers />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="demo" element={<BookDemo />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} ></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
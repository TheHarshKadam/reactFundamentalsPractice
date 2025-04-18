import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './forRoutes/home';
import Contact from './forRoutes/contact';
import About from './forRoutes/about';

export default function Routers() {
  return (
    <BrowserRouter>
      <h1>Router</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

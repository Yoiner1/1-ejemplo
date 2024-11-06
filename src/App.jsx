import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import Navegacion from './navegacion';

function App() {
  return ( 
    <BrowserRouter>
    <nav>
      <Navegacion />
      <Link to="/home">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </BrowserRouter>
  )
}


export default App 
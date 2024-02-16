import React, { useState } from 'react';
import Home from './utils/Home';
import './utils/App.css'
import Footer from './utils/Footer';

function App() {
  return (
    <>
      <nav>
        <h1 class="jeth">PersonaPlus</h1>
        <a href="https://personaplus.vercel.app">
          Inicio
        </a>
        <a href="https://github.com/ZakaHaceCosas/personaplus/blob/main/DOCS.md">
          Documentación
        </a>
      </nav>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

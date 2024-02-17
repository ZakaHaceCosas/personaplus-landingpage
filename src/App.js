import React, { useState } from 'react';
import Home from './utils/Home';
import './utils/App.css'
import Footer from './utils/Footer';

function App() {
  return (
    <>
      <nav>
        <h1 className="jeth">PersonaPlus</h1>
        <div className="as">
          <a href="https://personaplus.vercel.app">
            Inicio
          </a>
          <a href="https://github.com/ZakaHaceCosas/personaplus/blob/main/DOCS.md">
            Documentación
          </a>
        </div>
      </nav>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

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
      <div className="disclaimer">
        Nota: El proyecto PersonaPlus está <b>parado por un tiempo</b>, soy una sola persona y no tengo tiempo para todo. Pero no está muerto ;]
      </div>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

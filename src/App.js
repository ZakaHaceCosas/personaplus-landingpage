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
          <a href="#">
            Inicio
          </a>
          <a href="https://github.com/ZakaHaceCosas/personaplus/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://youtube.com/@ZakaHaceCosas" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </nav>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import Home from './utils/Home';
import Docs from './utils/Docs';
import './utils/App.css'

function App() {
  // esto ta roto
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'docs':
        return <Docs />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav>
        <h1>PersonaPlus</h1>
        {/*
        <a onClick={() => setCurrentPage('home')} >
          Inicio
        </a>
        <a onClick={() => setCurrentPage('home')}>
          Documentación
        </a>
        */}
        <a href="https://personaplus.vercel.app">
          Inicio
        </a>
        <a href="https://github.com/ZakaHaceCosas/personaplus/blob/main/DOCS.md">
          Documentación
        </a>
      </nav>

      {renderPage()}
    </>
  );
}

export default App;

import './App.css';
import Topbar from './utils/Topbar.js';
import Hero from './utils/Hero.js';
import React from 'react';
import Btn from './utils/Btn.js';
import Section from './utils/Section.js';

function App() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Topbar></Topbar>
      <Hero image="/banner.png"></Hero>
      <Section
        h='Dale un PLUS a tu salud'
        p='Con rutinas, controles, y demás funciones.'
        i='/hero.png'
        b={null}
        ih={null}
      >
      </Section>
      <Section
        h='¿Donde lo descargo?'
        p='PersonaPlus aún no está disponible, está todavía siendo desarrollado.'
        i={null}
        b='Puedes ver el código en GitHub'
        ih='https://github.com/ZakaHaceCosas/personaplus'
      >
      </Section>
    </main>
  );
}

export default App;

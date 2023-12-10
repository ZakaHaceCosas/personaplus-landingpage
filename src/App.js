import './App.css';
import Topbar from './utils/Topbar.js';
import Hero from './utils/Hero.js';
import React from 'react';
import Btn from './utils/Btn.js';
import Section from './utils/Section.js';

function App() {
  return (
    <main className="dark w-screen overflow-x-hidden">
      <Topbar></Topbar>
      <Hero image="/hero.png"></Hero>
      <Section
        h='¿Qué es PersonaPlus?'
        p='PersonaPlus es una aplicación de salud y antivirus 2 en 1, para cuidar de tu bienestar (tanto físico como digital) y para proteger tu teléfono y mantenerlo limpio.'
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

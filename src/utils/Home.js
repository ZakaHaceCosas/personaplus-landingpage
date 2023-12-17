import './App.css';
import Hero from './Hero';
import React from 'react';
import Section from './Section';

function Home() {
  return (
    <main>
      <Hero image="/hero.png"></Hero>
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

export default Home;

import './App.css';
import Hero from './Hero';
import React from 'react';
import Section from './Section';

function Home() {
  return (
    <main>
      <Hero image="/PERSONAPLUS_BRANDMOCKUP_1.png"></Hero>
      <Section
        h='Dale un PLUS a tu salud'
        p='Con rutinas, controles, y demás funciones, tienes todo lo que necesitas para crear la mejor versión de ti mismo.'
        i='/hero.png'
        b={null}
        ih={null}
        clase={null}
      >
      </Section>
      <Section
        h='Seguro y de código abierto'
        p='PersonaPlus no tiene publicidad ni rastreos de ningún tipo. Además, es de código abierto, permitiendo a cualquiera verificar su seguridad.'
        i='./privacy_hero.png'
        b='Ver en GitHub'
        ih='https://github.com/ZakaHaceCosas/personaplus'
        clase='btnBlau'
      >
      </Section>
    </main>
  );
}

export default Home;

import './App.css';
import Hero from './Hero';
import React from 'react';
import Section from './Section';

function Home() {
  return (
    <main>
      <Hero image="/PERSONAPLUS_BRANDMOCKUP_1.png"></Hero>
      <Section
        h='Give your health a PLUS'
        p='With routines, controls, guides, and many others, you got all you need to give your health more.'
        i='/hero.png'
        b={null}
        ih={null}
        clase={null}
      >
      </Section>
      <Section
        h='This one is different'
        p='PersonaPlus has NO ads at all, nor data selling / tracking of any kind. It is a piece of free, open source software.'
        i='./privacy_hero.png'
        b='See it on GitHub'
        ih='https://github.com/ZakaHaceCosas/personaplus'
        clase='btnBlau'
      >
      </Section>
          <div className="stuffrow">
            <h1>Give yourself a PLUS</h1>
          <p>Work in progress. Coming <i>soon</i>.</p>
          <img alt="Static Badge" src="https://img.shields.io/badge/YouTube?style=for-the-badge&logo=youtube&label=Devlogs%20and%20stuff&link=https%3A%2F%2Fyoutube.com%2F%40ZakaHaceCosas">
          </div>
    </main>
  );
}

export default Home;

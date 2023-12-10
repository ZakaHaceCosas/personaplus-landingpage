import logo from './logo.svg';
import './App.css';
import Topbar from './utils/Topbar.js';
import Hero from './utils/Hero.js';
import React from 'react';
import Btn from './utils/Btn.js';

function App() {
  return (
    <main className="dark w-screen overflow-x-hidden">
      <Topbar></Topbar>
      <Hero image="../public/hero.png"></Hero>
      <section className="flex bg-white flex-col h-screen w-auto mx-auto items-center justify-center gap-4">
        <h3 className="font-mono text-black">¡Pronto disponible!</h3>
        <Btn text='Síguenos en YouTube para estar al tanto de lo que hacemos' href='https://youtube.com/@ZakaHaceCosas'>
        </Btn>
      </section>
    </main>
  );
}

export default App;

import './App.css';
import Topbar from './utils/Topbar.js';
import Hero from './utils/Hero.js';
import React from 'react';
import Btn from './utils/Btn.js';

function App() {
  return (
    <main className="dark w-screen overflow-x-hidden">
      <Topbar></Topbar>
      <Hero image="/hero.png"></Hero>
      <section className="flex bg-white flex-col h-screen w-auto mx-auto items-center justify-center gap-4">
        <h1 className="font-sans text-black">PersonaPlus es la app de salud que te acompaña y te ayuda a darle el PLUS que necesitas a como te cuidas.</h1>
        <h3 className="font-mono text-black">PersonaPlus aún está en desarrollo. ¡Pronto estará disponible!</h3>
        <Btn text='Mientras tanto, ¿y si nos sigues en YouTube?' href='https://youtube.com/@ZakaHaceCosas'>
        </Btn>
      </section>
    </main>
  );
}

export default App;

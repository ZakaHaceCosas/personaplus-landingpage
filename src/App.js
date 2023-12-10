import logo from './logo.svg';
import './App.css';
import Topbar from './utils/Topbar.js';
import Hero from './utils/Hero.js';

function App() {
  return (
    <main className="dark">
      <Topbar></Topbar>
      <Hero></Hero>
    </main>
  );
}

export default App;

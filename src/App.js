import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Servizi from './components/Servizi';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Footer from './components/Footer';
import React,{ useState } from 'react';
import Contatti from './components/Contatti';
import RevealOnScroll from './components/RevealOnScroll';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App bg-ghost">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Pagina contenuto con maschera e spostamento */}
      <div className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-3/4 lg:translate-x-1/2' : ''}`}>
        {/* Maschera scura */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
        {/* Contenuto principale */}
        <div className="relative z-20">
          <section id="hero">
            <Hero />
          </section>
          <RevealOnScroll>
          <section id="about">
            <About />
          </section>
          </RevealOnScroll>
          <RevealOnScroll>
          <section id="servizi">
            <Servizi />
          </section>
          </RevealOnScroll>
          <RevealOnScroll>
          <section id="portfolio">
            <Portfolio />
          </section>
          </RevealOnScroll>
          <RevealOnScroll>
          <section id="team">
            <Team />
          </section>
          </RevealOnScroll>
          <RevealOnScroll>
          <section id="contatti">
            <Contatti />
          </section>
          </RevealOnScroll>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

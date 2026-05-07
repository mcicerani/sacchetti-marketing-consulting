import './App.css';
import Navbar from './components/NavigationComponents/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/AboutSection/About';
import Servizi from './components/Servizi';
import Portfolio from './components/PortfolioSection/Portfolio';
import Testimonianze from './components/Testimonianze';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminPage from './components/AdminPage';
import React, { useState } from 'react';
import Contatti from './components/Contatti';
import RevealOnScroll from './components/AnimationComponents/RevealOnScroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { SanityProvider } from './sanity/SanityContext';

function MainSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App bg-ghost">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <WhatsAppButton />
      <div className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-3/4 lg:translate-x-1/2' : ''}`}>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <div className="relative z-20">
          <section id="hero"><Hero /></section>

          <StatsStrip />

          <RevealOnScroll>
            <section id="about"><About /></section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="servizi"><Servizi /></section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section id="portfolio"><Portfolio /></section>
          </RevealOnScroll>

          <RevealOnScroll><Testimonianze /></RevealOnScroll>

          <RevealOnScroll><FAQ /></RevealOnScroll>

          <RevealOnScroll>
            <section id="contatti"><Contatti /></section>
          </RevealOnScroll>

          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <SanityProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </SanityProvider>
  );
}

export default App;

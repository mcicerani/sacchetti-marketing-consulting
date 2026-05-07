import React from 'react';
import { SiInstagram, SiFacebook } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import ArrowToTop from './ArrowToTop';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div className="relative">
      {/* Hamburger — nascosto quando menu aperto */}
      <button
        className={`fixed bottom-1 lg:bottom-auto lg:top-7 left-1 lg:left-7 z-50 cursor-pointer bg-transparent border-0 p-0 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={toggleMenu}
        aria-label="Apri menu"
        aria-expanded={isMenuOpen}
        aria-controls="main-menu"
      >
        <img
          src="logo-min.png"
          alt=""
          aria-hidden="true"
          className="h-14 lg:h-20 rounded-full bg-logo border shadow-xl border-white/20 p-2"
        />
      </button>

      {/* Menu overlay */}
      <div
        id="main-menu"
        role="navigation"
        aria-label="Menu principale"
        className={`fixed top-0 left-0 flex flex-col justify-center h-full bg-logo text-white overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'w-3/4 lg:w-1/2' : 'w-0'
        }`}
      >
        {/* Pulsante chiudi ✕ — top-right del pannello */}
        <button
          onClick={toggleMenu}
          aria-label="Chiudi menu"
          className={`absolute top-5 right-5 text-white/80 hover:text-white transition-all duration-200 bg-transparent border-0 p-2 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          <FaTimes className="text-2xl lg:text-3xl" />
        </button>

        <ul className={`font-marcellus ml-10 space-y-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { to: 'hero', label: 'Home' },
            { to: 'about', label: 'Agenzia' },
            { to: 'servizi', label: 'Servizi' },
            { to: 'portfolio', label: 'Portfolio' },
            { to: 'contatti', label: 'Contatti' },
          ].map(({ to, label }) => (
            <li key={to} className="text-5xl lg:text-7xl cursor-pointer">
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                activeClass="!opacity-100 border-b-2 border-white"
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={`font-marcellus mt-20 ml-5 flex flex-row text-3xl lg:text-4xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li className="mx-5 ease-in-out duration-500 lg:hover:scale-125">
            <a href='https://www.instagram.com/sacchettimktconsulting/' aria-label="Instagram Sacchetti Marketing">
              <SiInstagram />
            </a>
          </li>
          <li className='ease-in-out duration-500 lg:hover:scale-125'>
            <a href='https://www.facebook.com/profile.php?id=61559447582233' aria-label="Facebook Sacchetti Marketing">
              <SiFacebook />
            </a>
          </li>
        </ul>

        <ul className={`font-marcellus mt-5 flex flex-col lg:flex-row text-sm lg:text-xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li className="ml-10 mr-5">Sacchetti Marketing Consulting</li>
          <li className="ml-10 mr-5">P.IVA 03139530590</li>
        </ul>

        <ul className={`mt-5 flex flex-row text-sm lg:text-lg transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li className="ml-10 mr-5">Privacy</li>
          <li>Cookie</li>
        </ul>
      </div>
      <ArrowToTop />
    </div>
  );
};

export default Navbar;

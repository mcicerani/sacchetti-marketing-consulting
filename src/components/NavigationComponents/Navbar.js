import React from 'react';
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { Link } from 'react-scroll'; // Importa la libreria react-scroll
import ArrowToTop from './ArrowToTop';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Chiudi il menu quando si clicca su un link
  };

  return (
    <div className="relative">
      {/* Icona Hamburger (logo immagine) */}
      <div className="fixed bottom-1 lg:bottom-auto lg:top-7 right-1 lg:right-7 z-50 cursor-pointer" onClick={toggleMenu}>
        <img src="logo-min.png" alt="Logo" className="h-14 lg:h-20 rounded-full bg-logo border shadow-xl border-white-50 p-2"  />
      </div>

      {/* Menu overlay */}
      <div
        className={`fixed top-0 left-0 flex flex-col justify-center h-full bg-logo text-white overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'w-3/4 lg:w-1/2' : 'w-0'
        }`}
      >
        <ul className={`font-marcellus ml-10 space-y-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li className="text-5xl lg:text-7xl cursor-pointer">
            <Link to="hero" smooth={true} duration={500} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="text-5xl lg:text-7xl cursor-pointer">
            <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
              Agenzia
            </Link>
          </li>
          <li className="text-5xl lg:text-7xl cursor-pointer">
            <Link to="servizi" smooth={true} duration={500} onClick={handleLinkClick}>
              Servizi
            </Link>
          </li>
          <li className="text-5xl lg:text-7xl cursor-pointer">
            <Link to="portfolio" smooth={true} duration={500} onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li className="text-5xl lg:text-7xl cursor-pointer">
            <Link to="contatti" smooth={true} duration={500} onClick={handleLinkClick}>
              Contatti
            </Link>
          </li>
        </ul>

        {/* Icone social */}
        <ul className="font-marcellus mt-20 ml-5 flex flex-row text-3xl lg:text-4xl">
          <li className="mx-5 ease-in-out duration-500 lg:hover:scale-125"><a href='https://www.instagram.com/sacchettimktconsulting/'><SiInstagram /></a></li>
          <li className='ease-in-out duration-500 lg:hover:scale-125'><a href='https://www.facebook.com/profile.php?id=61559447582233'><SiFacebook /></a></li>
        </ul>

        {/* Informazioni azienda */}
        <ul className="font-marcellus mt-5 flex flex-col lg:flex-row text-sm lg:text-xl">
          <li className="ml-10 mr-5">Sacchetti Marketing Consulting</li>
          <li className="ml-10 mr-5">P.IVA 03139530590</li>
        </ul>

        {/* Privacy e cookie */}
        <ul className="mt-5 flex flex-row text-sm lg:text-lg">
          <li className="ml-10 mr-5">Privacy</li>
          <li>Cookie</li>
        </ul>
      </div>
      <ArrowToTop />
    </div>
  );
};

export default Navbar;

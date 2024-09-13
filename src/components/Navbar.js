import React from 'react';
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { Link } from 'react-scroll'; // Importa la libreria react-scroll

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
      <div className="fixed top-7 right-7 z-50  cursor-pointer" onClick={toggleMenu}>
        <img src="logo-min.png" alt="Logo" className=" h-20 rounded-full bg-logo p-2"  />
      </div>

      {/* Menu overlay */}
      <div
        className={`fixed top-0 left-0 flex flex-col justify-center h-full bg-logo text-white overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'w-1/2' : 'w-0'
        }`}
      >
        <ul className={`font-marcellus ml-10 space-y-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <li className="text-7xl cursor-pointer">
            <Link to="hero" smooth={true} duration={500} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="text-7xl cursor-pointer">
            <Link to="about" smooth={true} duration={500} onClick={handleLinkClick}>
              Chi Siamo
            </Link>
          </li>
          <li className="text-7xl cursor-pointer">
            <Link to="servizi" smooth={true} duration={500} onClick={handleLinkClick}>
              Servizi
            </Link>
          </li>
          <li className="text-7xl cursor-pointer">
            <Link to="portfolio" smooth={true} duration={500} onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li className="text-7xl cursor-pointer">
            <Link to="team" smooth={true} duration={500} onClick={handleLinkClick}>
              Team
            </Link>
          </li>
          <li className="text-7xl cursor-pointer">
            <Link to="contatti" smooth={true} duration={500} onClick={handleLinkClick}>
              Contatti
            </Link>
          </li>
        </ul>

        {/* Icone social */}
        <ul className="font-marcellus mt-20 flex flex-row text-4xl">
          <li className="ml-10 mr-5"><SiInstagram /></li>
          <li><SiFacebook /></li>
        </ul>

        {/* Informazioni azienda */}
        <ul className="font-marcellus mt-5 flex flex-row text-xl">
          <li className="ml-10 mr-5">Sacchetti Marketing Consulting</li>
          <li>P.IVA 03139530590</li>
        </ul>

        {/* Privacy e cookie */}
        <ul className="mt-5 flex flex-row text-lg">
          <li className="ml-10 mr-5">Privacy</li>
          <li>Cookie</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

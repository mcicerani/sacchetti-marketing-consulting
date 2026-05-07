import React from "react";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import RevealOnScroll from "./AnimationComponents/RevealOnScroll";
import { useSiteData } from "../sanity/SanityContext";

const Hero = () => {
  const { data } = useSiteData();
  const heroText = data?.siteSettings?.heroText || "Scegli, Pubblica e Comunica con Noi!";
  const heroButton = data?.siteSettings?.heroButton || "Scopri i nostri servizi";

  return (
    <div className="hero flex flex-col justify-center items-center h-dvh">
      <img src="logo.png" alt="Sacchetti Marketing Consulting" width="400" height="400" className="logo h-72 p-5 md:h-80 lg:h-96" />
      <RevealOnScroll>
        <div className="flex flex-col items-center gap-6 mt-6">
          <h1 className="text-xl lg:text-3xl text-logo font-marcellus text-center px-4">
            {heroText}
          </h1>
          <Link to="servizi" smooth={true} duration={600}>
            <button className="px-8 py-3 bg-logo text-white rounded-full text-base lg:text-lg font-work hover:bg-logo-dark transition-colors duration-300 shadow-md">
              {heroButton}
            </button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <FaChevronDown className="animate-bounce motion-reduce:animate-none text-logo text-3xl mt-4 cursor-pointer" aria-hidden="true" />
          </Link>
        </div>
      </RevealOnScroll>
    </div>
  );
}

export default Hero;

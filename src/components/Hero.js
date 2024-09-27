import React from "react";
import RevealOnScroll from "./AnimationComponents/RevealOnScroll";

const Hero = () => {
  return (
    <div className="hero flex flex-col justify-center items-center h-dvh">
      <img src="logo.png" alt="logo" className="logo h-72 p-5 md:h-80 lg:h-96"/>
      <RevealOnScroll>
        <h1 className="text-xl lg:text-3xl text-logo mt-10">Scegli, Pubblica e Comunica con Noi!</h1>
      </RevealOnScroll>
    </div>
  );
}

export default Hero;

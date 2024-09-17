import React from "react";

const Hero = () => {
  return (
    <div className="hero flex flex-col justify-center items-center h-dvh">
      <img src="logo.png" alt="hero" className="logo h-72 p-5 md:h-80 lg:h-96"/>
      <h1 className="text-2xl lg:text-3xl text-logo mt-10">Scegli, Pubblica e Comunica con Noi!</h1>
    </div>
  );
}

export default Hero;

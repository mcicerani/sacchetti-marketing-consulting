
import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const Parallax = () => {
  return (
    <ParallaxProvider>
      <div className="container-body h-[50vh] w-full m-0 overflow-hidden opa">
        <ParallaxBanner
          layers={[
            { image: "parallax.png", speed: -20 },  // Correzione del percorso
          ]}
          className="bg-container"
        >
          <div className="bg-container h-[50vh] relative flex flex-col w-full lg:w-auto lg:flex-row justify-evenly items-center">
            <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/55 flex justify-center items-center lg:rounded-lg">
                <h1 className="text-2xl lg:text-4xl text-white">Ascoltiamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/55 flex justify-center items-center lg:rounded-lg">
                <h1 className="text-2xl lg:text-4xl text-white">Analizziamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/55 flex justify-center items-center lg:rounded-lg">
                <h1 className="text-2xl lg:text-4xl text-white">Pianifichiamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/55 flex justify-center items-center lg:rounded-lg">
                <h1 className="text-2xl lg:text-4xl text-white">Progettiamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-72 border-white bg-logo/55 flex justify-center items-center lg:rounded-lg">
                <h1 className="text-2xl lg:text-4xl text-white">Realizziamo</h1>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};

export default Parallax;

import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const Parallax = () => {
  return (
    <ParallaxProvider>
      <div className="container-body h-[50vh] w-full m-0 overflow-hidden">
        <ParallaxBanner
          layers={[
            { image: "parallax.png", speed: -30 },  // Correzione del percorso
            {
              speed: -15,
              children: (
                <div className="">
                  <h1 className="text">Hello World!</h1>
                </div>
              ),
            },
            { image: "parallax.png", speed: -20 },  // Correzione del percorso
          ]}
          className="bg-container"
        >
          <div className="bg-container h-[50vh] relative flex flex-col w-full lg:w-auto lg:flex-row justify-evenly items-center">
            <div className="h-40 p-4 border-[1px] w-full lg:w-auto border-white bg-white/50 flex justify-center items-center">
                <h1 className="text-2xl lg:text-4xl text-black">Ascoltiamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-auto border-white bg-white/50 flex justify-center items-center">
                <h1 className="text-2xl lg:text-4xl text-black">Pianifichiamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-auto border-white bg-white/50 flex justify-center items-center">
                <h1 className="text-2xl lg:text-4xl text-black">Analizziamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-auto border-white bg-white/50 flex justify-center items-center">
                <h1 className="text-2xl lg:text-4xl text-black">Progettiamo</h1>
            </div>
            <div className="h-40 p-4 border-[1px] w-full lg:w-auto border-white bg-white/50 flex justify-center items-center">
                <h1 className="text-2xl lg:text-4xl text-black">Realizziamo</h1>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};

export default Parallax;
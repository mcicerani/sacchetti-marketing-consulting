import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const Parallax = ({ image, height = "50vh", children }) => {  // Aggiungi 'children'
  return (
    <ParallaxProvider>
      <div className={`container-body w-full m-0 overflow-hidden`} style={{ height }}>
        <ParallaxBanner
          layers={[
            { image: image, speed: -40 },
          ]}
          className="bg-container"
        >
          <div className={"bg-container h-[50vh] relative flex flex-col w-full lg:w-auto lg:flex-row justify-evenly items-center"} style={{height}}>
            {children}  {/* Renderizza i children all'interno del banner */}
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};

export default Parallax;
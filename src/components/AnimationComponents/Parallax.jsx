import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Parallax = ({ image, height = "50vh", children }) => {
  return (
    <div className="w-full m-0 overflow-hidden" style={{ height }}>
      <ParallaxBanner
        layers={[{ image, speed: -40 }]}
        className="bg-container"
      >
        <div
          className="relative flex flex-col w-full lg:flex-row justify-evenly items-center"
          style={{ height }}
        >
          {children}
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Parallax;

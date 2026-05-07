import React, { useEffect, useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const Parallax = ({ image, height = "50vh", children }) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div className="w-full m-0 overflow-hidden" style={{ height }}>
      <ParallaxBanner
        layers={[{ image, speed: reducedMotion ? 0 : -40 }]}
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

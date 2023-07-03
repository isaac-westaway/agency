
"use client"

import React, { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const MobileGlobe: React.FC = () => {
  const GlobeEl = useRef<GlobeMethods>(null);

  useEffect(() => {
    if (GlobeEl.current) {
        GlobeEl.current.controls().enableZoom = false;
        GlobeEl.current.controls().autoRotate = true;
        GlobeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  return (
    <div
      className="relative"
    >
        <Globe
          width={390}
          height={500}
          ref={GlobeEl as React.MutableRefObject<GlobeMethods>}
          globeImageUrl="https://www.solidity.io/static/images/world.jpg"
          backgroundColor="rgba(0,0,0,0)"
        />
    </div>
  );
}

export default MobileGlobe
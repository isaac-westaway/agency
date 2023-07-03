import React, { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

import {
  useDesktop,
  useMobile,
  useTablet,
} from "@/src/app/components/hooks/mediaQueries";

const GlobeComponent: React.FC = () => {
  const MobileGlobeEl = useRef<GlobeMethods>(null);
  const DesktopGlobeEl = useRef<GlobeMethods>(null);
  const TabletGlobeEl = useRef<GlobeMethods>(null);

  const Mobile = useMobile();
  const Tablet = useTablet();
  const Desktop = useDesktop();

  useEffect(() => {
    if (DesktopGlobeEl.current) {
      DesktopGlobeEl.current.controls().enableZoom = false;
      DesktopGlobeEl.current.controls().autoRotate = true;
      DesktopGlobeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  useEffect(() => {
    if (MobileGlobeEl.current) {
      MobileGlobeEl.current.controls().enableZoom = false;
      MobileGlobeEl.current.controls().autoRotate = true;
      MobileGlobeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  useEffect(() => {
    if (TabletGlobeEl.current) {
      TabletGlobeEl.current.controls().enableZoom = false;
      TabletGlobeEl.current.controls().autoRotate = true;
      TabletGlobeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  return (
    <div
      className="relative"
    >
      {Desktop && (
        <Globe
          width={480}
          height={640}
          ref={DesktopGlobeEl as React.MutableRefObject<GlobeMethods>}
          globeImageUrl="https://www.solidity.io/static/images/world.jpg"
          backgroundColor="rgba(0,0,0,0)"
        />
      )}
      {Tablet && (
        <Globe
          width={400}
          height={500}
          ref={TabletGlobeEl as React.MutableRefObject<GlobeMethods>}
          globeImageUrl="https://www.solidity.io/static/images/world.jpg"
          backgroundColor="rgba(0,0,0,0)"
        />
      )}
      {Mobile && (
        <Globe
          width={390}
          height={500}
          ref={MobileGlobeEl as React.MutableRefObject<GlobeMethods>}
          globeImageUrl="https://www.solidity.io/static/images/world.jpg"
          backgroundColor="rgba(0,0,0,0)"
        />
      )}
    </div>
  );
};

export default GlobeComponent;

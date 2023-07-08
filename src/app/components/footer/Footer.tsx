"use client";

import {
  useDesktop,
  useMobile,
  useTablet,
} from "@/src/app/components/hooks/mediaQueries";

import DesktopFooter from "./feet/DesktopFooter";
import MobileFooter from "./feet/MobileFooter";
import TabletFooter from "./feet/TabletFooter";

const Footer: React.FC = () => {
  const Mobile = useMobile();
  const Tablet = useTablet();
  const Desktop = useDesktop();

  return (
    <footer className="backdrop-blur-3xl w-full h-52">
      {Mobile && <MobileFooter />}
      {Tablet && <TabletFooter />}
      {Desktop && <DesktopFooter />}
    </footer>
  );
};

export default Footer;

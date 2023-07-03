"use client";

import {
  useDesktop,
  useMobile,
  useTablet,
} from "@/src/app/components/hooks/mediaQueries";
import Container from "../Container";

import DesktopFooter from "./feet/DesktopFooter";
import MobileFooter from "./feet/MobileFooter";
import TabletFooter from "./feet/TabletFooter";

const Footer: React.FC = () => {
  const Mobile = useMobile();
  const Tablet = useTablet();
  const Desktop = useDesktop();

  return (
    <footer className="backdrop-blur-3xl w-full h-52">
      <Container>
        {Mobile && (
          <div>
            <MobileFooter />
          </div>
        )}
        {Tablet && (
          <div>
            <TabletFooter />
          </div>
        )}
        {Desktop && (
          <div className="">
            <DesktopFooter />
          </div>
        )}
      </Container>
    </footer>
  );
};

export default Footer;

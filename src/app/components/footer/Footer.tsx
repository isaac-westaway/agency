"use client";

import { useDesktop, useMobile } from "@/src/app/components/utils/mediaQueries";
import Container from "../Container";

import DesktopFooter from "./feet/DesktopFooter";
import MobileFooter from "./feet/MobileFooter";

const Footer: React.FC = () => {
  const Mobile = useMobile();
  const Desktop = useDesktop();

  return (
    <footer className="backdrop-blur-3xl w-full h-52">
      <Container>
        {Mobile && (
          <div>
            <MobileFooter />
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

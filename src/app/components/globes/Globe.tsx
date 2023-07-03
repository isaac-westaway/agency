"use client";

import {
  useDesktop,
  useMobile,
  useTablet,
} from "@/src/app/components/hooks/mediaQueries";
import Container from "../Container";

import MobileGlobe from "@/src/app/components/globes/globe/MobileGlobe";
import TabletGlobe from "@/src/app/components/globes/globe/TabletGlobe";
import DesktopGlobe from "@/src/app/components/globes/globe/DesktopGlobe";

const Globe: React.FC = () => {
  const Mobile = useMobile();
  const Tablet = useTablet();
  const Desktop = useDesktop();

  return (
      <Container>
        {Mobile && <MobileGlobe />}
        {Tablet && <TabletGlobe />}
        {Desktop && <DesktopGlobe />}
      </Container>
  );
};

export default Globe;

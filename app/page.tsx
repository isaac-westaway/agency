import Hero from "./components/hero/Hero";
import PricingPlans from "./components/pricing/Pricing";
import FramerReveal from "./components/utils/Reveal";

export default function Home() {
  return (
    <>
        <span className="text-white">
          <Hero heading="Design." heading2="Develop." heading3="Deploy." message="this is a test"/>
        </span>
      <PricingPlans/>
    </>
  )
}

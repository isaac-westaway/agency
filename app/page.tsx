import Hero from "./components/hero/Hero";
import PricingPlans from "./components/pricing/Pricing";
import FramerReveal from "./components/utils/Reveal";

export default function Home() {
  return (
    <>
      <FramerReveal>
        <span className="text-white">
          <Hero heading="Design." heading2="Develop." heading3="Deploy." message="Spark Local is the #1 choice for small businesses looking for affordable website production."/>
        </span>
      </FramerReveal>
      <PricingPlans/>
    </>
  )
}

import Hero from "./components/hero/Hero";
import PricingPlans from "./components/pricing/Pricing";
import FramerReveal from "./components/utils/Reveal";

export default function Home() {
  return (
    <>
      <section>
        <span className="text-white">
          <Hero heading="Design." heading2="Develop." heading3="Deploy." message="this is a test"/>
        </span>
      </section>
      <section>
        <PricingPlans/>
      </section>
    </>
  )
}

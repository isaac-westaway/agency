import Hero from "./components/hero/HeroReWrite";
import PricingPlans from "./components/pricing/Pricing";
import FramerReveal from "./components/utils/Reveal";

export default function Home() {
  return (
    <>
      <section>
        <span className="text-white">
          <Hero/>
        </span>
      </section>
      <section>
        <PricingPlans/>
      </section>
    </>
  )
}

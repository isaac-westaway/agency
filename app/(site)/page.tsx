import Hero from "@/app/components/hero/Hero";
import PricingPlans from "@/app/components/pricing/Pricing";
import FramerReveal from "@/app/components/utils/Reveal";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth	snap-x">
        <section id="top" className="snap-start">
          <Hero />
        </section>
          <section id="pricing" className="scroll-p-60">
            <PricingPlans />
          </section>
      </div>
    </>
  )
}

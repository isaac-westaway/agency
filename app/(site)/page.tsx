import Hero from "@/app/components/hero/Hero";
import PricingPlans from "@/app/components/pricing/Pricing";
import FramerReveal from "@/app/components/utils/Reveal";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth	">
        <Hero />
        <PricingPlans />
      </div>
    </>
  )
}

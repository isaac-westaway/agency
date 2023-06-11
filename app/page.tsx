import Hero from "./components/hero/Hero";
import PricingPlans from "./components/pricing/Pricing";

export default function Home() {
  return (
    <div>
      <Hero heading="Design. " heading2="Develop. " heading3="Deploy. " message="Spark Local is the #1 choice for small businesses looking for affordable website production."/>
      <PricingPlans/>
    </div>
  )
}

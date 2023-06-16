import Hero from "@/app/components/hero/Hero";
import PricingPlans from "@/app/components/pricing/Pricing";
import FramerReveal from "@/app/components/utils/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth	snap-x">
        <section id="top" className="snap-start">
          <Hero />
        </section>
        <section id="body" className="snap-start">
          <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-32 sm:-translate-y-64 grid grid-cols-2 sm:grid-cols-1 grid-row">
              <div className="w-full justify-end pt-5">
                <span className="text-3xl sm:text-xl font-extrabold sm:leading-tight sm:tracking-tight">
                    View our exceptional range of services
                </span>
                <p className="mt-4 max-w-3xl text-lg text-slate-500">
                    Choose an affordable plan that is packed with the best features for
                    enganging your audience, creating customer loyalty and driving sales.
                </p>
              </div>
              <div className="relative flex justify-center sm:justify-start top-0 left-0 w-full">
                <Image src="/about-image.svg" alt="" height="300" width="300" className="cursor-pointer p-2"/>
              </div>
          </div>
        </section>
        <section id="pricing" className="scroll-p-60">
          <PricingPlans />
        </section>
      </div>
    </>
  )
}

import Hero from "@/app/components/hero/Hero";
import PricingPlans from "@/app/components/pricing/Pricing";
import FramerReveal from "@/app/components/utils/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth	snap-x h-[1920px] overflow-hidden">
        <section id="top" className="snap-start">
          <Hero />
        </section>
        <section id="body" className="snap-start px-2">
          <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-60 sm:-translate-y-48 grid grid-cols-2 sm:grid-cols-1 grid-row">
            <div className="absolute -top-11 -right-28 overflow-hidden object-none">
              <svg
                width="238"
                height="531"
                viewBox="0 0 238 531"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  x="422.819"
                  y="-70.8145"
                  width="196"
                  height="541.607"
                  rx="2"
                  transform="rotate(51.2997 422.819 -70.8145)"
                  fill="url(#paint0_linear_83:2)"
                ></rect>
                <rect
                  opacity="0.3"
                  x="426.568"
                  y="144.886"
                  width="59.7544"
                  height="541.607"
                  rx="2"
                  transform="rotate(51.2997 426.568 144.886)"
                  fill="url(#paint1_linear_83:2)"
                ></rect>
                <defs>
                  <linearGradient
                    id="paint0_linear_83:2"
                    x1="517.152"
                    y1="-251.373"
                    x2="517.152"
                    y2="459.865"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4A6CF7"></stop>
                    <stop
                      offset="1"
                      stop-color="#4A6CF7"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_83:2"
                    x1="455.327"
                    y1="-35.673"
                    x2="455.327"
                    y2="675.565"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4A6CF7"></stop>
                    <stop
                      offset="1"
                      stop-color="#4A6CF7"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="w-full justify-end pt-5">
              <span className="text-3xl sm:text-xl font-extrabold sm:leading-tight sm:tracking-tight">
                View our exceptional range of services
              </span>
              <p className="mt-4 max-w-3xl text-lg text-slate-500">
                Choose an affordable plan that is packed with the best features
                for enganging your audience, creating customer loyalty and
                driving sales.
              </p>
            </div>
            <div className="relative flex justify-center sm:justify-start top-0 left-0 w-full">
              <Image
                src="/about-image.svg"
                alt=""
                height="300"
                width="300"
                className="cursor-pointer p-2"
              />
            </div>
          </div>
        </section>
        <section>
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-60 sm:-translate-y-48">
            <div className="w-full justify-end mt-12 border">
              <div className="flex justify-center text-center items-center font-extrabold text-3xl">
                A full tech and creative team
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-1 text-center p-3 gap-2">
                <div className="text-2xl border">
                  Hi Guys
                </div>
                <div className="text-2xl border">
                  Hi Guys
                </div>
                <div className="text-2xl border">
                  Hi Guys
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

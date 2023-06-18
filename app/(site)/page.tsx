import Image from "next/image";
import Design from "@/public/design.svg";
import Develop from "@/public/develop.svg";
import Deploy from "@/public/deploy.svg";

import Timeline from "@/public/timeline.svg"

import Hero from "@/app/components/hero/Hero";
import FramerReveal from "@/app/components/utils/Reveal";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth	snap-x">
        <section id="top" className="snap-start">
          <Hero />
        </section>
        <section id="body" className="snap-start px-2 relative">
          <div className="absolute sm:-top-20 top-36 right-0 sm:-right-0 object-right">
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
                  <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
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
                  <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-60 xl:translate-y-48 sm:-translate-y-48 grid grid-cols-2 sm:grid-cols-1 grid-row">
            <FramerReveal>
              <div className="w-full justify-end pt-5">
                <span className="text-3xl sm:text-xl font-extrabold sm:leading-tight sm:tracking-tight">
                  View our exceptional range of services
                </span>
                <p className="mt-4 max-w-3xl text-lg text-slate-500">
                  Choose an affordable plan that is packed with the best
                  features for enganging your audience, creating customer
                  loyalty and driving sales.
                </p>
              </div>
            </FramerReveal>
            <div className="relative flex justify-center sm:justify-center sm:pt-10 top-0 left-0 w-full">
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
        <section className="relative">
          <div className="absolute top-1/3 left-0">
            <Image src={Timeline} alt=""/>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-60 sm:-translate-y-48 pb-20">
            <div className="border-dark-50 border-t-[1px] sm:mt-5 mt-14">
              <FramerReveal>
                <div className="w-full justify-end">
                  <FramerReveal>
                    <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-9 pb-9">
                      A full tech and creative team
                    </div>
                  </FramerReveal>
                  <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                    <FramerReveal>
                      <div className="testimonial-container relative shadow-lg p-8 flex flex-col text-2xl border-[2px] border-dark-50 overflow-hidden rounded-2xl hover:border-[#FBFAF6] hover:text-[#FBFAF6] transition ease-in-out duration-500 h-[26rem]">
                        <div className="absolute top-5 right-12">
                          <Image src={Design} alt="" className="w-10 h-10" />
                        </div>
                        <div className="absolute -mx-8 bottom-0 w-full">
                        </div>
                        <h3 className="text-2xl font-semibold leading-5 z-50">
                          Design
                        </h3>
                        <ul className="mt-4 space-y-4 flex-1 z-50">
                          <li className="flex text-lg leading-8  xl:text-base">
                            <span className="text-start">
                              <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                                Just the beginning!
                              </span>
                              <div className="mt-2">
                                Send us your design ideas for your website and our
                                UI/UX team will turn them into a reality!
                              </div>
                            </span>
                          </li>
                        </ul>
                        <div className="mt-4 items-center text-center z-50">
                          <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white hover:text-orange-600 hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </FramerReveal>
                    <FramerReveal>
                      <div className="testimonial-container shadow-lg p-8 overflow-hidden flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem]">
                        <div className="absolute top-[1.2rem] right-11">
                          <Image src={Develop} alt="" className="w-12 h-12" />
                        </div>
                        <div className="absolute -mx-8 bottom-0 w-full"></div>
                        <h3 className="text-2xl font-semibold leading-5 z-50">
                          Development
                        </h3>
                        <ul className="mt-4 space-y-4 flex-1 z-50">
                          <li className="flex flex-1 text-lg xl:text-base leading-8">
                            <span className="text-start">
                              <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                                Onto the development!
                              </span>
                              <div className="mt-2">
                                Our expert team of designers will create a
                                visually stunning and user-friendly website that
                                aligns with your brand and captures the attention
                                of your target audience.
                              </div>
                              {/*<br />
                              Monthly Website Search Engine Optimization (SEO) also come standard with every pricing plan! Rest assured knowing your website will make it into peoples searches*/}
                            </span>
                          </li>
                        </ul>
                        <div className="mt-4 items-center text-center z-50">
                          <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white hover:text-orange-600 hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </FramerReveal>
                    <FramerReveal>
                      <div className="testimonial-container shadow-lg p-8 flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem]">
                        <div className="absolute top-[1.3rem] right-11">
                          <Image src="deploy.svg" alt="" className="hover:fill-white fill" width="48" height="48"/>
                        </div>
                        <h3 className="text-2xl font-semibold leading-5 z-50">
                          Deployment
                        </h3>
                        <ul className="mt-4 flex-1 z-50">
                          <li className="flex flex-col text-lg leading-8  xl:text-base">
                            <span className="text-start">
                              <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                                The final step!
                              </span>
                              <div className="mt-2">
                                We&#39;ll handle the seamless deployment of your
                                website, ensuring it&#39;s optimized for
                                performance, security, and accessibility across
                                different platforms and devices.
                              </div>
                            </span>
                          </li>
                        </ul>
                        <div className="mt-4 items-center text-center z-50">
                          <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white hover:text-orange-600 hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                            READ MORE
                          </span>
                        </div>
                      </div>
                    </FramerReveal>
                  </div>
                </div>
              </FramerReveal>
            </div>
          </div>
        </section>
        <div className="h-[1920px]"></div>
      </div>
    </>
  );
}

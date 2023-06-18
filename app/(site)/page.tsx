import Image from "next/image";
import Head from "next/head";

import Design from "@/public/design.svg";
import Develop from "@/public/develop.svg";

import Timeline from "@/public/timeline.svg";

import Hero from "@/app/components/hero/Hero";
import RevealOnce from "@/app/components/utils/RevealOnce";
import FlyIn from "@/app/components/utils/FlyIn";
import RevealAlways from "@/app/components/utils/RevealAlways";

export default function Home() {
  return (
    <div className="scroll-smooth	snap-x overscroll-x-none">
      <Head>
        <title>Digispark Home</title>
        <meta name="google-site-verification" content="dZjgHKcLiYVkCgM61GF57iRGjhh9j1wzVlfQmaGmLL0" />
      </Head>
      <section id="top" className="snap-start">
        <Hero />
      </section>
      <section className="snap-start px-2 relative">
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-60 xl:translate-y-48 sm:-translate-y-48 grid grid-cols-2 sm:grid-cols-1 grid-row">
          <RevealAlways>
            <div className="w-full justify-end pt-5">
              <span className="text-3xl sm:text-xl font-extrabold sm:leading-tight sm:tracking-tight">
                View our exceptional range of services
              </span>
              <div className="mt-4 max-w-3xl text-lg text-slate-500 z-50">
                Choose an affordable plan that is packed with the best
                features for enganging your audience, creating customer
                loyalty and driving sales.
              </div>
            </div>
          </RevealAlways>
          <div className="overflow-x-hidden">
            <FlyIn flyInRight={true}>
              <div className="relative flex justify-center sm:justify-center sm:pt-10 top-0 left-0 w-full">
                <Image
                  src="/about-image.svg"
                  alt=""
                  height="300"
                  width="300"
                  className="cursor-pointer p-2"
                />
              </div>
            </FlyIn>
          </div>
        </div>
      </section>
      <section className="relative select-all pointer-events-none">
        <div className="absolute top-1/4 left-0 pointer-events-none">
          <Image src={Timeline} alt="" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white translate-y-60 sm:-translate-y-48 pb-20 pointer-events-auto">
          <div className="border-dark-50 border-t-[1px] sm:mt-5 mt-14">
            <RevealOnce>
              <div className="w-full justify-end">
                <RevealOnce>
                  <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-9 pb-9 select-text">
                    A full tech and creative team
                  </div>
                </RevealOnce>
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                  <RevealOnce>
                    <div className="testimonial-container relative shadow-lg p-8 flex flex-col text-2xl border-[2px] border-dark-50 overflow-hidden rounded-2xl hover:border-[#FBFAF6] hover:text-[#FBFAF6] transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                      <div className="absolute top-5 right-12">
                        <Image src={Design} alt="" className="w-10 h-10" />
                      </div>
                      <div className="absolute -mx-8 bottom-0 w-full"></div>
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
                              Send us your design ideas for your website and
                              our UI/UX team will turn them into a reality!
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
                  </RevealOnce>
                  <RevealOnce>
                    <div className="testimonial-container shadow-lg p-8 overflow-hidden flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
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
                              aligns with your brand and captures the
                              attention of your target audience.
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
                  </RevealOnce>
                  <RevealOnce>
                    <div className="testimonial-container shadow-lg p-8 flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                      <div className="absolute top-[1.3rem] right-11">
                        <Image
                          src="deploy.svg"
                          alt=""
                          className="hover:fill-white fill"
                          width="48"
                          height="48"
                        />
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
                  </RevealOnce>
                </div>
              </div>
            </RevealOnce>
          </div>
        </div>
      </section>
      <div className="h-[1920px]"></div>
    </div>
  );
}

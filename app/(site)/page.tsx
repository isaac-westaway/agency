import Image from "next/image";
import Head from "next/head";

import Design from "@/public/design.svg";
import Develop from "@/public/develop.svg";

import Timeline from "@/public/timeline.svg";

import Hero from "@/app/components/hero/Hero";
import RevealOnce from "@/app/components/utils/RevealOnce";
import FlyIn from "@/app/components/utils/FlyIn";
import RevealAlways from "@/app/components/utils/RevealAlways";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="scroll-smooth	snap-x overscroll-x-none">
      <Head>
        <title>Digispark Home</title>
        <meta
          name="google-site-verification"
          content="dZjgHKcLiYVkCgM61GF57iRGjhh9j1wzVlfQmaGmLL0"
        />
      </Head>
      <section id="top" className="snap-start">
        <Hero />
      </section>
      <section className="snap-start px-2 relative translate-y-60 xl:translate-y-28 sm:-translate-y-48 md:translate-y-4 lg:translate-y-8">
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white  grid grid-cols-2 sm:grid-cols-1 grid-row">
          <RevealOnce>
            <div className="w-full justify-end pt-5">
              <span className="text-3xl sm:text-xl font-extrabold sm:leading-tight sm:tracking-tight">
                View our exceptional range of services
              </span>
              <div className="mt-4 max-w-3xl text-lg text-gray-400 text-opacity-80 z-50">
                Choose an affordable plan that is packed with the best features
                for enganging your audience, creating customer loyalty and
                driving sales.
              </div>
            </div>
          </RevealOnce>
          <div className="overflow-x-hidden">
            <FlyIn flyInRight={true}>
              <div className="relative flex justify-center sm:justify-center sm:pt-10 top-0 left-0 w-full">
                <Image
                  src="/about-image.svg"
                  alt="Website Design Services"
                  height="300"
                  width="300"
                  className="cursor-pointer p-2"
                />
              </div>
            </FlyIn>
          </div>
        </div>
      </section>
      <section className="relative translate-y-72 xl:translate-y-32 sm:-translate-y-48 md:translate-y-14 lg:translate-y-[4.4rem]">
        <div className="absolute top-1/12 left-0 -z-50">
          <Image src={Timeline} alt="" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white pb-20 pointer-events-auto z-50">
          <div className="border-dark-50 border-t-[1px] sm:mt-5">
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
                        <Image
                          src={Design}
                          alt="Design Symbol"
                          className="w-10 h-10"
                        />
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
                            <div className="mt-2 text-gray-200 text-opacity-95">
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
                  </RevealOnce>
                  <RevealOnce>
                    <div className="testimonial-container shadow-lg p-8 overflow-hidden flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                      <div className="absolute top-[1.2rem] right-11">
                        <Image
                          src={Develop}
                          alt="Develop Symbol"
                          className="w-12 h-12"
                        />
                      </div>
                      <div className="absolute -mx-8 bottom-0 w-full"></div>
                      <h3 className="text-2xl font-semibold leading-5 z-50">
                        Develop
                      </h3>
                      <ul className="mt-4 space-y-4 flex-1 z-50">
                        <li className="flex flex-1 text-lg xl:text-base leading-8">
                          <span className="text-start">
                            <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                              Onto the development!
                            </span>
                            <div className="mt-2 text-gray-200 text-opacity-95">
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
                  </RevealOnce>
                  <RevealOnce>
                    <div className="testimonial-container shadow-lg p-8 flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                      <div className="absolute top-[1.3rem] right-11">
                        <Image
                          src="deploy.svg"
                          alt="Deploy Symbol"
                          className="hover:fill-white fill"
                          width="48"
                          height="48"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold leading-5 z-50">
                        Deploy
                      </h3>
                      <ul className="mt-4 flex-1 z-50">
                        <li className="flex flex-col text-lg leading-8  xl:text-base">
                          <span className="text-start">
                            <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                              The final step!
                            </span>
                            <div className="mt-2 text-gray-200 text-opacity-95">
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
          </div>
        </div>
      </section>
      <section className="translate-y-64 sm:-translate-y-52 xl:translate-y-24 md:translate-y-6 lg:translate-y-8">
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 text-white pb-20 pointer-events-auto">
          <div className="border-dark-50 border-t-[1px]">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-5">
              <div className="mt-5 md:mt-2 lg:mt-1 p-4">
                <div className="text-3xl border-b-[1px] border-dark-50 pb-2 font-semibold">
                  The design process.
                </div>
                <div className="p-1 pt-2 font-medium leading-relaxed text-[#F7F7F7]">
                  <RevealOnce>
                    <span>
                      We specialize in transforming digital experiences through
                      exceptional UI/UX design for Web, Mobile App, and beyond.
                      Our talented team creates visually captivating and
                      user-friendly interfaces that make a lasting impression.
                    </span>
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    <span>
                      We carefully consider every detail, from intuitive
                      navigation to eye-catching visuals, ensuring seamless
                      interactions across platforms.
                    </span>
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    <span>
                      Our goal is to deliver designs that not only look great
                      but also enhance usability and engagement. Whether you
                      need a Website revamp, or a comprehensive UI/UX solution,
                      we have the skills to exceed your expectations.
                    </span>
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    You can submit design ideas for your website or product
                    through our email
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    <span className="justify-center w-full flex font-semibold">
                      example@gmail.com
                    </span>
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    <span>
                      Just tell us your project name (so we can verify
                      you&#39;re project actually exists) and attach the design
                      files in the email!
                    </span>
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    <span>
                      Your submissions can be in the form of Microsoft Word
                      documents, PowerPoint, Adobe Illustrator, Photoshop or
                      Google Sheets & Slides.
                    </span>
                  </RevealOnce>
                </div>
              </div>
              <div className="mt-5 flex items-center translate-y-2 justify-center">
                <Image
                  src="/design.webp"
                  height="1034"
                  width="1080"
                  alt="UI/UX"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <span>Design Develop Deploy &#123;bonus iterate&#125;</span>
        <span>Who Are We?</span>
        <span>Why we stand out from the rest</span>
        <span>Get in contact with us</span>
      </section>
    </div>
  );
}

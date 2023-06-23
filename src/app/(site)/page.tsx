import Image from "next/image";
import Head from "next/head";
import {
  BsSpeedometer2,
  BsArrowsFullscreen,
  BsArrowDownUp,
  BsFillTerminalFill,
} from "react-icons/bs";

import Design from "@/public/design.svg";
import Develop from "@/public/develop.svg";
import Timeline from "@/public/timeline.svg";

import Hero from "@/src/app/components/hero/Hero";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import ContactForm from "@/src/app/components/contact/ContactForm";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="scroll-smooth snap-x overscroll-x-none min-h-screen ml-11 mr-11 sm:ml-6 sm:mr-6">
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
      <div className="">
        <section className="relative mt-[11.4rem] sm:-mt-[13.7rem] md:mt-[0.4rem] lg:mt-[2rem] xl:mt-[5rem] border-t-[1px] border-dark-50 text-white">
          <div className="absolute top-1/12 -top-12 -right-11 -z-50">
            <Image src={Timeline} style={{ transform: "scaleX(-1)" }} alt="" />
          </div>
          <div className="w-full">
            <RevealOnce>
              <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-8 select-text">
                <span className="sm:w-full md:w-full">
                  A full tech and creative team at your fingertips.
                </span>
              </div>
            </RevealOnce>
            <RevealOnce>
              <div className="flex justify-center text-center items-center font-normal text-lg py-8 select-text">
                <span className="text-gray-400">
                  We specialise in UI/UX design, website development and website
                  deployment.
                  <div className="text-lg leading-8 text-gray-400 font-medium">
                    The full stack.
                  </div>
                </span>
              </div>
            </RevealOnce>
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
              <RevealOnce>
                <div className="testimonial-container group relative shadow-lg p-8 flex flex-col text-2xl border-[2px] border-dark-50 overflow-hidden rounded-2xl hover:border-[#FBFAF6] hover:text-[#FBFAF6] transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                  <div className="absolute top-5 right-12">
                    <Image
                      src={Design}
                      alt="Design Symbol"
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="absolute -mx-8 bottom-0 w-full"></div>
                  <h3 className="text-2xl font-semibold leading-5 z-50 tracking-wider">
                    Develop
                  </h3>
                  <ul className="mt-2 space-y-4 flex-1 z-50">
                    <li className="flex text-lg leading-8  xl:text-base">
                      <span className="text-start">
                        <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                          Professional UI/UX Design
                        </span>
                        <div className="mt-2 text-gray-200 text-opacity-95 text-base">
                          UI/UX is the User Interface (UI) and User Experience
                          (UX) of an app or a website.
                        </div>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 items-center text-center z-50">
                    <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                      <a
                        className="hover:text-orange-400 hover:border-b-orange-400 hover:border-b-[2px] scroll-pt-96 snap-start"
                        href="#design"
                      >
                        READ MORE
                      </a>
                    </span>
                  </div>
                </div>
              </RevealOnce>
              <RevealOnce>
                <div className="testimonial-container group relative shadow-lg p-8 flex flex-col text-2xl border-[2px] border-dark-50 overflow-hidden rounded-2xl hover:border-[#FBFAF6] hover:text-[#FBFAF6] transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                  <div className="absolute top-5 right-12">
                    <Image
                      src={Design}
                      alt="Design Symbol"
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="absolute -mx-8 bottom-0 w-full"></div>
                  <h3 className="text-2xl font-semibold leading-5 z-50 tracking-wider">
                    Design
                  </h3>
                  <ul className="mt-2 space-y-4 flex-1 z-50">
                    <li className="flex text-lg leading-8  xl:text-base">
                      <span className="text-start">
                        <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                          Industry leading web development
                        </span>
                        <div className="mt-2 text-gray-200 text-opacity-95 text-base">
                          UI/UX is the User Interface (UI) and User Experience
                          (UX) of an app or a website.
                        </div>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 items-center text-center z-50">
                    <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                      <a
                        className="hover:text-orange-400 hover:border-b-orange-400 hover:border-b-[2px] scroll-pt-96 snap-start"
                        href="#design"
                      >
                        READ MORE
                      </a>
                    </span>
                  </div>
                </div>
              </RevealOnce>
              <RevealOnce>
                <div className="testimonial-container group shadow-lg p-8 flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
                  <div className="absolute top-[1.3rem] right-11">
                    <Image
                      src="deploy.svg"
                      alt="Deploy Symbol"
                      className="hover:fill-white fill"
                      width="48"
                      height="48"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold leading-5 z-50 tracking-wider">
                    Deploy
                  </h3>
                  <ul className="mt-2 flex-1 z-50">
                    <li className="flex flex-col text-lg leading-8  xl:text-base">
                      <span className="text-start">
                        <span className="flex border-b-[1px] border-dark-50 w-full p-2 mb-1 justify-center">
                          Streamlined digital deployment
                        </span>
                        <div className="mt-2 text-gray-200 text-opacity-95">
                          We&#39;ll handle the seamless deployment of your
                          website, ensuring it&#39;s optimized for performance,
                          security, and accessibility across different platforms
                          and devices.
                        </div>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 items-center text-center z-50">
                    <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                      <a
                        className="hover:text-orange-400 hover:border-b-orange-400 hover:border-b-[2px]"
                        href="#deploy"
                      >
                        READ MORE
                      </a>
                    </span>
                  </div>
                </div>
              </RevealOnce>
            </div>
          </div>
          <RevealAlways>
            <div className="flex items-center justify-center py-8">
              <button className="text-center sm:text-sm px-3.5 py-2.5 rounded-lg bg-[#4A6CF7] hover:bg-white hover:text-black transition duration-200 ease-in-out">
                Start building your online presence
              </button>
            </div>
          </RevealAlways>
        </section>
      </div>
      <section className="relative text-white overflow-x-hidden border-t-[1px] border-dark-50">
        <div className="relative overflow-y-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 px-4">
            <div className="h-full relative">
              <div className="mt-4 py-4 text-3xl sm:text-lg font-semibold border-y-[1px] border-dark-50">
                We are committed to delivering the highest quality of work
              </div>
              <div className="text-base font-light py-4 leading-relaxed">
                Transforming Brisbane&#39;s digital landscape since 2012, DigiSpark
                is your go-to online service agency. Our team of experts in web
                design, development, digital strategy, and marketing create
                tailored solutions for your business. From visually stunning
                websites to ROI-driven marketing campaigns, we deliver results.
                Whether you&#39;re a small business or a large enterprise, let&#39;s
                connect and embark on a digital journey together.
              </div>
              <div className="flex justify-center w-full pt-16 sm:pt-8 pb-20 items-end">
                <RevealAlways>
                  <div
                    className="rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200"
                  >
                    I&#39;m Interested!
                  </div>
                </RevealAlways>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-x-hidden w-full px-4 bg-dark-50 bg-opacity-10 rounded-2xl">
              <FlyIn flyInRight={true}>
                <Image
                  src="/design.webp"
                  alt="UI/UX"
                  width="600"
                  height="800"
                  className="z-[1000] object-contain mx-auto"
                />
              </FlyIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

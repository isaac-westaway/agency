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
    <div className="scroll-smooth snap-x overscroll-x-none min-h-screen">
      <Head>
        <title>Digispark Home</title>
        <meta
          name="google-site-verification"
          content="dZjgHKcLiYVkCgM61GF57iRGjhh9j1wzVlfQmaGmLL0"
        />
      </Head>
      <section id="top" className="snap-start h-screen">
        <Hero />
      </section>
      <section className="relative -mt-1 md:mt-2 lg:mt-2 xl:mt-2 border-t-[1px] border-dark-50 text-white ml-11 mr-11">
        <div className="absolute top-1/12 -left-11 -z-50">
          <Image src={Timeline} alt="" />
        </div>
        <div className="w-full">
          <RevealOnce>
            <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-8 select-text">
              <span className="w-1/2 sm:w-full tracking-wider">
                A full tech and creative team at your fingertips.
              </span>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="flex justify-center text-center items-center font-normal text-lg py-8 select-text tracking-wider">
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
                <h3 className="text-2xl font-semibold leading-5 z-50">
                  Design
                </h3>
                <ul className="mt-4 space-y-4 flex-1 z-50">
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
              <div className="testimonial-container group shadow-lg p-8 overflow-hidden flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[26rem] backdrop-blur-sm">
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
                        Industry leading web development
                      </span>
                      <div className="mt-2 text-gray-200 text-opacity-95">
                        We develop
                      </div>
                    </span>
                  </li>
                </ul>
                <div className="mt-4 items-center text-center z-50">
                  <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                    <a
                      className="hover:text-orange-400 hover:border-b-orange-400 hover:border-b-[2px]"
                      href="#develop"
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
                <h3 className="text-2xl font-semibold leading-5 z-50">
                  Deploy
                </h3>
                <ul className="mt-4 flex-1 z-50">
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
        <div className="flex items-center justify-center py-8">
          <button className="text-center sm:text-sm px-6 py-3 rounded-2xl bg-[#4A6CF7] hover:bg-white hover:text-black transition duration-200 ease-in-out">
            Start building your online presence
          </button>
        </div>
      </section>
      <section className="relative text-white overflow-x-hidden">
        <div className="ml-11 mr-11 border-t-[1px] border-dark-50"></div>
        <div className="absolute top-32 sm:top-[66rem] md:top-[56rem] lg:top-[56rem] xl:top-40 -right-[4.2rem] md:right-0 lg:right-0 xl:-right-40 overflow-x-hidden">
          <Image
            src="/page-break.svg"
            width="1000"
            height="1000"
            alt=""
            className=""
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="relative pointer-events-auto py-8 ml-11 mr-11 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0">
            <div className="">
              <div className="text-3xl border-b-[1px] border-dark-50 pb-2 font-semibold text-[#e5e4e4] sm:text-center">
                We deliver the
                <span className="font-bold"> highest quality</span> work
              </div>
              <div className="pt-2 font-medium leading-relaxed text-gray-200 text-opacity-95 sm:text-center">
                <RevealOnce>
                  We specialize in transforming digital experiences
                  through&nbsp;
                  <b>exceptional UI/UX design</b> for Web, Mobile App, and
                  beyond. Our talented team creates visually captivating and
                  user-friendly interfaces that make a lasting impression.
                </RevealOnce>
                <br />
                <RevealOnce>
                  We carefully consider every detail, from intuitive navigation
                  to eye-catching visuals, ensuring seamless interactions across
                  platforms.
                </RevealOnce>
                <br />
                <RevealOnce>
                  Our goal is to deliver designs that not only look great but
                  also enhance usability and engagement. Whether you need a
                  Website revamp, or a comprehensive UI/UX solution, we have the
                  skills to exceed your expectations.
                </RevealOnce>
                <br />
                <RevealOnce>
                  You can submit design ideas for your website or product
                  through our email
                </RevealOnce>
                <br />
                <RevealOnce>
                  <span className="justify-center w-full flex font-bold">
                    example@gmail.com
                  </span>
                </RevealOnce>
                <br />
                <RevealOnce>
                  Just tell us your project name (so we can verify you&#39;re
                  project actually exists) and attach the design files in the
                  email!
                </RevealOnce>
                <br />
                <RevealOnce>
                  Your submissions can be in the form of Microsoft Word
                  documents, PowerPoint, Adobe Illustrator, Photoshop or Google
                  Sheets & Slides.
                </RevealOnce>
                <RevealAlways>
                  <div className="flex justify-center">
                    <span className="px-4 py-2 my-8 rounded-2xl cursor-pointer bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                      I&#39;m Interested!
                    </span>
                  </div>
                </RevealAlways>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-x-hidden w-full p-4">
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

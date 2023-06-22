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
    <div className="scroll-smooth	snap-x overscroll-x-none min-h-screen">
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
      <section className="relative translate-y-36 xl:translate-y-32 sm:-translate-y-48 md:translate-y-14 lg:translate-y-[4.4rem]">
        <div className="absolute top-1/12 left-0 -z-50">
          <Image src={Timeline} alt="" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-9 sm:px-6 lg:px-8 text-white pb-20 pointer-events-auto z-50">
          <div className="border-dark-50 border-t-[1px] sm:mt-5">
            <div className="w-full mt-3">
              <RevealOnce>
                <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-9 pb-3 select-text">
                  <span className="w-1/2 sm:w-full tracking-wider">
                    A full tech and creative team at your fingertips.
                  </span>
                </div>
              </RevealOnce>
              <RevealOnce>
                <div className="flex justify-center text-center items-center font-normal text-lg pt-1 pb-9 select-text">
                  <span className="w-[30rem] text-gray-400">
                    We specialise in UI/UX design, website development and
                    website deployment.
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
                            website, ensuring it&#39;s optimized for
                            performance, security, and accessibility across
                            different platforms and devices.
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
          </div>
          <div className="flex items-center justify-center mt-[3rem]">
            <button className="text-center px-6 py-3 rounded-2xl bg-[#4A6CF7] hover:bg-white hover:text-black transition duration-200 ease-in-out">
              Start building your online presence
            </button>
          </div>
        </div>
      </section>
      {/*Paragraph Design */}
      <section className="translate-y-[6.4rem] sm:-translate-y-[14.5rem] xl:translate-y-24 md:translate-y-6 lg:translate-y-8 scroll-pt-96 snap-start relative overflow-x-hidden">
        <div className="absolute top-32 sm:top-20 -right-10 sm:h-[40rem] sm:w-[40rem] overflow-x-hidden">
          <Image
            src="/page-break.svg"
            width="1000"
            height="1000"
            alt=""
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 pb-20 pointer-events-auto">
          <div className="border-dark-50 border-t-[1px]">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-5 sm:mt-2">
              <div className="mt-5 md:mt-2 lg:mt-1 p-4">
                <div className="text-3xl border-b-[1px] border-dark-50 pb-2 font-semibold text-[#e5e4e4] sm:text-center">
                  We deliver the
                  <span className="font-bold"> highest quality</span> work
                </div>
                <div className="p-1 pt-2 font-medium leading-relaxed text-gray-200 text-opacity-95 sm:text-center">
                  <RevealOnce>
                    We specialize in transforming digital experiences
                    through&nbsp;
                    <b>exceptional UI/UX design</b> for Web, Mobile App, and
                    beyond. Our talented team creates visually captivating and
                    user-friendly interfaces that make a lasting impression.
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    We carefully consider every detail, from intuitive
                    navigation to eye-catching visuals, ensuring seamless
                    interactions across platforms.
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    Our goal is to deliver designs that not only look great but
                    also enhance usability and engagement. Whether you need a
                    Website revamp, or a comprehensive UI/UX solution, we have
                    the skills to exceed your expectations.
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
                    documents, PowerPoint, Adobe Illustrator, Photoshop or
                    Google Sheets & Slides.
                  </RevealOnce>
                  <RevealAlways>
                    <div className="flex justify-center translate-y-9">
                      <span className="px-4 py-2 rounded-2xl cursor-pointer bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                        I&#39;m Interested!
                      </span>
                    </div>
                  </RevealAlways>
                </div>
              </div>
              <div className="mt-5 flex items-center translate-y-2 justify-center overflow-x-hidden">
                <FlyIn flyInRight={true}>
                  <Image
                    src="/design.webp"
                    height="1034"
                    width="1080"
                    alt="UI/UX"
                    className="z-[1000]"
                  />
                </FlyIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Paragraph Develop */}
      <section
        className="translate-y-[5.6rem] sm:-translate-y-[17rem] xl:translate-y-[4.5rem] md:-translate-y-[1rem] lg:-translate-y-[1rem] relative"
        id="develop"
      >
        <div className="overflow-hidden absolute">{/*Image Placeholder */}</div>
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 pb-20 pointer-events-auto">
          <div className="border-dark-50 border-t-[1px]">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-5 sm:-mt-5 lg:-mt-3 xl:mt-2">
              <div className="mt-5 md:mt-2 lg:mt-1 p-4 h-full">
                <div className="mt-5 flex items-center translate-y-2 justify-center overflow-x-hidden h-full">
                  <FlyIn flyInRight={false}>
                    <Image
                      src="/develop.webp"
                      width="1920"
                      height="1796"
                      alt="Develop"
                    />
                  </FlyIn>
                </div>
              </div>
              <div className="mt-5 sm:-mt-3 md:mt-2 lg:mt-1 p-4">
                <div className="text-3xl border-b-[1px] border-dark-50 pb-2 font-semibold text-[#e5e4e4] sm:text-center">
                  The development process
                </div>
                <div className="p-1 pt-2 font-medium leading-relaxed text-gray-200 text-opacity-95 sm:text-center">
                  <RevealOnce>
                    As a leading provider of web development services, we
                    specialize in delivering exceptional online solutions
                    tailored to meet the unique needs of our clients.
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    Our team of skilled developers and designers work
                    collaboratively to create visually stunning and highly
                    functional websites that captivate audiences and drive
                    business growth. We leverage the latest technologies and
                    industry best practices to ensure that your website is not
                    only aesthetically appealing but also optimized for
                    performance, speed, and user experience.
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    From&nbsp;
                    <b>responsive design</b> and seamless navigation to
                    e-commerce integration and content management systems, we
                    offer end-to-end web development services that empower
                    businesses to thrive in the digital landscape. With a keen
                    eye for detail, a commitment to quality, and a focus on
                    delivering measurable results, we are your trusted partner
                    in building a strong online presence and achieving your
                    digital goals.
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    Our proficiency extends beyond mere web development,
                    encompassing essential technical facets such as Search
                    Engine Optimization (SEO) to enhance your website&#39;s
                    visibility, organic traffic, and search engine rankings. By
                    implementing robust SEO strategies, we ensure that your
                    online platform receives the recognition it deserves and
                    attains a competitive edge in the digital realm.
                  </RevealOnce>
                  <RevealAlways>
                    <div className="flex justify-center translate-y-9">
                      <span className="px-4 py-2 rounded-2xl cursor-pointer bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                        I&#39;m Interested!
                      </span>
                    </div>
                  </RevealAlways>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Paragraph Deployment */}
      <section
        className="translate-y-[4.7rem] sm:-translate-y-[19.1rem] xl:translate-y-[2.7rem] md:-translate-y-1 lg:-translate-y-[3rem] relative"
        id="deploy"
      >
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 pb-20 pointer-events-auto">
          <div className="border-dark-50 border-t-[1px]">
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mt-5 xl:mt-2">
              <div className="mt-5 sm:-mt-2 md:mt-2 lg:mt-1 p-4">
                <div className="text-3xl border-b-[1px] border-dark-50 pb-2 font-semibold text-[#e5e4e4] sm:text-center">
                  The deployment process
                </div>
                <div className="p-1 pt-2 font-medium leading-relaxed text-gray-200 text-opacity-95 sm:text-center">
                  <RevealOnce>We&#39;ll keep things short here.</RevealOnce>
                  <br />
                  <RevealOnce>
                    Cloud hosting is the future of web technologies. The cost
                    effectiveness, performance and scalability far outweigh the
                    benefits of using managed hosting, such as WordPress,
                    Drupal, or Wix.
                  </RevealOnce>
                  <br />
                  <RevealOnce>
                    Some of the <b>pros</b> of cloud hosting:
                  </RevealOnce>
                  <RevealOnce>
                    <li className="flex items-center ml-5 mt-3">
                      <span className="items-center">
                        <BsSpeedometer2 size={30} style={{ color: "green" }} />
                      </span>
                      <span className="ml-3">High performance</span>
                    </li>
                    <li className="flex items-center ml-5 mt-3">
                      <span className="items-center">
                        <BsArrowsFullscreen
                          size={27}
                          style={{ color: "green" }}
                        />
                      </span>
                      <span className="ml-3">Flexible</span>
                    </li>
                    <li className="flex items-center ml-5 mt-3 mb-3">
                      <span className="items-center">
                        <BsArrowDownUp size={27} style={{ color: "green" }} />
                      </span>
                      <span className="ml-3">Scalable</span>
                    </li>
                  </RevealOnce>
                  <RevealOnce>
                    Some of the <b>cons</b> of cloud hosting:
                  </RevealOnce>
                  <RevealOnce>
                    <li className="flex items-center ml-5 mt-3">
                      <span className="items-center">
                        <BsFillTerminalFill
                          size={30}
                          style={{ color: "red" }}
                        />
                      </span>
                      <span className="ml-3">Complex</span>
                    </li>
                  </RevealOnce>
                  <RevealOnce>
                    <div className="mt-3">
                      We&#39;ll you&#39;ve read this far, so shoot us an email
                      to begin the process of launching your website!
                    </div>
                  </RevealOnce>
                  <RevealAlways>
                    <div className="flex justify-center translate-y-9">
                      <span className="px-4 py-2 rounded-2xl cursor-pointer bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                        Let&#39;s Go!
                      </span>
                    </div>
                  </RevealAlways>
                </div>
              </div>
              <div className="mt-5 sm:-mt-5 md:mt-2 lg:mt-1 p-4 h-full">
                <div className="mt-5 flex items-center translate-y-2 justify-center overflow-x-hidden h-full">
                  <FlyIn flyInRight={true}>
                    <Image
                      src="/deploy.png"
                      width="1589"
                      height="1576"
                      alt="Deploy"
                    />
                  </FlyIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Paragraph Slider 1 */}
      <section className="-translate-y-[10rem] sm:-translate-y-[11rem] xl:-translate-y-[5.5rem] md:-translate-y-2 lg:-translate-y-[5.6rem] relative">
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 text-white translate-y-[12rem] lg:-translate-y-2 xl:translate-y-[6.3rem] sm:-translate-y-[12rem]">
          <div className="border-t-[1px] sm:w-95 mx-auto pt-[1.2rem] border-dark-50">
            <RevealOnce>
              <span className="text-3xl font-extrabold sm:text-xl sm:leading-tight sm:tracking-tight flex justify-center">
                What Our Clients Are Saying
              </span>
              <div className="flex justify-center mt-4 text-lg text-gray-500 w-full border rounded-2xl border-dark-50 mb-[2.5rem] relative ">
                <Testimonials />
              </div>
            </RevealOnce>
          </div>
        </div>
      </section>
      {/*Contact */}
      <section
        className="translate-y-[2.6rem] sm:-translate-y-[23.5rem] xl:translate-y-[1.6rem] md:-translate-y-2 lg:-translate-y-[6rem] relative"
        id=""
      >
        <div className="relative mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8 pb-20 pointer-events-auto">
          <div className="border-dark-50 border-t-[1px]">
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-1 text-white gap-6">
              <div className="text-2xl">Contact Us Today!</div>
              <div className="flex justify-center bg-[#4a6cf7] bg-opacity-20 rounded-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /**        <span>Who Are We?</span>
          <span>Why we stand out from the rest</span>
          <span>Get in contact with us</span> */
}

import Image from "next/image";
import Link from "next/link";

import Design from "@/public/svg/card-design.svg";
import Develop from "@/public/svg/card-develop.svg";
import Deploy from "@/public/svg/card-deploy.svg";

import BodyShape1 from "@/public/svg/body-shape-1.svg";

import Hero from "@/src/app/components/Hero";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import ContactSection from "@/src/app/components/contact/ContactSection";
import Testimonials from "@/src/app/components/testimonials/Testimonials";
import CaseStudies from "@/src/app/components/CaseStudies";
import TypedText from "@/src/app/components/experimental/TypedText";
import Accordion from "@/src/app/components/Accordion";
import Button from "@/src/app/components/Button";
import SmoothButton from "@/src/app/components/SmoothButton";
import Hero1 from "@/public/svg/hero-shape-1.svg";

const items = [
  {
    title: "Why are websites important for small businesses?",
    content: (
      <>
        <p>Websites are important for several reasons:</p>
        <br />
        <p>
          <b>Online Presence:</b> A professionally crafted website acts as a
          virtual storefront, ensuring your business is discoverable to
          potential customers.
        </p>
        <p className="mt-1">
          <b>Credibility and Trust: </b>A well-designed website establishes
          trust and credibility, enhancing your business&#39;s reputation.
        </p>
        <p className="mt-1">
          <b>Expanded Reach:</b> Websites break geographical barriers, allowing
          customers to access your products or services from anywhere in the
          world, broadening your customer base.
        </p>
        <br />
        <p className="mt-1">
          A well-designed website is vital for small businesses, as it provides
          an online presence, establishes credibility and trust, and enables
          expanded reach to a broader customer base.
        </p>
      </>
    ),
    contentClassName: "home-landing-class-1",
  },
  {
    title: "How long does it take to produce a website?",
    content: (
      <>
        <p>
          The duration of creating a website can vary depending on several
          factors, such as the complexity of the website, the number of pages,
          the functionality needs and the number of resources available for the
          project.
        </p>
        <br />
        <p className="mt-1">
          In general, a simple website with just a few pages can be built in a
          few days, while a more complex website with more features can take
          weeks to complete. We will establish a detailed project plan before
          starting the development of the site, so that we can accurately
          estimate the duration of the project and take into account any delays
          or problems. It is important to keep in mind that developing a website
          is an ongoing process, and after launch, you will need to maintain and
          update it regularly to make it efficient and secure for visitors.
        </p>
      </>
    ),
    contentClassname: "home-landing-class-2",
  },
  {
    title: "Generally, how much does it cost to manage a website?",
    content: (
      <>
        <p>
          The costs of managing a website can vary depending on several factors,
          such as the complexity of the website, the functionality needs, the
          number of resources required and the frequency of updates.
        </p>
        <br />
        <p className="mt-1">Basic costs for managing a website can include:</p>
        <br />
        <li className="mt-1">
          Paying for web hosting and <b>yearly</b> domain name registration
        </li>
        <li className="mt-1">
          Costs for technical support and website maintenance
        </li>
        <li className="mt-1">Costs for site security monitoring</li>
        <li className="mt-1">Costs for SEO optimization</li>
        <br />
        <p className="mt-1">
          In general, a simple website may have lower monthly administration
          costs, while a more complex website may have higher costs.
        </p>
        <br />
        <p className="mt-1">
          You can request a quote for the estimated monthly costs for a website
          of your specific size, and popularity.
        </p>
      </>
    ),
    contentClassName: "home-landing-class-3",
  },
  {
    title: "What is UI / UX Design?",
    content: (
      <p>
        In today’s competitive digital landscape, delivering an exceptional user
        experience is key to capturing and retaining customers. Our UI/UX design
        service combines creativity, research, and strategic thinking to
        transform your digital presence. By carefully crafting intuitive and
        visually stunning interfaces, we ensure that every interaction with your
        website or application is seamless and delightful. From enhancing
        usability to optimizing conversions, our UI/UX design expertise empowers
        your business to stand out, engage users, and achieve remarkable success
        in the digital realm.
      </p>
    ),
    contentClassName: "home-landing-class-4",
  },
  {
    title: "Does WynDigital work internationally?",
    content: (
      <>
        <p>Yes we do!</p>
        <br />
        <p className="mt-1">
          If you need international work done, contact us like normal. We do not
          speak every language however, only <b>English</b>.
        </p>
      </>
    ),
    contentClassName: "home-landing-class-5",
  },
  {
    title: "How can I get in contact with WynDigital",
    content: (
      <>
        <p>If you are contacting us within Australia, shoot a message to a <a href="#contact" className="hover:underline cursor-pointer">phone number</a>. If you are contacting internationally, please, <a href="#contact" className="hover:underline hover:cursor-pointer">Email Us.</a></p>
      </>
    ),
    contentClassName: "home-landing-class-6"
  }
];

export const metadata = {
  title: "Home –  WynDigital",
};

export default function Home() {
  return (
    <div className="scroll-smooth snap-x overscroll-x-none min-h-screen ml-11 mr-11 sm:ml-11 sm:mr-11">
      <section id="top" className="snap-start">
      <div className=" px-2">
      <div className="absolute top-0 right-0">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="277"
            cy="63"
            r="225"
            fill="url(#paint0_linear_25:217)"
          ></circle>
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          ></circle>
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25:217)"
          ></circle>
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          ></circle>
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          ></circle>
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          ></circle>
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop
                offset="0.145833"
                stopColor="#4A6CF7"
                stopOpacity="0"
              ></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop
                offset="0.145833"
                stopColor="#4A6CF7"
                stopOpacity="0"
              ></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-[34rem] xl:top-[28rem] left-0 sm:hidden md:hidden lg:hidden">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          ></path>
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          ></path>
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          ></path>
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          ></path>
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          ></circle>
          <circle
            cx="220"
            cy="63"
            r="43"
            fill="url(#paint5_radial_25:218)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0.08"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-[26.8rem] lg:top-[24.8rem] left-1/2 sm:hidden md:hidden lg:hidden xl:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="1" height="350">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="290"
              stroke="#212121"
              strokeWidth="2"
            />
          </svg>
      </div>
      <div className="absolute top-0 left-0 sm:hidden">
        <Image src="/svg/hero-shape-1.svg" alt="" width="411" height="276" loading="eager" priority={true} />
      </div>
      <div className="relative z-10 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="mx-auto py-44 sm:py-48 lg:pt-56">
            <div className="text-center flex flex-col justify-center">
              <div className="text-5xl font-bold text-white sm:text-6xl tracking-wider sm:text-center">
                Design. Develop. Deploy.
              </div>
              <div className="mt-6 text-lg leading-8 sm:leading-normal text-gray-400 font-medium">
                WynDigital is Wynnum-Manly&#8217;s top-ranking web services
                provider.
                <br />
                <div className="font-light mt-1 sm:leading-normal">
                  We specialize in the full production lifecycle, from designing
                  your site to the deployment of it.
                </div>
              </div>
              <div className="mt-9 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-lg bg-[#4A6CF7] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out duration-200"
                >
                  Get started
                </a>
                <a
                  href="#introduction"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
      </section>
      <section className="relative mt-[11.4rem] sm:-mt-[13.7rem] md:mt-[0.4rem] lg:mt-[2rem] xl:mt-[5rem] border-t-[1px] border-dark-50 text-white">
        <div className="absolute top-1/12 -top-12 -right-11 sm:-right-4 -z-50">
          <Image
            src={BodyShape1}
            style={{ transform: "scaleX(-1)" }}
            alt=""
            className="sm:hidden"
          />
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
              <div className="testimonial-container group relative shadow-lg p-8 flex flex-col text-2xl border-[2px] border-dark-50 overflow-hidden rounded-2xl hover:border-[#FBFAF6] hover:text-[#FBFAF6] transition ease-in-out duration-500 h-[28rem] sm:h-[30rem] backdrop-blur-sm">
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
                        Professional UI/UX Design
                      </span>
                      <div className="mt-2 text-gray-200 text-opacity-95">
                        We specialize in professional UI/UX design, encompassing
                        a wide range of services including website design,
                        mobile app design, and branding design.
                      </div>
                    </span>
                  </li>
                </ul>
                <div className="mt-4 items-center text-center z-50">
                  <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                    <Button cta="Know more about UI / UX design" href="/services/ui-ux" />
                  </span>
                </div>
              </div>
            </RevealOnce>
            <RevealOnce>
              <div className="testimonial-container group relative shadow-lg p-8 flex flex-col text-2xl border-[2px] border-dark-50 overflow-hidden rounded-2xl hover:border-[#FBFAF6] hover:text-[#FBFAF6] transition ease-in-out duration-500 h-[28rem] sm:h-[30rem] backdrop-blur-sm">
                <div className="absolute top-5 right-12">
                  <Image
                    src={Develop}
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
                        Industry leading web development
                      </span>
                      <div className="mt-2 text-gray-200 text-opacity-95">
                        Our web development services are designed to deliver
                        industry-leading solutions that set your business apart.
                        With a focus on excellence, we create fully responsive
                        websites and online stores that adapt seamlessly to
                        different devices and screen sizes.
                      </div>
                    </span>
                  </li>
                </ul>
                <div className="mt-4 items-center text-center z-50">
                  <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                    <Button cta="Know more about the development" href="/services/web-development" />
                  </span>
                </div>
              </div>
            </RevealOnce>
            <RevealOnce>
              <div className="testimonial-container group shadow-lg p-8 flex flex-col relative text-2xl border-[2px] border-dark-50 hover:border-[#FBFAF6] hover:text-[#FBFAF6] rounded-2xl transition ease-in-out duration-500 h-[28rem] sm:h-[30rem] backdrop-blur-sm">
                <div className="absolute top-[1.3rem] right-11">
                  <Image
                    src={Deploy}
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
                        Streamlined launch
                      </span>
                      <div className="mt-2 text-gray-200 text-opacity-95 mb-2">
                        From setting up hosting environments to configuring
                        databases and servers, we handle the technical aspects
                        of deployment with precision and expertise. Our team
                        conducts thorough testing and quality assurance checks
                        to ensure that your digital solution is ready for a
                        flawless launch.
                      </div>
                    </span>
                  </li>
                </ul>
                <div className="mt-4 items-center text-center z-50 my-4">
                  <span className="text-[16px] border-b-[2px] pb-[1px] z-50 font-extrabold text-white group-hover:text-orange-600 group-hover:border-b-orange-600 hover:cursor-pointer transition duration-200 ease-in-out">
                    <Button cta="Know more about the management" href="/services/web-management" />
                  </span>
                </div>
              </div>
            </RevealOnce>
          </div>
        </div>
        <RevealAlways>
          <div className="flex items-center justify-center py-8">
            <SmoothButton cta="Start building your presence!" href="#contact" />
          </div>
        </RevealAlways>
      </section>
      <section
        className="relative text-white overflow-x-hidden border-t-[1px] border-dark-50"
        id="introduction"
        style={{ scrollMarginTop: "250px" }}
      >
        <div className="relative overflow-y-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
            <div className="h-full relative">
              <div className="mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
                <RevealOnce>
                  We are a
                  <span className="text-[#4A6CF7]">&nbsp;full service</span>
                  &nbsp;tech team
                </RevealOnce>
              </div>
              <div className="text-base font-light pt-4 leading-relaxed">
                <RevealOnce>
                  Welcome to WynDigital the leading online service
                  agency dedicated to revolutionizing Brisbane&#39;s digital
                  landscape. With our team of seasoned experts in website
                  design, development, and management, we deliver exceptional
                  results that surpass expectations. Our mission is to empower
                  businesses, whether small enterprises or large corporations,
                  by crafting visually stunning websites and embarking on a
                  transformative digital journey together.
                </RevealOnce>
                <br />
                <RevealOnce>
                  Partner with us today and unlock the full potential of your
                  online presence. Experience the difference of working with a
                  passionate team committed to delivering excellence and
                  achieving your business goals. Contact us now and let us
                  embark on a digital transformation that will elevate your
                  brand and set you apart from the competition. Together, we
                  will create a digital landscape that captivates and inspires.
                </RevealOnce>
              </div>
              <div className="flex justify-center w-full items-end pt-4 mb-4">
                <SmoothButton cta="I&#39;m Interested!" href="#contact" />
              </div>
            </div>
            <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4  rounded-2xl">
              <FlyIn flyInRight={true}>
                <Image
                  src="/images/design.webp"
                  alt="UI/UX"
                  loading="lazy"
                  priority={false}
                  width={600}
                  height={800}
                  layout="responsive"
                  className="z-[1000] object-contain mx-auto sm:w-[400px]"
                />
              </FlyIn>
            </div>
          </div>
        </div>
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50">
        <div className="absolute top-0 -ml-11 left-0">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            ></rect>
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative overflow-y-hidden">
          <div className="grid grid-cols-2 sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse lg:flex lg:flex-col-reverse gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
            <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 flex-col items-center justify-center overflow-x-hidden w-full px-4  rounded-2xl">
              <FlyIn flyInRight={false}>
                <Image
                  src="/images/develop.webp"
                  alt="UI/UX"
                  width={600}
                  loading="lazy"
                  priority={false}
                  height={800}
                  layout="responsive"
                  className="z-[1000] object-contain mx-auto sm:w-[400px]"
                />
              </FlyIn>
            </div>
            <div className="flex-col">
              <div className="sm:mt-0 md:mt-0 lg:mt-0 mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
                <RevealOnce>
                  We are committed to the
                  <span className="text-[#4A6CF7]">&nbsp;highest quality</span>
                  &nbsp;of work
                </RevealOnce>
              </div>
              <div className="text-base font-light pt-4 leading-relaxed">
                <RevealOnce>
                  Your website or application functions as a perpetual sales
                  team, providing round-the-clock availability irrespective of
                  business hours.
                </RevealOnce>
                <br />
                <RevealOnce>
                  An exceptional online presence enables you to extend your
                  reach to a wider customer base, deliver invaluable information
                  and assistance, and ultimately enhance your return on
                  investment (ROI).
                </RevealOnce>
                <br />
                <RevealOnce>
                  At  WynDigital, we specialize in devising growth
                  strategies rooted in data analysis, catering to small
                  businesses across diverse industries. In addition to offering
                  standalone Search Engine Optimization (SEO) services, we
                  employ state-of-the-art technologies such as node.js, NextJS,
                  React, React Native, and other cutting-edge frameworks for
                  application development.
                </RevealOnce>
              </div>
              <div className="flex justify-center w-full items-end pt-4 pb-5 ">
                <RevealAlways>
                  <SmoothButton cta="I&#39;m Interested!" href="#contact" />
                </RevealAlways>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative text-white overflow-x-hidden border-t-[1px] border-dark-50">
        <div className="relative overflow-y-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
            <div className="h-full relative">
              <div className="mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
                <RevealOnce>
                  We specialize in
                  <span className="text-[#4A6CF7]">&nbsp;the whole</span>
                  &nbsp;process
                </RevealOnce>
              </div>
              <RevealOnce>
                <div className="text-base font-light pt-4 leading-relaxed">
                  <RevealOnce>
                    We specialize in the entire process of building and
                    optimizing your online presence. From inception to
                    implementation, our dedicated team ensures a seamless and
                    comprehensive approach to your digital journey.
                  </RevealOnce>
                  <RevealOnce>
                    <li className="ml-3 mt-3">
                      Tailored strategy aligned with your goals as a business
                    </li>
                  </RevealOnce>
                  <RevealOnce>
                    <li className="ml-3 mt-3">
                      Cutting-edge technologies and design expertise
                    </li>
                  </RevealOnce>
                  <RevealOnce>
                    <li className="ml-3 mt-3">
                      Visually captivating websites or apps
                    </li>
                  </RevealOnce>
                  <RevealOnce>
                    <li className="ml-3 mt-3">
                      Ongoing optimization and management
                    </li>
                  </RevealOnce>
                  <RevealOnce>
                    <div className="mt-3">
                      Embark on a transformative digital journey with WynDigital today. Experience the power of a dedicated team,
                      cutting-edge technologies, and unparalleled expertise. Let
                      us elevate your online presence and drive your business
                      towards success in the dynamic digital world. now.
                    </div>
                  </RevealOnce>
                </div>
              </RevealOnce>
              <div className="flex justify-center w-full items-end pt-4 mb-4">
                <RevealAlways>
                  <SmoothButton cta="Contact us now" href="#contact" />
                </RevealAlways>
              </div>
            </div>
            <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4  rounded-2xl">
              <FlyIn flyInRight={true}>
                <Image
                  src="/images/gallery/second.png"
                  alt="UI/UX"
                  width="600"
                  loading="lazy"
                  priority={false}
                  height="800"
                  layout="responsive"
                  className="z-[1000] mx-auto"
                />
              </FlyIn>
            </div>
          </div>
        </div>
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50">
        <div className="absolute -mr-11 top-0 right-0 sm:-mr-11">
          <svg
            width="238"
            height="531"
            viewBox="0 0 238 531"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-hidden"
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
              className="overflow-x-hidden"
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
              className="overflow-x-hidden"
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
        <RevealOnce>
          <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-8 pb-8 select-text">
            What small businesses are saying about us
          </div>
        </RevealOnce>
        <RevealOnce>
          <div className="mb-8">
            <Testimonials />
          </div>
        </RevealOnce>
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50">
        <RevealOnce>
          <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-8 pb-8 select-text">
            Some of the websites we&#39;ve created
          </div>
        </RevealOnce>
        <RevealOnce>
          <CaseStudies />
        </RevealOnce>
        <RevealOnce>
          <div className="mt-8 mb-8">
            <div className="flex justify-center w-full items-end">
              <Button
                href="/gallery"
                cta="Check out more of our projects&nbsp;"
              >
                <span aria-hidden="true" className="items-center">
                  →
                </span>
              </Button>
            </div>
          </div>
        </RevealOnce>
      </section>
      <section
        className="relative text-white border-t-[1px] border-dark-50"
        style={{ scrollMarginTop: "100px" }}
        id="contact"
      >
        <ContactSection
          cta="Get in touch with us!"
          subcta="We will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="I like the looks of your services, and my small business really could use a website!"
        />
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50">
        <RevealOnce>
          <div className="text-3xl flex w-full justify-center font-extrabold sm:leading-tight sm:tracking-tight text-center mt-8 mb-8 text-white">
            <span className="sm:w-full md:w-full">
              Frequently Asked Questions (FAQs)
            </span>
          </div>
        </RevealOnce>
        <div className="flex w-full justify-center mb-8">
          <div className="w-1/2 sm:w-full md:w-3/4 lg:w-3/4 sm:max-w-prose">
            <Accordion items={items} />
          </div>
        </div>
      </section>
    </div>
  );
}

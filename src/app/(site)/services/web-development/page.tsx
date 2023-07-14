import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import Accordion from "@/src/app/components/Accordion";
import SmoothButton from "@/src/app/components/SmoothButton";
import ContactSection from "@/src/app/components/contact/ContactSection";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineWeb, MdMobileFriendly } from "react-icons/md";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaAppStoreIos, FaGlobe, FaStore } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
    contentClassName: "webdevelopment-class-1",
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
    contentClassname: "webdevelopment-class-2",
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
    contentClassName: "webdevelopment-class-3",
  },
  {
    title: "How can I get in contact with WynDigital",
    content: (
      <>
        <p>If you are contacting us within Australia, shoot a message to a <a href="#contact" className="hover:underline cursor-pointer">phone number</a>. If you are contacting internationally, please, <a href="#contact" className="hover:underline hover:cursor-pointer">Email Us.</a></p>
      </>
    ),
    contentClassName: "webdevelopment-class-3"
  }
];

export const metadata = {
  title: "Web Development – WynDigital",
};


export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="Website Development"
        secondarySubText="Transforming Ideas into Functional and Interactive Websites"
        PageLink="Services"
        secondaryPageLink="Website Development"
      />
      <section className="text-white ml-11 mr-11 -mt-4 mb-0 sm:-mt-24 md:-mt-20 lg:-mt-20 sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center ">
        <div className="w-fit">
          <RevealAlways>
            <div className="rounded-lg mt-2 md:mt-0 lg:mt-0 sm:mt-0 py-2.5 cursor-pointer">
              <SmoothButton cta="Launch your project!" href="#contact" />
            </div>
          </RevealAlways>
        </div>
      </section>
      <RevealOnce>
        <section className="mt-3 sm:mt-4 ml-11 mr-11">
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:gap-y-16 md:gap-y-16 gap-11 sm:pl-0 sm:pr-0 text-white">
              <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <FaGlobe size={60} />
                </div>
                <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                  Websites
                </div>
                <span>Starting from $250</span>
                <ul className="mt-8 space-y-4 flex-1 text-lg">
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Responsive Layout</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Initial SEO</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Blogs</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Portfolio Sites</span>
                  </li>
                </ul>
                <RevealAlways>
                  <div className="rounded-lg mt-10 py-2.5 cursor-pointer text-base">
                    <SmoothButton cta="Start developing your website" href="#contact" />
                  </div>
                </RevealAlways>
              </div>
              <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <FaAppStoreIos size={60} />
                </div>
                <div className="flex flex-col justify-center items-center text-center text-2xl font-semibold mt-6">
                  Web Applications (PWAs)
                </div>
                <span className="italic">Currently Not Available</span>
                <ul className="mt-8 space-y-4 flex-1 text-lg">
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">
                      User-Friendly Interface
                    </span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Seamless Navigation</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">High Performance</span>
                  </li>
                </ul>
                <RevealAlways>
                  <div className="rounded-lg mt-10 py-2.5 text-base">
                    <Link className="text-center flex justify-center my-2 text-base items-center hover:underline" rel="noopener noreferrer" target="_blank" href="https://dashboard.wyndigital.net">Check out our dashboard <FiExternalLink className="ml-2 mb-[0.1rem]" /></Link>
                    <a
                      href="#"
                      className="block w-full text-white bg-red-300 cursor-not-allowed hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                    >
                      Start designing your app
                    </a>
                  </div>
                </RevealAlways>
              </div>
              <div className="py-12 row-span-2 border border-dark-50 rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-transparent">
                <div className="flex justify-center items-center">
                  <BsFillClipboardCheckFill size={58} />
                </div>
                <div className="flex flex-col justify-center items-center text-center text-2xl font-semibold mt-6 sm:text-center">
                  Included in all our services
                </div>
                <span>Where Applicable</span>
                <ul className="mt-8 space-y-4 flex-1 text-lg px-4">
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">
                      UI&nbsp;/&nbsp;UX Design
                    </span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">
                      Unlimited Design Reviews
                    </span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">SSL Certificate</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Forced SEO</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Legal Compliance</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">
                      Domain Name Registration
                    </span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Responsive Design</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">
                      Market Research Design
                    </span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">
                      Accessibility Compliance (ARIA)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <FaStore size={60} />
                </div>
                <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                  E-Commerce Store
                </div>
                <span>Starting from $300</span>
                <ul className="mt-8 space-y-4 flex-1 text-lg">
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Custom Store</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Shopify</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Big Commerce</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Woo Commerce</span>
                  </li>
                </ul>
                <RevealAlways>
                  <div className="rounded-lg mt-10 py-2.5 px-3.5 cursor-pointer">
                  <SmoothButton cta="Start developing your store" href="#contact" />
                  </div>
                </RevealAlways>
              </div>
              <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <GiForkKnifeSpoon size={60} />
                </div>
                <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                  Online Menu
                </div>
                <span>Starting from $50</span>
                <ul className="mt-8 space-y-4 flex-1 text-lg">
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">QR Menu</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Mockups</span>
                  </li>
                  <li className="flex items-center justify-start leading-6">
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="#FFFFFF"
                    >
                      <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                    </svg>
                    <span className="ml-3 text-white">Custom Designs</span>
                  </li>
                </ul>
                <RevealAlways>
                  <div className="rounded-lg mt-10 py-2.5 cursor-pointer">
                  <SmoothButton cta="Start developing your menu" href="#contact" />
                  </div>
                </RevealAlways>
              </div>
            </div>
        </section>
      </RevealOnce>
      <section className="mt-16 border-t-[1px] border-dark-50 mr-11 ml-11 text-white">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
          <div className="h-full relative">
            <div className="mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
              <RevealOnce>Web Development</RevealOnce>
            </div>
            <div className="text-base font-light pt-4 leading-relaxed">
              <RevealOnce>
                As a provider of web development services, we specialize in
                delivering exceptional online solutions tailored to meet the
                unique needs of our clients. Our team of skilled developers and
                designers work collaboratively to create visually stunning and
                highly functional websites that captivate audiences and drive
                business growth. We leverage the latest technologies and
                industry best practices to ensure that your website is not only
                aesthetically appealing but also optimized for performance,
                speed, and user experience.
              </RevealOnce>
              <br />
              <RevealOnce>
                From responsive design and seamless navigation to e-commerce
                integration and content management systems, we offer end-to-end
                web development services that empower businesses to thrive in
                the digital landscape.
              </RevealOnce>
              <br />
              <RevealOnce>
                <div className="mb-8">
                  With a keen eye for detail, a commitment to quality, and a
                  focus on delivering measurable results, we are your trusted
                  partner in building a strong online presence and achieving
                  your digital goals.
                </div>
              </RevealOnce>
            </div>
          </div>
          <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4 rounded-2xl">
            <FlyIn flyInRight={true}>
              <Image
                src="/images/gallery/website.png"
                alt="Web Development Services"
                width="600"
                height="800"
                className="z-[1000] mx-auto"
              />
            </FlyIn>
          </div>
        </div>
      </section>
      <section
        className="relative text-white border-t-[1px] border-dark-50 ml-11 mr-11"
        style={{ scrollMarginTop: "100px" }}
        id="contact"
      >
        <ContactSection
          cta="Get in touch with our team of Developers!"
          subcta="We will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="I'm interested in a developing a website for my small business!"
        />
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50 ml-11 mr-11">
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

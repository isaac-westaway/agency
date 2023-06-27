import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import ContactForm from "@/src/app/components/ContactForm";
import Accordion from "@/src/app/components/Accordion";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineWeb, MdMobileFriendly } from "react-icons/md";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaAppStoreIos, FaGlobe, FaStore } from "react-icons/fa";

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
          customers to access your
        </p>
        <br />
        <Link href="/blog" className="flex w-full justify-center ">
          <div className="">Read more about this in our blog.</div>
        </Link>
      </>
    ),
    contentClassName: "landing-class-1",
  },
  {
    title: "How long does it take to produce a website?",
    content: (
      <div>
        The duration of creating a website can vary depending on several
        factors, such as the complexity of the website, the number of pages, the
        functionality needs and the number of resources available for the
        project. In general, a simple website with just a few pages can be built
        in a few days, while a more complex website with more features can take
        weeks to complete. We will establish a detailed project plan before
        starting the development of the site, so that we can accurately estimate
        the duration of the project and take into account any delays or
        problems. It is important to keep in mind that developing a website is
        an ongoing process, and after launch, you will need to maintain and
        update it regularly to make it efficient and secure for visitors.
      </div>
    ),
    contentClassname: "landing-class-2",
  },
];

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="Website Development"
        secondarySubText="Transforming Ideas into Functional and Interactive Websites through Web Development"
        PageLink="Services"
        secondaryPageLink="Website Development"
      />
      <section className="text-white ml-11 mr-11 my-8">
        <div className="w-fit">
          <RevealAlways>
            <div className="rounded-lg mt-10 py-2.5 cursor-pointer">
              <a
                href="#contact"
                className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
              >
                Start developing your website
              </a>
            </div>
          </RevealAlways>
        </div>
      </section>
      <section className="mt-16 ml-11 mr-11">
        <RevealOnce>
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-y-16 md:gap-y-16 gap-11 pl-11 pr-11 text-white">
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <FaGlobe size={60} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Websites
              </div>
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
                <div className="rounded-lg mt-10 py-2.5 cursor-pointer">
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Start developing your website
                  </a>
                </div>
              </RevealAlways>
            </div>
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <FaAppStoreIos size={60} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
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
                <div className="rounded-lg px-3.5 mt-10 py-2.5 text-white cursor-not-allowed bg-red-300 transition duration-200 ease-in-out ">
                  Start designing your project
                </div>
              </RevealAlways>
            </div>
            <div className="py-12 row-span-2 border border-dark-50 rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-transparent">
              <div className="flex justify-center items-center">
                <BsFillClipboardCheckFill size={58} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Included in all our services
              </div>
              <span>Where Applicable</span>
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
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Start developing your store
                  </a>
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
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Start developing your menu
                  </a>
                </div>
              </RevealAlways>
            </div>
          </div>
        </RevealOnce>
      </section>
      <section className="mt-16 border-t-[1px] border-dark-50 mr-11 ml-11 text-white">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
          <div className="h-full relative">
            <div className="mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
              <RevealOnce>Web Development</RevealOnce>
            </div>
            <div className="text-base font-light pt-4 leading-relaxed">
              <RevealOnce>
                As a provider of web development services, we specialize
                in delivering exceptional online solutions tailored to meet the
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
                With a keen eye for detail, a commitment to quality, and a focus
                on delivering measurable results, we are your trusted partner in
                building a strong online presence and achieving your digital
                goals.
              </RevealOnce>
            </div>
          </div>
          <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4 bg-dark-50 bg-opacity-10 rounded-2xl">
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
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
          <div>
            <RevealOnce>
              <div className="h-full relative">
                <div className="mt-8 py-4 text-3xl font-extrabold border-y-[1px] border-dark-50">
                  Get in touch with our team of Developers!
                </div>
              </div>
            </RevealOnce>
            <RevealOnce>
              <div className="flex flex-col pt-4 font-normal text-lg select-text">
                <div className="text-lg leading-8 text-white font-medium">
                  We will endeavour to respond as fast as possible. Usually this
                  means 6 - 18 Hours.
                </div>
                <div className="relative flex flex-row w-full mt-4">
                  <div className="h-7 w-7 mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffffff"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                  </div>
                  <div>+61 490 747 987</div>
                </div>
                <div className="relative flex flex-row w-full mt-4">
                  <div className="h-7 w-7 mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                  </div>
                  <div>Digispark@gmail.com</div>
                </div>
              </div>
            </RevealOnce>
          </div>
          <RevealOnce>
            <div className="px-4 mt-6">
              <ContactForm message="I WANT A WEBSITE!!!" />
            </div>
          </RevealOnce>
        </div>
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

import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import ContactForm from "@/src/app/components/ContactForm";
import Accordion from "@/src/app/components/Accordion";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineWeb, MdMobileFriendly } from "react-icons/md";
import { FaUncharted } from "react-icons/fa";

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

export default function UIUX() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="UI&nbsp;/&nbsp;UX Design"
        secondarySubText="Creating Engaging User Experiences through Intuitive UI/UX Design            "
        PageLink="Services"
        secondaryPageLink="UI&nbsp;/&nbsp;UX Design"
      />
      <section className="text-white ml-11 mr-11 my-8">
        <div className="w-fit">
          <RevealAlways>
            <div className="rounded-lg mt-10 py-2.5 cursor-pointer">
              <a
                href="#contact"
                className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
              >
                Start designing your project
              </a>
            </div>
          </RevealAlways>
        </div>
      </section>
      <section className="mt-16 ml-11 mr-11">
        <RevealOnce>
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:gap-y-16 md:gap-y-16 gap-x-11 pl-11 pr-11 text-white">
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <MdOutlineWeb size={60} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Website Design
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
                  <span className="ml-3 text-white">Modern Design</span>
                </li>
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
                  <span className="ml-3 text-white">Wireframes</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Prototypes</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Market Research</span>
                </li>
              </ul>
              <RevealAlways>
                <div className="rounded-lg mt-10 cursor-pointer">
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Start designing your project
                  </a>
                </div>
              </RevealAlways>
            </div>
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <MdMobileFriendly size={58} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Mobile App Design
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
                  <span className="ml-3 text-white">Modern Design</span>
                </li>
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
                  <span className="ml-3 text-white">Wireframes</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Prototypes</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Market Research</span>
                </li>
              </ul>
              <RevealAlways>
                <div className="rounded-lg mt-10 cursor-pointer">
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Start designing your project
                  </a>
                </div>
              </RevealAlways>
            </div>
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center backdrop-blur-2xl bg-transparent">
              <div className="flex justify-center items-center">
                <FaUncharted size={60} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Branding & Identity
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
                  <span className="ml-3 text-white">Logo Design</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Visual Elements</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Banners</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Design Mockups</span>
                </li>
                <li className="flex items-center justify-start leading-6">
                  <svg
                    className="h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                  </svg>
                  <span className="ml-3 text-white">Custom Reqeusts</span>
                </li>
              </ul>
              <RevealAlways>
                <div className="rounded-lg mt-10 cursor-pointer">
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Start designing your project
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
              What is UI&nbsp;/&nbsp;UX Design?
            </div>
            <div className="text-base font-light pt-4 leading-relaxed">
              <RevealOnce>
                <div>
                  UI (User Interface) design involves designing the visual
                  elements of a digital interface, such as layout, colors, and
                  icons, to create an attractive and intuitive user experience.
                  UX (User Experience) design, on the other hand, focuses on the
                  overall usability and satisfaction of the user by
                  understanding their needs and behaviors, and creating
                  wireframes and prototypes to guide product development.
                </div>
              </RevealOnce>
              <br />
              <RevealOnce>
                <div>
                  We specialize in transforming digital experiences through
                  exceptional UI/UX design for Websites, Mobile Appa, and PWAs. Our
                  talented team creates visually captivating and user-friendly
                  interfaces that make a lasting impression.
                </div>
              </RevealOnce>
              <br />
              <RevealOnce>
                <div>
                  We carefully consider every detail, from intuitive navigation
                  to eye-catching visuals, ensuring seamless interactions across
                  platforms.
                </div>
              </RevealOnce>
              <br /> 
              <RevealOnce>
                <div>
                  Our goal is to deliver designs that not only look great
                  but also enhance usability and engagement. Whether you need a
                  Website revamp, a Mobile App design, or a comprehensive UI/UX
                  solution, we have the skills to exceed your expectations.
                </div>
              </RevealOnce>
            </div>
          </div>
          <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4 bg-dark-50 bg-opacity-10 rounded-2xl">
            <FlyIn flyInRight={true}>
              <Image
                src="/images/design.webp"
                alt="UI/UX"
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
                  Get in touch with our team of Designers!
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
              <ContactForm message="Hey I could do with a re-developed logo for my business." />
            </div>
          </RevealOnce>
        </div>
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

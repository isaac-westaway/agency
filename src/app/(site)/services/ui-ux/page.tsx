import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import Accordion from "@/src/app/components/Accordion";
import ContactSection from "@/src/app/components/ContactSection";
import SmoothButton from "@/src/app/components/SmoothButton";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineWeb, MdMobileFriendly } from "react-icons/md";
import { FaUncharted } from "react-icons/fa";

const items = [
  {
    title: "What is UI / UX Design?",
    content: (
      <>
        <p>
          In today’s competitive digital landscape, delivering an exceptional
          user experience is key to capturing and retaining customers. Our UI/UX
          design service combines creativity, research, and strategic thinking
          to transform your digital presence. By carefully crafting intuitive
          and visually stunning interfaces, we ensure that every interaction
          with your website or application is seamless and delightful. From
          enhancing usability to optimizing conversions, our UI/UX design
          expertise empowers your business to stand out, engage users, and
          achieve remarkable success in the digital realm.
        </p>
      </>
    ),
    contentClassName: "uiux-landing-class-1",
  },
  {
    title:
      "How does UI / UX Design contribute to the success of a website, and ultimately the business?",
    content: (
      <>
        <p>
          Effective UI/UX design is a critical driver of business success, with
          the ability to boost user satisfaction, engagement, conversions, and
          sales while reducing customer support inquiries. By creating intuitive
          and enjoyable experiences, businesses can differentiate themselves in
          a competitive market, fostering brand loyalty and driving positive
          outcomes such as ROI, customer retention, and natural growth. A
          well-crafted UI/UX design not only enhances the user journey but also
          contributes to a seamless purchase process, higher conversion rates,
          and increased revenue. Moreover, by addressing user pain points and
          providing exceptional experiences, businesses can minimize support
          requests, increase customer retention rates, and benefit from
          satisfied customers advocating for their brand.
        </p>
        <br />
        <p className="mt-1">
          Investing in UI/UX design enables businesses to stand out, attract a
          larger customer base, and ultimately achieve sustained success.
        </p>
      </>
    ),
    contentClassname: "uiux-landing-class-2",
  },
  {
    title: "How important is Market Research in UI / UX Design?",
    content: (
      <p>
        User research plays a crucial role in UI/UX design as it helps designers
        gain a deep understanding of users’ needs, behaviors, and preferences.
        It involves techniques like interviews, surveys, usability testing, and
        analytics analysis to gather insights and inform design decisions. User
        research ensures that the design is user-centered and aligns with the
        target audience, leading to more effective and satisfying user
        experiences.
      </p>
    ),
    contentClassName: "landing-class-3",
  },
  {
    title: "How can I get in contact with Wynnum Web Services",
    content: (
      <>
        <p>If you are contacting us within Australia, shoot a message to a <a href="#contact" className="hover:underline cursor-pointer">phone number</a>. If you are contacting internationally, please, <a href="#contact" className="hover:underline hover:cursor-pointer">Email Us.</a></p>
      </>
    ),
    contentClassName: "uiux-landing-class-3"
  }
];

export const metadata = {
  title: "UI / UX Design ● Wynnum Web Services",
};

export default function UIUX() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="UI&nbsp;/&nbsp;UX Design"
        secondarySubText="Creating Engaging User Experiences through Intuitive UI/UX Design            "
        PageLink="Services"
        secondaryPageLink="UI&nbsp;/&nbsp;UX Design"
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
      <section className="mt-3 sm:mt-4 ml-11 mr-11">
        <RevealOnce>
          <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:gap-y-16 md:gap-y-16 lg:gap-y-16 gap-x-11 sm:pl-0 sm:pr-0 md:pl-0 md:pr-0 text-white">
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                <MdOutlineWeb size={60} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Website Design
              </div>
              <span>Starting from $120</span>
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
                  <SmoothButton
                    cta="Start designing your project"
                    href="#contact"
                  />
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
              <span>Starting from $200</span>
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
                  <SmoothButton
                    cta="Start designing your project"
                    href="#contact"
                  />
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
              <span>Starting from $180</span>
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
                  <span className="ml-3 text-white">Custom Requests</span>
                </li>
              </ul>
              <RevealAlways>
                <div className="rounded-lg mt-10 cursor-pointer">
                  <SmoothButton
                    cta="Start designing your project"
                    href="#contact"
                  />
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
              <RevealOnce>UI&nbsp;/&nbsp;UX Design</RevealOnce>
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
                  exceptional UI/UX design for Websites, Mobile Appa, and PWAs.
                  Our talented team creates visually captivating and
                  user-friendly interfaces that make a lasting impression.
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
                <div className="mb-8">
                  Our goal is to deliver designs that not only look great but
                  also enhance usability and engagement. Whether you need a
                  Website revamp, a Mobile App design, or a comprehensive UI/UX
                  solution, we have the skills to exceed your expectations.
                </div>
              </RevealOnce>
            </div>
          </div>
          <div className="flex mt-8 mb-8 sm:mt-8 md:mt-8 lg:mt-8 items-center justify-center overflow-x-hidden w-full px-4 rounded-2xl">
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
        mt-8
        style={{ scrollMarginTop: "100px" }}
        id="contact"
      >
        <ContactSection
          cta="Get in touch with our team of Designers!"
          subcta="We will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="Hey I could do with a re-developed logo for my business."
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

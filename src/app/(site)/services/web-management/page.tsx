import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import ContactForm from "@/src/app/components/ContactForm";
import Accordion from "@/src/app/components/Accordion";

import Image from "next/image";
import Link from "next/link";

import { MdOutlineManageHistory } from "react-icons/md";
import ContactSection from "@/src/app/components/ContactSection";
import SmoothButton from "@/src/app/components/SmoothButton";

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
    contentClassName: "webmanagement-landing-class-1",
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
    contentClassName: "webmanagement-class-3",
  },
  {
    title: "How can I get in contact with Wynnum Web Services",
    content: (
      <>
        <p>If you are contacting us within Australia, shoot a message to a <a href="#contact" className="hover:underline cursor-pointer">phone number</a>. If you are contacting internationally, please, <a href="#contact" className="hover:underline hover:cursor-pointer">Email Us.</a></p>
      </>
    ),
    contentClassName: "webmanagement-class-3"
  }
];

export const metadata = {
  title: "Web Management – Wynnum Web Services",
};


export default function WebManagement() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="Website Management"
        secondarySubText="Keeping your Website Nice and Healthy"
        PageLink="Services"
        secondaryPageLink="Website Management"
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
          <div className="flex justify-center pl-11 pr-11 sm:pl-0 sm:pr-0 text-white">
            <div className="py-12 border border-dark-50 rounded-2xl flex flex-col justify-center items-center px-[5.5rem] sm:px-4 md:px-6 lg:px-8">
              <div className="flex justify-center items-center">
                <MdOutlineManageHistory size={60} />
              </div>
              <div className="flex flex-col justify-center items-center text-2xl font-semibold mt-6">
                Website Management
              </div>
              <span>Starting form $60&nbsp;/&nbsp;mo</span>
              <div>
                <i>
                  Prices&nbsp;<b>will</b>&nbsp;vary
                </i>
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
                  <span className="ml-3 text-white">Monthly SEO Revision</span>
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
                    Content Updates and Maintenance
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
                    Performance Optimisations and speed insights
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
                    Unlimited Website Design Revisions
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
                    Integration of new features and functionality
                  </span>
                </li>
              </ul>
              <RevealAlways>
                <div className="rounded-lg mt-10 cursor-pointer">
                  <a
                    href="#contact"
                    className="block w-full text-white bg-[#4A6CF7] hover:bg-white hover:text-black hover:z-50 transition ease-in-out duration-200 rounded-lg px-3.5 py-2.5"
                  >
                    Let us manage your site
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
              <RevealOnce>Website Management</RevealOnce>
            </div>
            <div className="text-base font-light pt-4 leading-relaxed">
              <div>
                <RevealOnce>
                  At our company, we specialize in comprehensive website
                  management services that empower businesses to maximize their
                  online presence. Our dedicated team offers a range of
                  solutions tailored to your specific needs, ensuring that your
                  website remains up-to-date, optimized, and engaging.
                </RevealOnce>
                <br />
                <RevealOnce>
                  With our monthly SEO revisions, we ensure that your website
                  maintains its visibility and ranks higher on search engine
                  results. Our team also takes care of content updates and
                  maintenance, keeping your website fresh and relevant for your
                  visitors. We prioritize performance optimizations and speed
                  insights to guarantee a seamless user experience, ensuring
                  that your website loads quickly and efficiently.
                </RevealOnce>
                <br />
                <RevealOnce>
                  Moreover, we offer unlimited website design revisions,
                  allowing you to refine and improve the look and feel of your
                  website as your business evolves. Additionally, we seamlessly
                  integrate new features and functionality into your website,
                  enabling you to stay ahead of the competition and provide an
                  enhanced user experience.
                </RevealOnce>
                <br />
                <RevealOnce>
                  Our goal is to provide exceptional website management services
                  that not only maintain the functionality of your website but
                  also enhance its performance, user engagement, and overall
                  success. Experience the power of effective website management
                  by partnering with us today.
                </RevealOnce>
                <br />
                <RevealOnce>
                  <div className="mb-8">
                    If you would like a monthly newsletter of all the changes WE
                    make to your website, just ask!
                  </div>
                </RevealOnce>
              </div>
            </div>
          </div>
          <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4 rounded-2xl">
            <FlyIn flyInRight={true}>
              <Image
                src="/images/gallery/second.png"
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
        <ContactSection
          cta="Get in touch with our team!"
          subcta="We will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="I think I need someone to proffesionally manage my website :("
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

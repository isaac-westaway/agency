import Image from "next/image";

import Design from "@/public/svg/card-design.svg";
import Develop from "@/public/svg/card-develop.svg";
import Deploy from "@/public/svg/card-deploy.svg";

import BodyShape1 from "@/public/svg/body-shape-1.svg";

import Hero from "@/src/app/components/Hero";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import FlyIn from "@/src/app/components/utils/FlyIn";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import ContactForm from "@/src/app/components/ContactForm";
import Testimonials from "@/src/app/components/testimonials/Testimonials";
import CaseStudies from "@/src/app/components/CaseStudies";
import TypedText from "@/src/app/components/experimental/TypedText";
import Accordion from "@/src/app/components/Accordion";
import Link from "next/link";

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

export const metadata = {
  title: "Home Digispark",
};

export default function Home() {
  return (
    <div className="scroll-smooth snap-x overscroll-x-none min-h-screen ml-11 mr-11 sm:ml-6 sm:mr-6 ">
      <section id="top" className="snap-start">
        <Hero />
      </section>
      <section className="relative mt-[11.4rem] sm:-mt-[13.7rem] md:mt-[0.4rem] lg:mt-[2rem] xl:mt-[5rem] border-t-[1px] border-dark-50 text-white">
        <div className="absolute top-1/12 -top-12 -right-11 sm:-right-6 -z-50 overflow-x-hidden">
          <Image src={BodyShape1} style={{ transform: "scaleX(-1)" }} alt="" />
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
                    src={Develop}
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
      <section className="relative text-white overflow-x-hidden border-t-[1px] border-dark-50">
        <div className="relative overflow-y-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
            <div className="h-full relative">
              <div className="mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
                We are committed to delivering the highest quality of work
              </div>
              <div className="text-base font-light pt-4 leading-relaxed">
                Transforming Brisbane&#39;s digital landscape since 2012,
                DigiSpark is your go-to online service agency. Our team of
                experts in web design, development, digital strategy, and
                marketing create tailored solutions for your business. From
                visually stunning websites to ROI-driven marketing campaigns, we
                deliver results. Whether you&#39;re a small business or a large
                enterprise, let&#39;s connect and embark on a digital journey
                together.
              </div>
              <div className="flex justify-center w-full items-end pt-4 mb-4">
                <RevealAlways>
                  <div className="rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                    I&#39;m Interested!
                  </div>
                </RevealAlways>
              </div>
            </div>
            <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 items-center justify-center overflow-x-hidden w-full px-4 bg-dark-50 bg-opacity-10 rounded-2xl">
              <FlyIn flyInRight={true}>
                <Image
                  src="/images/design.webp"
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
      <section className="relative text-white overflow-x-hidden border-t-[1px] border-dark-50">
        <div className="relative overflow-y-hidden">
          <div className="grid grid-cols-2 sm:flex sm:flex-col-reverse md:flex md:flex-col-reverse lg:flex lg:flex-col-reverse gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
            <div className="flex mt-8 mb-8 sm:mt-0 md:mt-0 lg:mt-0 flex-col items-center justify-center overflow-x-hidden w-full px-4 bg-dark-50 bg-opacity-10 rounded-2xl">
              <FlyIn flyInRight={false}>
                <Image
                  src="/images/design.webp"
                  alt="UI/UX"
                  width="600"
                  height="800"
                  className="z-[1000] object-contain mx-auto"
                />
              </FlyIn>
            </div>
            <div className="flex-col">
              <div className="sm:mt-0 md:mt-0 lg:mt-0 mt-8 py-4 text-3xl font-semibold border-y-[1px] border-dark-50">
                We are committed to delivering the highest quality of work
              </div>
              <div className="text-base font-light pt-4 leading-relaxed">
                Transforming Brisbane&#39;s digital landscape since 2012,
                DigiSpark is your go-to online service agency. Our team of
                experts in web design, development, digital strategy, and
                marketing create tailored solutions for your business. From
                visually stunning websites to ROI-driven marketing campaigns, we
                deliver results. Whether you&#39;re a small business or a large
                enterprise, let&#39;s connect and embark on a digital journey
                together.
              </div>
              <div className="flex justify-center w-full items-end pt-4 pb-5 ">
                <RevealAlways>
                  <div className="rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                    I&#39;m Interested!
                  </div>
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
                We are committed to delivering the highest quality of work
              </div>
              <div className="text-base font-light pt-4 leading-relaxed">
                Transforming Brisbane&#39;s digital landscape since 2012,
                DigiSpark is your go-to online service agency. Our team of
                experts in web design, development, digital strategy, and
                marketing create tailored solutions for your business. From
                visually stunning websites to ROI-driven marketing campaigns, we
                deliver results. Whether you&#39;re a small business or a large
                enterprise, let&#39;s connect and embark on a digital journey
                together.
              </div>
              <div className="flex justify-center w-full items-end pt-4 mb-4">
                <RevealAlways>
                  <div className="rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                    I&#39;m Interested!
                  </div>
                </RevealAlways>
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
        </div>
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50">
        <RevealOnce>
          <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-8 pb-8 select-text">
            What Australian businesses are saying about us
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
            Some of the companies weve developed for
          </div>
        </RevealOnce>
        <RevealOnce>
          <CaseStudies />
        </RevealOnce>
      </section>
      <section className="relative text-white border-t-[1px] border-dark-50">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
          <div>
            <RevealOnce>
              <div className="h-full relative">
                <div className="mt-8 py-4 text-3xl font-extrabold border-y-[1px] border-dark-50">
                  Get in touch with us!
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
          <div className="px-4 mt-6">
            <ContactForm />
          </div>
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

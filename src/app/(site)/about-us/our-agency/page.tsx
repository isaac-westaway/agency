import Accordion from "@/src/app/components/Accordion";
import CaseStudies from "@/src/app/components/CaseStudies";
import ContactSection from "@/src/app/components/ContactSection";
import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import SmoothButton from "@/src/app/components/SmoothButton";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
import Link from "next/link";

export const metadata = {
  title: "Our Agency ● Wynnum Web Services",
};


export default function AboutOurAgency() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="About Our Agency"
        secondarySubText="Learn more about core principles we build our websites on"
        PageLink="About Us"
        secondaryPageLink="Our Agency"
      />
      <section className="text-white ml-11 mr-11 -mt-4 mb-0 sm:-mt-24 md:-mt-20 lg:-mt-20 sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center ">
        <div className="w-fit">
          <RevealAlways>
            <div className="rounded-lg mt-2 md:mt-0 lg:mt-0 sm:mt-0 py-2.5 cursor-pointer">
              <SmoothButton cta="Get in contact!" href="#contact" />
            </div>
          </RevealAlways>
        </div>
      </section>
      <section className="text-white bg-black backdrop-blur-sm z-50 ml-11 mr-11 mt-3 border-t-[1px] border-dark-50">
        <RevealOnce>
          <div className="mx-4 sm:mx-0 mt-8 mb-8 border border-dark-50 rounded-2xl text-center bg-black backdrop-blur-sm z-50 px-4 sm:px-0 py-4 shadow-lg">
            <div className="text-3xl font-semibold mb-4">About Our Agency</div>
            <p className="p-4">
              Our core principles revolve around delivering excellence in every
              project. We prioritize search engine optimization (SEO) to ensure
              maximum visibility and organic traffic. Additionally, we focus on
              responsiveness, crafting websites that seamlessly adapt to
              different devices and screen sizes. With innovative design,
              user-friendly interfaces, and cutting-edge technologies, we create
              immersive online experiences that engage visitors and drive
              conversions. Collaborating closely with clients, we transform
              their ideas into stunning and functional websites that leave a
              lasting impact. Trust us to elevate your online presence and
              empower your business for success.
            </p>
          </div>
        </RevealOnce>
      </section>
      <section className=" text-white ml-11 mr-11 border-t-[1px] border-dark-50">
        <RevealOnce>
          <div className="flex justify-center text-center items-center font-extrabold text-3xl pt-8 pb-8 select-text">
            Some of the websites we&#39;ve created
          </div>
        </RevealOnce>
        <CaseStudies />
      </section>
      <section
        className="ml-11 mr-11 text-white border-t-[1px] border-dark-50"
        id="contact"
        style={{ scrollMarginTop: "100px" }}
      >
        <ContactSection
          cta="Absolutely not convinced? Request a demo!"
          subcta="We'll temporarily deploy your website on a preview server for 7 days. Contact us for the full specifics."
          message="Show me what you got!"
        />
      </section>
    </div>
  );
}

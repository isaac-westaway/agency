import Link from "next/link";
import ReusableHero from "../../components/ReusableHero";
import RevealOnce from "../../components/utils/RevealOnce";
import ContactForm from "../../components/ContactForm";
import ContactSection from "../../components/ContactSection";

export default function Services() {
  return (
    <div className="min-h-screen text-white">
      <ReusableHero
        heroText="You shouldn't be here!"
        subText="You probably meant to visit UI/UX Design, Website Production, or Website Management"
        secondarySubText="Click to visit those pages:"
        PageLink="Services"
      />
      <section className="ml-11 mr-11 text-gray-400 font-light text-lg sm:-mt-[6rem] md:-mt-[5rem] lg:-mt-[5rem]">
        <div className="grid grid-cols-3 sm:grid-cols-1 justify-between w-full sm:gap-y-4 border-dark-50 border-t-[1px] my-4 pt-4">
          <RevealOnce>
            <div className="text-center">
              <Link href="/services/ui-ux" className="hover:underline">
                UI/UX Design
              </Link>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="text-center">
              <Link href="/services/web-production" className="hover:underline">
                Website Production
              </Link>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="text-center">
              <Link href="/services/web-management" className="hover:underline">
                Website Management
              </Link>
            </div>
          </RevealOnce>
        </div>
      </section>
      <section
        className="mr-11 ml-11 border-t-[1px] border-dark-50"
        id="contact"
        style={{ scrollMarginTop: "100px" }}
      >
        <ContactSection
          cta="Get in touch with our team!"
          subcta="We will endeavour to respond as fast as possible. Usually this
                  means 6 - 18 Hours."
          message="I'd like to know more about the digital services you offer!"
        />
      </section>
    </div>
  );
}

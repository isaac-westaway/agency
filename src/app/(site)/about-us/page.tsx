import Link from "next/link";
import ContactSection from "@/src/app/components/contact/ContactSection";
import ReusableHero from "@/src/app/components/ReusableHero";
import RevealOnce from "@/src/app/components/utils/RevealOnce";

export const metadata = {
  title: "About – Wynnum Web Services",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="There is nothing here!"
        subText="You probably meant to visit Our Team or Our Agency"
        secondarySubText="Click to visit those pages:"
        PageLink="About Us"
      />
      <section className="ml-11 mr-11 text-gray-400 font-light text-lg sm:-mt-[6rem] md:-mt-[5rem] lg:-mt-[5rem]">
        <div className="grid grid-cols-2 sm:grid-cols-1 justify-between w-full sm:gap-y-4 border-dark-50 border-t-[1px] my-4 pt-4">
          <RevealOnce>
            <div className="text-center">
              <Link href="/about-us/our-team" className="hover:underline">
                Our Team
              </Link>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="text-center">
              <Link href="/about-us/our-team" className="hover:underline">
                Our Agency
              </Link>
            </div>
          </RevealOnce>
        </div>
      </section>
      <section
        className="mr-11 ml-11 border-t-[1px] border-dark-50 text-white"
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

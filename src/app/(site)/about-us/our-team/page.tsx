import Accordion from "@/src/app/components/Accordion";
import CaseStudies from "@/src/app/components/CaseStudies";
import ContactSection from "@/src/app/components/ContactSection";
import ReusableHeroNested from "@/src/app/components/ReusableHeroNested";
import SmoothButton from "@/src/app/components/SmoothButton";
import RevealAlways from "@/src/app/components/utils/RevealAlways";
import RevealOnce from "@/src/app/components/utils/RevealOnce";
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
  title: "Our Team Wynnum Web Services",
};


export default function AboutOurTeam() {
  return (
    <div className="min-h-screen">
      <ReusableHeroNested
        heroText="About Our Team"
        secondarySubText="Learn more about our talented team"
        PageLink="About Us"
        secondaryPageLink="Our Team"
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
          <div className="mx-4 mt-8 mb-8 border border-dark-50 rounded-2xl text-center bg-black backdrop-blur-sm z-50 px-4 py-4 shadow-lg">
            <div className="text-3xl font-semibold mb-4">About Our Team</div>
            <p>
              We are a dynamic team of creative minds specializing in UI/UX
              design, web development, and software solutions. With a passion
              for innovation and a commitment to excellence, we bring your ideas
              to life in the digital realm. Despite being a small team, our
              expertise and dedication ensure that every project we undertake
              receives the attention it deserves. From crafting intuitive user
              experiences to building robust web and software applications, we
              strive to exceed
            </p>
            your expectations and deliver results that truly stand out.
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

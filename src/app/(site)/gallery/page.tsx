import Image from "next/image";
import ReusableHero from "../../components/ReusableHero";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import RevealOnce from "../../components/utils/RevealOnce";
import ContactForm from "../../components/contact/ContactForm";
import ContactSection from "../../components/contact/ContactSection";

export const metadata = {
  title: "Gallery –  WynDigital",
};


export default function Gallery() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Our gallery of work"
        subText="Here you will find our flagship projects"
        secondarySubText=" If you would like your project here shoot us an Email!"
        PageLink="Gallery"
      />
      <section className="mt-4 lg:-mt-14 md:-mt-16 sm:-mt-14 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50">
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 gap-x-8 z-50">
          <RevealOnce>
            <div className="mt-8 relative z-50">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                priority={true}
                loading="eager"
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <a
                  href="https://sensational-caramel-9e9acf.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </a>
                <p className="text-sm">Website Development & Management</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 relative z-50">
              <Image
                src="/images/gallery/bigspring-light.webp"
                width={100}
                height={100}
                priority={true}
                loading="eager"
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white border-t-[1px] border-dark-50 rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <a
                  href="https://chipper-flan-9d4d59.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 items-center"
                >
                  <span className="flex-grow">BigSpring</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </a>
                <p className="text-sm">UI/UX Design</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative z-50">
              <Image
                src="/images/gallery/gymfit.webp"
                width={100}
                height={100}
                priority={true}
                loading="eager"
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl z-50`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl border-t-[1px] border-dark-50 text-black px-4 py-4 flex flex-col">
                <a
                  href="https://main--deft-figolla-4e9571.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 items-center"
                >
                  <span className="flex-grow">Gymfit</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </a>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
        </div>
      </section>
      <section
        className="relative text-white border-t-[1px] border-dark-50 mr-11 ml-11"
        id="contact"
        style={{ scrollMarginTop: "100px" }}
      >
        <ContactSection
          cta="Get in touch with our team!"
          subcta="Our team will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="Your digital services look great! I really want to learn more!"
        />
      </section>
    </div>
  );
}

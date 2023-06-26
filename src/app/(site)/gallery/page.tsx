import Image from "next/image";
import ReusableHero from "../../components/ReusableHero";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import RevealOnce from "../../components/utils/RevealOnce";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Our gallery of work"
        subText="Here you will find our flagship projects"
        secondarySubText=" If you would like your project here shoot us an Email!"
        PageLink="Gallery"
      />
      <section className="mt-8 mr-11 ml-11 border-t-[1px] border-dark-50 text-white">
        <div className="grid grid-cols-3 px-4 gap-4">
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/bigspring-light.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white border-t-[1px] border-dark-50 rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 items-center"
                >
                  <span className="flex-grow">BigSpring</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">UI/UX Design</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/gymfit.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl border-t-[1px] border-dark-50 text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 items-center"
                >
                  <span className="flex-grow">Gymfit</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 border items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 border items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 border items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 border items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 border items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
          <RevealOnce>
            <div className="mt-8 mb-8 relative">
              <Image
                src="/images/gallery/constra.webp"
                width={100}
                height={100}
                alt=""
                layout="responsive"
                className={`object-contain transition-opacity duration-200 rounded-2xl`}
              />
              <div className="absolute bottom-0 w-full bg-white rounded-b-2xl text-black px-4 py-4 flex flex-col">
                <Link
                  href="#"
                  className="flex flex-row font-semibold hover:underline cursor-pointer text-lg w-full shrink-0 border items-center"
                >
                  <span className="flex-grow">Constra Constructions</span>
                  <FiExternalLink
                    className="ml-2"
                    style={{ stroke: "black", strokeWidth: "3" }}
                  />
                </Link>
                <p className="text-sm">Website Development</p>
              </div>
            </div>
          </RevealOnce>
        </div>
      </section>
    </div>
  );
}

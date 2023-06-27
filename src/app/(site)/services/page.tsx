import Link from "next/link";
import ReusableHero from "../../components/ReusableHero";
import RevealOnce from "../../components/utils/RevealOnce";
import ContactForm from "../../components/ContactForm";

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
      <section className="mr-11 ml-11 border-t-[1px] border-dark-50" id="contact" style={{ scrollMarginTop: '100px' }}>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-0 md:gap-0 lg:gap-0 px-4">
          <div>
            <RevealOnce>
              <div className="h-full relative">
                <div className="mt-8 py-4 text-3xl font-extrabold border-y-[1px] border-dark-50">
                  Get in touch with our team!
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
                <ContactForm message="I'd like to know more about the digital services you offer!" />
              </div>
          </RevealOnce>
        </div>
      </section>
    </div>
  );
}

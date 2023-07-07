import Button from "../../components/Button";
import ReusableHero from "../../components/AcknowledgementOfCountryHero";
import RevealOnce from "../../components/utils/RevealOnce";

import Link from "next/link";
import Image from "next/image";
import ContactSection from "../../components/contact/ContactSection";

export const metadata = {
  title: "Acknowledgement of Country –  WynDigital",
};

export default function AckOfCountry() {
  return (
    <div className="min-h-screen">
      <ReusableHero
        heroText="Acknowledgement of Country"
        PageLink="Acknowledgement of Country"
      />
      <section className="mt-4 lg:-mt-14 md:-mt-16 sm:-mt-14 mr-11 ml-11 border-t-[1px] border-dark-50 text-white z-50">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-11 mt-2 mx-2">
          <div>
            <Image src="/images/quandamookan-artwork.webp" width="800" height="1000" alt="Quandamookan Artwork Wynnum" className="mt-3"/>
          </div>
          <RevealOnce>
            <div className="mt-2">
            WynDigital respectfully acknowledges Aboriginals and
              Torres Strait Islanders as the first peoples of Australia and the
              Quandamooka People as the traditional owners of the land on which
              we lay our agency. We respect and value Australia’s First Nations
              peoples’ resilience, courage, determination and contribution to
              this country’s social and economic development, while recognising
              the immense cultural, spiritual and linguistic diversity that has
              existed in these lands for thousands of years. WynDigital
              pays respect to leaders past, present and emerging. Quandamooka
              Country, comprises the waters and lands of and around Mulgumpin
              (Moreton Island), Minjerribah (North Stradbroke Island), the
              Southern Moreton Bay islands and South Stradbroke Island. It
              includes the mainland from the mouth of the Brisbane River,
              Wynnum, Chandler, Lytton, Belmont, Tingalpa, south to Cleveland,
              to the Logan River, crossing the boundaries of four modern day
              Queensland local governments. There are three clans of
              Quandamooka. They are the Nughi, the Nunukul and the Goenpul, who
              all have a strong identity and culture, as the people of the sand
              and the water.
            </div>
            <div>
              For more information regarding the Quandamooka People
              <Link
                href="http://www.qyac.net.au/"
                className="text-[#4A6CF7] hover:underline hover:cursor-pointer"
              >
                &nbsp;please visit their website
              </Link>
            </div>
            <div className="w-fit mt-4">
              <Button
                cta="Learn more about the Quandamooka People"
                href="http://www.qyac.net.au/"
              />
            </div>
          </RevealOnce>
        </div>
      </section>
      <section
        className="relative mt-[21px] text-white border-t-[1px] border-dark-50 ml-11 mr-11"
        style={{ scrollMarginTop: "100px" }}
        id="contact"
      >
        <ContactSection
          cta="Learn more about our team!"
          subcta="We will endeavour to respond as fast as possible. Usually this means 6 - 18 Hours."
          message="Hey WynDigital!"
        />
      </section>
    </div>
  );
}

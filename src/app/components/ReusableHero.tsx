import Link from "next/link";
import Image from "next/image";

import RevealAlways from "./utils/RevealAlways";
import RevealOnce from "./utils/RevealOnce";

import Hero1 from "@/public/svg/hero-shape-1.svg";

interface ReusableHeroProps {
  heroText: string;
  subText?: string;
  secondarySubText?: string;
  PageLink: string;
  actionButton?: string;
}

const ReusableHero: React.FC<ReusableHeroProps> = ({
  heroText,
  subText,
  secondarySubText,
  PageLink,
  actionButton,
}) => {
  return (
    <div className="ml-11 mr-11 -z-50">
      <div className="relative z-10 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="absolute top-0 -right-11 -z-50"></div>
        <div className="absolute top-12 -left-11 -z-50">
        <Image src={Hero1} alt="" />

        </div>
        <div className="absolute top-0 -left-11"></div>
        <div className="mx-auto pt-44 sm:pt-48 lg:pt-56">
          <RevealAlways>
            <div className="flex flex-col justify-start">
              <div className="text-5xl font-bold text-white sm:text-5xl tracking-wider">
                {heroText}
              </div>
              <div className="mt-6 text-lg leading-8 sm:leading-normal text-gray-400 font-medium w-full grid grid-cols-2 sm:grid-cols-1">
                <div className="">
                  <div className="w-full">{subText} </div>
                  <div className="font-light mt-1 sm:leading-normal text-gray-400 text-lg leading-8">
                    {secondarySubText}
                  </div>
                </div>
                <div className="mr-1">
                  <div className="flex justify-end sm:justify-center sm:pt-4 w-full items-center">
                    <Link href="/" className="hover:text-[#4A6CF7]">
                      Home
                    </Link>
                    <span className="block w-2 h-2 border-t-2 border-r-2 rotate-45 ml-3 mr-4 border-gray-400"></span>
                    <span className="text-[#4A6CF7]">{PageLink}</span>
                  </div>
                  <div className="flex justify-end sm:justify-center sm:pt-4 w-full mt-1">
                    <RevealAlways>
                      <div className="rounded-lg cursor-pointer px-3.5 sm:py-2.5 text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
                        {actionButton}
                      </div>
                    </RevealAlways>
                  </div>
                </div>
              </div>
            </div>
          </RevealAlways>
        </div>
      </div>
    </div>
  );
};

export default ReusableHero;

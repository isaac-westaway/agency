import Link from "next/link";
import Image from "next/image";

import RevealAlways from "./utils/RevealAlways";
import RevealOnce from "./utils/RevealOnce";

import Hero1 from "@/public/svg/hero-shape-1.svg";

interface ReusableHeroNestedProps {
  heroText: string;
  subText?: string;
  secondarySubText?: string;
  PageLink: string;
  secondaryPageLink?: string;
  actionButton?: string;
}

const ReusableHeroNested: React.FC<ReusableHeroNestedProps> = ({
  heroText,
  subText,
  secondarySubText,
  PageLink,
  secondaryPageLink,
  actionButton,
}) => {
  const formattedPageLink = PageLink.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="ml-11 mr-11">
      <div className="relative z-10 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="absolute top-0 -right-11 -z-50 pointer-events-none">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            ></circle>
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            ></circle>
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            ></circle>
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            ></circle>
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            ></circle>
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            ></circle>
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop
                  offset="0.145833"
                  stopColor="#4A6CF7"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop
                  offset="0.145833"
                  stopColor="#4A6CF7"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7"></stop>
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-12 -left-11 -z-50 pointer-events-none">
          <Image src={Hero1} alt="" loading="eager" priority={true} />
        </div>
        <div className="absolute top-0 -left-11"></div>
        <div className="mx-auto pt-44 sm:pt-48 lg:pt-56">
          <RevealAlways>
            <div className="flex flex-col justify-start sm:justify-center text-center w-full">
              <div className="text-5xl font-bold text-white sm:text-4xl tracking-wider">
                {heroText}
              </div>
              <div className="text-start sm:text-center md:text-center lg:text-center mt-6 text-lg leading-8 sm:leading-normal text-gray-400 font-medium w-full grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className="">
                  <div className="">{subText} </div>
                  <div className="font-light mt-1 sm:leading-normal text-gray-400 text-lg leading-8">
                    {secondarySubText}
                  </div>
                </div>
                <div className="mr-1">
                  <div className="flex justify-end sm:justify-center md:justify-center lg:justify-center sm:text-sm pt-4 w-full items-center">
                    <Link href="/" className="hover:text-[#4A6CF7]">
                      Home
                    </Link>
                    <span className="block w-2 h-2 border-t-2 border-r-2 rotate-45 ml-3 mr-4 border-gray-400"></span>
                    <Link
                      href={`/${formattedPageLink}`}
                      className="hover:text-[#4A6CF7]"
                    >
                      {PageLink}
                    </Link>
                    <span className="block w-2 h-2 border-t-2 border-r-2 rotate-45 ml-3 mr-4 border-gray-400"></span>
                    <span className="text-[#4A6CF7]">{secondaryPageLink}</span>
                  </div>
                  <div className="flex justify-end sm:justify-center sm:pt-4 w-full mt-1">
                    <RevealAlways>
                      <div className="rounded-lg cursor-pointer px-3.5 text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200">
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

export default ReusableHeroNested;

import Link from "next/link";
import RevealAlways from "./utils/RevealAlways";
import RevealOnce from "./utils/RevealOnce";

interface ReusableHeroProps {
  heroText: string;
  subText?: string;
  secondarySubText?: string;
  PageLink: string;
}

const ReusableHero: React.FC<ReusableHeroProps> = ({
  heroText,
  subText,
  secondarySubText,
  PageLink,
}) => {
  return (
    <div className="ml-11 mr-11">
      <div className="relative z-10 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="absolute top-0 -right-11">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            ></path>
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-0 -left-11">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
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
                <div className="">
                  <div className="flex justify-end sm:justify-center sm:pt-4 w-full items-center">
                    <Link href="/" className="hover:text-[#4A6CF7]">
                      Home
                    </Link>
                    <span className="block w-2 h-2 border-t-2 border-r-2 rotate-45 ml-3 mr-4"></span>
                    <span className="text-[#4A6CF7]">{PageLink}</span>
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

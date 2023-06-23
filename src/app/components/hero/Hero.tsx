import RevealAlways from "../utils/RevealAlways";

import Image from "next/image";
import Hero1 from "@/public/hero-shape-1.svg";

const Hero = () => {
  return (
    <div className=" px-2">
      <div className="absolute top-0 right-0">
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
              <stop stop-color="#4A6CF7"></stop>
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
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
                stop-color="#4A6CF7"
                stop-opacity="0"
              ></stop>
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.08"></stop>
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
                stop-color="#4A6CF7"
                stop-opacity="0"
              ></stop>
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0.08"></stop>
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7"></stop>
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7"></stop>
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-[34rem] xl:top-[28rem] left-0 sm:hidden md:hidden lg:hidden">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          ></path>
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          ></path>
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          ></path>
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          ></path>
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          ></circle>
          <circle
            cx="220"
            cy="63"
            r="43"
            fill="url(#paint5_radial_25:218)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7"></stop>
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop
                offset="0.145833"
                stop-color="white"
                stop-opacity="0"
              ></stop>
              <stop offset="1" stop-color="white" stop-opacity="0.08"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-[26.8rem] lg:top-[24.8rem] left-1/2 sm:hidden md:hidden lg:hidden xl:hidden">
        <RevealAlways>
          <svg xmlns="http://www.w3.org/2000/svg" width="1" height="350">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="290"
              stroke="#212121"
              strokeWidth="2"
            />
          </svg>
        </RevealAlways>
      </div>

      <div className="absolute top-12 left-0 sm:hidden">
        <Image src={Hero1} alt="" />
      </div>
      <div className="relative z-10 px-6 pt-4 sm:pt-1 sm:-translate-y-20 md:-translate-y-20 lg:-translate-y-20 md:pt-3 lg:pt-6">
        <div className="mx-auto py-44 sm:py-48 lg:pt-56">
          <RevealAlways>
            <div className="text-center flex flex-col justify-center">
              <div className="text-5xl font-bold text-white sm:text-6xl tracking-wider">
                Design. Develop. Deploy.
              </div>
              <div className="mt-6 text-lg leading-8 text-gray-400 font-medium">
                DigiSpark is Australia&#8217;s top-ranking web services
                provider.
                <br />
                <div className="font-light">
                  We specialize in the full production lifecycle, from designing
                  your site to the deployment of it.
                </div>
              </div>
              <div className="mt-9 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-lg bg-[#4A6CF7] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out duration-200"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </RevealAlways>
        </div>
      </div>
    </div>
  );
};

export default Hero;

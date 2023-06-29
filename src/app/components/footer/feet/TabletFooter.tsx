"use client";

import Logo from "../../Logo";

import Image from "next/image";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

const TabletFooter = () => {
  return (
    <div className="border-t-[1px] border-dark-50 w-full text-sm relative">
      <div className="absolute -bottom-5 right-0  -z-50 pointer-events-none ">
        <Image src="/svg/footer-shape-1.svg" alt="" width="187" height="254" />
      </div>
      <div className="absolute -top-10 left-0  -z-50 pointer-events-none">
        <Image src="/svg/footer-shape-2.svg" alt="" width="158" height="392" />
      </div>
      <div className="w-full grid grid-cols-2 text-white tracking-wider">
        <div className="pt-4 pl-11 row-span-1">
          <Logo />
          <div className="">
            <p className="text-sm text-neutral-400 font-medium pt-4 tracking-wider">
              Affordable Digital Solutions. Always.
            </p>
            <p className="text-sm text-neutral-400 my-2 tracking-wider">
              Phone: +61 490 747 987
            </p>
          </div>
        </div>
        <div className="pt-4">
          <div className="border-l-[1px]  border-dark-50 pl-11 pr-11">
            <div className="font-semibold border-b-[1px] border-dark-50 pb-3 tracking-wider">
              Quick Links
            </div>
            <div className="pt-3 leading-6 tracking-wider">
              <div className="font-light flex flex-row w-full">
                <a
                  href="https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE"
                  className="w-full flex items-center animatedUnderline hover:cursor-pointer"
                >
                  Billing Portal
                </a>
                <div className="flex items-center w-1/3 justify-end">
                  <FiExternalLink />
                </div>
              </div>
              <div className="my-2">
                <Link
                  href="/gallery"
                  className="font-light my-2 animatedUnderline w-max hover:cursor-pointer"
                >
                  Gallery
                </Link>
              </div>
              <div className="my-2">
                <Link
                  href="/services/ui-ux"
                  className="font-light my-2  animatedUnderline w-max hover:cursor-pointer"
                >
                  UI&nbsp;/&nbsp;UX Design
                </Link>
              </div>
              <div className="my-2">
                <Link
                  href="/services/web-development"
                  className="font-light my-2  animatedUnderline w-max hover:cursor-pointer"
                >
                  Web Development
                </Link>
              </div>
              <div className="my-2">
                <Link
                  href="/services/web-management"
                  className="font-light my-2  animatedUnderline w-max hover:cursor-pointer"
                >
                  Web Management
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-4 pl-11 pr-11">
          <div className="font-semibold border-b-[1px] border-dark-50 pb-3 tracking-wider">
            News & Posts
          </div>
          <div className="mt-[0.75rem] leading-6 tracking-wider rounded-2xl -mx-4 hover:bg-dark-50 hover:cursor-pointer hover:backdrop-blur-2xl duration-200 transition ease-in-out">
            <div className="px-4 py-3 hover:cursor-pointer">
              <Link href="/blog/Local-SEO">
                <span className="text-white">The Importance of Local SEO</span>
                <div className="text-sm flex flex-row">
                  <span className="">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      className="fill-white mr-2"
                    >
                      <path d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z"></path>
                    </svg>
                  </span>
                  14 / May / 23
                </div>
              </Link>
            </div>
          </div>
          <div className="leading-6 tracking-wider rounded-2xl hover:bg-dark-50 hover:cursor-pointer -mx-4 duration-200 transition ease-in-out">
            <div className="px-4 py-3">
              <Link href="/blog/aws-quickstart">
                <span className="text-white">Getting Started with AWS</span>
                <div className="text-sm flex flex-row">
                  <span className="">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      className="fill-white mr-2"
                    >
                      <path d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z"></path>
                    </svg>
                  </span>
                  08 / May / 23
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="pl-11 pr-11 border-l-[1px] h-full border-dark-50">
            <div className="font-semibold flex flex-row border-b-[1px] border-dark-50 pb-3  tracking-wider pt-4">
              <div className="w-full flex items-center">Get in touch</div>
              <div className="flex items-center justify-end ">
                <FiExternalLink style={{ stroke: "white", strokeWidth: "3" }} />
              </div>
            </div>
            <div className="pt-3 leading-6 tracking-wider">
              <div className="font-light mb-2">LinkedIn</div>
              <div className="font-light my-2">Facebook</div>
              <div className="font-light my-2">Instagram</div>
              <div className="font-light my-2">Github</div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col border-r-[1px] border-dark-50 col-span-2 sm:col-span-1 pb-2">
          <div className="justify-center text-center flex py-2 border-b-[1px] border-dark-50 mx-[31px] font-semibold tracking-wider text-sm">
            &copy; 2023 DigiSpark Australia
          </div>
          <div className="flex flex-row sm:flex-col justify-evenly p-2 tracking-wider font-light mx-[31px]">
            <div className="my-2">Acknowledgement of Country</div>
            <div className="my-2">Terms & Conditions</div>
            <div className="my-2">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletFooter;

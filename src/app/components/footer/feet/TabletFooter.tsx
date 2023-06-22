"use client";

import Logo from "../../Logo";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

const MobileFooter = () => {
  return (
    <div className="border-t-[1px] border-dark-50 w-full text-sm">
      <div className="flex w-full justify-center py-4">
        <Logo />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 text-center">
        <div className="tracking-wider font-medium text-neutral-400">
          Affordable Digital Solutions. Always.
        </div>
        <div className="tracking-wider font-light text-neutral-400">
          Phone: +61 490 747 987
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0 text-white mt-2">
        <div className="relative flex flex-col border-r-[1px] border-dark-50">
          <div className="justify-center flex py-2 border-b-[1px] border-dark-50 mx-12 font-semibold tracking-wider text-sm">
            Quick Links
          </div>
          <div className="flex flex-col justify-center p-2 tracking-wider font-light mx-12">
            <div className="w-full flex flex-row">
              <div className="shrink-0">Billing Portal</div>
              <div className="h-full flex items-center w-full justify-end">
                <FiExternalLink />
              </div>
            </div>
            <div className="my-2">Blog</div>
            <div className="mb-2">Gallery</div>
          </div>
        </div>
        <div className="relative flex flex-col border-l-[0px] border-dark-50">
          <div className="justify-center flex py-2 border-b-[1px] border-dark-50 mx-12 font-semibold tracking-wider text-sm">
            <div className="mr-3">Get in touch</div>
            <div className="flex items-center justify-end">
              <FiExternalLink style={{ stroke: "white", strokeWidth: "3" }} />
            </div>
          </div>
          <div className="flex flex-col justify-center p-2 tracking-wider font-light mx-12">
            <div className="w-full flex flex-row">
              <div className="shrink-0">LinkedIn</div>
            </div>
            <div className="my-2">Facebook</div>
            <div className="mb-2">Instagram</div>
            <div>Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;

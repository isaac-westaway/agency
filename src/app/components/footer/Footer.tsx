"use client";

import Logo from "../Logo";

const Footer: React.FC = () => {
  return (
    <div className="text-white w-full  pt-4 py-4 border-t-[1px] border-dark-50">
      <div className="flex sm:flex-col md:flex-col lg:flex-col items-center pl-11 pr-11 justify-between w-full backdrop-blur-lg">
        <div className="shrink-0 mr-36 
            sm:mr-0 sm:flex sm:items-center sm:justify-center sm:w-full sm:my-2
            md:mr-0 md:flex md:items-center md:justify-center md:w-full md:my-2 
            lg:mr-0 lg:flex lg:items-center lg:justify-center lg:w-full lg:my-2">
          <Logo />
        </div>
        <div className="border w-full mx-2 sm:my-2 md:my-2 lg:my-2">
            Resources
        </div>
        <div className="border w-full mx-2 sm:my-2 md:my-2 lg:my-2">
            Useful Links
        </div>
        <div className="border w-full mx-2 sm:my-2 md:my-2 lg:my-2">
            Legal
        </div>
        <div className="border w-full mx-2 sm:my-2 md:my-2 lg:my-2">
            Services
        </div>
      </div>
    </div>
  );
};

export default Footer;

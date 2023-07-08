import Image from "next/image";

import {
  useMobile,
  useTablet,
  useDesktop,
} from "@/src/app/components/hooks/mediaQueries";

const Logo = () => {

  const Tablet = useTablet();
  const Desktop = useDesktop();
  const Mobile = useMobile();

  return (
    <>
      {(Tablet || Mobile) && (
        <a href="/">
          <Image
            alt="WynDigital Logo Image"
            width={150}
            height={150}
            src="/logo/fulllogo.png"
            loading="eager"
            priority={true}
            className="w-[150px] sm:w-[120px] md:w-[120px] lg:w-[130px] p-0 md:block cursor-pointer shrink-0"
          />
        </a>
      )}
        {Desktop && (
          <a href="/">
            <Image
              alt="WynDigital Logo Image"
              width={150}
              height={150}
              src="/logo/fulllogo.svg"
              loading="eager"
              priority={true}
              className="w-[160px] sm:w-[120px] md:w-[120px] lg:w-[130px] p-0 md:block cursor-pointer shrink-0"
            />
          </a>
      )}
    </>
  );
};

export default Logo;

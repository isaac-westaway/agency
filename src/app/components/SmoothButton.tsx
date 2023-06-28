import Link from "next/link";
import RevealAlways from "./utils/RevealAlways";

interface SmoothButtonProps {
  cta: string;
  href: string;
  children?: React.ReactNode;
}

const SmoothButton: React.FC<SmoothButtonProps> = ({ cta, children, href }) => {
  return (
    <RevealAlways>
      <a href={`${href}`} className="w-full">
        <div className="rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200 border border-transparent">
          <span className="block w-full h-full">
            {cta}
            {children}
          </span>
        </div>
      </a>
    </RevealAlways>
  );
};

export default SmoothButton;

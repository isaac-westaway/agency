import Link from "next/link";
import RevealAlways from "./utils/RevealAlways";

interface ButtonProps {
  cta: string;
  href: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ cta, children, href }) => {
  return (
    <RevealAlways>
      <Link href={`${href}`} className="w-full">
        <div className="rounded-lg px-3.5 py-2.5 cursor-pointer text-white bg-[#4A6CF7] hover:bg-white hover:text-black transition ease-in-out duration-200 border border-transparent">
          <span className="block w-full h-full">
            {cta}
            {children}
          </span>
        </div>
      </Link>
    </RevealAlways>
  );
};

export default Button;

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="p-0 md:block cursor-pointer shrink-0"
      alt="Logo"
      width="150"
      height="150"
      src="/logo/fulllogo.svg"
      loading="eager"
      priority={true}
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;

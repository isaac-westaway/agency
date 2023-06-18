import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="p-0 md:block cursor-pointer shrink-0"
      alt="Logo"
      width="100"
      height="100"
      src="/images/logo.webp"
      loading="lazy"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;

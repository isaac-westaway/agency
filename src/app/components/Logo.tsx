import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="WynDigital Logo Image"
      width={150}
      height={150}
      src="/logo/fulllogo.png"
      loading="eager"
      priority={true}
      className="w-[150px] sm:w-[120px] md:w-[120px] lg:w-[130px] p-0 md:block cursor-pointer shrink-0"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;

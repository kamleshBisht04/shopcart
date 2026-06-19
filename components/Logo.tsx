import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className="flex items-center  ">
      <Image
        src={logo}
        alt="Shopcart Logo"
        width={150}
        height={50}
        className="h-11 w-auto object-contain"
        priority
      />
      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          className,
        )}
      >
        Shopcar
        <span className="text-shop_light_green group-hover:text-shop_dark_green hoverEffect ">
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;

import Link from "next/link";
import { Title } from "./ui/title";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className=" py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 md:px-24 flex items-center justify-between ">
      <div className="space-y-5">
        <Title>
          Grab Upto 50% Off on <br /> Selected headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_dark_green/80 text-white/90 py-2 px-5 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect "
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image src={banner_1} alt="banner image" className="hidden md:inline-flex w-120" />
      </div>
    </div>
  );
};

export default HomeBanner;

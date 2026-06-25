import Link from "next/link";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/title";
import { categoriesData, quickLinksData } from "@/constants/data";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="border-y">
        <Container>
          <FooterTop />
        </Container>
      </div>
      {/* footer bottom */}
      <Container>
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-20 py-6 mt-6  ">
          <div className="space-y-2">
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcart, blending style and comfort to
              elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green "
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="mt-4 space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title} className=" ">
                  <Link
                    href={item?.href}
                    className=" text-sm text-gray-600 font-medium hover:text-shop_dark_green "
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="mt-4 space-y-3">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className=" text-sm text-gray-600 font-medium  hover:text-shop_dark_green "
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Newsletter</SubTitle>
            <SubText className="my-4 text-sm">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </SubText>
            <form className="space-y-4">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
      </Container>
      <div className="py-2 border-t border-t-slate-300 text-center text-sm  text-gray-600 bg-gray-50">
        <span className="flex items-center justify-center text-black ">
          <span >&copy;</span> {new Date().getFullYear()} <Logo className="text-sm" />. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

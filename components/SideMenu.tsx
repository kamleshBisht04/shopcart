import Link from "next/link";
import Logo from "./Logo";
import { FC } from "react";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutSideClick } from "@/hooks";

interface sidebarProps {
  isOpen: boolean;
  onClose(): void;
}

const SideMenu: FC<sidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutSideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/90 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect `}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 h-screen bg-black p-10 border-r border-r-shop_light_green flex flex-col gap-6 "
      >
        <div className="flex items-center justify-between gap-5">
          <Logo
            className="text-white "
            spanDesign="group-hover:text-white"
            isOpen={isOpen}
            onClose={onClose}
          />
          <button onClick={onClose} className="hover:text-shop_light_green hoverEffect">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col gap-3 space-y-2.5 font-medium px-3 tracking-wider">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hover:text-shop_light_green hoverEffect ${pathname === item?.href && "text-shop_light_green"}`}
              onClick={onClose}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;

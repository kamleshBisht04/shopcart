import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

interface sidebarProps {
  isOpen: boolean;
  onClose(): void;
}

const SideMenu: FC<sidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/90 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect `}
    >
      <div className="min-w-72 max-w-96 h-screen bg-black p-10 border-r border-r-shop_light_green flex flex-col gap-6 ">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white " spanDesign="group-hover:text-white" isOpen={isOpen} />
          <button onClick={onClose} className="hover:text-shop_light_green hoverEffect ">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SideMenu;

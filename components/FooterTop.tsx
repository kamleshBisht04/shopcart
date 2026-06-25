import { footerTopData } from "@/constants/footerTopData";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-2  ">
      {footerTopData?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 group text-gray-800 hover:bg-gray-100 transition-colors hoverEffect p-2 rounded-md"
        >
          <p className="bg-shop_light_green/10 p-3 rounded-full group  group-hover:text-shop_dark_green ">
            {item?.icon}
          </p>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-shop_medium_green hoverEffect">
              {item?.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-900 hoverEffect">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;

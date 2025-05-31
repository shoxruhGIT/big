import { Server } from "lucide-react";
import React from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const FooterNav = () => {
  const footerNavLink = [
    {
      id: 1,
      name: "Home",
      to: "/",
      icon: <IoHome />,
    },
    {
      id: 2,
      name: "Dashboard",
      to: "/dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      id: 3,
      name: "Billing",
      to: "/billing",
      icon: <BsFillCreditCardFill />,
    },
    {
      id: 4,
      name: "New Server",
      to: "/server-configure",
      icon: <Server className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="fixed w-full z-50 bottom-10 px-4">
      <nav
        className="max-w-[1600px] mx-auto rounded-[18px] grid grid-cols-4 place-items-center py-3"
        style={{
          background:
            "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
        }}
      >
        {footerNavLink.map((nav) => (
          <NavLink
            className={({ isActive }) =>
              `w-full max-w-[180px] h-[54px] flex px-4 items-center justify-center gap-3 text-[10px] md:text-sm font-medium text-white rounded-[18px] ${
                isActive ? "bg-[#8f8f8f0a]" : ""
              } hover-shadow-custom`
            }
            to={nav?.to}
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-[15px] md:w-[30px] h-[15px] md:h-[30px] rounded-xl flex items-center justify-center ${
                    isActive ? "bg-[#0075FF]" : "bg-[#1A1F37] text-[#0075FF]"
                  }`}
                >
                  {nav?.icon}
                </div>
                {nav?.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default FooterNav;

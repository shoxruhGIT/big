import { Server } from "lucide-react";
import React, { useEffect, useState } from "react";
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
      icon: <Server className="w-3 h-3 md:h-4 md:w-4" />,
    },
  ];

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 200px dan keyin divni yashiramiz
      if (scrollY > 2600) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed w-full z-50 bottom-2 px-4 transition-transform duration-200 ease-in-out ${
        isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute max-w-[1600px] mx-auto rounded-[18px] inset-0 bg-[#444456D3]/50 backdrop-blur-3xl -z-10" />
      <nav className="max-w-[1600px] mx-auto rounded-[18px] grid grid-cols-4 place-items-center py-3">
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
                  className={`w-[17px] md:w-[30px] h-[17px] md:h-[30px] rounded-full flex items-center justify-center ${
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

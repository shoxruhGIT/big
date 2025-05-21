import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";
import {
  IoBuild,
  IoHelpCircle,
  IoHome,
  IoPerson,
  IoRocketSharp,
  IoStatsChart,
  IoClose,
} from "react-icons/io5";
import { FiSidebar } from "react-icons/fi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      to: "/dashboard",
      icon: <IoHome />,
      label: "Dashboard",
    },
    {
      to: "/tables",
      icon: <IoStatsChart />,
      label: "Tables",
    },
    {
      to: "/billing",
      icon: <BsFillCreditCardFill />,
      label: "Billing",
    },
    {
      to: "/web-connect",
      icon: <IoBuild />,
      label: "Web connect",
    },
  ];

  const accountLinks = [
    {
      to: "/profile",
      icon: <IoPerson />,
      label: "Profile",
    },
    {
      to: "/storage",
      icon: <FaFile />,
      label: "Storage",
    },
    {
      to: "/signup",
      icon: <IoRocketSharp />,
      label: "Sign Up",
    },
  ];

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden absolute top-2 right-10 z-50 p-2 rounded-xl text-white"
      >
        {mobileMenuOpen ? <IoClose size={24} /> : <FiSidebar size={24} />}
      </button>

      {/* Aside bar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-[264px] rounded-[18px] m-2 p-6 transition-transform duration-300
        ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{
          background:
            "linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)",
        }}
      >
        <section className="flex flex-col items-center">
          <div className="mt-4">
            <img src={Logo} alt="AI BIG DATA" />
          </div>

          {/* Divider */}
          <div
            className="w-full mt-8"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderImage:
                "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%) 1",
            }}
          ></div>

          {/* Nav Links */}
          <div className="mt-6 w-full">
            <nav className="flex flex-col items-start gap-2">
              {navLinks.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `w-full max-w-[219.5px] h-[54px] flex px-4 items-center gap-3 text-sm font-medium text-white rounded-[18px] ${
                      isActive ? "bg-[#8f8f8f0a]" : ""
                    } hover-shadow-custom`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`w-[30px] h-[30px] rounded-xl flex items-center justify-center ${
                          isActive
                            ? "bg-[#0075FF]"
                            : "bg-[#1A1F37] text-[#0075FF]"
                        }`}
                      >
                        {icon}
                      </div>
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Account section */}
            <p className="text-xs text-white uppercase mt-4 px-4 font-normal">
              Account pages
            </p>

            <nav className="flex flex-col items-start gap-2 mt-4">
              {accountLinks.map(({ to, icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `w-full max-w-[219.5px] h-[54px] flex px-4 items-center gap-3 text-sm font-medium text-white rounded-[18px] ${
                      isActive ? "bg-[#8f8f8f0a]" : ""
                    } hover-shadow-custom`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`w-[30px] h-[30px] rounded-xl flex items-center justify-center ${
                          isActive
                            ? "bg-[#0075FF]"
                            : "bg-[#1A1F37] text-[#0075FF]"
                        }`}
                      >
                        {icon}
                      </div>
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Help card */}
            <div className="w-full h-[169.5px] bg-[url('./assets/bg_need.png')] bg-cover bg-center mt-8 ml-0 md:ml-4 p-[18px]">
              <div className="w-[35px] h-[35px] rounded-[12px] bg-white flex items-center justify-center">
                <IoHelpCircle className="text-blue-500 w-[24px] h-[24px] rotate-180" />
              </div>
              <div className="text-white mt-5">
                <p className="text-sm font-bold">Need help?</p>
                <p className="text-sm font-normal">Please</p>
              </div>
              <button
                className="w-full h-[35px] rounded-[12px] mt-2.5 text-white uppercase text-[10px] font-bold cursor-pointer"
                style={{
                  background:
                    "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
                }}
              >
                Start chat
              </button>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;

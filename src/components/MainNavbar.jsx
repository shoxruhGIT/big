import React, { useState } from "react";
import Navbar from "./AuthNavbar";
import { Menu, Search, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import { IoKeySharp, IoPerson, IoPersonCircleSharp } from "react-icons/io5";
import { IoIosNotifications, IoMdCube, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaFolder, FaWallet } from "react-icons/fa6";

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1558px] m-auto px-4 pl-10">
      <section className="py-4 flex flex-col items-start xl:flex-row gap-3">
        {/* Title */}
        <div className="text-white md:w-[200px] w-full">
          <p className="text-sm text-[#718096]">
            My servers / <span className="text-white">Analytics</span>
          </p>
          <h3 className="text-sm font-semibold">Dashboard</h3>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden absolute cursor-pointer right-4 top-4 text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar middle*/}
        <div className="w-full md:flex-1 order-3 md:order-none">
          <div className="!rounded-[18px] header-gradient w-full">
            <div className="!rounded-[18px] flex flex-col md:flex-row items-center justify-between  p-2">
              {/* Logo */}
              <img
                src={Logo}
                alt="AI BIG DATA"
                className="w-[120px] mb-4 md:mb-0 md:w-[80px] 2xl:w-[100px]"
              />

              {/* Nav links */}
              <nav
                className={`${
                  mobileMenuOpen ? "flex" : "hidden"
                } md:flex w-full items-center justify-center md:w-auto`}
              >
                <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7 text-white">
                  <li className="uppercase flex items-center gap-2 font-bold text-[12px] 2xl:text-xs">
                    <FaHome />
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="uppercase flex items-center gap-2 font-bold text-[12px] 2xl:text-xs">
                    <FaFolder />
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="uppercase flex items-center gap-2 font-bold text-[12px] 2xl:text-xs">
                    <FaWallet />
                    <Link to="/wallet">Wallet</Link>
                  </li>
                  <li className="uppercase flex items-center gap-2 font-bold text-[12px] 2xl:text-xs">
                    <IoPersonCircleSharp />
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </nav>

              {/* Button */}
              <button className="w-full max-w-[100px] 2xl:max-w-[150px] h-[35px] cursor-pointer bg-[#0075FF] text-white uppercase rounded-xl text-[10px] 2xl:text-sm font-semibold mt-3 sm:mt-0">
                New server
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search */}
          <div className="relative w-full md:w-[199px]">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-[12.6px] w-[12.6px] text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full bg-[#0a1530] text-sm font-normal text-white placeholder-gray-400 pl-10 pr-4 py-3 rounded-full outline-none"
              placeholder="Type here"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-[#718096]">
            <Link to="/login" className="flex items-center gap-1">
              <IoPerson />
              <p className="text-xs font-normal">Sign In</p>
            </Link>
            <Link to="/setting">
              <IoMdSettings />
            </Link>
            <Link to="/notification">
              <IoIosNotifications />
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default MainNavbar;

import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import {
  IoClose,
  IoKeySharp,
  IoMenu,
  IoPerson,
  IoPersonCircleSharp,
} from "react-icons/io5";
import { IoMdCube } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFolder, FaHome, FaWallet } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const AuthNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="w-full max-w-[1558px] m-auto px-4">
      <section className="py-4 flex flex-col items-start xl:flex-row gap-3">
        {/* Mobile menu button */}
        <button
          className="md:hidden absolute cursor-pointer right-5 top-5 text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  menuOpen ? "flex" : "hidden"
                } md:flex w-full items-center justify-center md:w-auto`}
              >
                <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7 text-white">
                  <li className="uppercase flex items-center gap-2 font-bold text-[12px] 2xl:text-xs">
                    <FaHome />
                    <Link to="/">Home</Link>
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
              <Link
                to="/server-configure"
                className="w-full max-w-[100px] 2xl:max-w-[150px] h-[35px] cursor-pointer bg-[#0075FF] text-white uppercase rounded-xl text-[10px] 2xl:text-sm font-semibold mt-3 sm:mt-0 flex items-center justify-center"
              >
                New server
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AuthNavbar;

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
    <header
      className={`w-full overflow-visible fixed z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-7"
      }`}
    >
      <section className="navbar-container border-gradient max-w-[987.5px] h-[53px] mx-auto rounded-[20px]">
        <div className="h-full w-full rounded-[18px] flex items-center justify-between px-5">
          <div>
            <img src={Logo} alt="AI BIG DATA" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-white">
            <ul className="flex items-center gap-7 text-white">
              <li className="uppercase flex items-center gap-2 font-bold text-xs hover:text-blue-400 transition-colors">
                <span className="text-lg">
                  <IoMdCube />
                </span>
                <a href="#">Get server</a>
              </li>
              <li className="uppercase flex items-center gap-2 font-bold text-xs hover:text-blue-400 transition-colors">
                <span className="text-lg">
                  <IoPerson />
                </span>
                <a href="#">Wallet</a>
              </li>
              <li className="uppercase flex items-center gap-2 font-bold text-xs hover:text-blue-400 transition-colors">
                <span className="text-lg">
                  <IoPersonCircleSharp />
                </span>
                <a href="#">Cloud</a>
              </li>
              <li className="uppercase flex items-center gap-2 font-bold text-xs hover:text-blue-400 transition-colors">
                <span className="text-lg">
                  <IoKeySharp />
                </span>
                <a href="#">Sign in</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>

          {/* New Server Button (Desktop) */}
          <div className="hidden md:block">
            <button className="w-[150px] h-[35px] bg-[#0075FF] hover:bg-blue-600 text-white uppercase rounded-xl text-sm font-semibold transition-colors">
              New server
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : "closed"} p-5 shadow-lg`}
      >
        <nav className="text-white">
          <ul className="flex flex-col gap-5">
            <li className="uppercase flex items-center gap-3 font-bold text-sm hover:text-blue-400 transition-colors">
              <span className="text-xl">
                <IoMdCube />
              </span>
              <a href="#" className="block w-full">
                Get server
              </a>
            </li>
            <li className="uppercase flex items-center gap-3 font-bold text-sm hover:text-blue-400 transition-colors">
              <span className="text-xl">
                <IoPerson />
              </span>
              <a href="#" className="block w-full">
                Wallet
              </a>
            </li>
            <li className="uppercase flex items-center gap-3 font-bold text-sm hover:text-blue-400 transition-colors">
              <span className="text-xl">
                <IoPersonCircleSharp />
              </span>
              <a href="#" className="block w-full">
                Cloud
              </a>
            </li>
            <li className="uppercase flex items-center gap-3 font-bold text-sm hover:text-blue-400 transition-colors">
              <span className="text-xl">
                <IoKeySharp />
              </span>
              <a href="#" className="block w-full">
                Sign in
              </a>
            </li>
            <li className="mt-3">
              <button className="w-full h-[40px] bg-[#0075FF] hover:bg-blue-600 text-white uppercase rounded-xl text-sm font-semibold transition-colors">
                New server
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AuthNavbar;

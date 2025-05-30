import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/big_logo.png";

const navLinks = [
  { name: "SERVER", href: "/server" },
  { name: "DOMAIN", href: "/domain" },
  { name: "CLOUD", href: "/cloud" },
  { name: "AI", href: "/ai" },
  { name: "WALLET", href: "/wallet" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);
  // ---------------------------------------------------------------

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="relative z-50 w-full bg-white py-5 lg:py-[28px]">
      <div
        className="mx-auto flex justify-between items-center  px-5"
        style={{ maxWidth: "1523px" }}
      >
        {/* Logo, always links to home */}
        <NavLink
          to="/"
          className="font-bold text-lg lg:text-2xl tracking-widest flex items-center select-none"
        >
          <img src={Logo} alt="logo" />
        </NavLink>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 lg:gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                [
                  "flex items-center gap-5",
                  "transition-colors duration-200",
                  "font-bold",
                  "text-sm lg:text-[18px] leading-5 lg:leading-[26px]",
                  "tracking-[0.05em]",
                  "uppercase",
                  "text-black",
                  "hover:text-indigo-600",
                  isActive ? "text-indigo-600" : "",
                ].join(" ")
              }
              onClick={() => setOpen(false)}
            >
              {link.name}
              <span className="hidden lg:block w-4 h-4 bg-black rounded-full"></span>
            </NavLink>
          ))}
        </nav>
        {/* GET FREE 1 DAY Button */}
        <button
          className="cursor-pointer hidden md:block bg-black text-white font-medium text-sm lg:text-[20px] leading-5 lg:leading-[26px] tracking-[0.105em] uppercase text-center rounded-[43px] shadow transition
				hover:bg-indigo-600 hover:text-white
				active:bg-indigo-800 active:scale-95
					focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:p-5"
        >
          <Link to="/dashboard">GET FREE 1 DAY</Link>
        </button>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none group"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <span className="relative">
            <span className="block w-7 h-1 bg-black rounded transition-all duration-300 group-hover:bg-indigo-600"></span>
            <span className="block w-7 h-1 bg-black rounded mt-1.5 transition-all duration-300 group-hover:bg-indigo-600"></span>
            <span className="block w-7 h-1 bg-black rounded mt-1.5 transition-all duration-300 group-hover:bg-indigo-600"></span>
          </span>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      {/* Mobile Menu Panel */}
      <nav
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-[28px]">
          <NavLink
            to="/"
            className="font-bold text-lg tracking-widest flex items-center select-none"
            onClick={() => setOpen(false)}
          >
            BIGQB <span className="ml-1">🔒</span>
          </NavLink>
          <button
            className="w-10 h-10 flex items-center justify-center rounded focus:outline-none group"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <span className="relative block w-6 h-6">
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-black rounded rotate-45"></span>
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-black rounded -rotate-45"></span>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-4 px-8 mt-10 ">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                [
                  "text-lg font-bold text-[#18181B] uppercase tracking-[0.05em] leading-[26px] text-[18px] transition-colors duration-200 hover:text-indigo-600",
                  isActive ? "text-indigo-600" : "",
                ].join(" ")
              }
              style={{
                animation: open
                  ? `slideIn 0.6s cubic-bezier(.23,1.1,.32,1) forwards ${
                      0.08 * i + 0.08
                    }s`
                  : "none",
              }}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto px-8 pb-10">
          <button
            className="cursor-pointer bg-black text-white font-medium text-[20px] leading-[26px] tracking-[0.105em] uppercase text-center rounded-[43px] shadow transition
    hover:bg-indigo-600 hover:text-white
    active:bg-indigo-800 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:p-5"
          >
            GET FREE 1 DAY
          </button>
        </div>
      </nav>
      <style>
        {`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(40px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        `}
      </style>
    </header>
  );
};

export default Header;

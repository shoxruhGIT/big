import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import freeChat from "../../assets/free-chat.svg";
import realTimeDb from "../../assets/real-time-db.svg";
import serverRacks from "../../assets/server-racks.svg";
import checkIcon from "../../assets/check.svg";
import starIcon from "../../assets/star.svg";
import databaseIcon from "../../assets/database.svg";

const ControlPanel = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, delay: 50, offset: 60 });
  }, []);

  return (
    <section className="pt-5 pb-10 lg:pb-16 2xl:pb-20 relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* Title */}
        <h3
          className="text-center font-syne uppercase tracking-widest text-black font-bold mb-6 sm:mb-8 md:mb-10 xl:mb-12 text-lg sm:text-xl md:text-2xl"
          data-aos="fade-down"
        >
          QUICK SETUP <span className="font-extrabold">VPS / VDS</span>
        </h3>

        <h2
          className="text-center font-syne font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight mb-5 sm:mb-7 md:mb-10 xl:mb-[74px]"
          data-aos="fade-up"
        >
          <span className="text-black font-extrabold">Friendly</span>
          <span className="font-bold ml-2 text-black">Control Panel</span>
        </h2>

        {/* Grid content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-14 md:mb-20">
          {/* Left Side */}
          <div
            className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6"
            data-aos="fade-right"
          >
            <div>
              <div className="inline-flex items-center gap-3 p-5 sm:p-6 rounded-3xl bg-white shadow-md">
                <img
                  src={freeChat}
                  alt="Free Chat"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <span className="font-bold text-sm sm:text-base md:text-lg text-black text-left">
                  FREE <br />
                  <span className="font-extrabold">CHAT</span>
                </span>
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 -mt-6 sm:-mt-8">
                  <img
                    src={serverRacks}
                    alt="Verified"
                    className="w-full h-full"
                  />
                  <img
                    src={checkIcon}
                    alt="Check"
                    className="w-3 h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 sm:mb-6">
                ONE-CLICK DEPLOY
              </h2>
              <p className="max-w-xs md:max-w-sm text-sm sm:text-base text-black font-normal leading-6">
                Your Ultimate Tool To Conquer Overwhelming Tasks — Break Big
                Goals Into Small Steps, Check Them Off One By One, And Watch
                Your Progress Reach 100%
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <div className="rounded-[32px] sm:rounded-[48px] overflow-hidden flex items-center justify-center bg-white shadow-[0px_0px_25px_0px_#0000000D] p-4 sm:p-5 max-w-xs sm:max-w-md">
              <img
                src={databaseIcon}
                alt="Server Racks"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            data-aos="fade-left"
          >
            <div>
              <div className="inline-flex items-center gap-3 p-5 sm:p-6 rounded-3xl bg-white shadow-md">
                <img
                  src={starIcon}
                  alt="Star"
                  className="w-5 h-5 sm:w-6 sm:h-6 -mt-8 sm:-mt-11"
                />
                <span className="font-bold capitalize text-sm sm:text-base md:text-lg text-black text-right">
                  real time <br />
                  <span className="font-extrabold">database</span>
                </span>
                <img
                  src={realTimeDb}
                  alt="Database"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
            </div>

            <div>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 sm:mb-6">
                We Build The Future
              </h2>
              <div className="text-left text-black text-sm sm:text-base font-normal leading-6">
                <div className="mb-2 sm:mb-3">
                  <span className="font-bold">
                    +++ Neural Core 4048 GB CPU AI W – Extreme AI Power
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Multi Super App — Social, Marketplace, AI &amp; Fintech
                  </li>
                  <li>
                    Data Center — <span className="font-bold">1 PB NVMe</span>{" "}
                    Ultra-Fast Storage
                  </li>
                  <li>10-100 Gb/S</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;

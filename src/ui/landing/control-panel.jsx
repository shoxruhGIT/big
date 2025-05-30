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
    <section className="pt-5 2xl:pb-12 lg-pb-10 md:pb-8 pb-6  relative">
      <div className="mx-auto px-5" style={{ maxWidth: "1523px" }}>
        <h3
          className="
          text-center font-syne uppercase tracking-[0.20em] text-black
          font-bold xl:mb-12 md:mb-10 sm:mb-8 mb-6
          text-[24px] leading-[26px]
          sm:text-[28px] md:text-[32px]
        "
          data-aos="fade-down"
        >
          QUICK SETUP
          <span className="font-extrabold">VPS / VDS</span>
        </h3>

        <h2
          className="
          text-center font-syne xl:mb-[74px] md:mb-9 mb-5  font-extrabold
          text-[32px] leading-[34px]
          sm:text-[48px] sm:leading-[40px]
          md:text-[64px] md:leading-[46px]
          tracking-[0em]
        "
          data-aos="fade-up"
        >
          <span className="text-black font-extrabold">Friendly</span>
          <span className="font-bold ml-2 text-black">Control Panel</span>
        </h2>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 items-center md:mb-24 mb-16">
          {/* Left Side */}
          <div
            className="flex flex-col items-center lg:items-end  text-center lg:text-right h-3/4 justify-between"
            data-aos="fade-right"
          >
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 p-6 rounded-3xl bg-white shadow-md">
                <img src={freeChat} alt="Free Chat" className="w-16 h-16" />
                <span className="font-bold md:text-xl text-base text-black text-left">
                  FREE <br /> <span className="font-extrabold">CHAT</span>
                </span>
                <div className="relative w-6 h-6 -mt-8">
                  <img src={serverRacks} alt="Verified" className="w-6 h-6" />
                  <img
                    src={checkIcon}
                    alt="Check"
                    className="w-3 h-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
            <div className="text-right">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight md:mb-12 mb-5">
                ONE-CLICK DEPLOY
              </h2>
              <p className="max-w-xs md:max-w-sm text-base text-black font-normal text-right leading-6">
                Your Ultimate Tool To Conquer Overwhelming Tasks — Break Big
                Goals Into Small Steps, Check Them Off One By One, And Watch
                Your Progress Reach 100%
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center" data-aos="zoom-in">
            <div className="rounded-[48px]  overflow-hidden flex items-center justify-center bg-white shadow-[0px_0px_25px_0px_#0000000D] p-5">
              <img
                src={databaseIcon}
                alt="Server Racks"
                className="object-cover w-full h-full rounded-[48px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div
            className="flex flex-col items-center lg:items-start text-center lg:text-left h-3/4 justify-between"
            data-aos="fade-left"
          >
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 p-6 rounded-3xl bg-white shadow-md">
                <img src={starIcon} alt="Star" className="w-6 h-6 -mt-11" />
                <span className="font-bold capitalize md:text-xl text-base text-black text-right">
                  real time <br />{" "}
                  <span className="font-extrabold">database</span>
                </span>
                <img src={realTimeDb} alt="Database" className="w-14 h-14" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight md:mb-6 mb-4">
                We Build The Future
              </h2>
              <div className="text-left text-black text-base font-normal leading-6">
                <div className="mb-3">
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

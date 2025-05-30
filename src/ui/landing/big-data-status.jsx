import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your icon (replace with your actual icon path)
import verifiedIcon from "../../assets/verified-green.svg"; // example path

const BigDataStatus = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <section
      className="
        w-full flex justify-center items-center
      "
      data-aos="fade-up"
    >
      <div
        className="
          w-full max-w-[1554px]
          bg-white
          rounded-[56px]
          shadow-[0px_0px_25px_0px_rgba(0,0,0,0.04)]
          md:py-[86px] py-9  px-8 sm:px-16 md:px-28
          flex flex-col md:flex-row
          justify-between items-center
          relative
          overflow-x-hidden
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* Left: Title & Stat */}
        <div className="w-full md:w-[48%] text-center md:text-left mb-8 md:mb-0">
          <div className="font-syne font-bold uppercase text-[20px] leading-14 md:text-[32px] tracking-[12%] md:mb-8 sm:mb-6 mb-4">
            Connect Socet Big Data
          </div>
          <div
            className="
						font-bold
						capitalize
						align-middle
						tracking-[0em]
						text-[36px] leading-[38px]
						xs:text-[48px] xs:leading-[44px]
						sm:text-[60px] sm:leading-[50px]
						md:text-[72px] md:leading-[54px]
						lg:text-[80px] lg:leading-[56.5px]
						mb-5 md:mb-7
					"
          >
            11 278 620
          </div>
          <div
            className="
						font-syne font-bold uppercase
						tracking-[0.19em]
						text-[#00E995]
						text-[20px] leading-[30px]
						sm:text-[28px] sm:leading-[44px]
						md:text-[36px] md:leading-[58px]
					"
          >
            ONLINE
          </div>
        </div>
        {/* Right: Features */}
        <div
          className="w-full md:w-[48%] flex flex-col md:gap-14 gap-8
					md:items-start items-center"
          data-aos="fade-left"
        >
          <div className="flex items-center md:gap-11 sm:gap-8 gap-4 justify-center md:justify-start">
            <img
              src={verifiedIcon}
              alt="Verified"
              className="w-14 h-14"
              loading="lazy"
            />
            <span className="font-syne text-black text-[22px] sm:text-[28px] md:text-[32px] leading-[26px] tracking-[0em]">
              <span className="font-bold">24/7/365 Online</span>{" "}
              <span className="font-normal">Online</span>
            </span>
          </div>
          <div className="flex items-center md:gap-11 sm:gap-8 gap-4 justify-center md:justify-start">
            <img
              src={verifiedIcon}
              alt="Verified"
              className="w-14 h-14"
              loading="lazy"
            />
            <span className="font-syne text-black text-[22px] sm:text-[28px] md:text-[32px] leading-[26px] tracking-[0em]">
              <span className="font-bold">
                <span className="font-normal">
                  {" "}
                  Secure Your Files With <br />
                </span>{" "}
                Automatic Backups
              </span>{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigDataStatus;

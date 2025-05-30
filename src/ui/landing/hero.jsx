import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, delay: 50, offset: 60 });
  }, []);

  return (
    <section className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-36 mt-8 relative">
      <div
        className="
          max-w-[1523px] mx-auto
          flex flex-col justify-between gap-10
          md:flex-row lg:gap-0
          px-0 sm:px-1 md:px-5
          items-center
        "
      >
        {/* Left Side */}
        <div className="flex-1 w-full lg:w-1/2" data-aos="fade-right">
          <h1
            className="
              font-bold font-syne capitalize tracking-[0.04em]
              text-[32px] leading-[34px]
              xs:text-[38px] xs:leading-[38px]
              sm:text-[50px] sm:leading-[48px]
              md:text-[64px] md:leading-[56px]
              lg:text-[80px] lg:leading-[66px]
              xl:text-[100px] xl:leading-[77px]
              mb-3 sm:mb-4
              text-black
              transition
              duration-200
            "
          >
            Big <span className="font-extrabold">Perfect</span>
            <br className="lg:flex hidden" />
            Data & Domain.
          </h1>
          {/* Search input */}
          <div
            className="
              relative w-full lg:max-w-[249px] max-w-full mt-6
              flex items-center gap-3
            "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              className="
                w-full
                rounded-[102px]
                py-[15px] pl-[18px] pr-20
                xs:py-[9px] xs:pl-[22px] xs:pr-24
                
                shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)]
                border-none outline-none
                font-syne font-bold
                text-[15px] xs:text-[16px] sm:text-[18px] md:text-[20px]
                leading-[22px] xs:leading-[24px] sm:leading-[26px] md:leading-[28px]
                bg-gray-100 text-gray-700
                placeholder:uppercase
                placeholder:text-black/25
                placeholder:align-middle
                placeholder:transition
                transition
              "
              placeholder="DOMAIN.AI"
            />
            <button
              type="submit"
              className="
                absolute top-1/2 right-2 -translate-y-1/2
                bg-gradient-to-r from-[#6756FF] to-white
                [background-position:41.7%_0] [background-size:102.46%_100%]
                font-bold font-syne
                text-[15px] leading-[20px]
                xs:text-[16px] xs:leading-[22px]
                sm:text-[18px] sm:leading-[22px]
                md:text-[20px] md:leading-[24px]
                tracking-normal
                uppercase text-center align-middle
                rounded-[76px]
                px-[14px] py-[10px]
                transition
                hover:from-[#6756FF] hover:to-[#b4b8ff]
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-[#6756FF]
                shadow
                text-white
                cursor-pointer
                whitespace-nowrap
              "
            >
              Go!
            </button>
          </div>
        </div>
        {/* Right Side - Domain Cards */}
        <div
          className="
            grid grid-cols-2 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 gap-3
            mb-5 lg:mb-0 md:max-w-[303px] w-full max-w-full
          "
          data-aos="fade-left"
        >
          {[".com", ".net", ".biz", ".co"].map((ext, idx) => (
            <div
              key={ext}
              className="
                rounded-lg
                transition
                flex flex-col items-start
                mb-1 last:mb-0
                w-full
              "
              data-aos="zoom-in"
              data-aos-delay={200 + idx * 60}
            >
              <span className="font-bold font-syne text-[18px] sm:text-[20px] mb-1">
                {ext}
              </span>
              <span className="text-gray-500 text-[13px] sm:text-[14px]">
                Starting price
              </span>
              <span className="text-gray-500 text-[14px] sm:text-[15px] font-medium">
                $13.34/Yearly
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

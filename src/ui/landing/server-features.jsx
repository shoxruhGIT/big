import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serverBg from "../../assets/bg-mask.png";

export default function ServerFeatures() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  // Birinchi variant uchun
  const [activeCore, setActiveCore] = useState("core");
  // Ikkinchi variant uchun
  const [activeGB1, setActiveGB1] = useState("1gb");
  // Uchinchi variant uchun
  const [activeGB2, setActiveGB2] = useState("8gb");
  // To‘rtinchi variant uchun
  const [activeGB3, setActiveGB3] = useState("1gb2");
  // Beshinchi variant uchun
  const [activeData, setActiveData] = useState("get");

  // Classlar
  const coreGradientClass =
    "bg-gradient-to-r from-gray-400 to-gray-200 text-white font-bold font-syne text-lg md:text-xl rounded-[32px] px-5 py-2";
  const coreNormalClass =
    "font-bold font-syne text-base md:text-lg text-black/90 ml-2";

  const gb1GradientClass =
    "bg-gradient-to-br from-green-400 to-green-200 text-white font-bold font-syne text-lg md:text-xl rounded-[32px] px-5 py-2";
  const gb1NormalClass =
    "font-bold font-syne text-base md:text-lg text-black/90 ml-2";

  const gb2GradientClass =
    "bg-gradient-to-br from-black to-gray-700 text-white font-bold font-syne text-lg md:text-xl rounded-[32px] px-5 py-2";
  const gb2NormalClass =
    "font-bold font-syne text-base md:text-lg text-black/90 ml-2";

  const gb3GradientClass =
    "bg-gradient-to-br from-lime-300 to-yellow-200 text-black font-bold font-syne text-lg md:text-xl rounded-[32px] px-5 py-2";
  const gb3NormalClass =
    "font-bold font-syne text-base md:text-lg text-black/90 ml-2";

  const dataGradientClass =
    "bg-gradient-to-br from-cyan-400 to-blue-300 text-white font-bold font-syne text-lg md:text-xl rounded-[32px] px-5 py-2 mr-2";
  const dataNormalClass =
    "font-bold font-syne text-base md:text-lg text-black/90 ml-2";

  return (
    <section
      className="w-full pt-10 pb-10 md:pt-12 md:pb-12 xl:pt-16 xl:pb-20 bg-white relative overflow-x-hidden overflow-y-visible"
      style={{
        backgroundImage: `url(${serverBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
    >
      <div className="mx-auto px-5 max-w-[1448px]">
        <div
          className="text-center xl:text-right xl:mb-8 md:mb-6 mb-4 relative z-10"
          data-aos="fade-down"
        >
          <h2
            className="
            font-bold
            font-syne
            uppercase
            tracking-[0.04em]
            text-[32px] leading-[36px]
            xs:text-[38px] xs:leading-[40px]
            sm:text-[48px] sm:leading-[48px]
            md:text-[72px] md:leading-[60px]
            lg:text-[90px] lg:leading-[70px]
            xl:text-[100px] xl:leading-[77px]
            mb-4
            w-full
            text-center md:text-right
          "
          >
            SERVER
          </h2>
        </div>
        <div
          className="
        bg-white shadow-[0px_0px_25px_0px_rgba(0,0,0,0.04)]
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        xl:gap-x-[74px] xl:gap-y-9 lg:gap-x-12 lg:gap-y-8
        md:gap-x-10 md:gap-y-6 sm:gap-x-8 sm:gap-y-5 gap-y-4
        w-full relative z-10
        xl:px-32 lg:px-16 sm:px-8 px-4
        rounded-[40px]
        pt-10 pb-10 md:pt-12 md:pb-12 xl:pt-16
      "
          data-aos="zoom-in-up"
        >
          {/* CPU */}
          <div
            className="col-span-1 flex flex-col xl:gap-6 md:gap-4 gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              className="
              font-syne
              font-extrabold
              uppercase
              align-middle
              text-[18px] leading-[24px] tracking-[0.055em]
              sm:text-[20px] sm:leading-[26px]
              flex items-center
            "
            >
              CPU
              <span
                className="
                font-bold
                uppercase
                align-middle
                text-[16px] leading-[24px] tracking-[0.055em] ml-2
                sm:text-[18px] sm:leading-[26px]
              "
              >
                PLATINUM PROCESSOR
              </span>
            </span>
            {/* 1. CORE and 256 GB */}
            <div className="flex items-center gap-3 bg-white rounded-[102px] shadow-lg px-4 py-3">
              <span
                className={
                  activeCore === "core" ? coreGradientClass : coreNormalClass
                }
                onClick={() => setActiveCore("core")}
                style={{ cursor: "pointer" }}
              >
                1 CORE
              </span>
              <span
                className={
                  activeCore === "gb" ? coreGradientClass : coreNormalClass
                }
                onClick={() => setActiveCore("gb")}
                style={{ cursor: "pointer" }}
              >
                256 GB
              </span>
            </div>
          </div>
          {/* RAM */}
          <div
            className="col-span-1 flex flex-col xl:gap-6 md:gap-4 gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span
              className="
              font-syne
              font-extrabold
              uppercase
              align-middle
              text-[18px] leading-[24px] tracking-[0.055em]
              sm:text-[20px] sm:leading-[26px]
              flex items-center
            "
            >
              RAM
              <span
                className="
                font-bold
                uppercase
                align-middle
                text-[18px] leading-[24px] tracking-[0.055em] ml-2
                sm:text-[20px] sm:leading-[26px]
              "
              >
                DDR4 MEMORY
              </span>
            </span>
            {/* 2. 1 GB and 256 GB (green gradient) */}
            <div className="flex items-center gap-3 bg-white rounded-[40px] shadow-lg px-4 py-3">
              <span
                className={
                  activeGB1 === "1gb" ? gb1GradientClass : gb1NormalClass
                }
                onClick={() => setActiveGB1("1gb")}
                style={{ cursor: "pointer" }}
              >
                1 GB
              </span>
              <span
                className={
                  activeGB1 === "256gb" ? gb1GradientClass : gb1NormalClass
                }
                onClick={() => setActiveGB1("256gb")}
                style={{ cursor: "pointer" }}
              >
                256 GB
              </span>
            </div>
          </div>
          {/* NVME */}
          <div
            className="col-span-1 flex flex-col xl:gap-6 md:gap-4 gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span
              className="
              font-syne
              font-extrabold
              uppercase
              align-middle
              text-[18px] leading-[24px] tracking-[0.055em]
              sm:text-[20px] sm:leading-[26px]
              flex items-center
            "
            >
              NVMe
              <span
                className="
                font-bold
                uppercase
                align-middle
                text-[18px] leading-[24px] tracking-[0.055em] ml-2
                sm:text-[20px] sm:leading-[26px]
              "
              >
                SSD 16 PB
              </span>
            </span>
            {/* 3. 8 GB and 4048 GB (black to gray gradient) */}
            <div className="flex items-center gap-3 bg-white rounded-[40px] shadow-lg px-4 py-3">
              <span
                className={
                  activeGB2 === "8gb" ? gb2GradientClass : gb2NormalClass
                }
                onClick={() => setActiveGB2("8gb")}
                style={{ cursor: "pointer" }}
              >
                8 GB
              </span>
              <span
                className={
                  activeGB2 === "4048gb" ? gb2GradientClass : gb2NormalClass
                }
                onClick={() => setActiveGB2("4048gb")}
                style={{ cursor: "pointer" }}
              >
                4048 GB
              </span>
            </div>
          </div>
          {/* GPU */}
          <div
            className="col-span-1 flex flex-col xl:gap-6 md:gap-4 gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span
              className="
              font-syne
              font-extrabold
              uppercase
              align-middle
              text-[18px] leading-[24px] tracking-[0.055em]
              sm:text-[20px] sm:leading-[26px]
              flex items-center
            "
            >
              GPU
              <span
                className="
                font-bold
                uppercase
                align-middle
                text-[18px] leading-[24px] tracking-[0.055em] ml-2
                sm:text-[20px] sm:leading-[26px]
              "
              >
                AI + GAME
              </span>
            </span>
            {/* 4. 1 GB and 256 GB (lime-yellow gradient, black text) */}
            <div className="flex items-center gap-3 bg-white rounded-[40px] shadow-lg px-4 py-3">
              <span
                className={
                  activeGB3 === "1gb2" ? gb3GradientClass : gb3NormalClass
                }
                onClick={() => setActiveGB3("1gb2")}
                style={{ cursor: "pointer" }}
              >
                1 GB
              </span>
              <span
                className={
                  activeGB3 === "256gb2" ? gb3GradientClass : gb3NormalClass
                }
                onClick={() => setActiveGB3("256gb2")}
                style={{ cursor: "pointer" }}
              >
                256 GB
              </span>
            </div>
          </div>

          {/* 18.28 + 18.28 USDT / DAY */}
          <div
            className="col-span-1 flex flex-col xl:gap-6 md:gap-4 gap-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span
              className="
              font-syne
              font-extrabold
              uppercase
              align-middle
              text-[18px] leading-[24px] tracking-[0.055em]
              sm:text-[20px] sm:leading-[26px]
              flex items-center
            "
            >
              18.28
            </span>
            <div className="flex w-full items-center justify-center bg-white rounded-[40px] shadow-lg px-4 py-3">
              <span className="w-full text-center bg-gradient-to-r from-[#5d62ee] to-[#4255ff] text-white font-bold font-syne text-lg md:text-xl rounded-[32px] px-5 py-2">
                18.28 USDT / DAY
              </span>
            </div>
          </div>
          {/* VPS / VDS + GET + BIG DATA */}
          <div
            className="col-span-1 flex flex-col xl:gap-6 md:gap-4 gap-3"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span
              className="
                font-bold
                uppercase
                align-middle
                text-[18px] leading-[24px] tracking-[0.055em] ml-2
                sm:text-[20px] sm:leading-[26px]
              "
            >
              VPS / VDS
            </span>
            {/* 5. GET and BIG DATA (cyan-blue gradient) */}
            <div className="flex w-full items-center bg-white rounded-[40px] shadow-lg px-4 py-3">
              <span
                className={
                  activeData === "get" ? dataGradientClass : dataNormalClass
                }
                onClick={() => setActiveData("get")}
                style={{ cursor: "pointer" }}
              >
                GET
              </span>
              <span
                className={
                  activeData === "bigdata" ? dataGradientClass : dataNormalClass
                }
                onClick={() => setActiveData("bigdata")}
                style={{ cursor: "pointer" }}
              >
                BIG DATA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

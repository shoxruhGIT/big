import React from "react";
import { Link } from "react-router-dom";

const CTA = () => (
  // CTA ni position absolute qilib, Footer parentini relative qilinadi
  <div className="relative max-w-[1236px] mx-auto">
    <div
      className="
        absolute left-1/2 -translate-x-1/2
        -top-24 sm:-top-32 md:-top-36
        w-full
        z-20
        pointer-events-auto
      "
      style={{ maxWidth: "100%" }}
    >
      <div
        className="
          bg-[#101010]
          rounded-[56px]
          py-10 px-5 sm:px-12 md:px-16
          flex flex-col md:flex-row items-center justify-between
          shadow-2xl
          overflow-x-hidden
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      >
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="block text-white text-xl sm:text-3xl md:text-[64px] leading-tight font-bold">
            Sign Up For <span className="text-[#FFEA7A] block">Big Data</span>{" "}
            Today
          </span>
        </div>
        {/* Right: Pricing & Button */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            {/* Start GB */}
            <div
              className="
							text-white mb-2 capitalize
							font-medium
							text-[clamp(22px,5vw,36px)]
							leading-[1.2]
						"
            >
              Start GB
            </div>
            {/* $ 0.99 /Day */}
            <div
              className="
								font-syne font-bold
								text-white capitalize
								text-[clamp(24px,6vw,40px)]
								leading-[1.2]
							"
            >
              $ <span className="font-extrabold">0.99</span>
              <span className="text-[#fde047] font-bold ml-2">/Day</span>
            </div>
            {/* CONFIGURATION */}
            <button
              className="
								cursor-pointer
								mt-6
								bg-white
								hover:bg-[#fde047]
								transition-all
								text-[#101010]
								font-syne
								font-normal
								text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px]
								leading-[22px] xs:leading-[24px] sm:leading-[25px] md:leading-[26px]
								tracking-[0.105em]
								text-center
								uppercase
								rounded-full
								px-5 xs:px-6 md:px-8
								py-3 xs:py-4
								shadow-md
								w-full sm:w-auto
							"
              style={{
                borderRadius: "100px",
              }}
            >
              <Link to="/server-configure">CONFIGURATION</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;

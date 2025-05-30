import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Stats = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, delay: 50, offset: 60 });
  }, []);

  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-16">
      <div
        className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        data-aos="fade-up"
      >
        <div>
          <h5 className="font-bold uppercase text-xs tracking-widest mb-1">
            CONNECT SOCET BIG DATA
          </h5>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">
            11 278 620
          </div>
          <span className="text-green-500 font-bold text-lg">ONLINE</span>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2 text-base sm:text-lg">
            <span className="text-green-500">✔️</span> 24/7/365 Online
          </div>
          <div className="flex items-center gap-2 text-base sm:text-lg">
            <span className="text-green-500">✔️</span> Secure Your Files With{" "}
            <span className="font-black">Automatic Backups</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

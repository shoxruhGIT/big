import React, { useRef } from "react";

import server1 from "../../assets/characteristic/server-1.svg";
import server2 from "../../assets/characteristic/server-2.svg";
import server3 from "../../assets/characteristic/server-3.svg";
import chip1 from "../../assets/characteristic/server-4.svg";
import chip2 from "../../assets/characteristic/server-5.svg";
import serverhall from "../../assets/characteristic/server-6.svg";

import starIcon from "../../assets/characteristic/star.svg";
import Pc from "../../assets/pc.png";
import Brain from "../../assets/brain.png";
import Cloud from "../../assets/sky.png";
import { FaNodeJs } from "react-icons/fa";

import Python from "../../assets/technologies/python.svg"
import Js from "../../assets/technologies/js.svg"
import AI from "../../assets/technologies/ai.svg"
import Java from "../../assets/technologies/java.svg"
import Socket from "../../assets/technologies/socket.svg"
import Ubuntu from "../../assets/technologies/ubuntu.svg"
import NodeJS from "../../assets/technologies/nodejs.svg"

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Characteristic = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const technologies = [
    {
      id: 1,
      icon: NodeJS,
    },
    {
      id: 2,
      icon: Js,
    },
    {
      id: 3,
      icon: AI,
    },
    {
      id: 4,
      icon: Ubuntu,
    },
    {
      id: 5,
      icon: Python,
    },
    {
      id: 6,
      icon: Java,
    },
    {
      id: 7,
      icon: Socket,
    },
  ];

  return (
    <section className="w-full bg-white pb-52 pt-10 md:pb-80 md:pt-16 overflow-x-hidden">
      {/* Top line: title and rating */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="mb-7 md:mb-14">
          <div
            className="uppercase md:text-2xl text-base text-[#4E4E4E] font-bold mb-3 md:mb-12"
            style={{
              letterSpacing: "20%",
            }}
          >
            REALIBLE & QUICK SETUP
          </div>
          <div
            className=" font-bold uppercase tracking-tight text-3xl md:text-6xl"
            
          >
            CHARACTERISTIC
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5 mt-2 mb-6 md:mb-0">
          <img
            src={starIcon}
            alt="star"
            className="w-7 h-7 md:w-[50px] md:h-[50px]"
          />
          <span className="font-bold text-[1.7rem] md:text-3xl">5.0</span>

          <Carousel
            plugins={[plugin.current]}
            className="w-[100px] border-none"
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {technologies.map(item => (
                <CarouselItem key={item?.id}>
                  <div className="p-1">
                    <img src={item?.icon} className="w-[50px] h-[50px]" alt="technologies" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Main grid */}
      <div
        className="max-w-7xl mx-auto mt-2 md:mt-8 px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="200"
      >
        {/* Images + Cluster */}
        <div>
          {/* Images */}
          <div
            className="grid grid-cols-3 gap-5 md:gap-7 mb-3 md:mb-6 max-w-[440px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <img
              src={server1}
              alt="Server 1"
              className="rounded-[22px] md:rounded-[28px] object-cover w-full aspect-square shadow"
            />
            <img
              src={server2}
              alt="Server 2"
              className="rounded-[22px] md:rounded-[28px] object-cover w-full aspect-square shadow"
            />
            <img
              src={server3}
              alt="Server 3"
              className="rounded-[22px] md:rounded-[28px] object-cover w-full aspect-square shadow"
            />
          </div>
          <div className="w-[90px] md:w-[120px] h-1.5 mx-auto my-3 bg-black rounded-full" />
          <div
            className="grid grid-cols-3 gap-5 md:gap-7 max-w-[440px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="350"
          >
            <img
              src={chip1}
              alt="Chip 1"
              className="rounded-[22px] md:rounded-[28px] object-cover w-full aspect-square shadow"
            />
            <img
              src={chip2}
              alt="Chip 2"
              className="rounded-[22px] md:rounded-[28px] object-cover w-full aspect-square shadow"
            />
            <img
              src={serverhall}
              alt="Server Hall"
              className="rounded-[22px] md:rounded-[28px] object-cover w-full aspect-square shadow"
            />
          </div>
        </div>
        {/* Cluster & Features */}
        <div
          className="flex flex-col justify-center h-full mt-8 lg:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          {/* Cluster Info */}
          <div className="mb-10 md:mb-12">
            <div className="font-bold uppercase text-black tracking-[0.07em] text-lg md:text-xl mb-2 md:mb-6">
              CLUSTER
            </div>
            <div className="text-[#4E4E4E] text-sm md:text-base tracking-[0.03em] mb-1 md:mb-5">
              HIGH-SPEED
            </div>
            <div
              className="font-extrabold italic text-sm md:text-base tracking-[0.03em]"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
                color: "#4E4E4E",
              }}
            >
              24/7/365
            </div>
          </div>
          {/* Features List */}
          <ul className="space-y-5 md:space-y-6">
            <li className="flex items-center gap-3 text-black text-lg md:text-xl font-normal">
              <span className="text-[1.45rem] md:text-2xl -ml-1">
                <img src={Pc} alt="laptop" className="w-5 h-5" />
              </span>
              <span>
                <span className="font-bold">CPU</span> Power{" "}
                <span className="font-bold">128-Core Gold / Platinum</span>
                <span className="font-normal ml-2">Processors</span>
              </span>
            </li>
            <li className="flex items-center gap-3 text-black text-lg md:text-xl font-bold">
              <span className="text-[1.45rem] md:text-2xl -ml-1">
                <img src={Brain} alt="brain" className="w-5 h-5" />
              </span>
              <span>
                <span className="font-bold">512 GB DDR4 ECC</span>
                <span className="font-normal text-black ml-2">
                  Registered RAM +
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3 text-black text-lg md:text-xl font-bold">
              <span className="text-[1.45rem] md:text-2xl -ml-1">
                <img src={Cloud} alt="cloud" className="w-5 h-5" />
              </span>
              <span className="font-bold ">1 048 128 TB NVMe SSD</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Characteristic;

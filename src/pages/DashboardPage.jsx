import AreaChartUI from "@/ui/area-chart";
import BarChartUI from "@/ui/bar-chart";
import CircleChartCpu from "@/ui/cicrle-chart-cpu";
import CircleChart from "@/ui/circle-chart";
import React from "react";
import { FaGlobe } from "react-icons/fa6";
import { IoIosMore, IoIosNotifications } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const serverData = [
    {
      ip: "12.233.2.33",
      iconBg: "bg-pink-600",
      icon: <span className="text-xs font-bold">Xd</span>,
      cores: 12,
      ram: 18,
      price: "21",
      cpuLoad: 50,
      domain: "GET DOMAIN",
      root: "ROOT 79JNI90-O9I10",
    },
    {
      ip: "313.12.26.77",
      iconBg: "bg-blue-600",
      icon: <span className="text-lg">▲</span>,
      cores: 2,
      ram: 2,
      price: "1",
      cpuLoad: 10,
      domain: "GET DOMAIN",
      root: "ROOT 19JNI90-O9I11",
    },
    {
      ip: "65.45.356.70",
      iconBg: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
      icon: <span className="text-lg">⚛</span>,
      cores: 16,
      ram: 8,
      price: "25",
      cpuLoad: 100,
      domain: "GET DOMAIN",
      root: "ROOT 85JNI90-O9I12",
    },
    {
      ip: "50.62.32.11",
      iconBg: "bg-green-600",
      icon: <span className="text-lg">●</span>,
      cores: 8,
      ram: 4,
      price: "21",
      cpuLoad: 100,
      domain: "YUUIP.ORG",
      root: "ROOT 09JNI90-O9I13",
    },
    {
      ip: "31.31.06.43",
      iconBg: "bg-blue-500",
      icon: <span className="text-lg">◆</span>,
      cores: 4,
      ram: 2,
      price: "14",
      cpuLoad: 25,
      domain: "GET DOMAIN",
      root: "ROOT 89ANI90-O9I14",
    },
    {
      ip: "95.53.21.10",
      iconBg: "bg-red-500",
      icon: <span className="text-lg">⬢</span>,
      cores: 18,
      ram: 48,
      price: "45",
      cpuLoad: 40,
      domain: "HJLL.COM",
      root: "ROOT 59JMI90-O9I15",
    },
  ];

  return (
    <main className="w-full max-w-[1600px] mx-auto px-8 flex flex-col gap-10">
      <div className="flex flex-col 2xl:flex-row gap-2">
        <BarChartUI />

        {/* Stats Cards */}
        <section className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="rounded-[18px] p-5 flex items-center justify-between bg-gradient-to-br from-[#060B26]/[0.74] to-[#1A1F37]/[0.5]">
              <div>
                <p className="text-[#A0AEC0] text-xs">Today's Users</p>
                <h3 className="text-lg text-white font-bold">
                  2,300 <span className="text-sm text-[#01B574]">+5%</span>
                </h3>
              </div>
              <div className="w-[45px] h-[45px] rounded-[12px] bg-[#0075FF] flex items-center justify-center text-white">
                <FaGlobe className="w-[22.5px] h-[22.5px]" />
              </div>
            </div>

            <div className="rounded-[18px] p-5 bg-gradient-to-br from-[#060B26]/[0.74] to-[#1A1F37]/[0.5]">
              <p className="text-[#A0AEC0] text-xs uppercase">Wallet</p>
              <h3 className="text-lg text-white font-bold">
                53 USDT <span className="text-sm text-[#01B574]">+12 DAY</span>
              </h3>
            </div>

            <button className="rounded-[12px] h-[45px] bg-[#0075FF] uppercase text-xs text-white flex items-center justify-between px-3 w-full">
              Copy USDT Address
              <IoWallet />
            </button>
          </div>

          {/* Cloud & CPU Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Cloud Card */}
            <div className="rounded-[18px] p-7 relative h-[344px] bg-gradient-to-br from-[#060B28]/[0.94] to-[#0A0E23]/[0.49]">
              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-bold uppercase text-white">
                  Cloud
                </h1>
                <h4 className="text-[#A0AEC0] text-sm">Pro</h4>
              </div>
              <div className="flex justify-center items-center mt-4">
                <CircleChart />
              </div>
              <div className="w-full max-w-[293px] mx-auto bottom-5 left-0 right-0 h-[85px] rounded-[18px] absolute flex items-center justify-between text-white p-6 backdrop-blur-[120px] bg-gradient-to-br from-[#060B28]/[0.74] to-[#0A0E23]/[0.71]">
                <p className="text-xs">487 GB</p>
                <div className="flex flex-col gap-1 items-center">
                  <h1 className="font-bold text-[28px]">95%</h1>
                  <p className="text-xs">NVMe SSD</p>
                </div>
                <p className="text-xs">512 GB</p>
              </div>
            </div>

            {/* CPU Card */}
            <div className="rounded-[18px] p-7 h-[344px] flex flex-col justify-between bg-gradient-to-br from-[#060B28]/[0.74] to-[#0E153A]/[0.71]">
              <div className="flex items-center justify-between">
                <h1 className="uppercase text-lg font-bold text-white">CPU</h1>
                <button className="w-[37px] h-[37px] rounded-[12px] bg-[#1A1F37] flex items-center justify-center text-2xl text-[#7551FF]">
                  <IoIosMore />
                </button>
              </div>
              <div className="flex flex-col 2xl:flex-row items-center justify-between gap-4">
                <div className="flex flex-row 2xl:flex-col gap-4">
                  <div className="rounded-[18px] p-6 bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5]">
                    <h2 className="uppercase font-medium text-xs text-[#A0AEC0]">
                      Processor
                    </h2>
                    <h1 className="font-bold text-sm text-white uppercase">
                      1 core gold
                    </h1>
                  </div>
                  <div className="rounded-[18px] p-6 bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5]">
                    <h2 className="uppercase text-xs text-[#A0AEC0] font-medium">
                      Ram 32 gb
                    </h2>
                    <h1 className="font-bold text-sm text-white uppercase">
                      26.29 gb
                    </h1>
                  </div>
                </div>
                <div>
                  <CircleChartCpu />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Active Board & Backup */}
      <section className="flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-2/3 rounded-[18px] py-7 px-4 bg-gradient-to-br from-[#060B28]/[0.74] to-[#0A0E23]/[0.71]">
          <div className="mb-10">
            <h1 className="text-lg font-bold text-white">Active board</h1>
            <p className="text-sm text-[#A0AEC0]">
              <span className="text-[#01B574] font-bold">(+5) more</span> in
              today
            </p>
          </div>
          <AreaChartUI />
        </div>
        <div className="w-full xl:w-1/3 rounded-[18px] p-7 bg-gradient-to-br from-[#060B28]/[0.74] to-[#0A0E23]/[0.71]">
          <div className="mb-10">
            <h1 className="text-lg font-bold text-white uppercase">Backup</h1>
            <p className="text-sm font-bold text-[#A0AEC0]">27/7/365</p>
          </div>
          <div className="space-y-7">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-5">
                  <IoIosNotifications size={25} className="text-[#0075FF]" />
                  <div className="text-white">
                    <p className="text-sm font-medium">42.66.4.77</p>
                    <p className="text-xs text-[#A0AEC0]">22 DEC 7:20 PM</p>
                  </div>
                </div>
                <button className="w-full sm:w-[146px] h-[37px] rounded-[18px] flex items-center justify-center uppercase font-bold text-sm text-white bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5]">
                  Get backup
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Table */}
      <section className="w-full rounded-[18px] p-4 sm:p-7 bg-gradient-to-br from-[#060B28]/[0.74] to-[#0A0E23]/[0.71]">
        <h1 className="text-lg font-bold text-white">Projects</h1>
        <p className="text-sm flex items-center gap-1 text-[#A0AEC0] uppercase mb-4">
          <FaCheckCircle className="text-[#01B574]" /> 6 Ip address
        </p>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-white min-w-[900px]">
            <thead>
              <tr className="text-xs uppercase">
                <th className="py-4 text-left text-[#A0AEC0] font-medium">
                  Companies
                </th>
                <th className="py-4 text-left text-[#A0AEC0] font-medium">
                  Status
                </th>
                <th className="py-4 text-left text-[#A0AEC0] font-medium">
                  Day
                </th>
                <th className="py-4 pl-4 text-left text-[#A0AEC0] font-medium">
                  CPU Load
                </th>
                <th className="py-4" colSpan={3}></th>
              </tr>
            </thead>
            <tbody>
              {serverData.map((server, index) => (
                <tr key={index} className="h-16">
                  <td>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded ${server.iconBg}`}
                      >
                        {server.icon}
                      </div>
                      <span className="text-sm font-medium">{server.ip}</span>
                    </div>
                  </td>
                  <td>
                    <div className="space-y-2 sm:space-y-0 sm:space-x-3">
                      <span className="inline-block bg-[#00c48c] text-xs font-medium px-3 py-1 rounded-full">
                        Online
                      </span>
                      <span className="inline-block text-sm">
                        CPU {server.cores} CORE RAM {server.ram} GB
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className="text-sm font-medium">
                      {server.price} USDT
                    </span>
                  </td>
                  <td className="w-48 pl-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium w-8">
                        {server.cpuLoad}%
                      </span>
                      <Progress
                        value={server.cpuLoad}
                        className="progress-blue h-1 bg-[#1e2b4a]"
                        indicatorClassName="bg-[#0070f3]"
                      />
                    </div>
                  </td>
                  <td className="pl-2 sm:pl-6">
                    <button className="text-xs font-medium px-4 py-2 rounded-[18px] uppercase bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5]">
                      Get domain
                    </button>
                  </td>
                  <td>
                    <button className="text-xs font-medium px-4 py-2 rounded-[18px] bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5]">
                      UP
                    </button>
                  </td>
                  <td>
                    <button className="text-xs font-medium px-4 py-2 rounded-[18px] bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5]">
                      {server.root}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {serverData.map((server) => (
            <div
              key={server.id}
              className=" rounded-lg p-4 space-y-3 text-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`${server.iconBg} p-2 rounded-md flex items-center justify-center text-white`}
                  >
                    {server.icon}
                  </div>
                  <span>{server.ip}</span>
                </div>
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                  online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-slate-400 text-sm">SPECS</p>
                  <p>{server?.cpu}</p>
                  <p>{server.ram}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">DAY</p>
                  <p>{server.day}</p>
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-sm mb-1">CPU LOAD</p>
                <div className="flex items-center gap-2 mb-1">
                  <span>{server.cpuLoad}%</span>
                </div>
                <Progress
                  value={server.cpuLoad}
                  className="progress-blue h-2 bg-slate-800"
                  indicatorClassName="bg-slate-400"
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <Button className="bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5] text-white text-sm cursor-pointer">
                  GET DOMAIN
                </Button>
                <Button className="bg-gradient-to-br from-[#060C29] to-[#040C30]/[0.5] text-white text-sm cursor-pointer">
                  UP
                </Button>
              </div>

              <div>
                <p className="text-slate-400 text-sm">ROOT ID</p>
                <p className="text-sm">{server.rootId}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full flex flex-col sm:flex-row gap-2 items-center justify-between pb-4">
        <p className="text-sm font-medium text-white">@ Made with ❤</p>
        <nav className="flex items-center gap-10">
          <Link to="/" className="text-white text-sm font-normal uppercase">Big data</Link>
          <Link to="/" className="text-white text-sm font-normal uppercase">Wallet</Link>
          <Link to="/" className="text-white text-sm font-normal uppercase">License</Link>
        </nav>
      </footer>
    </main>
  );
};

export default Dashboard;

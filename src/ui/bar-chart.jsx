"use client";

import { Bar, BarChart, CartesianGrid, YAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { IoBuild, IoCart, IoRocketSharp, IoWallet } from "react-icons/io5";

export default function BarChartUI() {
  // Data for the bar chart
  const chartData = [
    { name: "Jan", value: 320 },
    { name: "Feb", value: 220 },
    { name: "Mar", value: 110 },
    { name: "Apr", value: 290 },
    { name: "May", value: 500 },
    { name: "Jun", value: 420 },
    { name: "Jul", value: 480 },
    { name: "Aug", value: 290 },
    { name: "Sep", value: 160 },
  ];

  // Chart configuration
  const chartConfig = {
    value: {
      label: "Value",
      color: "hsl(0, 0%, 100%)",
    },
  };

  return (
    <div
      className="w-full max-w-[670px] h-[445px] p-4 text-white rounded-[18px] flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
      }}
    >
      {/* Bar Chart */}
      <ChartContainer
        config={chartConfig}
        className="h-[222px] w-full rounded-[18px] linear-bg p-3"
      >
        <BarChart data={chartData}>
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value} %`}
            domain={[0, 500]}
            ticks={[0, 0, 100, 200, 300, 400, 500]}
            tick={{ fill: "rgba(255, 255, 255, 0.8)", fontSize: 12 }}
          />
          <CartesianGrid
            vertical={false}
            horizontal={false}
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <Bar
            dataKey="value"
            fill="white"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ChartContainer>

      {/* Active Users Section */}
      <div className="flex gap-4">
        <div className="">
          <h2 className="text-[18px] font-bold">Active</h2>
          <h2 className="text-[18px] font-bold mb-1">Users</h2>
        </div>
        <p className="text-sm text-[#A0AEC0] mt-8">
          <span className="text-[#22c55e] font-bold">(+23)</span> than last week
        </p>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-4 gap-4 mb-2">
        {/* Users */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="w-[25px] h-[25px] bg-[#0075FF] rounded-[6px] flex items-center justify-center mr-2">
              <IoWallet />
            </div>
            <span className="text-sm text-[#A0AEC0]">Users</span>
          </div>
          <span className="text-[18px] font-bold border-b-2 border-blue-500 pb-1 w-fit">
            32,984
          </span>
        </div>

        {/* Clicks */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="w-[25px] h-[25px] bg-[#0075FF] rounded-[6px] flex items-center justify-center mr-2">
              <IoRocketSharp />
            </div>
            <span className="text-sm text-[#A0AEC0]">Clicks</span>
          </div>
          <span className="text-[18px] font-bold border-b-2 border-blue-500 pb-1 w-fit">
            2,42m
          </span>
        </div>

        {/* DAY */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="w-[25px] h-[25px] bg-[#0075FF] rounded-[6px] flex items-center justify-center mr-2">
              <IoCart />
            </div>
            <span className="text-sm text-[#A0AEC0] uppercase">Day</span>
          </div>
          <span className="text-[18px] font-bold border-b-2 border-blue-500 pb-1 w-fit">
            32 USDT
          </span>
        </div>

        {/* IP */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="w-[25px] h-[25px] bg-[#0075FF] rounded-[6px] flex items-center justify-center mr-2">
              <IoBuild />
            </div>
            <span className="text-sm text-[#A0AEC0]">IP</span>
          </div>
          <span className="text-[18px] font-bold border-b-2 border-blue-500 pb-1 w-fit">
            6
          </span>
        </div>
      </div>
    </div>
  );
}

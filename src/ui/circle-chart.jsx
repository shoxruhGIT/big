"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { MdSentimentVerySatisfied } from "react-icons/md";

const chartData = [
  { browser: "safari", visitors: 200, fill: "url(#blueGradient)" },
];

export default function CircleChart() {
  return (
    <div className="relative flex items-center justify-center">
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="blueGradient" x1="20%" y1="0%" x2="0%" y2="100%">
            <stop offset="23.84%" stopColor="#0075FF" />
            <stop offset="81.07%" stopColor="rgba(5, 117, 255, 0.2)" />
          </linearGradient>
        </defs>
      </svg>

      <RadialBarChart
        width={212}
        height={212}
        data={chartData}
        startAngle={0}
        endAngle={250}
        innerRadius={100}
        outerRadius={130}
      >
        <PolarGrid gridType="circle" radialLines={false} stroke="none" />
        <RadialBar dataKey="visitors" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} axisLine={false} />
      </RadialBarChart>

      {/* Ikonka doira markazida */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[48px] h-[48px] rounded-full bg-[#0075FF] flex items-center justify-center">
          <MdSentimentVerySatisfied className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}

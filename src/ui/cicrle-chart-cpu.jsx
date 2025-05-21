"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import React, { useEffect, useState } from "react";

const chartData = [
  { browser: "safari", visitors: 200, fill: "url(#greenGradient)" },
];

export default function CircleChartCpu() {
  const [chartSize, setChartSize] = useState({ width: 212, height: 212 });

  useEffect(() => {
    const updateSize = () => {
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 1024;

      if (isMobile) {
        setChartSize({ width: 160, height: 160 });
      } else if (isTablet) {
        setChartSize({ width: 180, height: 180 });
      } else {
        setChartSize({ width: 212, height: 212 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[250px] mx-auto">
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="greenGradient" x1="20%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#05CD99" />
            <stop offset="92.23%" stopColor="rgba(5, 205, 153, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <RadialBarChart
        width={chartSize.width}
        height={chartSize.height}
        data={chartData}
        startAngle={20}
        endAngle={230}
        innerRadius="70%"
        outerRadius="95%"
      >
        <PolarGrid gridType="circle" radialLines={false} stroke="none" />
        <RadialBar dataKey="visitors" background cornerRadius={38} />
        <PolarRadiusAxis tick={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 30}
                      className="fill-[#A0AEC0] text-xs uppercase"
                    >
                      Active
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-white font-bold text-xl sm:text-2xl"
                    >
                      99.87
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 28}
                      className="fill-[#A0AEC0] text-xs uppercase"
                    >
                      Ideal
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </div>
  );
}

"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", desktop: 500, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 186, mobile: 80 },
  { month: "Aug", desktop: 305, mobile: 500 },
  { month: "Sep", desktop: 237, mobile: 120 },
  { month: "Oct", desktop: 73, mobile: 190 },
  { month: "Now", desktop: 209, mobile: 130 },
  { month: "Dec", desktop: 214, mobile: 420 },
];

const CustomDot = (props) => {
  const { cx, cy, index, data } = props;
  const isLast = index === data.length - 1;

  if (!isLast) return null;

  return <circle cx={cx} cy={cy} r={13} fill="#fff" strokeWidth={3} />;
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "white",
  },
  mobile: {
    label: "Mobile",
    color: "black",
  },
};

export default function AreaChartUI() {
  return (
    <ChartContainer className="w-full max-w-[883px] h-[296px]" config={chartConfig}>
      <AreaChart
        width={800}
        height={300}
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0075FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0075FF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00C6FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00C6FF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#ccc" strokeDasharray="4 4" vertical={false} />

        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#fff", fontSize: 12 }}
          tickMargin={15}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value} %`}
          domain={[0, 500]}
          ticks={[0, 100, 200, 300, 400, 500]}
          tick={{ fill: "#fff" }}
        />

        <Tooltip content={<ChartTooltipContent />} />

        <Area
          type="monotone"
          dataKey="mobile"
          stroke="#00C6FF"
          fillOpacity={1}
          fill="url(#colorMobile)"
          strokeWidth={2}
          dot={(props) => (
            <CustomDot {...props} data={chartData} dataKey="mobile" />
          )}
        />
        <Area
          type="monotone"
          dataKey="desktop"
          stroke="#0075FF"
          fillOpacity={1}
          fill="url(#colorDesktop)"
          strokeWidth={2}
          dot={(props) => (
            <CustomDot {...props} data={chartData} dataKey="desktop" />
          )}
        />
      </AreaChart>
    </ChartContainer>
  );
}

import React from "react";

const ResourceSlider = ({ label, value, min, max, onChange, unit }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-white">{label}</label>
        <span className="text-lg font-semibold">
          {value} {unit}
        </span>
      </div>

      <div className="relative h-2 bg-[#2D2E5F] rounded-full">
        <div
          className="absolute h-full rounded-full bg-[#0075FF]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="absolute w-full h-2 opacity-0 cursor-pointer"
        style={{ marginTop: "-8px" }}
      />

      <div className="flex justify-between mt-1 text-xs text-[#A0AEC0]">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
};

export default ResourceSlider;

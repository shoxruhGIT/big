import { calculatePriceComponents } from "@/utils/serverUtils";
import React from "react";

const PriceBreakdown = ({ resources }) => {
  const { cpuPrice, ramPrice, ssdPrice, gpuPrice, totalPrice } =
    calculatePriceComponents(resources);

  const formatPrice = (price) => {
    return price?.toFixed(2);
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-white mb-4">Price Breakdown</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-[#A0AEC0] text-sm">
            CPU ({resources.vcpu} cores)
          </span>
          <span className="font-medium">${formatPrice(cpuPrice)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#A0AEC0] text-sm">
            RAM ({resources.ram} GB)
          </span>
          <span className="font-medium">${formatPrice(ramPrice)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#A0AEC0] text-sm">
            Storage ({resources.ssd} GB)
          </span>
          <span className="font-medium">${formatPrice(ssdPrice)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#A0AEC0] text-sm">
            GPU ({resources.gpu} GB)
          </span>
          <span className="font-medium">${formatPrice(gpuPrice)}</span>
        </div>

        <div className="h-px bg-slate-200 my-3"></div>

        <div className="flex justify-between items-center">
          <span className="text-white font-medium">Total Daily Cost</span>
          <span className="text-2xl font-bold text-white">
            ${formatPrice(totalPrice)}
          </span>
        </div>
      </div>

      <div
        className="text-xs text-[#A0AEC0] rounded-[12px] p-3"
        style={{
          background:
            "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
        }}
      >
        <p>
          Estimated monthly cost:{" "}
          <span className="font-semibold text-white">
            ${formatPrice(totalPrice * 30)}
          </span>
        </p>
        <p className="mt-1">
          Billing is prorated to the second. You only pay for what you use.
        </p>
      </div>
    </div>
  );
};

export default PriceBreakdown;

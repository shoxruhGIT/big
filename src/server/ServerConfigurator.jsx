import PriceBreakdown from "@/ui/price-breakdown";
import ResourceSlider from "@/ui/resource-slider";
import ServerInfo from "@/ui/server-info";
import { getServerCredentials } from "@/utils/serverUtils";
import { ArrowRight, Server } from "lucide-react";
import React, { useState } from "react";

const ServerConfigurator = () => {
  const [resources, setResources] = useState({
    vcpu: 1,
    ram: 1,
    ssd: 8,
    gpu: 0,
  });

  const [serverInfo, setServerInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleResourceChange = (type, value) => {
    setResources((prev) => {
      const updated = { ...prev, [type]: value };
      return updated;
    });
  };

  const handleDeployToServer = () => {
    setIsLoading(true);

    setTimeout(() => {
      const newServerInfo = getServerCredentials();
      setServerInfo(newServerInfo);
      setIsLoading(false);
    }, 1500);
  };

  const deleteServer = () => {
    setIsLoading(true);
    setTimeout(() => {
      setServerInfo(null);
      setIsLoading(false);
    }, 1500);
  };

  //   const totalPrice = calculatePrice(resources);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 flex flex-col md:items-start gap-10 text-white ">
      <div className="flex flex-col md:flex-row  items-center md:items-start gap-2">
        <div
          className="w-full max-w-[500px] h-auto rounded-[18px]  "
          style={{
            background:
              "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
          }}
        >
          <div className="w-full p-6">
            <h2 className="text-lg font-semibold mb-6">Resource Allocation</h2>
            <div className="flex flex-col gap-4">
              <ResourceSlider
                label="CPU Cores"
                value={resources.vcpu}
                min={1}
                max={32}
                onChange={(value) => handleResourceChange("vcpu", value)}
                unit="vCPU"
              />
              <ResourceSlider
                label="Memory"
                value={resources.ram}
                min={1}
                max={256}
                onChange={(value) => handleResourceChange("ram", value)}
                unit="GB"
              />

              <ResourceSlider
                label="Storage"
                value={resources.ssd}
                min={8}
                max={1024}
                onChange={(value) => handleResourceChange("ssd", value)}
                unit="GB"
              />

              <ResourceSlider
                label="GPU Memory"
                value={resources.gpu}
                min={0}
                max={48}
                onChange={(value) => handleResourceChange("gpu", value)}
                unit="GB"
              />
            </div>
          </div>
        </div>
        <div
          className="w-full max-w-[500px] h-auto rounded-[18px] p-6"
          style={{
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
          }}
        >
          <PriceBreakdown resources={resources} />
          <button
            onClick={handleDeployToServer}
            disabled={isLoading}
            className="mt-4 py-3 px-4 flex items-center gap-4 bg-[#0075FF] rounded-[18px] cursor-pointer"
          >
            {isLoading ? (
              <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                Deploy Server <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
        {serverInfo && (
          <ServerInfo
            serverInfo={serverInfo}
            isLoading={isLoading}
            deleteServer={deleteServer}
          />
        )}
      </div>
    </div>
  );
};

export default ServerConfigurator;

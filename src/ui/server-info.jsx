import React, { useState } from "react";
import { Copy, Check, Server, Globe, Key } from "lucide-react";

const ServerInfo = ({ serverInfo, isLoading, deleteServer }) => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const InfoItem = ({ icon, label, value, field }) => (
    <div
      className="flex items-start gap-3 p-4 rounded-lg"
      style={{
        background:
          "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
      }}
    >
      <div className="mt-1 text-white">{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium text-[#A0AEC0]">{label}</p>
        <p className="font-mono text-base text-white mt-1">{value}</p>
      </div>
      <button
        onClick={() => copyToClipboard(value, field)}
        className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-200 cursor-pointer transition-colors"
        title="Copy to clipboard"
      >
        {copiedField === field ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4 text-[#A0AEC0]" />
        )}
      </button>
    </div>
  );

  return (
    <div
      className="w-full max-w-[1012px] p-6 rounded-[18px]"
      style={{
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Server className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-semibold text-white">
          Your Server is Ready
        </h2>
      </div>

      <p className="text-[#A0AEC0] mb-6">
        Your server has been provisioned and is ready to use. Use the
        credentials below to connect to your server.
      </p>
      <div className="space-y-4">
        <InfoItem
          icon={<Globe className="h-5 w-5" />}
          label="IP Address"
          value={serverInfo?.ip}
          field="ip"
        />
        <InfoItem
          icon={<Server className="h-5 w-5" />}
          label="Username"
          value={serverInfo?.root}
          field="username"
        />

        <InfoItem
          icon={<Key className="h-5 w-5" />}
          label="Password"
          value={serverInfo?.password}
          field="password"
        />
      </div>

      <div
        className="mt-6 rounded-lg p-4 text-sm text-[#A0AEC0]"
        style={{
          background:
            "linear-gradient(126.75deg, rgba(34, 41, 78, 0.94) -4.23%, rgba(10, 14, 35, 0.49) 76.75%)",
        }}
      >
        <p className="font-medium">Connection instructions:</p>
        <p className="mt-1 font-mono">
          ssh {serverInfo?.root}@{serverInfo?.ip}
        </p>
        <p className="mt-2">
          We recommend changing your password immediately after first login.
        </p>
      </div>

      <button
        onClick={deleteServer}
        disabled={isLoading}
        className="mt-4 py-3 px-4 flex items-center gap-4 bg-[#E31A1A] rounded-[18px] cursor-pointer"
      >
        {isLoading ? (
          <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          <>Delete Server</>
        )}
      </button>
    </div>
  );
};

export default ServerInfo;

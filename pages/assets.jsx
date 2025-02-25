import Layout from "../components/Layout";
import { useState } from "react";

const Assets = () => {
  // Mock data for assets (removed icon field)
  const mockAssets = [
    {
      id: 1,
      name: "Cash Savings",
      type: "Liquid",
      value: "$15,000",
      growth: "+2.5%",
    },
    {
      id: 2,
      name: "Tech Stock Portfolio",
      type: "Investment",
      value: "$50,000",
      growth: "+8.7%",
    },
    {
      id: 3,
      name: "Real Estate Property",
      type: "Property",
      value: "$300,000",
      growth: "+3.2%",
    },
    {
      id: 4,
      name: "Cryptocurrency (BTC)",
      type: "Digital",
      value: "$8,500",
      growth: "-1.3%",
    },
    {
      id: 5,
      name: "Retirement Fund",
      type: "Savings",
      value: "$75,000",
      growth: "+4.1%",
    },
  ];

  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleAssetSelect = (asset) => {
    setSelectedAsset(asset);
  };

  return (
    <Layout>
      <h2 className="text-xl text-pip-green">Assets</h2>
      <div className="mt-4 flex flex-row gap-8">
        {/* Asset List (Left Side, mimicking Pip-Boy ITEMS section) */}
        <div className="w-1/2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-pip-gray">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Type</th>
                <th className="py-2 px-4">Value</th>
                <th className="py-2 px-4">Growth</th>
              </tr>
            </thead>
            <tbody>
              {mockAssets.map((asset) => (
                <tr
                  key={asset.id}
                  className={`border-b border-pip-gray hover:bg-pip-black cursor-pointer ${
                    selectedAsset?.id === asset.id ? "selected-asset" : ""
                  }`}
                  onClick={() => handleAssetSelect(asset)}
                >
                  <td className="py-2 px-4">
                    {selectedAsset?.id === asset.id && (
                      <span className="pip-bullet">•</span>
                    )}
                    {asset.name}
                  </td>
                  <td className="py-2 px-4">{asset.type}</td>
                  <td className="py-2 px-4">{asset.value}</td>
                  <td
                    className={`py-2 px-4 ${
                      asset.growth.startsWith("-")
                        ? "text-red-500"
                        : "text-pip-green"
                    }`}
                  >
                    {asset.growth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-pip-green">Total Asset Value: $448,500</p>
        </div>

        {/* Selected Asset Details (Right Side, mimicking Pip-Boy details and effects, no icon) */}
        {selectedAsset && (
          <div className="w-1/2 p-4 bg-pip-black border border-pip-gray pip-item rounded">
            <hr className="pip-green" />
            <h3 className="text-lg text-pip-green pip-item">
              {selectedAsset.name}
            </h3>
            <div className="mt-2">
              <p className="text-pip-green">Type: {selectedAsset.type}</p>
              <p className="text-pip-green">Value: {selectedAsset.value}</p>
              <p
                className={`text-pip-green ${
                  selectedAsset.growth.startsWith("-") ? "text-red-500" : ""
                }`}
              >
                Growth: {selectedAsset.growth}
              </p>
              <p className="text-pip-green">Effects: N/A</p>{" "}
              {/* You can expand this with custom effects */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Assets;

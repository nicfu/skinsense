import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, RefreshCwIcon, FilterIcon } from "lucide-react";
import Button from "@/skinsense/components/button";
import ProductCard from "@/skinsense/components/product-card";
import {
  RECOMMENDED_PRODUCTS,
  MOCK_ANALYSIS_RESULT,
} from "@/skinsense/data/skin-data";

export default function Results() {
  const navigate = useNavigate();
  const [products] = useState(RECOMMENDED_PRODUCTS);
  const [analysisResult] = useState(MOCK_ANALYSIS_RESULT);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleNewScanClick = () => {
    navigate("/scan");
  };

  // Format confidence as percentage
  const confidencePercentage = Math.round(analysisResult.confidence * 100);

  return (
    <div className="flex-1 flex flex-col">
      {/* Results header */}
      <div className="bg-white p-4 rounded-b-xl shadow-sm">
        <div className="flex items-center mb-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon size={16} className="text-[#10203B]" />
          </button>
          <h1 className="text-xl font-bold text-[#10203B] ml-3">
            Your Results
          </h1>
        </div>

        <div className="bg-[#F0F9F8] rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-medium text-[#10203B]">Skin Analysis</h2>
            <span className="text-sm bg-[#6EC5B8] text-white px-2 py-1 rounded-full">
              {confidencePercentage}% confidence
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 w-24">Skin tone:</span>
              <span className="text-sm font-medium text-[#10203B] capitalize">
                {analysisResult.tone}
              </span>
            </div>

            <div className="flex items-start">
              <span className="text-sm text-gray-600 w-24">Concerns:</span>
              <div className="flex flex-wrap gap-1">
                {analysisResult.concerns.map((concern, index) => (
                  <span
                    key={concern}
                    className="inline-block bg-[#6EC5B8]/20 text-[#10203B] text-xs px-2 py-1 rounded-md capitalize"
                  >
                    {concern.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product recommendations */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recommended Products</h2>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6EC5B8]/20">
            <FilterIcon size={16} className="text-[#6EC5B8]" />
          </button>
        </div>

        <div className="space-y-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-6 mb-4">
          <Button
            variant="outline"
            fullWidth
            icon={<RefreshCwIcon size={16} />}
            iconPosition="left"
            onClick={handleNewScanClick}
          >
            Take New Scan
          </Button>
        </div>
      </div>
    </div>
  );
}

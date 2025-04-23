import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, ScanIcon } from "lucide-react";
import Button from "@/skinsense/components/button";

export default function Landing() {
  const navigate = useNavigate();

  const handleScanClick = () => {
    navigate("/scan");
  };

  const handleGoalSelectionClick = () => {
    navigate("/goals");
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10203B]"></div>
        <img
          src="https://picsum.photos/seed/skinsense1/800/600"
          alt="Beautiful skin"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-3xl font-bold mb-2">
            Your Personalized <br />
            Skincare Journey
          </h1>
          <p className="text-gray-200">
            AI-powered recommendations tailored to your unique skin needs
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How it works</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#6EC5B8] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#10203B] font-bold">1</span>
              </div>
              <div>
                <h3 className="font-medium">Scan your face</h3>
                <p className="text-sm text-gray-300">
                  Our AI analyzes your skin's unique characteristics
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#6EC5B8] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#10203B] font-bold">2</span>
              </div>
              <div>
                <h3 className="font-medium">Tell us your goals</h3>
                <p className="text-sm text-gray-300">
                  Select what skin concerns you want to address
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-[#6EC5B8] flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-[#10203B] font-bold">3</span>
              </div>
              <div>
                <h3 className="font-medium">
                  Get personalized recommendations
                </h3>
                <p className="text-sm text-gray-300">
                  Discover products perfectly matched to your skin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-auto space-y-4">
          <Button
            variant="primary"
            fullWidth
            size="lg"
            icon={<ScanIcon size={20} />}
            onClick={handleScanClick}
          >
            Scan My Face
          </Button>

          <Button
            variant="outline"
            fullWidth
            onClick={handleGoalSelectionClick}
          >
            Set My Skin Goals First
          </Button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Your privacy is our priority. Scans are not stored unless you create
            an account.
          </p>
        </div>
      </div>
    </div>
  );
}

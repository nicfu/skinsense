import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import Button from "@/skinsense/components/button";
import ConcernSelector from "@/skinsense/components/concern-selector";
import { SKIN_CONCERNS } from "@/skinsense/data/skin-data";

export default function Goals() {
  const navigate = useNavigate();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedConcerns.length === 0) {
      setError("Please select at least one concern");
      return;
    }

    // In a real app, we would save these selections to state/context/storage
    navigate("/scan");
  };

  const handleSkip = () => {
    navigate("/scan");
  };

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="bg-white rounded-xl p-6 flex-1">
        <h1 className="text-2xl font-bold text-[#10203B] mb-2">
          Set Your Skin Goals
        </h1>
        <p className="text-gray-600 mb-6">
          Select up to 3 concerns you'd like to address with your skincare
          routine
        </p>

        <ConcernSelector
          concerns={SKIN_CONCERNS}
          selectedConcerns={selectedConcerns}
          onChange={setSelectedConcerns}
          maxSelections={3}
          className="mb-8"
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-3 mt-auto">
          <Button
            variant="primary"
            fullWidth
            icon={<ArrowRightIcon size={16} />}
            onClick={handleContinue}
          >
            Continue
          </Button>

          <Button variant="ghost" fullWidth onClick={handleSkip}>
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  );
}

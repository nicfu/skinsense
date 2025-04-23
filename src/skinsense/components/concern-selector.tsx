import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  DropletIcon,
  CircleDotIcon,
  MinusIcon,
  CircleIcon,
  HeartIcon,
  SunIcon,
} from "lucide-react";
import { SkinConcern } from "@/skinsense/data/skin-data";

interface ConcernSelectorProps {
  concerns: SkinConcern[];
  selectedConcerns: string[];
  onChange: (selectedIds: string[]) => void;
  maxSelections?: number;
  className?: string;
}

export default function ConcernSelector({
  concerns,
  selectedConcerns,
  onChange,
  maxSelections = 3,
  className,
}: ConcernSelectorProps) {
  const [error, setError] = useState<string | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "droplet":
        return <DropletIcon className="h-5 w-5" />;
      case "droplets":
        return <DropletIcon className="h-5 w-5" />;
      case "circle-dot":
        return <CircleDotIcon className="h-5 w-5" />;
      case "minus":
        return <MinusIcon className="h-5 w-5" />;
      case "circle":
        return <CircleIcon className="h-5 w-5" />;
      case "heart":
        return <HeartIcon className="h-5 w-5" />;
      case "sun":
        return <SunIcon className="h-5 w-5" />;
      default:
        return <CircleIcon className="h-5 w-5" />;
    }
  };

  const handleToggleConcern = (id: string) => {
    if (selectedConcerns.includes(id)) {
      // Remove concern if already selected
      onChange(selectedConcerns.filter((concernId) => concernId !== id));
      setError(null);
    } else {
      // Add concern if not at max selections
      if (selectedConcerns.length >= maxSelections) {
        setError(`Please select a maximum of ${maxSelections} concerns`);
        return;
      }

      onChange([...selectedConcerns, id]);
      setError(null);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-2 gap-3">
        {concerns.map((concern, index) => {
          const isSelected = selectedConcerns.includes(concern.id);

          return (
            <button
              key={concern.id}
              onClick={() => handleToggleConcern(concern.id)}
              className={cn(
                "flex items-center p-3 rounded-xl border-2 transition-all",
                isSelected
                  ? "border-[#6EC5B8] bg-[#F0F9F8]"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full mr-3",
                  isSelected
                    ? "bg-[#6EC5B8] text-white"
                    : "bg-gray-100 text-gray-500"
                )}
              >
                {getIconComponent(concern.icon)}
              </div>

              <div className="flex-1 text-left">
                <p className="font-medium text-[#10203B]">{concern.name}</p>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {concern.description}
                </p>
              </div>

              {isSelected && (
                <div className="ml-2 flex-shrink-0">
                  <CheckIcon className="h-5 w-5 text-[#6EC5B8]" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <p className="text-sm text-gray-500">
        Selected {selectedConcerns.length} of {maxSelections} concerns
      </p>
    </div>
  );
}

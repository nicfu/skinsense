import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CameraIcon } from "lucide-react";

interface CameraOverlayProps {
  onCapture?: () => void;
  autoCapture?: boolean;
  captureDelay?: number;
  className?: string;
}

export default function CameraOverlay({
  onCapture,
  autoCapture = true,
  captureDelay = 3000,
  className,
}: CameraOverlayProps) {
  const [isAligned, setIsAligned] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  // Simulate face detection and alignment
  useEffect(() => {
    // In a real app, this would be replaced with actual face detection logic
    const alignmentTimer = setTimeout(() => {
      setIsAligned(true);
    }, 2000);

    return () => clearTimeout(alignmentTimer);
  }, []);

  // Handle auto-capture countdown
  useEffect(() => {
    if (isAligned && autoCapture) {
      setCountdown(3);

      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === null) return null;
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return null;
          }
          return prev - 1;
        });
      }, 1000);

      const captureTimer = setTimeout(() => {
        if (onCapture) onCapture();
      }, captureDelay);

      return () => {
        clearInterval(countdownInterval);
        clearTimeout(captureTimer);
      };
    }
  }, [isAligned, autoCapture, captureDelay, onCapture]);

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className
      )}
    >
      {/* Camera feed would be here in a real implementation */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        {/* This would be a video feed in a real implementation */}
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <CameraIcon size={48} className="text-gray-400" />
        </div>
      </div>

      {/* Face oval guide */}
      <div
        className={cn(
          "absolute w-64 h-80 border-4 rounded-full transition-all duration-300",
          isAligned ? "border-green-400" : "border-white border-dashed"
        )}
      >
        {/* Face position guides */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 flex flex-col items-center justify-center text-white">
            {!isAligned && (
              <p className="text-center font-medium mb-2">
                Position your face in the oval
              </p>
            )}
            {isAligned && countdown !== null && (
              <div className="text-center">
                <p className="font-medium mb-1">Perfect!</p>
                <p className="text-2xl font-bold">{countdown}</p>
              </div>
            )}
            {isAligned && countdown === null && (
              <p className="font-medium animate-pulse">Capturing...</p>
            )}
          </div>
        </div>
      </div>

      {/* Instruction overlay */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-white">
        <p className="text-sm bg-black bg-opacity-50 py-2 px-4 rounded-lg inline-block">
          {isAligned
            ? "Hold still while we capture your skin"
            : "Make sure your face is well-lit and centered"}
        </p>
      </div>
    </div>
  );
}

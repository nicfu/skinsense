import React from "react";
import { cn } from "@/lib/utils";

interface LoadingAnimationProps {
  message?: string;
  className?: string;
}

export default function LoadingAnimation({
  message = "Analysing your skin...",
  className,
}: LoadingAnimationProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center p-6", className)}
    >
      {/* Circular animation with water drop effect */}
      <div className="relative w-32 h-32 mb-8">
        {/* Outer circle */}
        <div className="absolute inset-0 rounded-full border-4 border-[#6EC5B8]/30"></div>

        {/* Animated circle */}
        <div className="absolute inset-0 rounded-full border-4 border-t-[#6EC5B8] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>

        {/* Inner circle with ripple effect */}
        <div className="absolute inset-4 rounded-full bg-[#6EC5B8]/20 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#6EC5B8] animate-pulse"></div>
        </div>

        {/* Water drop animations */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-2 h-2 bg-[#6EC5B8] rounded-full animate-ping",
                  i === 0 && "top-8 left-8 animation-delay-0",
                  i === 1 && "top-4 left-0 animation-delay-500",
                  i === 2 && "top-0 left-4 animation-delay-1000"
                )}
                style={{
                  animationDelay: `${i * 500}ms`,
                  animationDuration: "1.5s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="text-center">
        <p className="text-xl font-medium text-[#10203B]">{message}</p>
        <p className="text-sm text-gray-500 mt-2">
          This may take a few moments
        </p>
      </div>

      {/* Progress indicators */}
      <div className="mt-8 w-full max-w-xs">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-gray-500">Scanning</span>
          <span className="text-xs text-[#6EC5B8]">Complete</span>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#6EC5B8] rounded-full w-full animate-progress"></div>
        </div>

        <div className="flex justify-between mb-2 mt-4">
          <span className="text-xs text-gray-500">Analyzing</span>
          <span className="text-xs text-[#6EC5B8]">In progress</span>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#6EC5B8] rounded-full w-3/4 animate-progress"></div>
        </div>

        <div className="flex justify-between mb-2 mt-4">
          <span className="text-xs text-gray-500">Finding matches</span>
          <span className="text-xs text-gray-500">Pending</span>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#6EC5B8] rounded-full w-1/3 animate-progress"></div>
        </div>
      </div>
    </div>
  );
}

// Add this to your global CSS or use a style tag
const styles = `
@keyframes progress {
  0% { width: 0% }
  100% { width: 100% }
}

.animate-progress {
  animation: progress 3s ease-in-out infinite;
}

.animation-delay-0 {
  animation-delay: 0ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}
`;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "@/skinsense/components/loading-animation";

export default function Analysis() {
  const navigate = useNavigate();

  // Simulate analysis process
  useEffect(() => {
    // In a real app, this would be where we process the image and analyze the skin
    // For the prototype, we'll just wait a few seconds and then navigate to results
    const timer = setTimeout(() => {
      navigate("/results");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="bg-white rounded-xl p-6 flex-1 flex flex-col items-center justify-center">
        <LoadingAnimation />
      </div>
    </div>
  );
}

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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl p-8 w-full max-w-md">
        <LoadingAnimation />
      </div>
    </div>
  );
}

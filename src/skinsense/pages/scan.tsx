import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CameraIcon, XIcon } from "lucide-react";
import Button from "@/skinsense/components/button";
import CameraOverlay from "@/skinsense/components/camera-overlay";

export default function Scan() {
  const navigate = useNavigate();
  const [cameraActive, setCameraActive] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const handleStartScan = () => {
    // In a real app, we would request camera permissions here
    // For the prototype, we'll simulate this
    setCameraActive(true);
  };

  const handleCapture = () => {
    // In a real app, this would capture the image and send it for analysis
    // For the prototype, we'll navigate directly to the analysis page
    navigate("/analysis");
  };

  const handleCancel = () => {
    setCameraActive(false);
  };

  // Simulate camera permission request
  useEffect(() => {
    if (cameraActive) {
      // Simulate successful camera access
      // In a real app, this would be handled by the browser's permission API
    }
  }, [cameraActive]);
  return (
    <div className="flex-1 flex flex-col">
      {!cameraActive ? (
        <div className="flex-1 flex flex-col p-6">
          <div className="bg-white rounded-xl p-6 flex-1 flex flex-col">
            <h1 className="text-2xl font-bold text-[#10203B] mb-2">
              Scan Your Face
            </h1>
            <p className="text-gray-600 mb-6">
              Position your face in good lighting for the best results
            </p>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center">
                <CameraIcon size={64} className="text-gray-400" />
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <Button
                variant="primary"
                fullWidth
                icon={<CameraIcon size={16} />}
                iconPosition="left"
                onClick={handleStartScan}
              >
                Start Face Scan
              </Button>

              {permissionDenied && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">
                    Camera access is required for skin analysis. Please enable
                    camera permissions in your browser settings.
                  </p>
                </div>
              )}

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-[#10203B] mb-2">
                  For best results:
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Find a well-lit area</li>
                  <li>• Remove makeup before scanning</li>
                  <li>• Keep your face centered in the frame</li>
                  <li>• Hold still during the scan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col relative">
          {/* Camera view */}
          <div className="flex-1 relative">
            <CameraOverlay onCapture={handleCapture} />

            {/* Cancel button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center"
              onClick={handleCancel}
            >
              <XIcon size={20} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-[#10203B] text-white">
      <div
        className={cn("mx-auto max-w-md min-h-screen flex flex-col", className)}
      >
        {/* Header */}
        <header className="p-4 flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#6EC5B8] flex items-center justify-center mr-2">
              <span className="text-[#10203B] font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold">SkinSense</h1>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center text-xs text-gray-400">
          <p>© 2023 SkinSense. All rights reserved.</p>
          <p className="mt-1">Powered by advanced skin analysis technology</p>
        </footer>
      </div>
    </div>
  );
}

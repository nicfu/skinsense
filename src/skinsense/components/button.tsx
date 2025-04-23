import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#6EC5B8] text-white hover:bg-[#5DB3A6] focus-visible:ring-[#6EC5B8]",
    secondary:
      "bg-white text-[#10203B] hover:bg-gray-100 focus-visible:ring-white",
    outline:
      "border border-[#6EC5B8] text-[#6EC5B8] bg-transparent hover:bg-[#6EC5B8]/10 focus-visible:ring-[#6EC5B8]",
    ghost:
      "bg-transparent text-[#6EC5B8] hover:bg-[#6EC5B8]/10 focus-visible:ring-[#6EC5B8]",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {icon && iconPosition === "left" && !isLoading && (
        <span className="mr-2">{icon}</span>
      )}

      {children}

      {icon && iconPosition === "right" && !isLoading && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}

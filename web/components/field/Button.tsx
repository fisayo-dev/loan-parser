import React from "react";
import { Loader2 } from "lucide-react";

const Button = ({
  text,
  className = "",
  variant = "filled",
  color = "black",
  onClick,
  loading = false,
  disabled = false,
  icon: Icon,
}: {
  text: string;
  className?: string;
  variant?: "filled" | "outline" | "ghost";
  color?: "black" | "blue" | "green" | "red" | "gray";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) => {
  const baseStyles =
    "px-4 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const colorMap = {
    black: {
      filled: "bg-black text-white hover:bg-black/90 focus:ring-gray-500",
      outline:
        "border border-black text-black hover:bg-black hover:text-white focus:ring-gray-500",
      ghost: "text-black hover:bg-gray-100 focus:ring-gray-500",
    },
    blue: {
      filled: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      outline:
        "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    },
    green: {
      filled: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      outline:
        "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500",
      ghost: "text-green-600 hover:bg-green-50 focus:ring-green-500",
    },
    red: {
      filled: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      outline:
        "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
      ghost: "text-red-600 hover:bg-red-50 focus:ring-red-500",
    },
    gray: {
      filled: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline:
        "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500",
      ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
    },
  };

  const variantStyles = colorMap[color][variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4" />
      ) : null}
      {text}
    </button>
  );
};

export default Button;

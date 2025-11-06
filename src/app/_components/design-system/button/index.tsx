import React from "react";
import { cn } from "@/shared/utils/tailwindUtils";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "medium" | "large";
  iconComponent?: React.ReactNode;
  color?: "white" | "black"; // only for tertiary
  className?: string;
};

export default function Button({
  label,
  variant = "primary",
  size = "medium",
  iconComponent,
  color = "white",
  className = "",
}: ButtonProps) {
  // === Variant + Interaction 상태에 따른 배경 및 border 처리 ===
  const bgVariants: Record<string, string> = {
    primary: "bg-primary-400 hover:bg-primary-500 active:bg-primary-600 text-white",
    secondary: "bg-gray800 hover:bg-primary-400 active:bg-primary-500 text-white",
    tertiary:
      color === "white"
        ? "bg-white hover:bg-gray100 active:bg-gray400 text-[#18191B] border border-[#C4C5CA] box-border"
        : "bg-transparent hover:bg-opacity-20 active:bg-opacity-30 text-white border border-white",
  };

  //   const height = size === "large" ? "h-[56px]" : "h-[48px]";
  const padding = iconComponent
    ? size === "large"
      ? "py-[14.5px] pl-8 pr-7"
      : "py-3 pl-7 pr-6"
    : size === "large"
    ? "py-[14.5px] px-8"
    : "py-3 px-7";
  const textSize = size === "large" ? "!text-[18px]" : "!text-[16px]";

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center text-heading-05 gap-1.5 font-semibold rounded-full transition-all",
        bgVariants[variant],
        padding,
        textSize,
        className
      )}
    >
      <span>{label}</span>
      {iconComponent && <span className="flex-shrink-0">{iconComponent}</span>}
    </button>
  );
}

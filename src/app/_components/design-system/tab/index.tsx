import React from "react";
import { cn } from "@/shared/utils/tailwindUtils";

type TabProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: "default" | "news";
  className?: string;
};

export default function Tab({
  label,
  isActive = false,
  onClick,
  variant = "default",
  className = "",
}: TabProps) {
  const isNews = variant === "news";

  const baseStyle = cn(
    "flex items-center justify-center rounded-full transition-all ",
    isNews
      ? "px-5 py-2.5 md:px-6 md:py-3 text-heading-04-mo md:text-heading-04"
      : "px-5 py-2.5 md:px-6 md:py-3 text-heading-05-mo md:text-heading-05"
  );

  const colorStyle = cn(
    isNews
      ? isActive
        ? "text-gray500"
        : "text-gra900"
      : isActive
      ? "bg-primary-50 text-primary-400 border border-[1.5px] border-primary-400"
      : "bg-gray50 hover:bg-primary-50 text-gray500 hover:text-primary-400 border border-[1.5px] border-transparent"
  );

  return (
    <button onClick={onClick} className={cn(baseStyle, colorStyle, className)}>
      {label}
    </button>
  );
}

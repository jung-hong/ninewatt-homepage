/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/shared/utils/tailwindUtils";
import { forwardRef } from "react";

const ButtonVariant = [
  "base",
  "reverse",
  "outlineSelected",
  "outlineGrey",
  "rounded",
  "roundedOutline",
  "tab",
] as const;
const ButtonSize = ["base", "sm", "lg", "xl"] as const;
const BorderRadius = ["base", "lg"] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  round?: (typeof BorderRadius)[number];
} & React.ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "base",
      size = "base",
      round = "base",
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "w-full inline-flex items-center justify-center h-11 md:h-[54px] px-4 md:px-5",
          "font-medium leading-none",
          "focus-visible:ring-primary-500 focus:outline-none focus-visible:ring focus:shadow-none",
          "active:outline-0 active:shadow-none",
          "transition-all duration-200",
          //#region  //*======== Border Radius ===========
          [round === "base" && ["rounded-lg"], round === "lg" && ["rounded-xl"]],
          //#endregion  //*======== Border Radius ===========
          //#region  //*======== Size ===========
          [
            size === "sm" && ["text-xs"],
            size === "base" && ["text-base"],
            size === "lg" && ["text-lg font-semibold"],
            size === "xl" && ["text-xl"],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === "base" && [
              // 흰 바탕, 검은 테두리
              "bg-white text-black border border-black",
              "hover:bg-slate-100",
              "active:bg-mainDark disabled:bg-black9 disabled:text-black9",
            ],
            variant === "reverse" && [
              // 검은 바탕
              "bg-[#101010] text-white",
              "hover:bg-black",
              "disabled:bg-black9 disabled:text-black9",
            ],
            variant === "outlineSelected" && [
              "text-black border-black border bg-[#F1F1F1]",
              "font-semibold",
            ],
            variant === "outlineGrey" && [
              "text-black9 border-[#D9D9D9] border",
              "hover:font-semibold",
            ],
            variant === "rounded" && ["bg-[#4E84F7] text-white rounded-[34px]", "hover:bg-primary"],
            variant === "roundedOutline" && [
              // 회색 테두리, 둥근 버튼
              "text-alternative border-alternative border rounded-[100px]",
              "hover:bg-alternative/5",
            ],
            variant === "tab" && [
              // 회색 배경, 둥근 버튼
              "rounded-[100px] bg-gray50 text-gray500",
              "px-[20px] xl:px-6 py-[10px] xl:py-3 w-fit font-semibold text-base xl:text-lg leading-normal",
              "hover:bg-primary-50 hover:text-primary-400",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

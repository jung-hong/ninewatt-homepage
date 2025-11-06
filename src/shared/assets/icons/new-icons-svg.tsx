import React from "react";

type IconType = "upload" | "arrow-right" | "check-arrow" | "arrow-left" | "arrow-left-alt";

interface SvgIconProps {
  type: IconType;
  width?: number;
  height?: number;
  stroke?: string;
}

export default function SvgIcon({ type, width = 20, height = 20, stroke = "black" }: SvgIconProps) {
  const commonProps = {
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "upload":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.667 1.89V5.333c0 .467 0 .7.09.878.08.157.208.284.365.364.179.09.412.09.879.09h3.443"
            {...commonProps}
          />
          <path d="M5.5 12.5L8 15m0 0l2.5-2.5M8 15V10" {...commonProps} />
          <path
            d="M9.667 1.666H5.334C3.934 1.666 3.234 1.666 2.699 1.939c-.47.239-.853.622-1.093 1.092C1.334 3.566 1.334 4.266 1.334 5.666v8.667c0 1.4 0 2.1.272 2.634.24.47.623.853 1.093 1.093.535.273 1.235.273 2.635.273h5.333c1.4 0 2.1 0 2.635-.273.47-.24.853-.622 1.093-1.093.273-.534.273-1.234.273-2.634V6.666L9.667 1.666Z"
            {...commonProps}
          />
        </svg>
      );

    case "arrow-right":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.334 10H13.667M13.667 10L8.667 5M13.667 10L8.667 15" {...commonProps} />
        </svg>
      );

    case "check-arrow":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 15L10 5M10 5H3.333M10 5V11.667" {...commonProps} />
        </svg>
      );

    case "arrow-left":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 15L0 10L5 5" {...commonProps} />
        </svg>
      );

    case "arrow-left-alt":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 15L5 10L0 5" {...commonProps} />
        </svg>
      );

    default:
      return null;
  }
}

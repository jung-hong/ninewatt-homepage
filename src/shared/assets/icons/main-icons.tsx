export const ScrollDownIcon = ({ color = "black" }: { color: string }) => (
  <svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 9L12.5 17L20.5 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 19L12.5 27L20.5 19"
      stroke={color}
      strokeOpacity="0.2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight = ({ size = 20, color = "white" }: { size?: number; color?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33301 10H16.6663M16.6663 10L11.6663 5M16.6663 10L11.6663 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NoTailArrow = ({
  isActive,
  direction,
}: {
  isActive: boolean;
  direction: "left" | "right";
}) => {
  return direction === "right" ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 18L16 12L10 6"
        stroke={isActive ? "#18191B" : "#D1D2D6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 18L8 12L14 6"
        stroke={isActive ? "#18191B" : "#D1D2D6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

import { IconType } from "@/types/commont";

// 북동쪽 가리키는 화살표
export const ExpandArrow = ({ color, className }: IconType) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.0117 1.5H7.23435M15.0117 1.5L15.0113 9.27778M15.0117 1.5L1.01172 15.5"
        stroke={color ? color : "#C4C4C4"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 오른쪽
export const RightArrow = ({ className, color }: IconType) => {
  return (
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1.5L4 4.5L1 7.5"
        stroke={color ?? "#2E2F33"}
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 오른쪽, 그라데이션
export const GradientRightArrow = ({ className }: IconType) => {
  return (
    <svg
      width="1040"
      height="143"
      viewBox="0 0 1040 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1785_13418)">
        <path
          d="M1035.6 71.551C1037.6 69.9497 1037.6 66.9062 1035.6 65.3049L986.425 25.9532C983.806 23.8573 979.926 25.7219 979.926 29.0763L979.926 52.502C979.926 54.7111 978.135 56.502 975.926 56.502L4 56.5019C1.79089 56.5019 -1.64096e-06 58.2928 -1.73753e-06 60.5019L-2.43044e-06 76.3539C-2.527e-06 78.563 1.79089 80.3539 4 80.3539L975.926 80.3539C978.135 80.3539 979.926 82.1448 979.926 84.3539L979.926 107.78C979.926 111.134 983.806 112.999 986.425 110.903L1035.6 71.551Z"
          fill="url(#paint0_linear_1785_13418)"
          fillOpacity="0.1"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1785_13418"
          x1="1039.5"
          y1="68.428"
          x2="-2.0838e-06"
          y2="68.4284"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset="0.855" stopColor="#D9D9D9" />
          <stop offset="1" stopColor="#D9D9D9" />
        </linearGradient>
        <clipPath id="clip0_1785_13418">
          <rect width="143" height="1040" fill="white" transform="translate(1040) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  );
};

// 오른쪽 화살표 (페이지네이션 - 다음 페이지로 이동)
export const NextPageArrow = ({ className, onClick }: IconType) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M12 10L16 14L12 18"
        stroke="#2E2F33"
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 오른쪽 두겹 화살표 (페이지네이션 - 마지막 페이지로 이동)
export const LastPageArrow = ({ className, onClick }: IconType) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M15 10L19 14L15 18"
        stroke="#2E2F33"
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10L13 14L9 18"
        stroke="#2E2F33"
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 왼쪽 화살표 (페이지네이션 - 이전 페이지로 이동)
export const PrevPageArrow = ({ className, onClick }: IconType) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M16 18L12 14L16 10"
        stroke="#2E2F33"
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 왼쪽 두겹 화살표 (페이지네이션 - 첫 번째 페이지로 이동)
export const FirstPageArrow = ({ className, onClick }: IconType) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M13 18L9 14L13 10"
        stroke="#2E2F33"
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 18L15 14L19 10"
        stroke="#2E2F33"
        strokeOpacity="0.88"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SolutionsRightArrow = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.33398 10H16.6673M16.6673 10L11.6673 5M16.6673 10L11.6673 15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

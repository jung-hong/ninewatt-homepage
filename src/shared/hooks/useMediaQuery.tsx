import { useState, useLayoutEffect } from "react";

interface Props {
  size: "sm" | "md" | "lg" | "xl";
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

/**
 * 화면 사이즈(분기점) 확인
 ** sm: 640px
 ** md: 768px
 ** lg: 1024px
 ** xl: 1280px
 * */
const useMediaQuery = ({ size }: Props): boolean => {
  const [isLarge, setIsLarge] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= breakpoints[size]);
    handleResize(); // Initial Check
    window.addEventListener("resize", handleResize);
  }, [size]);

  return isLarge;
};

export default useMediaQuery;

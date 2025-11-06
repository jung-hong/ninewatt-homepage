// hooks/useIsMediumSize.ts
import { useEffect, useState } from "react";

export function useIsMediumSize() {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMedium(window.innerWidth >= 768); // Tailwind md breakpoint = 768px
    };

    checkScreenSize(); // 초기 실행
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isMedium;
}

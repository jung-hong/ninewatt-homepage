"use client";

import { useEffect } from "react";

import RollingBanner from "../_components/rolling-banner";
import { useHeaderContext } from "@/app/_providers/HeaderContext";

export default function Contractor() {
  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    const handleScroll = () => {
      const prevSection = document.getElementById("section1-intro");
      const prevSectionRect = prevSection?.getBoundingClientRect();

      if (!prevSection || !prevSectionRect) return;

      if (prevSectionRect.top <= 0 && prevSectionRect.bottom >= 0) {
        setHeaderStyle("bg-white/10 text-white");
      } else {
        setHeaderStyle("bg-black/10 text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="section2-contractor"
      className="w-full h-1/3 bg-[#18191B] flex items-end py-[84px] overflow-x-hidden"
    >
      <div>
        <RollingBanner />
      </div>
    </div>
  );
}

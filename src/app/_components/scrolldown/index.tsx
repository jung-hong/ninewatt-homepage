"use client";

import { ScrollDownIcon } from "@/shared/assets/icons/main-icons";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ScrollDownButton = ({
  nextSectionId,
  color,
}: {
  nextSectionId: string;
  color: string;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <button
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className="flex flex-col items-center justify-center gap-3 text-base font-medium leading-normal text-opacity-80 animate-bounce"
      style={{
        color,
      }}
      onClick={() => {
        const nextSection = document.getElementById(nextSectionId);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
    >
      ScrollDown
      <ScrollDownIcon color={color} />
    </button>
  );
};

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import { COMPANY_HISTORY_INFO } from "../_constant/history";

export default function SectionFive() {
  const [swipeIndex, setSwipeIndex] = useState(0); // 현재 Swiping index

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    let sectionAbsoluteTop = 0;
    const initializeSectionBounds = () => {
      const section = document.getElementById("section-five");
      const sectionRect = section?.getBoundingClientRect();

      if (section && sectionRect) {
        sectionAbsoluteTop = sectionRect.top + window.scrollY;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY >= sectionAbsoluteTop &&
        currentScrollY < sectionAbsoluteTop + window.innerHeight * 3
      ) {
        if (currentScrollY < sectionAbsoluteTop + window.innerHeight * 0.4) {
          return setSwipeIndex(0);
        } else if (
          currentScrollY >= sectionAbsoluteTop + window.innerHeight * 0.4 &&
          currentScrollY < sectionAbsoluteTop + window.innerHeight * 0.8
        ) {
          return setSwipeIndex(1);
        } else if (
          currentScrollY >= sectionAbsoluteTop + window.innerHeight * 0.8 &&
          currentScrollY < sectionAbsoluteTop + window.innerHeight * 1.2
        ) {
          return setSwipeIndex(2);
        } else if (
          currentScrollY >= sectionAbsoluteTop + window.innerHeight * 1.2 &&
          currentScrollY < sectionAbsoluteTop + window.innerHeight * 1.6
        ) {
          return setSwipeIndex(3);
        } else if (
          currentScrollY >= sectionAbsoluteTop + window.innerHeight * 1.6 &&
          currentScrollY < sectionAbsoluteTop + window.innerHeight * 2
        ) {
          return setSwipeIndex(4);
        } else if (
          currentScrollY >= sectionAbsoluteTop + window.innerHeight * 2 &&
          currentScrollY < sectionAbsoluteTop + window.innerHeight * 2.4
        ) {
          return setSwipeIndex(5);
        }
      } else {
        return setSwipeIndex(0);
      }
    };

    initializeSectionBounds();
    document.addEventListener("resize", initializeSectionBounds);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("resize", initializeSectionBounds);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="section-five" className="h-[300vh] sticky top-0 w-full">
      <div className={`sticky top-0 h-screen w-full flex justify-center pt-[140px] bg-white`}>
        <div className="w-full md:w-[1240px] h-fit flex gap-3 md:gap-[100px]">
          {/* title */}
          <h6 className="hidden md:block font-semibold text-[28px] leading-tight text-black">
            History
          </h6>

          {/* Content */}
          <div className="w-full flex gap-5 md:gap-[76px]">
            <div className="flex flex-col text-black tracking-tighter font-bold text-2xl leading-tight">
              {COMPANY_HISTORY_INFO.map((info, index) => {
                const isActive = index === swipeIndex;
                return (
                  <div key={info.year} className="w-[100px] md:w-[130px] h-[86px] flex flex-col">
                    <div className="w-full flex items-center justify-between">
                      {/* year */}
                      <span className={index === swipeIndex ? "text-black" : "text-gray-300"}>
                        {info.year}
                      </span>
                      <div
                        className={`${
                          isActive ? "outline outline-4 outline-black bg-white" : "bg-[#D9D9D9]"
                        } size-3 rounded-full z-20 relative`}
                      >
                        <div
                          className={`${isActive ? "top-4" : "top-3"} ${
                            index + 1 === COMPANY_HISTORY_INFO.length
                              ? "bg-white top-4"
                              : "bg-[#D9D9D9]"
                          }
                        absolute left-1/2 -translate-x-1/2 w-[2px] h-[86px]`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* content */}
            <div
              data-aos="fade-left"
              className="w-fit md:w-[469px] flex flex-col gap-10 text-black"
            >
              {COMPANY_HISTORY_INFO.filter((info, index) => index === swipeIndex)[0]?.contents.map(
                (content) => (
                  <div key={content.month} className="flex gap-5">
                    <span className="w-6 h-5 font-semibold text-lg leading-tight text-[#37383C] text-opacity-60">
                      {content.month}
                    </span>
                    <div className="flex flex-col gap-5">
                      {content.titles.map((title, i) => (
                        <div key={i} className="text-black font-medium text-base leading-tight">
                          {title}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="absolute right-[390px] bottom-0 w-[230px] h-[358px]">
          <Image alt="Nine" src="/images/about/Nine.png" width={230} height={358} priority />
        </div>
      </div>
    </div>
  );
}

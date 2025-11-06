"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

import { COMPANY_HISTORY_INFO } from "../_constant/history";

export default function SectionFive() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0];

  console.log({ currentLocale });

  const [selectedHistory, setSelectedHistory] = useState<{
    year: number;
    contents: {
      month: number;
      titles: string[];
      titlesEn: string[];
    }[];
  }>(COMPANY_HISTORY_INFO[0]);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  useEffect(() => {
    AOS.refresh(); // 버튼 클릭 시 애니메이션 다시 적용
  }, [selectedHistory]);

  return (
    <div
      id="section-five"
      className="w-screen py-14 md:py-0 min-h-[550px] md:min-h-[780px] md:mx-auto px-5 md:px-0"
    >
      <h4 className="text-gray900 text-display-03-mo md:text-display-03 md:w-[1280px] mx-auto">
        HISTORY
      </h4>
      <div className="md:mt-20 md:w-[1280px] mx-auto md:flex">
        <div className="flex flex-col md:flex-row">
          {/* Year Buttons */}
          <div className="mt-4 w-full overflow-x-scroll scrollbar-hide md:w-[320px] md:mt-[7px] flex flex-row justify-start md:flex-col text-heading-03-mo md:text-heading-03 md:gap-[18px]">
            {COMPANY_HISTORY_INFO.map((history, index) => (
              <button
                key={index}
                onClick={() => setSelectedHistory(history)}
                className={`px-3 pt-0.5 pb-[3px] md:p-0 md:mr-auto text-caption-02-600-mo md:text-heading-03  ${
                  selectedHistory.year === history.year
                    ? "text-primary-300 border-b-2 border-b-primary-300 md:border-none"
                    : "text-gray400"
                }`}
              >
                {history.year}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-0 w-full flex">
          {/* Year */}
          <span className="flex-shrink-0 w-[68px] md:w-[242px] text-black text-heading-05 md:text-display-03">
            {selectedHistory.year}
          </span>
          {/* Contents */}
          <div className="mt-0.5 md:mt-2 flex-shrink-0 w-[calc(100vw-108px)] md:w-fit flex flex-col gap-2">
            {selectedHistory.contents.map((content, index) => (
              <div key={index} className="w-full flex gap-[19px] md:gap-10 items-start">
                <span className="text-caption-02-600-mo md:text-caption-02-600 text-gray900 md:pt-[5.5px]">
                  {String(content.month).padStart(2, "0")}
                </span>
                <div className="space-y-0.5 break-words whitespace-normal">
                  {currentLocale === "ko"
                    ? content.titles?.map((title, index) => (
                        <p
                          className="text-caption-02-400-mo md:text-body-02 text-gray700 "
                          key={index}
                        >
                          {title}
                        </p>
                      ))
                    : content.titlesEn?.map((title, index) => (
                        <p
                          className="text-caption-02-400-mo md:text-body-02 text-gray700 "
                          key={index}
                        >
                          {title}
                        </p>
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

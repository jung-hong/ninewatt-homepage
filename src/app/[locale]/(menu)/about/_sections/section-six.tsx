"use client";

import { useState } from "react";
import { LOCATION_INFO } from "../_constant/location";
import ReactKakaoMap from "../_components/kakaoMap";

export default function SectionSix() {
  const [activeTabId, setActiveTabId] = useState("incheon");
  const activeInfo = LOCATION_INFO.filter((info) => info.id === activeTabId)[0];

  return (
    <div
      id="section-six"
      className="w-full py-14 md:py-[200px] bg-white pt-14 md:pt-[140px] px-5 md:px-0 z-10"
    >
      <div className="md:w-[1280px] flex flex-col justify-between mx-auto">
        <h6 className="text-display-02-mo md:text-display-02 text-black">LOCATION</h6>
        <div className="flex flex-col w-full md:w-full mt-4 md:mt-[60px]">
          {/* Header Tap */}
          <div className="w-full flex items-center">
            {LOCATION_INFO.map((info) => (
              <button
                key={info.id}
                onClick={() => setActiveTabId(info.id)}
                className={`w-1/2 h-[52px] md:h-20 flex items-center justify-center text-caption-02-600-mo md:text-heading-03 ${
                  activeTabId === info.id
                    ? "text-primary-300 font-semibold border-b-2 border-primary-300"
                    : "text-gray400 font-medium border-b-0 border-b-gray400"
                }`}
              >
                {info.title}
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="mt-[30px] md:mt-20 w-full h-[130px] md:h-[340px] rounded-[20px] bg-gray-300 overflow-hidden">
            <ReactKakaoMap coordinates={activeInfo.coordinates as [number, number]} />
          </div>

          {/* Description */}
          <div className="mt-5 md:mt-[60px] w-full flex flex-col text-black space-y-4 md:space-y-0">
            <div className="w-full flex flex-col md:flex-row md:border-b md:border-b-[#DDDDDD] space-y-4 md:space-y-0">
              <div className="w-full md:w-[873px] md:h-[69px] flex md:items-center justify-start md:border-b-[#DDDDDD] md:border-b-0">
                <span className="w-[84px] text-gray900 text-heading-05-mo md:text-heading-05 md:w-[100px] flex-shrink-0">
                  주소
                </span>
                <span className="text-body-03-mo md:text-body-03 text-gray700">
                  {activeInfo.address}
                </span>
              </div>
              <div className="w-full md:w-fit md:h-[69px] flex items-center justify-start">
                <span className="w-[84px] text-gray900 text-heading-05-mo md:text-heading-05 md:w-[100px] flex-shrink-0">
                  영업 시간
                </span>
                <span className="text-body-03-mo md:text-body-03 text-gray700">
                  {activeInfo.open}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-full md:w-[873px] md:h-[69px] flex items-center justify-start md:border-b-[#DDDDDD] md:border-b-0">
                <span className="w-[84px] text-gray900 text-heading-05-mo md:text-heading-05 md:w-[100px] flex-shrink-0">
                  대표 전화
                </span>
                <span className="text-body-03-mo md:text-body-03 text-gray700">
                  {activeInfo.phone}
                </span>
              </div>
              <div className="w-full md:w-fit md:h-[69px] flex items-center justify-start">
                <span className="w-[84px] text-gray900 text-heading-05-mo md:text-heading-05 md:w-[100px] flex-shrink-0">
                  이메일
                </span>
                <span className="text-body-03-mo md:text-body-03 text-gray700">
                  {activeInfo.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

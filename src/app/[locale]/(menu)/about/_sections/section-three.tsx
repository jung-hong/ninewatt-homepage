"use client";

import { useEffect } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { useHeaderContext } from "@/app/_providers/HeaderContext";

import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionThree() {
  const t = useTranslations("About");
  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeaderStyle("bg-black/10 text-white");
        }
      });
    });
  }, []);

  return (
    <div id="section-three" className="w-full bg-white">
      <div className="w-full md:w-[1280px] px-5 md:px-0 flex flex-col mx-auto gap-14 md:gap-[120px] py-14 md:pt-[180px] md:pb-[240px]">
        {/* Mission */}
        <div className="w-full md:h-[315px] flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="w-[93px] md:w-[112px] h-[33px] md:h-10 flex items-center justify-center text-common-white bg-primary-300 rounded-full text-heading-05-mo md:text-heading-05">
              MISSION
            </span>
            <h4 className="text-heading-01-mo md:text-heading-01 text-gray900">
              {t("SectionThree.Mission.Title")}
            </h4>
            <p className="hidden md:block mt-6 md:mt-10 text-gray700 text-body-02-mo md:text-body-02">
              {t("SectionThree.Mission.DescriptionLineOne")}
              <br />
              {t("SectionThree.Mission.DescriptionLineTwo")}
              <br />
              {t("SectionThree.Mission.DescriptionLineThree")}
            </p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="mt-4 md:mt-0 w-full md:w-[625px] h-[147px] md:h-full flex-shrink-0 relative rounded-[20px] overflow-hidden"
          >
            <Image
              src="/images/about/aboutMissionImg.png" // 이미지 경로 (public 폴더를 기준으로 설정)
              alt="About Mission Image"
              layout="fill"
              objectFit="cover" // 크기 비율 유지하며 부모 요소를 채움
              priority // 이미지 우선 로드
            />
          </div>
          <p className="block md:hidden mt-6 md:mt-10 text-gray700 text-body-02-mo md:text-body-02 break-words">
            {t("SectionThree.Mission.DescriptionLineOne")}{" "}
            {t("SectionThree.Mission.DescriptionLineTwo")}{" "}
            {t("SectionThree.Mission.DescriptionLineThree")}
          </p>
        </div>

        {/* Vision */}
        <div className="w-full md:h-[315px] flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="w-[93px] md:w-[112px] h-[33px] md:h-10 flex items-center justify-center text-common-white bg-primary-300 rounded-full text-heading-05-mo md:text-heading-05">
              VISION
            </span>
            <h4 className="text-heading-01-mo md:text-heading-01 text-gray900">
              {t("SectionThree.Vision.Title")}
            </h4>
            <p className="hidden md:block mt-10 text-gray700 text-body-02-mo md:text-body-02">
              {t("SectionThree.Vision.DescriptionLineOne")}
              <br className="hidden md:block" />
              {t("SectionThree.Vision.DescriptionLineTwo")}
              <br className="hidden md:block" />
              {t("SectionThree.Vision.DescriptionLineThree")}
            </p>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="mt-4 md:mt-0 w-full md:w-[625px] h-[147px] md:h-full flex-shrink-0 relative rounded-[20px] overflow-hidden"
          >
            <Image
              src="/images/about/aboutVisionImgNew.png" // 이미지 경로 (public 폴더를 기준으로 설정)
              alt="About Mission Image"
              layout="fill"
              objectFit="cover" // 크기 비율 유지하며 부모 요소를 채움
              priority // 이미지 우선 로드
            />
          </div>
          <p className="block md:hidden mt-6 text-gray700 text-body-02-mo md:text-body-02 break-words">
            {t("SectionThree.Vision.DescriptionLineOne")}{" "}
            {t("SectionThree.Vision.DescriptionLineTwo")}{" "}
            {t("SectionThree.Vision.DescriptionLineThree")}
          </p>
        </div>
      </div>
    </div>
  );
}

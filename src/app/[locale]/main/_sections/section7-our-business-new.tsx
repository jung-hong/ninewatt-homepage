"use client";

import { useState } from "react";
import Image from "next/image";
import { OUR_BUSINESS_CONFIG } from "../_constant/our-business";
import Tab from "@/app/_components/design-system/tab";
import ButtonLink from "@/app/_components/design-system/link";
import { paths } from "@/shared/routing";
import { ArrowRight } from "@/shared/assets/icons/main-icons";
import { useTranslations } from "next-intl";

export default function OurBusinessNew() {
  const t = useTranslations("Home");

  const [selectedBusiness, setSelectedBusiness] = useState(OUR_BUSINESS_CONFIG[0]);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  const handleTabClick = (config: typeof selectedBusiness) => {
    if (config.id === selectedBusiness.id) return;

    setFadeState("fade-out");

    setTimeout(() => {
      setSelectedBusiness(config);
      setFadeState("fade-in");
    }, 300); // fade-out 시간과 맞춰서 설정
  };

  return (
    <div
      id="section7-our-business"
      className="bg-white mt-14 md:pt-[200px] pb-14 md:pb-[240px] flex flex-col items-center justify-center"
    >
      <h4 className="text-gray900 text-display-02-mo md:text-display-02">OUR BUSINESS</h4>
      <p className="mt-4 md:mt-6 text-gray700 text-body-01-mo md:text-body-01 text-center">
        {t("SectionSeven.SubTitleLineOne")}
        <br />
        {t("SectionSeven.SubTitleLineTwo")}
      </p>

      {/* 버튼 */}
      <div className="w-screen md:w-full h-12 md:h-14 flex items-center md:justify-center gap-2 md:gap-3 mt-20 overflow-x-scroll scrollbar-hide">
        {OUR_BUSINESS_CONFIG.map((config) => (
          <Tab
            label={t(`SectionSeven.Business.${config.id}.Title`)}
            key={config.id}
            variant="default"
            className="flex-shrink-0 first:ml-5 last:mr-5 font-semibold"
            isActive={config.id === selectedBusiness.id}
            onClick={() => handleTabClick(config)}
          />
        ))}
      </div>

      {/* 콘텐츠 박스 */}
      <div className="w-full md:w-fit px-5 md:px-0">
        <div
          className={`
          mt-6 md:mt-10 p-5 md:p-12 flex flex-col-reverse md:flex-row md:items-center gap-5 md:gap-8 
          bg-[#F7F7F8] rounded-2xl
        `}
        >
          <div
            className={`md:w-[472px] md:h-[400px] flex flex-col gap-[84px] md:gap-0 md:justify-between transition-opacity duration-150
          ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}
          >
            <div>
              <h6 className="text-primary-400 text-heading-03-mo md:text-heading-03">
                {t(`SectionSeven.Business.${selectedBusiness.id}.Title`)}
              </h6>
              <p className="mt-2 md:mt-5 text-gray900 text-heading-02-mo md:text-heading-02 !whitespace-pre-line">
                {t(`SectionSeven.Business.${selectedBusiness.id}.Description`)}
              </p>
              <div className="flex items-center gap-2 mt-6">
                {t.raw(`SectionSeven.Business.${selectedBusiness.id}.Tags`).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-4 py-1 md:py-1.5 rounded-lg bg-white text-gray600 text-body-03-mo md:text-body-03"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ButtonLink
              label={t("SectionSeven.Link")}
              iconComponent={<ArrowRight size={20} />}
              variant="secondary"
              href={paths.solutions}
              className="mt-84 md:mt-0 w-fit"
            />
          </div>
          <div
            className={`w-full md:w-[680px] h-[160px] md:h-[400px] relative rounded-lg overflow-hidden border border-black border-opacity-[0.08] transition-opacity duration-100
          ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}
          >
            <Image fill src={selectedBusiness.image} alt={selectedBusiness.description} />
          </div>
        </div>
      </div>
    </div>
  );
}

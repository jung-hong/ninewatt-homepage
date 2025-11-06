"use client";

import { useEffect } from "react";

import { useTranslations } from "next-intl";

import AOS from "aos";
import "aos/dist/aos.css";
import { SdgEnergyIcon, SdgWeatherIcon } from "@/shared/assets/icons/aboutPage";
import { cn } from "@/shared/utils/tailwindUtils";
import { useIsMediumSize } from "@/service/hook/useIsMediumSize";

export default function SectionFour() {
  const t = useTranslations("About");

  useEffect(() => {
    AOS.init();
  }, []);

  const isMediumSize = useIsMediumSize();

  return (
    <div id="section-four" className="py-14 md:py-[240px] bg-white md:w-[1280px] mx-auto">
      <div className="text-black mx-auto px-5 md:px-0 text-left md:text-center">
        {/* Title */}
        <h2 className="text-gray900 text-display-02-mo md:text-display-02 ">SDGs</h2>
        {/* Description */}
        <p className="mt-4 md:mt-6 text-gray700 text-body-01-mo md:text-body-01">
          {t("SectionFour.Description.One")}
          <br />
          <span className="font-semibold">{t("SectionFour.Description.Two")}</span>{" "}
          {t("SectionFour.Description.Three")}
        </p>
      </div>
      <div className="mx-auto px-5 md:px-0 w-screen md:w-fit overflow-x-scroll scrollbar-hide flex gap-4 md:gap-[102px] mt-10 md:mt-20 snap-x">
        {[
          {
            id: 0,
            detailTarget: 7.3,
            icon: <SdgEnergyIcon width="100%" height={"auto"} />,
            title: t("SectionFour.CardOne.Title"),
            // description: "낭비되는 건물 에너지 절감 및 에너지 효율성 개선",
            description: (
              <>
                {/* 낭비되는 건물 에너지 절감 및 <br className="block md:hidden" /> 에너지 효율성 개선 */}
                {t("SectionFour.CardOne.Description")}
              </>
            ),
            iconSize: {
              base: "!w-[148px]",
              md: "w-[196px]",
            },
          },
          {
            id: 1,
            detailTarget: 13.2,
            icon: <SdgWeatherIcon width="100%" height={"auto"} />,
            title: t("SectionFour.CardTwo.Title"),
            description: (
              <>
                {/* 전략적인 아이디어와 아이템을 통해 <br className="block md:hidden" /> 온실가스
                배출량을 <br className="hidden md:block" /> 줄임으로써 기후변화와{" "}
                <br className="block md:hidden" /> 부정적인 영향 완화 */}
                {t("SectionFour.CardTwo.Description")}
              </>
            ),
            iconSize: {
              base: "!w-[111px]",
              md: "w-[148px]",
            },
          },
        ].map((config) => (
          <div
            key={config.id}
            className="mx-auto w-[300px] md:w-[479px] h-[400px] md:h-[539px] flex-shrink-0 md:flex-shrink flex flex-col justify-between bg-[#15233D] px-[27.5px] md:px-[49px] py-9 md:py-[45px] rounded-3xl snap-center"
          >
            <span className="text-common-white text-heading-03-mo md:text-heading-03 text-center">
              {t("SectionFour.CardOne.Header")} {config.detailTarget}
            </span>
            <div
              className={cn("mx-auto", isMediumSize ? config.iconSize.md : config.iconSize.base)}
            >
              {config.icon}
            </div>
            <div className="text-left">
              <h5 className="text-common-white text-heading-03-mo md:text-heading-03">
                {config.title}
              </h5>
              <p className="mt-2 md:mt-4 text-common-white text-body-03-mo md:text-body-03 break-keep">
                {config.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

export default function Business() {
  const t = useTranslations("Home");

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      offset: 100,
      once: false,
    });
  }, []);

  return (
    <div
      id="section5-business"
      className="w-full md:h-[1080px] bg-cover bg-center bg-no-repeat px-5 md:px-0 pt-[72px] md:pt-40 pb-14 md:pb-[120px] flex flex-col items-center gap-20 md:gap-0 justify-between"
      style={{
        backgroundImage: "url('/images/main/section_3_bg_2.png')", // public 폴더 기준
      }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="space-y-6 text-center text-common-white"
      >
        <h3 className="text-display-01-mo md:text-display-02 text-left md:text-center">
          FOR SMART CITY
        </h3>
        <p className="text-body-01-mo md:text-body-01 text-left md:text-center">
          {t("SectionFive.ParagraphLineOne")}
          <br className="hidden lg:block" />
          {t("SectionFive.ParagraphLineTwo")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[100px] mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="0"
          className="w-[400px] font-semibold tracking-normal leading-snug"
        >
          <span className="text-heading-04-mo md:text-heading-04 text-[#85D2E0] ">
            {t("SectionFive.LabelOne")}
          </span>
          <p className="text-display-02-mo md:text-display-02 text-common-white">
            <CountUp
              className="account-balance"
              end={70000000}
              duration={1.5}
              useEasing={true}
              separator=","
              enableScrollSpy
            />
            +
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
          className="w-[400px] font-semibold tracking-normal leading-snug"
        >
          <span className="text-heading-04-mo md:text-heading-04 text-[#85D2E0] ">
            {t("SectionFive.LabelTwo")}
          </span>
          <p className="text-display-02-mo md:text-display-02 text-common-white">
            <CountUp
              className="account-balance"
              end={1700000}
              duration={1.5}
              useEasing={true}
              separator=","
              enableScrollSpy
            />
            +
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          className="w-[280px] font-semibold tracking-normal leading-snug"
        >
          <span className="text-heading-04-mo md:text-heading-04 text-[#85D2E0]">
            {t("SectionFive.LabelThree")}
          </span>
          <p className="text-display-02-mo md:text-display-02 text-common-white">
            <CountUp
              className="account-balance"
              end={3000}
              duration={1.5}
              useEasing={true}
              separator=","
              enableScrollSpy
            />
            +
          </p>
        </div>
      </div>
    </div>
  );
}

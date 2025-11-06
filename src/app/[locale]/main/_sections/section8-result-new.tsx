"use client";

import { useEffect } from "react";
import { NINEWATT_RESULTS } from "@/app/[locale]/(menu)/career/_constants/results";

import { useTranslations } from "next-intl";

import AOS from "aos";
import "aos/dist/aos.css";

export default function ResultNew() {
  const t = useTranslations("Home");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      offset: 100,
      once: false,
    });
  }, []);

  return (
    <div
      id="section8-result"
      className="w-screen py-14 md:py-[240px] pl-5 md:px-0 flex flex-col items-center justify-center md:w-[1280px] mx-auto"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between">
        <h4
          className="text-gray900 text-display-02-mo md:text-display-02 text-center"
          data-aos="fade-up"
        >
          RESULT
        </h4>
        <p
          className="w-full md:w-[628px] text-gray700 text-body-01-mo md:text-body-01 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {t("SectionEight.ResultLineOne")}
          <br />
          {t("SectionEight.ResultLineTwo")}
          <br className="block md:hidden" />
          {t("SectionEight.ResultLineThree")}
        </p>
      </div>

      {/* Card Section */}
      <div className="mt-10 md:mt-20 w-full overflow-x-auto overflow-hidden flex items-center gap-6 scrollbar-hide snap-x">
        {NINEWATT_RESULTS.map((result, index) => (
          <div
            key={index}
            className="flex-shrink-0 md:flex-shrink w-[300px] md:w-full h-[400px] md:h-[560px] relative rounded-3xl overflow-hidden p-7 md:p-12 bg-cover bg-center snap-center"
            style={{
              backgroundImage: `
                linear-gradient(180deg, rgba(24, 25, 27, 0.8) 0%, rgba(24, 25, 27, 0) 70%),
                url(${result.image})
              `,
              backgroundColor: "#18191B",
            }}
            data-aos="zoom-in"
            data-aos-delay={200 + index * 100}
          >
            <div className="absolute left-0 top-7 md:top-12 space-y-1 md:space-y-2.5 px-7 md:px-12">
              <span className="text-primary-200 text-heading-04-mo md:text-heading-04">
                {`0${index + 1}`}
              </span>
              <p className="text-white text-heading-02-mo md:text-heading-02 whitespace-pre-line">
                {t(result.title)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

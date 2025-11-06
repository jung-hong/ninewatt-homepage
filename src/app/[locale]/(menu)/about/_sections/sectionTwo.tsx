"use client";

import { useEffect } from "react";
import { useHeaderContext } from "@/app/_providers/HeaderContext";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslations } from "next-intl";

export default function SectionTwo() {
  const t = useTranslations("About");

  useEffect(() => {
    setHeaderStyle("bg-white/10 text-white");
    AOS.init();
  }, []);

  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeaderStyle("bg-black/10 text-white");
          else {
            setHeaderStyle("bg-black/10 text-white");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("section-two");
    if (section) {
      observer.observe(section);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="section-two" className="w-full px-5 md:px-0 pt-40 pb-[0px] bg-white">
      {/* Title */}
      <h2
        data-aos="zoom-in-down"
        className="text-display-02-mo md:text-display-02 text-black  md:max-w-[1280px] mx-auto"
      >
        {t("SectionTwo.TitleLineOne")}
        <br />
        {t("SectionTwo.TitleLineTwo")}
      </h2>
      {/* Description */}
      <p
        data-aos="zoom-in-down"
        className="mt-[30px] text-body-01-mo md:text-body-01 text-gray700 md:max-w-[1280px] mx-auto"
      >
        {t("SectionTwo.DescriptionLineOne")} <br />
        {t("SectionTwo.DescriptionLineTwo")}
      </p>
    </div>
  );
}

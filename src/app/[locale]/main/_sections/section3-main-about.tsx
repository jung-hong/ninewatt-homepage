"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/shared/assets/icons/main-icons";

import { useTranslations } from "next-intl";

import ButtonLink from "@/app/_components/design-system/link";
import { paths } from "@/shared/routing";

import AOS from "aos";
import "aos/dist/aos.css";

export default function MainAbout() {
  const t = useTranslations("Home");

  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [backgroundSizes, setBackgroundSizes] = useState<number[]>([0, 0, 0]);

  const scrollEvent = () => {
    if (!textRef.current) return;

    const { top, height } = textRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = Math.max(0, Math.min(1, (windowHeight - top) / height / 15));

    const updatedSizes = [
      Math.max(0, Math.min(100, progress * 300)),
      Math.max(0, Math.min(100, (progress - 0.3) * 300)),
      Math.max(0, Math.min(100, (progress - 0.6) * 300)),
    ];

    setBackgroundSizes(updatedSizes);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-out-cubic",
      offset: 100,
      once: false,
    });
  }, []);

  return (
    <div
      id="section3-main-about"
      ref={sectionRef}
      className="w-full h-fit pb-14 md:py-[280px] bg-[#18191B] z-[9] px-5 md:px-0 flex flex-col gap-12 md:gap-0 lg:flex-row lg:justify-center"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="md:w-[672px] h-fit relative flex flex-col justify-center text-display-03-mo md:text-display-03 transition-all z-50"
      >
        <div
          ref={textRef}
          className="text-[#85D2E0] text-opacity-50 bg-clip-text bg-no-repeat w-fit"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)",
            backgroundSize: `${backgroundSizes[0] * 2}% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            opacity: backgroundSizes[0] > 0 ? 1 : 0.5,
          }}
        >
          {t("SectionThree.HeadingOne")}
        </div>

        <div
          className="text-[#85D2E0] text-opacity-50 bg-clip-text bg-no-repeat w-fit"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)",
            backgroundSize: `${backgroundSizes[1] * 3}% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            opacity: backgroundSizes[1] > 0 ? 1 : 0.5,
          }}
        >
          {t("SectionThree.HeadingTwo")}
        </div>
        <div
          className="text-[#85D2E0] text-opacity-50 bg-clip-text bg-no-repeat w-fit"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)",
            backgroundSize: `${backgroundSizes[2] * 3}% 100%`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            opacity: backgroundSizes[2] > 0 ? 1 : 0.5,
          }}
        >
          {t("SectionThree.HeadingThree")}
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="500" className="space-y-[54.5px]">
        <p className="text-body-01-mo md:text-body-01 text-[#E2E2E4] whitespace-pre-line">
          {t("SectionThree.Paragraph")}
        </p>

        <ButtonLink
          href={paths.about}
          label={t("SectionThree.Link")}
          iconComponent={<ArrowRight color="white" />}
          variant="tertiary"
          color="black"
        />
      </div>
    </div>
  );
}

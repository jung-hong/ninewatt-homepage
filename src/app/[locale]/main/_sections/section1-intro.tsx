"use client";

import { useEffect } from "react";

import { useTranslations } from "next-intl";

import AOS from "aos";
import "aos/dist/aos.css";

import { paths } from "@/shared/routing";
import { ArrowRight } from "@/shared/assets/icons/main-icons";
import ButtonLink from "@/app/_components/design-system/link";
import { ScrollDownButton } from "@/app/_components/scrolldown";

export default function Intro() {
  const t = useTranslations("Home");

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      offset: 100,
      once: false,
    });
  }, []);

  return (
    <div
      id="section1-intro"
      className="w-full h-screen flex items-center text-white bg-black z-[11]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>
      <div data-aos="fade-up" data-aos-duration="1000" className="absolute left-10 md:left-32">
        <p
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-display-01-mo lg:text-display-01"
          style={{ textShadow: "0 0 20px rgba(0, 0, 0, 0.3)" }}
        >
          WHAT IS YOUR
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-display-01-mo lg:text-display-01 mb-10"
          style={{ textShadow: "0 0 20px rgba(0, 0, 0, 0.3)" }}
        >
          ENERGY PROBLEM?
        </p>
        <div data-aos="fade-up" data-aos-delay="1000">
          <ButtonLink
            href={paths.contact}
            label={t("SectionOne.Link")}
            iconComponent={<ArrowRight color="white" />}
            variant="primary"
          />
        </div>
      </div>
      <div className="absolute md:hidden left-1/2 -translate-x-1/2 bottom-3">
        <ScrollDownButton color={"white"} nextSectionId="section2-contractor" />
      </div>
    </div>
  );
}

import Image from "next/image";
import ButtonLink from "@/app/_components/design-system/link";
import { paths } from "@/shared/routing";
import { useTranslations } from "next-intl";

export default function ContactNew() {
  const t = useTranslations("Home");

  return (
    <>
      {/* 채용 */}
      <div className="flex items-center justify-center w-full bg-primary-50">
        <div className="w-full flex flex-col md:block md:w-[1280px] pt-12 pb-6 md:py-20 px-5 md:px-0 md:mx-auto relative overflow-hidden">
          <h5 className="text-heading-01-mo md:text-heading-01 text-gray800">
            {t("SectionTen.TopLineOne")}
            <br className="block md:hidden" /> {t("SectionTen.TopLineTwo")}
          </h5>
          <ButtonLink
            href={paths.career}
            label={t("SectionTen.JoinOurTeam")}
            variant="tertiary"
            size="medium"
            className="mt-5 w-fit"
          />
          <div className="relative ml-auto md:absolute md:-top-1 md:right-40 w-[225px] md:w-[338px] h-[240px] md:h-[360px]">
            <Image
              width={338}
              height={360}
              alt="career section image"
              src="/images/career/career_Icon_3.png"
            />
          </div>
        </div>
      </div>
      {/* 문의 */}
      <div className="relative w-full py-[108px] md:py-0 md:h-[470px] flex flex-col items-center justify-center">
        <Image
          fill
          src="/images/career/Banner_2_bg.png"
          alt="career banner background image"
          className="z-0 md:object-cover"
        />
        <div className="relative z-10 px-5 md:px-0 text-display-03-mo md:text-display-03 text-common-white text-center">
          {t("SectionTen.BottomLineOne")}
          <br />
          {t("SectionTen.BottomLineTwo")} <br className="block md:hidden" />{" "}
          {t("SectionTen.BottomLineThree")}
        </div>
        <ButtonLink
          href={paths.contact}
          label={t("SectionTen.ContactUs")}
          className="mt-10 z-10"
          variant="primary"
        />
      </div>
    </>
  );
}

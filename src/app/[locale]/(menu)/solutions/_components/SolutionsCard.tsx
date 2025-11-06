import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import Button from "@/app/_components/design-system/button";

import { SolutionType } from "../_constants/solutions-list";
import { SolutionsRightArrow } from "@/shared/assets/icons/arrows";
import { paths } from "@/shared/routing";
import { LinkRouting, SaveReportIcon } from "@/shared/assets/icons/solutions-icons";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

interface Props {
  name: string;
  solutionsList: SolutionType[];
}

export default function SolutionsCard({ name, solutionsList }: Props) {
  const isLgSize = useMediaQuery({ size: "lg" });
  const t = useTranslations("Solutions");
  const locale = useLocale();

  return (
    <div className="w-full h-fit">
      {solutionsList?.map((card, idx: number) => {
        if (card.name === name)
          return (
            <div
              key={`solutions-card-${name}`}
              className=" bg-gray50 rounded-2xl lg:rounded-3xl p-5 lg:p-12 w-full lg:h-[610px] flex flex-col grow justify-between"
            >
              <div className="flex gap-9 w-full flex-col-reverse lg:flex-row">
                <div className={"lg:w-1/2"}>
                  <h3 className="font-semibold text-heading-02-mo lg:text-heading-02 text-primary-400 mb-2 lg:mb-5">
                    {card.name}
                  </h3>
                  <h2 className="text-gray900 font-semibold text-heading-02-mo lg:text-heading-02 mb-2 lg:mb-5 lg:whitespace-pre-line">
                    {card.title}
                  </h2>
                  <p className="text-gray800 text-body-03-mo lg:text-body-03 grow mb-5 lg:mb-6">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2">
                    {card.tag?.map((item, tagIdx: number) => (
                      <div
                        key={`solution-${idx}-tag-${tagIdx}`}
                        className="bg-common-white text-gray600 px-2 lg:px-4 py-1 lg:py-1.5 text-body-03-mo lg:text-body-03 rounded-lg"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative lg:mt-16 lg:w-1/2 h-44 lg:h-[338px] rounded-lg lg:rounded-2xl overflow-hidden">
                  <Image
                    src={card.img}
                    alt="ninewatt solution image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-wrap lg:items-end flex-row gap-3 mt-8 lg:mt-5">
                {card.appDownloadUrl ? (
                  <Link href={card.appDownloadUrl} target="_blank">
                    <Button
                      variant="secondary"
                      label={t("Buttons.Website")}
                      iconComponent={<LinkRouting />}
                      size={isLgSize ? "large" : "medium"}
                      className="gap-[10px] text-nowrap w-fit leading-normal shrink-0"
                    />
                  </Link>
                ) : (
                  <Link href={paths.contact} className="">
                    <Button
                      variant="secondary"
                      label={
                        locale === "ko"
                          ? card.name + " " + t("Buttons.Inquiry")
                          : t("Buttons.Inquiry") + " " + card.name
                      }
                      iconComponent={<SolutionsRightArrow />}
                      size={isLgSize ? "large" : "medium"}
                      className="gap-[10px] text-nowrap leading-normal shrink-0"
                    />
                  </Link>
                )}

                <a
                  className="w-fit shrink-0"
                  href={card.reportUrl}
                  download
                  key={`report-${card.title}`}
                >
                  <Button
                    variant="tertiary"
                    color="white"
                    label={t("Buttons.DownloadReport")}
                    size={isLgSize ? "large" : "medium"}
                    iconComponent={
                      <SaveReportIcon color="#18191b" className="size-4 lg:size-auto" />
                    }
                  />
                </a>
              </div>
            </div>
          );
      })}
    </div>
  );
}

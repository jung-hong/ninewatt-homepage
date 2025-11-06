import { PerformanceDataType } from "@/types/api-types";
import {
  NINEWATT_PERFORMANCE_CATEGORIES,
  NINEWATT_PERFORMANCE_CATEGORIES_ENG,
} from "../_constants/performance-categoris";
import { useLocale, useTranslations } from "next-intl";

export default function PerformanceCard({
  cardInfo: { agency, category, period, title, type, operatingOrganization },
  onClick,
}: {
  cardInfo: PerformanceDataType;
  onClick: () => void;
}) {
  const t = useTranslations("Portfolio.PerformanceCard");
  const locale = useLocale();

  const categories =
    locale === "en" ? NINEWATT_PERFORMANCE_CATEGORIES_ENG : NINEWATT_PERFORMANCE_CATEGORIES;

  const categoryLabel = categories?.find((c) => c.type === category);

  return (
    <div className="bg-gray-50 rounded-xl p-5 md:p-7 text-black cursor-pointer" onClick={onClick}>
      <span className="text-caption-01-mo md:text-caption-01 text-primary-400">
        {categoryLabel?.label}
      </span>
      <h6
        className="md:h-[81px] mt-1 md:mt-2 text-heading-05-mo md:text-heading-05 text-gray900 text-ellipsis overflow-hidden"
        style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
      >
        {title}
      </h6>

      <div className="mt-2 md:mt-3 md:space-y-0.5">
        <span className="md:mb-0.5 text-caption-02-600-mo md:text-caption-02-600 text-gray600">
          {type}
        </span>
        <p className="text-caption-02-400-mo md:text-caption-02-400 text-gray600">{period}</p>
        <p className="text-caption-02-400-mo md:text-caption-02-400 text-gray600">
          {t("Agency")}: {agency}
        </p>
        <p className="text-caption-02-400-mo md:text-caption-02-400 text-gray600">
          {t("OperatingOrg")}: {operatingOrganization}
        </p>
      </div>
    </div>
  );
}

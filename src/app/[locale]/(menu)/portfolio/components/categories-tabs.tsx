import { Dispatch, SetStateAction } from "react";
import {
  NINEWATT_PERFORMANCE_CATEGORIES,
  NINEWATT_PERFORMANCE_CATEGORIES_ENG,
  PerformanceCategoryType,
} from "../_constants/performance-categoris";
import { useLocale } from "next-intl";

export default function CategoriesTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: PerformanceCategoryType;
  setActiveTab: Dispatch<SetStateAction<PerformanceCategoryType>>;
}) {
  const locale = useLocale();

  const categories =
    locale === "en" ? NINEWATT_PERFORMANCE_CATEGORIES_ENG : NINEWATT_PERFORMANCE_CATEGORIES;

  const handleClickTab = (tab: PerformanceCategoryType) => setActiveTab(tab);

  return (
    <div className="flex gap-5 md:gap-8 max-w-[1280px] overflow-x-scroll scrollbar-hide">
      {categories?.map(({ id, label, type }) => (
        <button
          key={id}
          onClick={() => handleClickTab(type)}
          className={`text-heading-04-mo md:text-heading-04 ${
            activeTab === type ? "text-gray900 border-b-2 border-b-gray900" : "text-gray500"
          } py-2.5 flex-shrink-0 hover:text-gray900 transition-all ease-in-out duration-150 box-border`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

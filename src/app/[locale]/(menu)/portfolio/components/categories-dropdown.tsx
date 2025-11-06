import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  NINEWATT_PERFORMANCE_CATEGORIES,
  NINEWATT_PERFORMANCE_CATEGORIES_ENG,
  PerformanceCategoryType,
} from "../_constants/performance-categoris";
import { useLocale } from "next-intl";
import { CheckIcon, DropdownCloseIcon, DropdownOpenIcon } from "@/shared/assets/icons/common";

export default function CategoriesDropdown({
  activeTab,
  setActiveTab,
}: {
  activeTab: PerformanceCategoryType;
  setActiveTab: Dispatch<SetStateAction<PerformanceCategoryType>>;
}) {
  const locale = useLocale();
  const selectRef = useRef<HTMLDivElement>(null);

  const categories =
    locale === "en" ? NINEWATT_PERFORMANCE_CATEGORIES_ENG : NINEWATT_PERFORMANCE_CATEGORIES;

  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = () => setIsOpen(true);

  const handleClickTab = (tab: PerformanceCategoryType) => setActiveTab(tab);

  useEffect(() => {
    setIsOpen(false);
  }, [activeTab]);

  useEffect(() => {
    // 드롭다운 옵션 박스 바깥쪽을 클릭시 옵션 닫음
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div className="flex gap-3 md:items-center flex-col md:flex-row">
      <p className="text-heading-02-mo text-gray800">Category</p>
      <div
        className="border border-gray700 rounded-lg px-4 md:w-[335px] h-14 flex items-center relative "
        onClick={openDropdown}
      >
        <p className="text-body-02-mo md:text-body-03 w-full text-gray800">
          {categories?.find((c) => c.type === activeTab)?.label}
        </p>
        {isOpen ? <DropdownOpenIcon /> : <DropdownCloseIcon />}
        {isOpen && (
          <div
            className="absolute left-0 top-16 object-top origin-top w-full border border-gray200 p-2 bg-white rounded-lg"
            ref={selectRef}
          >
            {categories?.map(({ id, label, type }) => (
              <div
                key={id}
                onClick={() => handleClickTab(type)}
                className={`flex items-center gap-2 text-lg md:text-[19px] ${
                  activeTab === type ? "text-primary-500" : "text-[#1E2124]"
                } px-2 py-2.5 hover:bg-primary-50 transition-all ease-in-out duration-150 box-border rounded-md`}
              >
                {activeTab === type && <CheckIcon />}
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

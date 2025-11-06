import { useEffect, useRef, useState } from "react";
import {
  NINEWATT_PERFORMANCE_CATEGORIES,
  NINEWATT_PERFORMANCE_CATEGORIES_ENG,
  PerformanceCategoryType,
} from "../_constants/performance-categoris";
import PerformanceCard from "../components/performace-card";
import Pagination from "@/app/_components/pagination";
import { PerformanceDataType, PerformanceResponseType } from "@/types/api-types";
import { useLocale } from "next-intl";
import Modal from "@/app/_components/modal";
import CategoriesDropdown from "../components/categories-dropdown";
import CategoriesTabs from "../components/categories-tabs";

export default function NinewattPerformance() {
  const locale = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<PerformanceCategoryType>("all");

  const [flag, setFlag] = useState(false); // 첫 렌더링 여부
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState<number>(); // 총 페이지 수

  const [ninewattPerformanceList, setNinewattPerformanceList] = useState<PerformanceDataType[]>([]);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<PerformanceDataType>();
  const openModal = (item: PerformanceDataType) => {
    setIsModalOpen(true);
    setModalItem(item);
  };
  const closeModal = () => setIsModalOpen(false);

  const categories =
    locale === "en" ? NINEWATT_PERFORMANCE_CATEGORIES_ENG : NINEWATT_PERFORMANCE_CATEGORIES;

  const getNinewattPerformanceList = async (page: number, type: string) => {
    try {
      const res: PerformanceResponseType = await fetch(
        `/api/performance?page=${page}&limit=6&category=${type}&locale=${locale}`,
        {
          method: "GET",
          cache: "no-store",
        }
      ).then((data) => data.json());
      if (res) {
        setTotalPages(res.totalPages);
        setNinewattPerformanceList(res.data);
        if (!flag) setFlag(true);
      }
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    if (flag) {
      // containerRef.current?.scrollIntoView();
    }
    getNinewattPerformanceList(page, activeTab);
  }, [page, activeTab]);

  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  return (
    <div ref={containerRef} className="pb-14 md:pb-[160px]">
      {/* Tabs */}
      {locale === "en" ? (
        <CategoriesDropdown activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <CategoriesTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {/* Cards */}
      <div className="mt-10 mb-16 flex flex-col gap-3  md:grid md:grid-rows-2 md:grid-cols-3 md:gap-6">
        {ninewattPerformanceList?.map((cardInfo, index) => (
          <PerformanceCard key={index} cardInfo={cardInfo} onClick={() => openModal(cardInfo)} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} totalPg={totalPages} />

      {isModalOpen && (
        <Modal onClose={closeModal} isCardModal>
          <div className="px-4 py-2 flex flex-col gap-5">
            <div>
              <p className="text-primary-400 text-caption-01 font-semibold mb-1">
                {categories?.find((c) => c.type === modalItem?.category)?.label}
              </p>
              <h1 className="text-heading-05 text-gray900">{modalItem?.title}</h1>
            </div>

            <div className="text-gray600 text-caption-02-400 flex flex-col gap-1">
              <p className="text-caption-02-600">{modalItem?.type}</p>
              <p>{modalItem?.period}</p>
              <p>Supervising Ministry : {modalItem?.agency}</p>
              <p>Operating Agency : {modalItem?.operatingOrganization}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

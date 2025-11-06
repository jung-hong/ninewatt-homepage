"use client";

import { useEffect, useRef, useState } from "react";
import {
  CertificationDataType,
  CertificationResponseDataType,
  PatentDataType,
  PatentResponseType,
} from "@/types/api-types";
import PatentCard from "../components/patent-card";
import Pagination from "@/app/_components/pagination";
import { useLocale, useTranslations } from "next-intl";
import Modal from "@/app/_components/modal";

export default function NinewattPatent() {
  const t = useTranslations("Portfolio");
  const locale = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);

  const [flag, setFlag] = useState(false); // 첫 렌더링 여부
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState<number>(); // 총 페이지 수
  const [selectedPortfoiloType, setSelectedPortfolioType] = useState<"patent" | "certification">(
    "patent"
  );

  const [ninewattPatentList, setNinewattPatentList] = useState<PatentDataType[]>([]);
  const [ninewattCertificateList, setNinewattCertificateList] = useState<CertificationDataType[]>(
    []
  );

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<PatentDataType | CertificationDataType>();
  const openModal = (item: PatentDataType | CertificationDataType) => {
    setIsModalOpen(true);
    if (selectedPortfoiloType === "patent") {
      setModalItem(item as PatentDataType);
    }
    if (selectedPortfoiloType === "certification") {
      setModalItem(item as CertificationDataType);
    }
  };
  const closeModal = () => setIsModalOpen(false);

  const getNinewattPatentList = async (page: number) => {
    try {
      const res: PatentResponseType = await fetch(
        `/api/patent?page=${page}&limit=5&locale=${locale}`,
        {
          method: "GET",
          cache: "no-store",
        }
      ).then((data) => data.json());
      if (res) {
        setTotalPages(res.totalPages);
        setNinewattPatentList(res.data);
        if (!flag) setFlag(true);
      }
    } catch (err) {
      console.error("error: ", err);
    }
  };

  const getNinewattCertificateList = async (page: number) => {
    try {
      const res: CertificationResponseDataType = await fetch(
        `/api/certification?page=${page}&limit=5&locale=${locale}`,
        {
          method: "GET",
          cache: "no-store",
        }
      ).then((data) => data.json());
      if (res) {
        setTotalPages(res.totalPages);
        setNinewattCertificateList(res.data);
        if (!flag) setFlag(true);
      }
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    if (flag) {
      containerRef.current?.scrollIntoView();
    }
    getNinewattPatentList(page);
    getNinewattCertificateList(page);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [selectedPortfoiloType]);

  useEffect(() => {
    if (flag) containerRef.current?.scrollIntoView();

    if (selectedPortfoiloType === "patent") {
      getNinewattPatentList(page);
    } else {
      getNinewattCertificateList(page);
    }
  }, [page, selectedPortfoiloType]);
  return (
    <div ref={containerRef} className="mx-auto space-y-8 md:space-y-16 px-5 responsiveWidth">
      <div className="flex items-center gap-[68px]">
        <button
          onClick={() => setSelectedPortfolioType("patent")}
          className={`text-heading-01-mo md:text-heading-01 ${
            selectedPortfoiloType === "patent" ? "text-gray900" : "text-gray500"
          }`}
        >
          {t("Patent")}
        </button>
        <button
          onClick={() => setSelectedPortfolioType("certification")}
          className={`text-heading-01-mo md:text-heading-01 ${
            selectedPortfoiloType === "certification" ? "text-gray900" : "text-gray500"
          }`}
        >
          {t("Certifications")}
        </button>
      </div>
      <div className="space-y-2">
        {selectedPortfoiloType === "patent"
          ? ninewattPatentList.map((patentInfo) => (
              <PatentCard
                key={patentInfo.id}
                id={patentInfo.id}
                title={patentInfo.title}
                applicant={patentInfo.applicant}
                applicationDate={patentInfo.applicationDate}
                applicationNumber={"출원번호 " + patentInfo.applicationNumber}
                country={patentInfo.country}
                onClick={() => openModal(patentInfo)}
              />
            ))
          : ninewattCertificateList.map((certificateInfo) => (
              <PatentCard
                key={certificateInfo.id}
                id={certificateInfo.id}
                title={certificateInfo.certificateName}
                applicant={certificateInfo.issuingAuthority}
                applicationDate={certificateInfo.issueDate}
                applicationNumber={"등록번호 " + certificateInfo.registrationNumber}
                country={certificateInfo.standardType}
                onClick={() => openModal(certificateInfo)}
              />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPg={totalPages} />

      {isModalOpen && modalItem && selectedPortfoiloType === "patent" && (
        <Modal onClose={closeModal} isCardModal>
          <div className="px-4 py-2 flex flex-col gap-5">
            <h1 className="text-heading-05 text-gray900">{(modalItem as PatentDataType)?.title}</h1>
            <div className="text-gray600 text-caption-02-400 flex flex-col gap-1">
              <p className="text-caption-02-600">{(modalItem as PatentDataType)?.country}</p>
              <p>{(modalItem as PatentDataType)?.applicationDate}</p>
              <p>{(modalItem as PatentDataType)?.applicant}</p>
              <p>Application Number {(modalItem as PatentDataType)?.applicationNumber}</p>
            </div>
          </div>
        </Modal>
      )}
      {isModalOpen && modalItem && selectedPortfoiloType === "certification" && (
        <Modal onClose={closeModal} isCardModal>
          <div className="px-4 py-2 flex flex-col gap-5">
            <h1 className="text-heading-05 text-gray900">
              {(modalItem as CertificationDataType)?.certificateName}
            </h1>
            <div className="text-gray600 text-caption-02-400 flex flex-col gap-1">
              <p className="text-caption-02-600">
                {(modalItem as CertificationDataType)?.standardType}
              </p>
              <p>{(modalItem as CertificationDataType)?.issueDate}</p>
              <p>{(modalItem as CertificationDataType)?.issuingAuthority}</p>
              <p>Register Number: {(modalItem as CertificationDataType)?.registrationNumber}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

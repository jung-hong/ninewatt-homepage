import { PerformanceCategoryType } from "@/app/[locale]/(menu)/portfolio/_constants/performance-categoris";

export interface NewsDataType {
  id: number;
  title: string;
  date: string;
  origin: string;
  link: string;
  image: string;
  type: string;
}

export interface NewsResponseType {
  data: NewsDataType[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export interface PerformanceDataType {
  id: number;
  category: PerformanceCategoryType;
  title: string;
  type: string;
  period: string;
  agency: string;
  operatingOrganization: string;
}

export interface PerformanceResponseType {
  data: PerformanceDataType[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export interface PatentDataType {
  id: number;
  title: string;
  country: string;
  applicationDate: string;
  applicationNumber: string;
  applicant: string;
}

export interface PatentResponseType {
  data: PatentDataType[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

export interface CertificationDataType {
  id: number;
  certificateName: string; // 인증서 및 선정서
  issuingAuthority: string; // 발급기관
  issueDate: string; // 발급일
  validPeriod: string; // 인증기간
  registrationNumber: string; // 등록번호
  standardType: string; // 국내,국제표준
}

export interface CertificationResponseDataType {
  data: CertificationDataType[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

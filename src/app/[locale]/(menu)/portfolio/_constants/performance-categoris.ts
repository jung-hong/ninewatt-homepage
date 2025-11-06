// 1. 타입 정의 (label/type 유니언 제한)
export type PerformanceCategoryType =
  | "all"
  | "urban_carbon"
  | "efficiency_diagnosis"
  | "zero_energy"
  | "energy_business"
  | "smart_city"
  | "global"
  | "etc";

export type PerformanceCategoryLabel =
  | "ALL"
  | "도시/탄소 에너지관리"
  | "에너지 효율 진단"
  | "제로에너지 건축"
  | "에너지 신사업"
  | "스마트시티 솔루션"
  | "글로벌 진출"
  | "기타";

export type PerformanceCategoryLabelEnglish =
  | "ALL"
  | "Urban/carbon energy management"
  | "Energy efficiency diagnosis"
  | "Zero-energy buildings"
  | "New energy business"
  | "Smart city solutions"
  | "Global expansion"
  | "Others";

export interface PerformanceCategory {
  id: number;
  label: PerformanceCategoryLabel | PerformanceCategoryLabelEnglish;
  type: PerformanceCategoryType;
}

export const NINEWATT_PERFORMANCE_CATEGORIES: PerformanceCategory[] = [
  { id: 0, label: "ALL", type: "all" },
  { id: 1, label: "도시/탄소 에너지관리", type: "urban_carbon" },
  { id: 2, label: "에너지 효율 진단", type: "efficiency_diagnosis" },
  { id: 3, label: "제로에너지 건축", type: "zero_energy" },
  { id: 4, label: "에너지 신사업", type: "energy_business" },
  { id: 5, label: "스마트시티 솔루션", type: "smart_city" },
  { id: 6, label: "글로벌 진출", type: "global" },
  { id: 7, label: "기타", type: "etc" },
];

export const NINEWATT_PERFORMANCE_CATEGORIES_ENG: PerformanceCategory[] = [
  { id: 0, label: "ALL", type: "all" },
  { id: 1, label: "Urban/carbon energy management", type: "urban_carbon" },
  { id: 2, label: "Energy efficiency diagnosis", type: "efficiency_diagnosis" },
  { id: 3, label: "Zero-energy buildings", type: "zero_energy" },
  { id: 4, label: "New energy business", type: "energy_business" },
  { id: 5, label: "Smart city solutions", type: "smart_city" },
  { id: 6, label: "Global expansion", type: "global" },
  { id: 7, label: "Others", type: "etc" },
];

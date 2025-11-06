"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

import Button from "@/app/_components/button";
import SolutionsCard from "./SolutionsCard";
import {
  SOLUTIONS_CARD_LIST,
  SOLUTIONS_CARD_LIST_EN,
  SolutionType,
} from "../_constants/solutions-list";

import { cn } from "@/shared/utils/tailwindUtils";
import SolutionCaseCard from "./SolutionsCaseCard";

export default function SolutionsGallery() {
  const locale = useLocale();
  const topRef = useRef<HTMLDivElement>(null);

  const [solution, setSolution] = useState(0);
  const [list, setList] = useState<SolutionType[]>(SOLUTIONS_CARD_LIST);

  useEffect(() => {
    if (locale === "ko") {
      console.log("ko list");
      setList(SOLUTIONS_CARD_LIST);
    }
    if (locale === "en") setList(SOLUTIONS_CARD_LIST_EN);
    setSolution(0);
  }, [locale]);

  return (
    <div id="solution-slider" className="relative mb-20" ref={topRef}>
      <div className="w-full h-full flex flex-col">
        <div className="pt-14 xl:pt-20 flex items-center xl:justify-center gap-2 xl:gap-3 mb-6 xl:mb-10 overflow-x-auto no-scroll">
          {list?.map((item, idx: number) => (
            <Button
              key={`solution-button-${locale}-${idx}`}
              variant="tab"
              onClick={() => setSolution(idx)}
              className={cn(
                "text-nowrap border-[1.5px]",
                solution === idx ? "text-primary-400 bg-primary-50 border border-primary-400" : ""
              )}
            >
              {item.name}
            </Button>
          ))}
        </div>
        {list?.map((item, idx: number) => {
          if (idx === solution)
            return (
              <SolutionsCard
                key={`soludtions-card-${locale}-${idx}`}
                name={item.name}
                solutionsList={list}
              />
            );
        })}
        {list?.map((item, idx: number) => {
          if (idx === solution && item.cases.length > 0) {
            return <SolutionCaseCard key={idx} solutions={item as SolutionType} />;
          }
        })}
      </div>
    </div>
  );
}

"use client";

import useMediaQuery from "@/shared/hooks/useMediaQuery";
import BenefitBox from "../_components/benefit-box";
import CareerWrapper from "../_components/career-wrapper";

import { BENEFITS_LIST } from "../_constants/benefits";

export default function CareerBenefits() {
  const isXlSize = useMediaQuery({ size: "xl" });

  return (
    <CareerWrapper
      title="BENEFITS"
      subTitle={`모두의 쾌적한 근무환경을 위하여\n여러 혜택을 제공합니다.`}
      isLast
    >
      <div className="w-full flex mt-10 xl:mt-20">
        <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-4 gap-y-5 xl:gap-[56px] xl:gap-y-10">
          {BENEFITS_LIST.map((item, idx: number) => (
            <BenefitBox
              key={`benefit-${idx}`}
              idx={item.idx}
              icon={item.icon}
              name={item.name}
              description={item.desc}
              noLine={
                isXlSize
                  ? idx > BENEFITS_LIST.length - 4
                    ? true
                    : false
                  : idx === BENEFITS_LIST.length - 1
                  ? true
                  : false
              }
            />
          ))}
        </div>
      </div>
    </CareerWrapper>
  );
}

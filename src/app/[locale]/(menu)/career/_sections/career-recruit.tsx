import { Fragment } from "react";

import CareerWrapper from "../_components/career-wrapper";
import { cn } from "@/shared/utils/tailwindUtils";
import {
  CareerDownArrow,
  CareerRightArrow,
  Clipboard,
  SealCheck,
  UserSound,
} from "@/shared/assets/icons/career-icons";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

const RecruitProcess = [
  { icon: <Clipboard className="size-9 xl:size-fit" />, idx: 1, name: "서류 지원" },
  {
    icon: <UserSound className="size-9 xl:size-fit" />,
    idx: 2,
    name: "1차·2차 면접",
  },
  {
    icon: <SealCheck className="size-9 xl:size-fit" />,
    idx: 3,
    name: "최종 합격",
  },
];

export default function CareerRecruit() {
  const isXlSize = useMediaQuery({ size: "xl" });

  return (
    <CareerWrapper
      title="RECRUIT"
      subTitle={`다음과 같은 여정을 거쳐\n나인와트와 만나게 됩니다.`}
      isCenter={isXlSize ? true : false}
    >
      <div className="w-full flex flex-col grow xl:flex-row items-center justify-center gap-1 xl:gap-6 mt-10 xl:mt-20">
        {RecruitProcess.map((item, idx: number) => (
          <Fragment key={`recruit-${idx}`}>
            <div
              className={cn(
                "rounded-full relative flex items-center",
                isXlSize
                  ? "size-[272px] p-12 flex-col justify-center bg-gray50"
                  : "w-full p-3 flex-row gap-5 border border-gray100 bg-white",
                idx + 1 === RecruitProcess.length && isXlSize && "bg-primary-400"
              )}
            >
              <div
                className={
                  isXlSize
                    ? ""
                    : `${
                        idx + 1 === RecruitProcess.length ? "bg-primary-400" : "bg-gray50"
                      } size-[76px] rounded-full flex items-center justify-center
                      `
                }
              >
                {item.icon}
              </div>

              <div className="flex flex-col items-center xl:mt-5">
                <p
                  className={`text-heading-05-mo xl:text-heading-05 ${
                    idx + 1 === RecruitProcess.length && isXlSize ? "text-white/70" : "text-gray500"
                  }`}
                >
                  STEP 0{item.idx}
                </p>
                <p
                  className={`text-heading-03-mo xl:text-heading-03 ${
                    idx + 1 === RecruitProcess.length && isXlSize ? "text-white" : "text-gray900"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            </div>
            {idx + 1 !== RecruitProcess.length &&
              (isXlSize ? <CareerRightArrow /> : <CareerDownArrow />)}
          </Fragment>
        ))}
      </div>
    </CareerWrapper>
  );
}

import { ReactElement, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { cn } from "@/shared/utils/tailwindUtils";

interface Props {
  children: ReactElement;
  title: string;
  subTitle: string;
  isLast?: boolean;
  isCenter?: boolean;
}

export default function CareerWrapper({ children, title, subTitle, isLast, isCenter }: Props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={cn(
        "w-full flex flex-col justify-end gap-10 xl:gap-40",
        isLast ? "pt-14 xl:pt-40" : "py-14 xl:py-40"
      )}
    >
      <div className={cn("flex flex-col", isCenter && "items-center text-center")}>
        <p className="text-heading-05-mo xl:text-heading-05 text-primary-400">{title}</p>
        <p className="mt-3 xl:mt-4 font-semibold text-heading-01-mo xl:text-4xl xl:leading-normal text-gray900 whitespace-pre-line">
          {subTitle}
        </p>
        {children}
      </div>
      {isLast && (
        <div className="w-full relative">
          <div className="w-full h-40 xl:h-[268px] relative rounded-2xl overflow-hidden">
            <Image
              src={"/images/career/career-banner.png"}
              fill
              alt="career-banner-image"
              objectFit="cover"
            />
            <div className="w-full h-full absolute left-0 top-0 bg-black/50" />
          </div>
          <p className="text-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-heading-02-mo xl:text-heading-01 text-center">
            나인와트와 함께 성장할
            <br />
            동료를 기다립니다.
          </p>
        </div>
      )}
    </div>
  );
}

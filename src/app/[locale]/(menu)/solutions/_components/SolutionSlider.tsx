import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useEffect, useRef, useState } from "react";

import Button from "@/app/_components/button";

import { ExpandArrow } from "@/shared/assets/icons/arrows";
import { SaveReportIcon } from "@/shared/assets/icons/solutions-icons";
import { SOLUTIONS_CARD_LIST } from "@/app/[locale]/(menu)/solutions/_constants/solutions-list";
import { cn } from "@/shared/utils/tailwindUtils";
import { paths } from "@/shared/routing";

export default function SolutionSlider() {
  const imgWrapper =
    "grow-0 w-full md:w-1/2 h-full max-h-[900px] rounded-3xl overflow-hidden sticky top-0";
  const txtWrapper =
    "grow-0 shrink-0 w-full md:w-1/2 h-full max-h-[900px] rounded-3xl shadow-emphasize overflow-hidden sticky top-0 bg-white flex flex-col p-5 md:p-9 transition-opacity duration-500";

  const [scrollY, setScrollY] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);

  const imgRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef?.current?.offsetHeight) {
      setImgHeight(imgRef.current.offsetHeight);
    }
  }, [imgRef]);

  useEffect(() => {
    if (topRef?.current?.offsetTop) {
      setOffsetTop(topRef.current.offsetTop);
    }
  }, [topRef]);

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window?.scrollY;
      setScrollY(scrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="solution-slider" className="relative mb-20" ref={topRef}>
      <div className="w-full h-[400vh] md:h-[calc(400vh+300px)] lg:h-[520vh] sticky top-0">
        <div className="w-full h-[calc(100vh-120px)] sticky top-[72px] overflow-hidden">
          <ul className="block">
            {SOLUTIONS_CARD_LIST.map((card, idx: number) => (
              <li
                key={`solutions-${idx}`}
                className="w-full h-full flex flex-col md:flex-row items-center gap-4 absolute top-0 py-2 px-1"
              >
                <div className={cn(imgWrapper, idx === 0 && "shadow-emphasize")}>
                  <div
                    className="w-full h-full absolute top-0 left-0"
                    ref={imgRef}
                    style={{
                      transform: `translate3d(0px, ${
                        idx === 0
                          ? 0
                          : offsetTop + imgHeight * (idx - 1) <= scrollY &&
                            scrollY < offsetTop + imgHeight * idx
                          ? imgHeight - (scrollY - offsetTop - imgHeight * (idx - 1))
                          : offsetTop + imgHeight * idx < scrollY
                          ? 0
                          : imgHeight
                      }px, 0px)`,
                    }}
                  >
                    <Image
                      src={card.img}
                      alt="ninewatt solution image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={txtWrapper}
                  style={{
                    opacity: `${
                      idx === 0 && scrollY < offsetTop + imgHeight * 0.6
                        ? 1
                        : offsetTop + imgHeight * (0.6 + idx - 1) <= scrollY &&
                          scrollY < offsetTop + imgHeight * (0.4 + idx)
                        ? 1
                        : offsetTop + imgHeight * (0.4 + idx) <= scrollY &&
                          scrollY < offsetTop + imgHeight * (0.6 + idx)
                        ? 1
                        : offsetTop + imgHeight * (0.4 + idx) <= scrollY &&
                          idx === SOLUTIONS_CARD_LIST.length - 1
                        ? 1
                        : 0
                    }`,
                    zIndex: `${
                      idx === 0 && scrollY < offsetTop + imgHeight * 0.6
                        ? 100
                        : offsetTop + imgHeight * (0.6 + idx - 1) <= scrollY &&
                          scrollY < offsetTop + imgHeight * (0.4 + idx)
                        ? 100
                        : offsetTop + imgHeight * (0.4 + idx) <= scrollY &&
                          scrollY < offsetTop + imgHeight * (0.6 + idx)
                        ? 100
                        : offsetTop + imgHeight * (0.4 + idx) <= scrollY &&
                          idx === SOLUTIONS_CARD_LIST.length - 1
                        ? 100
                        : 10
                    }`,
                  }}
                >
                  <h3 className="font-semibold text-2xl lg:text-[32px] text-alternative lg:mb-6">
                    {card.name}
                  </h3>
                  <p className="text-[#00808A] font-medium text-[13px] lg:text-lg mb-3 lg:mb-[60px]">
                    {card.tag?.join(" ")}
                  </p>
                  <h2 className="text-black font-bold text-xl lg:text-[28px] tracking-tighter leading-[1.3] lg:leading-normal mb-4 lg:mb-10">
                    {card.title}
                  </h2>
                  <p className="text-black text-xs lg:text-xl leading-[1.4] grow">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2 lg:gap-4">
                    {card.appDownloadUrl ? (
                      <Link href={card.appDownloadUrl} target="_blank">
                        <Button
                          variant="roundedOutline"
                          className="text-[11px] lg:text-lg w-fit gap-[10px] text-balance"
                        >
                          {card.name} 사용문의
                          <ExpandArrow color="#37383C9C" className="size-3 lg:size-auto" />
                        </Button>
                      </Link>
                    ) : (
                      <Link href={paths.contact}>
                        <Button
                          variant="roundedOutline"
                          className="text-[11px] lg:text-lg w-fit gap-[10px] text-balance"
                        >
                          {card.name} 사용문의
                          <ExpandArrow color="#37383C9C" className="size-3 lg:size-auto" />
                        </Button>
                      </Link>
                    )}

                    <Button
                      variant="roundedOutline"
                      className="text-[11px] lg:text-lg w-fit gap-2 lg:gap-[10px] text-nowrap"
                    >
                      <a
                        className="flex items-center gap-2 lg:gap-[10px] w-fit text-nowrap"
                        href={card.reportUrl}
                        download
                        key={`report-${card.title}`}
                      >
                        소개서 다운로드 <SaveReportIcon className="size-4 lg:size-auto" />
                      </a>
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

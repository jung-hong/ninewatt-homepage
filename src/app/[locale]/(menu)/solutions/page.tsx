"use client";

import { useEffect, useState } from "react";

import LenisWrap from "@/app/_components/lenis";
import MenuHeader from "../_components/layout/menu-header";
import MenuWrapper from "../_components/layout/menu-wrapper";
import MenuCover from "../_components/layout/menu-cover";

import {
  blackTransparent,
  useHeaderContext,
  whiteTransparent,
} from "@/app/_providers/HeaderContext";

import { ScrollDownButton } from "@/app/_components/scrolldown";
import SolutionsGallery from "./_components/SolutionsGallery";

export default function SolutionsPage() {
  const { setHeaderStyle } = useHeaderContext();

  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 화면 크기 설정 함수
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 스크롤 이벤트 등록
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
    };

    // 초기 화면 크기 설정 및 이벤트 등록
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);
    window.addEventListener("scroll", handleScroll);

    // 클린업
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 10) setHeaderStyle(blackTransparent);
    else setHeaderStyle(whiteTransparent);
  }, [scrollY]);

  // px 단위로 크기 조정
  const maxHeight = screenSize.height; // h-screen
  const minHeight = 418; // 최소 높이 (px)
  const height = Math.max(minHeight, maxHeight - scrollY * 5); // 스크롤에 따라 줄어드는 높이 계산

  const maxWidth = screenSize.width; // w-screen
  const minWidth = 1240; // 최소 너비 (px): About Header 의 가로길이
  const width = Math.max(minWidth, maxWidth - scrollY * 5); // 스크롤에 따라 줄어드는 너비 계산

  // 스크롤에 따라 opacity 조정 (0~1 범위로)
  const opacity = Math.min(1, scrollY / 30);

  return (
    <LenisWrap>
      <>
        <div className="w-full h-screen bg-white mb-28 xl:mb-40">
          <div className="mx-auto responsiveWidth">
            <MenuHeader title="SOLUTIONS" />
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: 0,
              width: `${width}px`,
              height: `${height}px`,
              maxWidth: "100%",
              zIndex: 10,
            }}
          >
            <MenuCover img="/images/solutions/solutions-image.png" opacity={opacity} />
          </div>
          <div
            className={`absolute bottom-[60px] ${
              minWidth === width ? "right-20" : "left-1/2 -translate-x-1/2"
            } z-50`}
          >
            <ScrollDownButton
              color={minWidth === width ? "black" : "white"}
              nextSectionId="solution-slider"
            />
          </div>
        </div>
        <MenuWrapper>
          <SolutionsGallery />
        </MenuWrapper>
      </>
    </LenisWrap>
  );
}

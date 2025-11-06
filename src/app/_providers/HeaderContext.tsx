"use client";

import React, { createContext, useContext, useState } from "react";

// 상황 별 헤더 스타일
export const blackMode = "bg-black text-white";
export const whiteMode = "bg-white text-black";
export const blackTransparent = "bg-black/10 text-white";
export const whiteTransparent = "bg-white/10 text-white";

// 헤더 스타일 타입 정의
type HeaderStyle =
  | typeof blackMode
  | typeof whiteMode
  | typeof blackTransparent
  | typeof whiteTransparent;

// Context와 Provider를 위한 타입
interface HeaderContextType {
  headerStyle: HeaderStyle;
  setHeaderStyle: React.Dispatch<React.SetStateAction<HeaderStyle>>;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

// Context Provider 컴포넌트
export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerStyle, setHeaderStyle] = useState<HeaderStyle>("bg-white/10 text-white");

  return (
    <HeaderContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useHeaderContext = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};

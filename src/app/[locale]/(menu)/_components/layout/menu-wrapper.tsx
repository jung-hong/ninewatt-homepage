"use client";

import { ReactElement } from "react";
interface Props {
  children: ReactElement;
}

export default function MenuWrapper({ children }: Props) {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="responsiveWidth">{children}</div>
    </div>
  );
}

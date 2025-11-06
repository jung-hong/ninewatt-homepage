"use client";

import ReactLenis from "lenis/react";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function LenisWrap({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        duration: 0,
        // easing: (t) => 1 - Math.pow(1 - t, 3),
      }}
    >
      {children}
    </ReactLenis>
  );
}

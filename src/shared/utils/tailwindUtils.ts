import clsx, { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  // leading이 font-size보다 앞에 오면 충돌로 인식되어 leading이 제거되는 현상 해결
  override: {
    conflictingClassGroups: {
      "font-size": [],
    },
  },
  // custom class로 지정한 font-size는 color와 같이 text-** 형태로 사용
  // tailwind-merge에서는 이를 충돌로 간주하여 custom한 font-size를 모두 color 취급하여 제대로 적용 안됨
  // 이 문제를 해결하기 위해 커스텀한 classGroups를 알려준다.
  extend: {
    classGroups: {
      "font-size": [
        {
          text: ["13", "15", "17", "32"], // "text-13", "text-15" 등등은 font-size로 간주한다.
        },
      ],
    },
  },
});

// tailwind class merge
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

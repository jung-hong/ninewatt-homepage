"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSelectDropdown() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const handleChange = (newLocale: "en" | "ko") => {
    // 현재 경로에서 locale prefix 제거
    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = segments[0];

    if (currentLocale === "ko" || currentLocale === "en") {
      segments.shift(); // 기존 locale 제거
    }

    const newPath = `/${newLocale}/${segments.join("/")}`;
    setIsOpenDropdown(false);

    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpenDropdown((prev) => !prev)}
        className="flex items-center gap-2 text-primary-200 group-hover:text-primary-400 py-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3978_8249)">
            <path
              d="M1.66699 9.99935H18.3337M1.66699 9.99935C1.66699 14.6017 5.39795 18.3327 10.0003 18.3327M1.66699 9.99935C1.66699 5.39698 5.39795 1.66602 10.0003 1.66602M18.3337 9.99935C18.3337 14.6017 14.6027 18.3327 10.0003 18.3327M18.3337 9.99935C18.3337 5.39698 14.6027 1.66602 10.0003 1.66602M10.0003 1.66602C12.0847 3.94798 13.2693 6.90938 13.3337 9.99935C13.2693 13.0893 12.0847 16.0507 10.0003 18.3327M10.0003 1.66602C7.91593 3.94798 6.73137 6.90938 6.66699 9.99935C6.73137 13.0893 7.91593 16.0507 10.0003 18.3327"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3978_8249">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-heading-05 hidden md:block">{locale === "en" ? "ENG" : "KOR"}</span>
      </button>
      {isOpenDropdown && (
        <div className="absolute top-[54px] md:top-full left-1/2 -translate-x-1/2 p-2 space-y-1 rounded-xl bg-common-white">
          <button
            onClick={() => handleChange("ko")}
            className={`text-gray500 hover:text-gray800 hover:bg-gray100 rounded-lg ${
              locale === "ko" ? "bg-primary-400 text-white" : ""
            } text-heading-05 px-3.5 py-2`}
          >
            KOR
          </button>
          <button
            onClick={() => handleChange("en")}
            className={`text-gray500 hover:text-gray800 hover:bg-gray100 rounded-lg ${
              locale === "en" ? "bg-primary-400 text-white" : ""
            } text-heading-05 px-3.5 py-2`}
          >
            ENG
          </button>
        </div>
      )}
    </div>
  );
}

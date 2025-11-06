"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import NinewattLogo from "@/shared/assets/icons/logo";
import { cn } from "@/shared/utils/tailwindUtils";
import { HEADER_MENU } from "@/app/_constants/header";
import { useHeaderContext } from "@/app/_providers/HeaderContext";
import { paths } from "@/shared/routing";
import LanguageSelectDropdown from "../language-dropdown";

const IconMenuHamburger = ({ size, color }: { size: number; color: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { headerStyle } = useHeaderContext();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "group fixed left-0 top-0 w-full h-[4.5rem] flex items-center justify-between px-5 md:px-[3.75rem] z-20",
        "hover:bg-white hover:text-black transition-all duration-300",
        // whiteTransparent
        headerStyle
      )}
    >
      <Link href={paths.main}>
        <NinewattLogo className={"group-hover:text-black"} width={94} height={36} />
      </Link>
      {/* 햄버거 메뉴 아이콘 (모바일에서 보이도록) */}
      <div className="flex items-center gap-1">
        <div className="md:hidden size-11 flex items-center justify-center">
          <LanguageSelectDropdown />
        </div>
        <button
          className="block lg:hidden p-2 text-white group-hover:text-black transition-colors duration-300"
          onClick={toggleMenu}
        >
          <IconMenuHamburger size={30} color="currentColor" />
        </button>
      </div>
      {/* 메뉴 항목 */}
      <div className="hidden lg:flex items-center gap-20 font-semibold text-lg">
        {HEADER_MENU.map((menu, idx: number) => (
          <Link key={`header-menu-${idx}`} href={menu.src}>
            {menu.name}
          </Link>
        ))}
      </div>
      {/* 언어 설정 */}
      {/* <div className="hidden lg:block">LANGUAGE</div> */}
      <div className="hidden md:block">
        <LanguageSelectDropdown />
      </div>

      {/* 모바일 메뉴 (헤더가 열렸을 때) */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/70 flex flex-col items-center justify-center z-30"
          onClick={toggleMenu} // 메뉴 외부 클릭 시 닫히게 함
        >
          <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-8 relative">
            {HEADER_MENU.map((menu, idx: number) => (
              <Link
                key={`mobile-header-menu-${idx}`}
                href={menu.src}
                className={`text-lg font-semibold text-black ${
                  pathname === menu.src ? "text-black/35" : ""
                }`}
              >
                {menu.name}
              </Link>
            ))}
            {/* <div className="text-lg font-semibold text-black">LANGUAGE</div> */}
            <button
              className="absolute top-5 right-5 z-30 text-black/40 text-lg font-medium"
              onClick={toggleMenu}
            >
              close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

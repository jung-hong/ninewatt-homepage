import { FOOTER_SITEMAP, SNS_LINKS } from "@/app/_constants/footer";
import { Link } from "@/i18n/routing";
import NinewattLogo from "@/shared/assets/icons/logo";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden h-auto md:h-[386px] bg-[#F1F1F1] px-5 md:px-4 pt-8 pb-12 md:pt-[55px]">
      <div className="md:max-w-[1280px] h-full md:mx-auto space-y-8">
        {/* Header */}
        <div className="md:w-full md:flex md:items-center md:justify-between relative">
          <NinewattLogo width={156} height={60} className="text-ninewatt" />
          <div className="space-y-3 md:space-y-0 md:space-x-12 mt-8 md:mt-0">
            {FOOTER_SITEMAP.map((site, idx: number) => (
              <Link
                key={`footer-sitemap-${idx}`}
                className="block md:inline text-heading-05-mo md:text-heading-05 text-gray800 w-fit"
                href={site.src}
              >
                {site.name}
              </Link>
            ))}
          </div>

          {/* SNS */}
          <div className="absolute right-0 top-0 md:hidden flex items-center gap-[18px]">
            {SNS_LINKS.map((sns, idx: number) => (
              <a key={`sns-link-${idx}`} href={sns.link} target="_blank">
                {sns.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Body */}
        <div className="text-gray-600 space-y-5">
          <div className="flex md:items-center flex-col md:flex-row gap-1 md:gap-6">
            <div>
              <span className="text-caption-02-600-mo md:text-caption-02-600 mr-1 md:mr-2">
                대표 전화
              </span>
              <span className="text-caption-02-400-mo md:text-caption-02-400">070-8866-7226</span>
            </div>
            <div>
              <span className="text-caption-02-600-mo md:text-caption-02-600 mr-1 md:mr-2">
                이메일
              </span>
              <span className="text-caption-02-400-mo md:text-caption-02-400">
                ninewatt@ninewatt.com
              </span>
            </div>
          </div>

          <div className="space-y-1 text-caption-02-400-mo md:text-caption-02-400 text-gray600">
            <div className="whitespace-pre-line">
              주식회사 나인와트 | 대표자 : 김영록 | 사업자등록번호 : 107-88-42750 본사 : 인천 연수구
            </div>
            <div className="whitespace-pre-line">
              본사 : 인천 연수구 컨벤시아대로 204, 104호(인스타2, 송도동)
            </div>
            <div className="whitespace-pre-line">
              기업부설연구소 : 서울특별시 강남구 강남대로162길 22 , 4층(연구소)
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="text-caption-03-mo md:text-caption-03 text-gray500 md:relative">
          Copyright ⓒ NINEWATT All rights reserved.
          {/* SNS */}
          <div className="hidden right-0 top-1/2 -translate-y-1/2 md:absolute md:flex items-center gap-[18px]">
            {SNS_LINKS.map((sns, idx: number) => (
              <a key={`sns-link-${idx}`} href={sns.link} target="_blank">
                {sns.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

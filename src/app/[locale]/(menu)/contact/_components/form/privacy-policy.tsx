import { useLocale, useTranslations } from "next-intl";
import { ReactElement, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  PRIVACY_POLICY_CONTENT,
  PRIVACY_POLICY_CONTENT_EN,
} from "../../_constants/privacy-policy-lang";

export default function PrivacyPolicy() {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const t = useTranslations("Contact");
  const locale = useLocale();

  const [content, setContent] = useState<ReactElement>(PRIVACY_POLICY_CONTENT);

  // locale에 따라 개인정보처리방침 내용 변경
  useEffect(() => {
    if (locale === "ko") setContent(PRIVACY_POLICY_CONTENT);
    if (locale === "en") setContent(PRIVACY_POLICY_CONTENT_EN);
  }, [locale]);

  return (
    <>
      <div data-lenis-prevent className="border border-[#D9D9D9]">
        <div className="px-6 md:px-9 py-7 w-full h-[180px] !overflow-y-scroll">
          <p className="font-bold text-xs md:text-sm text-black mb-[23px]">
            {t("Terms.ContentTitle")}
          </p>
          <p className="text-xs md:text-sm font-medium text-strong tracking-tighter">{content}</p>
        </div>
        <div className="px-9 py-5 border-t border-[#D9D9D9] bg-[#F1F1F1]">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="size-4 accent-black transition-all"
              {...register("term")}
            />
            <p className="font-medium text-[13px] md:text-sm leading-none text-neutral">
              {t("Terms.Checkbox")}
            </p>
          </label>
        </div>
      </div>
      {errors?.term?.message && typeof errors?.term?.message === "string" && (
        <p className="mt-[10px] text-xs font-medium text-[#EB003B]">{errors?.term?.message}</p>
      )}
    </>
  );
}

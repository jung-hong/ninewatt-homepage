import { useEffect, useState } from "react";

import {
  CONTACT_TYPE,
  CONTACT_TYPE_EN,
  ContactTypeInterface,
  SOLUTIONS,
} from "../../_constants/contact-form-options";
import Button from "@/app/_components/button";
import { cn } from "@/shared/utils/tailwindUtils";
import { useFormContext, useWatch } from "react-hook-form";
import { useLocale } from "next-intl";

// 도입문의: deployment, 기타문의: etc
export default function ContactType() {
  const { setValue, control } = useFormContext();
  const watchType = useWatch({ control, name: "type" });
  const locale = useLocale();

  const [contactTypeList, setContactTypeList] = useState<ContactTypeInterface[]>(); // locale에 따라 리스트 변경
  const [contactType, setContactType] = useState("deployment"); // 문의 유형
  const [solution, setSolution] = useState("watti"); // 문의 솔루션

  const labelStyle =
    "w-1/2 h-full flex items-center justify-center cursor-pointer text-md md:text-xl text-black leading-[1.1] transition-colors";

  useEffect(() => setValue("type", contactType), [contactType]);
  useEffect(() => setValue("solution", solution), [solution]);

  // 부모컴포넌트(ContactForm)에서 form reset이 일어나면 type, solution 초기화
  useEffect(() => {
    if (!watchType) {
      setContactType("deployment");
      setSolution("watti");
    }
  }, [watchType]);

  // locale에 따라 contact_type 리스트 변경
  useEffect(() => {
    if (locale === "ko") setContactTypeList(CONTACT_TYPE);
    if (locale === "en") setContactTypeList(CONTACT_TYPE_EN);
  }, [locale]);

  return (
    <div className="w-full">
      <div className="border-b border-black h-[52px] flex items-center mb-5 md:mb-[60px]">
        {contactTypeList?.map((type, idx: number) => (
          <div
            className={cn(
              labelStyle,
              contactType === type.id
                ? "font-bold border-black border-b-[2px]"
                : "font-semibold text-black9"
            )}
            key={`contact-type-${idx}`}
            onClick={() => setContactType(type.id)}
          >
            {type.name}
          </div>
        ))}
      </div>

      <div className="w-full flex items-center flex-wrap gap-3 md:gap-4 mb-5 md:mb-10 overflow-x-auto">
        {SOLUTIONS.map((item, idx: number) => (
          <Button
            key={`solution-${idx}`}
            variant={item.id === solution ? "outlineSelected" : "outlineGrey"}
            size="xl"
            className="w-fit rounded-[100px] box-border text-sm md:text-xl"
            onClick={() => setSolution(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

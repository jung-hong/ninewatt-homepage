import { cn } from "@/shared/utils/tailwindUtils";
import { ReactElement } from "react";

interface Props {
  idx: number;
  icon: ReactElement;
  name: string;
  description: ReactElement;
  noLine?: boolean;
}

export default function BenefitBox({ icon, name, description, noLine }: Props) {
  return (
    <div
      className={cn(
        "pt-6 pb-4 xl:pt-8 xl:pb-5 flex flex-col xl:w-full xl:h-[287px]",
        noLine ? "" : "border-b border-gray200"
      )}
    >
      {icon}
      <p className="text-heading-03-mo xl:text-heading-03 text-gray900 mt-4 mb-2 xl:mt-7 xl:mb-4">
        {name}
      </p>
      <p className="text-body-03-mo xl:text-body-03 text-gray600">{description}</p>
    </div>
  );
}

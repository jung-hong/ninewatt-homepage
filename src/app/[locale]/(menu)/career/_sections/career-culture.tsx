import Image from "next/image";
import CareerWrapper from "../_components/career-wrapper";
import { cn } from "@/shared/utils/tailwindUtils";
import { ChartLineup, ClappingHands } from "@/shared/assets/icons/career-icons";

export default function CareerCulture() {
  const wrapper = "flex flex-col gap-7 xl:gap-[56px]";
  const imgStyle =
    "relative w-full max-w-[700px] xl:max-w-auto grow xl:grow-0 xl:w-[600px] h-[240px] md:h-[350px] xl:h-[400px]";
  const descriptionWrapper = "px-1 xl:px-2 flex flex-col gap-4 xl:gap-6";
  const descriptions = "text-heading-03-mo xl:text-heading-03 text-gray900";

  return (
    <CareerWrapper title="CULTURE" subTitle={`나인와트는\n함께 성장하는 문화를 추구합니다.`}>
      <div className="flex flex-col grow xl:flex-row gap-16 xl:gap-20 mt-10 xl:mt-20">
        <div className={wrapper}>
          <div className={imgStyle}>
            <Image
              src={"/images/career/culture-1.png"}
              alt="culture-img-1"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className={descriptionWrapper}>
            <ChartLineup className="size-7 xl:size-fit" />
            <p className={descriptions}>
              창의적이고 활동적인 <br className="hidden xl:block" />
              조직 문화를 기반으로 <br className="hidden xl:block" /> 개인과 기업이 함께 성장합니다.
            </p>
          </div>
        </div>
        <div className={cn(wrapper, "xl:mt-60")}>
          <div className={imgStyle}>
            <Image
              src={"/images/career/culture-2.png"}
              alt="culture-img-2"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className={descriptionWrapper}>
            <ClappingHands className="size-7 xl:size-fit" />
            <p className={descriptions}>
              구성원의 도전과 성장을 적극 지원하며
              <br className="hidden xl:block" /> 노력과 성과에 대한 보상을 보장합니다.
            </p>
          </div>
        </div>
      </div>
    </CareerWrapper>
  );
}

import CareerWrapper from "../_components/career-wrapper";
import { RocketLaunch, Steps, Target } from "@/shared/assets/icons/career-icons";

const TalentList = [
  {
    icon: <Steps className="size-9 xl:size-fit" />,
    title: "성장 욕구",
    descr: (
      <>
        목표 달성을 위해
        <br className="hidden xl:block" /> 자기자신을 지속적으로 <br className="hidden xl:block" />
        발전시켜 나가려는 노력
      </>
    ),
  },
  {
    icon: <Target className="size-9 xl:size-fit" />,
    title: "도전",
    descr: (
      <>
        긍정적인 사고방식으로
        <br className="hidden xl:block" /> 새로운 사업 기회에 {""}
        <br className="hidden xl:block" />
        함께 참여하는 도전정신
      </>
    ),
  },
  {
    icon: <RocketLaunch className="size-9 xl:size-fit" />,
    title: "행동력",
    descr: (
      <>
        자유롭고 수평적인 문화 속 <br className="hidden xl:block" /> 업무를 주도적으로 {""}
        <br className="hidden xl:block" />
        이끌어가는 행동력
      </>
    ),
  },
];

export default function CareerTalent() {
  return (
    <CareerWrapper
      title="TALENT"
      subTitle={`자유롭되 책임감을 갖고\n함께 성장할 인재를 기다립니다.`}
    >
      <div className="flex flex-col grow xl:flex-row gap-4 xl:gap-6 mt-10 xl:mt-20 items-center xl:items-start">
        {TalentList.map((item, idx: number) => (
          <div key={`talent-${idx}`} className="bg-gray50 p-6 xl:p-12 rounded-2xl w-full">
            {item.icon}
            <p className="mt-6 mb-3 xl:mt-12 xl:mb-5 text-heading-02-mo xl:text-heading-02 text-gray900">
              {item.title}
            </p>
            <p className="text-body-03-mo xl:text-body-03 text-gray600">{item.descr}</p>
          </div>
        ))}
      </div>
    </CareerWrapper>
  );
}

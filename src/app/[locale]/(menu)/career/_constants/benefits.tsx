import {
  Benefit01,
  Benefit02,
  Benefit03,
  Benefit04,
  Benefit05,
  Benefit06,
  Benefit07,
  Benefit08,
  Benefit09,
} from "@/shared/assets/icons/career-icons";

export const BENEFITS_LIST = [
  {
    idx: 1,
    icon: <Benefit01 />,
    name: "자유로운 연차 사용",
    desc: (
      <>
        사전 승인 필요 X<br />
        연휴/명절을 포함한 10일 이상의 장기휴가 권장
      </>
    ),
  },
  {
    idx: 2,
    icon: <Benefit02 />,
    name: "근속연수 별 연차",
    desc: (
      <>
        입사년도 월 1일,
        <br /> 차년도 연 15일 휴가 부여
      </>
    ),
  },
  {
    idx: 3,
    icon: <Benefit03 />,
    name: "자율 출근제",
    desc: (
      <>
        오전 8시 ~ 10시
        <br /> 10분 단위 자유롭게 출근
      </>
    ),
  },
  {
    idx: 4,
    icon: <Benefit04 />,
    name: "생일자 유급 휴가",
    desc: <>연차 소진 X</>,
  },
  {
    idx: 5,
    icon: <Benefit05 />,
    name: "식대 지원",
    desc: <>식대 & 간식 제공</>,
  },
  {
    idx: 6,
    icon: <Benefit06 />,
    name: "건강검진",
    desc: <>종합 건강검진 지원</>,
  },
  {
    idx: 7,
    icon: <Benefit07 />,
    name: "교육 & 도서 지원",
    desc: (
      <>
        직무 역량 향상을 위한
        <br className="hidden xl:block" />
        교육비 및 자기개발도서 지원
      </>
    ),
  },
  {
    idx: 8,
    icon: <Benefit08 />,
    name: "성과보상제",
    desc: (
      <>
        성과지표, 프로젝트 기여도와
        <br className="hidden xl:block" /> 연계한 성과급제도 도입
      </>
    ),
  },
  {
    idx: 9,
    icon: <Benefit09 />,
    name: "사무용품 지급",
    desc: <>노트북, 모니터 등등</>,
  },
];

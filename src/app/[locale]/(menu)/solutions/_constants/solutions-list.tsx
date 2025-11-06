export interface SolutionType {
  name: string;
  tag: string[];
  title: string;
  description: string;
  reportUrl: string;
  img: string;
  appDownloadUrl?: string;
  caseTitle: string;
  cases: {
    title: string;
    description?: string;
    secondTitle?: string;
    img: string;
  }[];
}

export const SOLUTIONS_CARD_LIST: SolutionType[] = [
  {
    name: "WATTI",
    tag: ["#B2B", "#B2G", "#에너지분석"],
    title: `도시의 에너지 문제를 발굴하고 해결하는\n3D 지도 기반 스마트시티 플랫폼`,
    description:
      "WATTI는 도시 속 건물에너지의 사용 환경과 패턴을 분석하여 낭비되는 에너지를 찾아 탄소배출을 절감하고, 에너지 효율성을 높이는 방법을 제시합니다.",
    reportUrl: "/files/NINEWATT_WATTI.pdf",
    img: "/images/solutions/solutions-watti.png",
    caseTitle: "사용자에게 최적화된 다양한 모습의 WATTI를 제공합니다.",
    cases: [
      {
        title: "강남구 건물 탄소관리 Map",
        description:
          "지자체 내 에너지 사용량과 건물 데이터\n기반의 CO₂ 배출량 시각화 및 통계 분석 제공",
        img: "/images/solutions/case/watti/1.png",
      },
      {
        title: "경기도 에너지 데이터 포털",
        description:
          "데이터를 기반으로 한 정책 추진을 지원하며\n도시 및 환경 계획 수립을 지원하는 서비스 제공",
        img: "/images/solutions/case/watti/2.png",
      },
      {
        title: "영국 런던 PoC",
        description: "건물의 CO₂ 배출량을 모니터링하고\n효율을 진단하는 WATTI를 구축하여 PoC 진행",
        img: "/images/solutions/case/watti/3.png",
      },
    ],
  },
  {
    name: "SAVE-E",
    tag: ["#B2B", "#B2G", "#자동레포팅"],
    title: `건물에너지 그룹 관리 및\n에너지비용 관리 솔루션`,
    description:
      "SAVE-E는 관리자가 다수의 건물에서 사용하는 에너지를 손쉽게 모니터링, 관리할 수 있도록 지원합니다. 또한, 15분 단위의 전력 사용량을 분석하여 7가지 분석알고리즘으로 잠재적 에너지 절감량을 자동 분석하고 절감 방법을 제안합니다.",
    reportUrl: "/files/NINEWATT_SAVE-E.pdf",
    img: "/images/solutions/solutions-save-e.png",
    caseTitle: "SAVE-E는 각 건물의 에너지 데이터를 분석하여 퍼스널 레포트를 제공합니다.",
    cases: [
      {
        title: "LS Electric",
        secondTitle: "전력 사용량 자동 분석 레포트 시스템 구축",
        description:
          "LS Electric 고객사의 공장·건물의 데이터를\nAPI로 취득 후, 나인와트의 분석 알고리즘으로 결과 제공",
        img: "/images/solutions/case/save-e/1.png",
      },
      {
        title: "신한스퀘어브릿지",
        secondTitle: "건물 에너지비용 절감 컨설팅",
        description:
          "그룹사별 그룹 관리 및 건물/지점별로 에너지와\n요금제 관리, 에너지비용 자동 진단 보고서 제공",
        img: "/images/solutions/case/save-e/2.png",
      },
      {
        title: "S-Oil 본사",
        secondTitle: "본사 건물의 데이터 분석",
        description:
          "S-Oil 건물의 과거 1년 데이터를 분석한 결과,\n약 4,500만원 (연간 7.5%)의 전기요금 절감 가능",
        img: "/images/solutions/case/save-e/3.png",
      },
    ],
  },
  {
    name: "GREEN PLANNER",
    tag: ["#B2B", "#B2C", "#그린리모델링"],
    title: `GIS 기반 시뮬레이션과 AI 기술을 활용한\n최적의 Energy Retrofit 솔루션`,
    description:
      "GREEN PLANNER는 GIS 기반 시뮬레이션과 AI 기술을 활용해 건물의 에너지 효율을 진단하고 절감 효과와 비용을 예측, 비교하여 최적의 대안을 도출합니다.",
    reportUrl: "/files/NINEWATT_Global-GREEN-PLANNER.pdf",
    appDownloadUrl: "https://greenplanner-paris.kro.kr",
    img: "/images/solutions/solutions-greenplanner.png",
    caseTitle: "국가에 맞춘 맞춤형 에너지 진단 GREEN PLANNER를 제공합니다.",
    cases: [
      {
        title: "프랑스 파리 PoC",
        secondTitle: "그린리노베이션 진단 시뮬레이션",
        description: "INCUBATEUR HEC Paris 프로그램을 통해 프랑스\n시장으로의 진출 추진",
        img: "/images/solutions/case/greenplanner/1.png",
      },
    ],
  },
  {
    name: "그린플래너 APP",
    tag: ["#B2B", "#B2C", "#자동레포팅"],
    title: `프롭테크와 결합한\n리모델링 원스톱 플랫폼`,
    description:
      "그린플래너 APP은 건물 에너지 시뮬레이션과 부동산 공공 데이터들로 알고리즘을 만들어 건물 리모델링시 추정시세를 예측하고 정부지원자금컨설팅으로 건물의 새로운 가치를 부여합니다.",
    reportUrl: "/files/greenplanner-app-intro.pdf",
    appDownloadUrl: "https://greenplanner.app.ninewatt.com",
    img: "/images/solutions/solutions-gp-app.png",
    caseTitle: "맞춤형 건물 리모델링 시세 예측 및 정부지원 자금 컨설팅을 제공합니다.",
    cases: [
      {
        title: "반포동A건물 상업용 건물",
        secondTitle: "그린플래너 그린리모델링 컨설팅 완료",
        description:
          "그린플래너 그린리모델링 컨설팅으로\n10년간 건축비 대출이자 연 4% 정부지원금 지원",
        img: "/images/solutions/case/gr-app/1.png",
      },
    ],
  },
  {
    name: "RE:park",
    tag: ["#B2B", "#B2G", "#GIS"],
    title: `시민·관리자·보수업체를 위한\n공원시설물 관리시스템`,
    description:
      "RE:park는 아날로그 기반의 시설물 민원 처리 과정을 DX화하여 빠르고 정확한 민원관리를 제공합니다. 시민·관리자·보수담당자가 유기적으로 연계된 시스템으로, 모든 민원을 손쉽게 관리할 수 있습니다.",
    reportUrl: "/files/NINEWATT_RE-PARK.pdf",
    img: "/images/solutions/solutions-repark.png",
    caseTitle: "시설물의 아날로그 민원처리 과정을 DX화하여 제공합니다.",
    cases: [
      {
        title: "인천시설공단",
        secondTitle: "센트럴파크, 해돋이공원 내 조명시설 구축",
        description: "센트럴파크, 해돋이공원 내 조명시설 대상 구축\n적극행정 우수사례 선정",
        img: "/images/solutions/case/repark/1.png",
      },
    ],
  },
];

export const SOLUTIONS_CARD_LIST_EN: SolutionType[] = [
  {
    name: "WATTI",
    tag: ["#B2B", "#B2G", "#EnergyAnalysis"],
    title: `A 3D map-based smart city platform \nthat identifies and solves \nurban energy issues`,
    description:
      "WATTI analyzes building energy usage environments and patterns in cities to identify wasted energy, reduce carbon emissions, and propose solutions to enhance energy efficiency.",
    reportUrl: "/files/NINEWATT_WATTI.pdf",
    img: "/images/solutions/solutions-watti.png",
    caseTitle: "We provide various optimized versions of WATTI tailored to each user.",
    cases: [
      {
        title: "Gangnam Building Carbon Management Map",
        description:
          "Provides CO₂ emissions visualization and statistical analysis based on building and energy usage data within the local government.",
        img: "/images/solutions/case/watti/1.png",
      },
      {
        title: "Gyeonggi-do Energy Data Portal",
        description:
          "A service that supports policy implementation based on data and assists in the development of urban and environmental planning strategies.",
        img: "/images/solutions/case/watti/2.png",
      },
      {
        title: "London, UK PoC",
        description:
          "A WATTI-based PoC conducted at Queen Elizabeth Olympic Park to monitor building CO₂ emissions and evaluate energy performance.",
        img: "/images/solutions/case/watti/3.png",
      },
    ],
  },
  {
    name: "SAVE-E",
    tag: ["#B2B", "#B2G", "#Automated Reporting"],
    title: `Building Energy Group Management \nand Energy Cost portfolio managers Solution`,
    description:
      "SAVE-E enables managers to easily monitor and manage energy usage across multiple buildings. It analyzes power consumption in 15-minute intervals, automatically identifying potential energy savings using seven different analysis algorithms and \nsuggesting methods for improvement.",
    reportUrl: "/files/NINEWATT_SAVE-E.pdf",
    img: "/images/solutions/solutions-save-e.png",
    caseTitle: "SAVE-E analyzes each building's energy data and provides personalized reports.",
    cases: [
      {
        title: "LS Electric",
        secondTitle: "Automated Electricity Usage Analysis and Reporting System",
        description:
          "Collects data from LS Electric's factories and buildings via API and delivers insights through Ninewatt’s analysis algorithms.",
        img: "/images/solutions/case/save-e/1.png",
      },
      {
        title: "Shinhan Square Bridge",
        secondTitle: "Energy Cost Reduction Consulting for Buildings",
        description:
          "Provides automatic diagnostic reports on energy usage and costs per group or site, including group/company-wide building management and rate system management.",
        img: "/images/solutions/case/save-e/2.png",
      },
      {
        title: "S-Oil Headquarters",
        secondTitle: "Energy Data Analysis of Headquarters Building",
        description:
          "Analyzed one year of historical data from the S-Oil HQ, identifying a potential electricity bill reduction of approx. KRW 45 million per year (7.5%).",
        img: "/images/solutions/case/save-e/3.png",
      },
    ],
  },
  {
    name: "GREEN PLANNER",
    tag: ["#B2B", "#B2C", "#GreenRemodeling"],
    title: "Global Energy Retrofit Platform",
    description:
      "GREEN PLANNER leverages GIS-based simulations and AI technology to evaluate building energy efficiency, predict and compare savings outcomes and costs, and recommend optimal retrofit solutions.",
    reportUrl: "/files/NINEWATT_Global-GREEN-PLANNER.pdf",
    appDownloadUrl: "https://greenplanner-paris.kro.kr",
    img: "/images/solutions/solutions-greenplanner.png",
    caseTitle: "GREEN PLANNER provides customized energy diagnostics tailored to each country.",
    cases: [
      {
        title: "France Paris PoC",
        secondTitle: "Green Renovation Diagnostic Simulation",
        description:
          "Promoting entry into the French market through the INCUBATEUR HEC Paris program.",
        img: "/images/solutions/case/greenplanner/1.png",
      },
    ],
  },
  {
    name: "Green Planner APP",
    tag: ["#B2B", "#B2C", "#Automated Reporting"],
    title: "A One-Stop Platform for Remodeling Combined with PropTech",
    description:
      "The Green Planner APP uses advanced algorithms derived from building energy simulations and public real estate data to estimate remodeling costs. It also offers consulting for accessing government support funds, adding value to buildings through green remodeling.",
    reportUrl: "/files/greenplanner-app-intro.pdf",
    appDownloadUrl: "https://greenplanner.app.ninewatt.com",
    img: "/images/solutions/solutions-gp-app.png",
    caseTitle: "",
    cases: [],
  },
  {
    name: "RE:park",
    tag: ["#B2B", "#B2G", "#GIS"],
    title:
      "Park Facility Management System for Citizens, Administrators, and Maintenance Companies",
    description:
      "RE:park transforms analog-based facility complaint processes into a streamlined, digital system, enabling fast and accurate complaint management. It fosters seamless collaboration among citizens, administrators, and maintenance personnel, simplifying the handling and resolution of complaints.",
    reportUrl: "/files/NINEWATT_RE-PARK.pdf",
    img: "/images/solutions/solutions-repark.png",
    caseTitle: "",
    cases: [],
  },
];

import { NextRequest, NextResponse } from "next/server";

// import https from "https";

// import axios from "axios";
// import * as cheerio from "cheerio";

// // const fetchImageURL = async (url: string) => {
// //   try {
// //     const agent = new https.Agent({
// //       rejectUnauthorized: false,
// //     });

// //     const { data } = await axios.get(url, {
// //       httpsAgent: agent,
// //       headers: {
// //         "Cache-Control": "no-store",
// //         Pragma: "no-store",
// //         Expires: "0",
// //         Referer: "https://ninewatt.com",
// //         "User-Agent":
// //           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0 Safari/537.36",
// //       },
// //     });
// //     const $ = cheerio.load(data);
// //     return $('meta[property="og:image"]').attr("content") || "";
// //   } catch (error) {
// //     console.error("Error fetching image:", error);
// //     return "";
// //   }
// // };

const sortByDate = (a: { date: string }, b: { date: string }) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get("tab") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  // const NEW_NEWS_LIST = await Promise.all(
  //   NEWS_LIST.map(async (news) => ({
  //     ...news,
  //     image: await fetchImageURL(news.link), // 링크에서 이미지 추출
  //   }))
  // );

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Combine the data
  const combinedList = [...NEWS_LIST, ...NINEWATT_VIDEO];

  // Filter based on the selected tab
  const filteredList =
    tab === "all" ? combinedList : combinedList.filter((item) => item.type === tab);

  // Sort by date (latest first)
  const sortedList = filteredList.sort(sortByDate);

  const paginatedNews = await Promise.all(
    sortedList.slice(startIndex, endIndex).map(async (news) => {
      if (!news.image) {
        if (news.type === "article") {
          news.image = news.image;
          // news.image = await fetchImageURL(news.link);
        }
      }
      return news;
    })
  );

  return NextResponse.json({
    total: sortedList.length,
    page,
    limit,
    totalPages: Math.ceil(sortedList.length / limit),
    data: paginatedNews,
    // new_news_list: NEW_NEWS_LIST,
  });
};

const NEWS_LIST = [
  {
    title: "국토부, 부동산 서비스산업 창업 경진대회 '나인와트팀' 최우수상",
    date: "2018.09.10",
    origin: "데일리안",
    link: "https://www.dailian.co.kr/news/view/738252/?sc=naver",
    image: "http://cdnimage.dailian.co.kr/news/201809/news_1536542613_738252_m_1.jpg",
    type: "article",
  },
  {
    title: "세상을 밝히는 특별한 시민 아이디어’ 소개",
    date: "2018.09.20",
    origin: "에너지데일리",
    link: "http://www.energydaily.co.kr/news/articleView.html?idxno=93178",
    image: "https://cdn.energydaily.co.kr/news/thumbnail/201809/93178_50785_1554_v150.jpg",
    type: "article",
  },
  {
    title: "한국에너지공단, '에너지 벤처' 든든한 동반자로…시민창업대회 1만명 넘게 몰려",
    date: "2018.11.08",
    origin: "매일경제",
    link: "https://www.mk.co.kr/news/special-edition/view/2018/11/699270/",
    image:
      "https://pimg.mk.co.kr/meet/neds/2018/11/image_readtop_2018_699270_15416173223523847.jpg",
    type: "article",
  },
  {
    title: "‘공공데이터, 창업미래 경쟁력 되다’ 제6회 공공데이터활용 창업경진대회 왕중왕전 개최",
    date: "2018.11.12",
    origin: "전자신문",
    link: "https://m.etnews.com/20181112000522",
    image: "https://img.etnews.com/news/article/2018/11/12/cms_temp_article_12183608529885.jpg",
    type: "article",
  },
  {
    title: "소셜 정보방송 무알時報(15), ‘2018 공공데이터 창업경진대회 편, 나인와트 출연",
    date: "2018.12.05",
    origin: "전자신문",
    link: "https://m.etnews.com/20181205000089?obj=Tzo4OiJzdGRDbGFzcyI6Mjp7czo3OiJyZWZlcmVyIjtOO3M6NzoiZm9yd2FyZCI7czoxMzoid2ViIHRvIG1vYmlsZSI7fQ%3D%3D",
    image: "https://img.etnews.com/photonews/1812/1135541_20181205112852_368_0001.jpg",
    type: "article",
  },
  {
    title: "인천 스타트업이 전합니다 ‘웰컴투팁스’, 나인와트 최우수상",
    date: "2019.04.12",
    origin: "venture square",
    link: "https://www.venturesquare.net/778514",
    image: "https://www.venturesquare.net/wp-content/uploads/2019/04/welcometotips-02.jpg",
    type: "article",
  },
  {
    title:
      "대한민국 소프트웨어(SW) 융합 해커톤 대회서 인천 대표 나인와트, 유사모랩, 어덴저스 등 3개 팀 우수상",
    date: "2019.09.05",
    origin: "경기일보",
    link: "http://www.kyeonggi.com/news/articleView.html?idxno=2160278",
    image:
      "https://ypzxxdrj8709.edge.naverncp.com/data2/content/image/2019/09/05/.cache/512/201909050949334.jpg",
    type: "article",
  },
  {
    title: "2019 인천 지식재산(IP) FESTIVAL 개최, 발명아이디어 콘테스트 대상",
    date: "2019.11.06",
    origin: "일간투데이",
    link: "http://www.dtoday.co.kr/news/articleView.html?idxno=335746",
    image: "http://www.dtoday.co.kr/image/logo/snslogo_20240326030744.png",
    type: "article",
  },
  {
    title: "인천 도시문제 해결 공공플랫폼 개발대회 수상자 10팀 선발",
    date: "2019.11.17",
    origin: "국민일보",
    link: "http://news.kmib.co.kr/article/view.asp?arcid=0013938144&code=61121111&cp=nv",
    image: "https://image.kmib.co.kr/online_image/2019/1117/611211110013938144_1.jpg",
    type: "article",
  },
  {
    title: "인천시, '2019 시빅 핵페어' 최종 수상작 선정",
    date: "2019.11.18",
    origin: "이뉴스투데이",
    link: "http://www.enewstoday.co.kr/news/articleView.html?idxno=1349792",
    image: "http://www.enewstoday.co.kr/image/logo/snslogo_20230418091055.jpg",
    type: "article",
  },
  {
    title: "한국사회투자, 네번째 임팩트투자 기업에 '나인와트' 선정",
    date: "2019.11.21",
    origin: "전자신문",
    link: "https://m.etnews.com/20191121000187",
    image: "https://img.etnews.com/photonews/1911/1245787_20191121154525_303_0001.jpg",
    type: "article",
  },
  {
    title: "국내 AI스타트업 정보 총 망라된 '2019 KOREA AI Startups' 출간...",
    date: "2019.11.26",
    origin: "인공지능신문",
    link: "http://www.aitimes.kr/news/articleView.html?idxno=14758",
    image: "https://cdn.aitimes.kr/news/thumbnail/201911/14758_15733_255_v150.jpg",
    type: "article",
  },
  {
    title: "환경부-SK이노베이션, ‘환경분야 소셜 비즈니스 발굴 공모전’ 기업 선정",
    date: "2020.08.12",
    origin: "이로운넷",
    link: "https://www.eroun.net/news/articleView.html?idxno=13078",
    image: "https://cdn.eroun.net/news/thumbnail/202008/13078_38125_5820_v150.jpg",
    type: "article",
  },
  {
    title: "한국인공지능협회, ‘서울형 뉴딜 일자리 AI 데이터 구축사업’ MOU 체결",
    date: "2020.09.21",
    origin: "로봇신문",
    link: "http://www.irobotnews.com/news/articleView.html?idxno=22382",
    image: "https://cdn.irobotnews.com/news/photo/202009/22382_49765_1045.jpg",
    type: "article",
  },
  {
    title: "비행선박부터 액화수소 충전트럭까지…스타트업도 '녹색' 바람",
    date: "2020.10.14",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2020100713423412549",
    image: "https://thumb.mt.co.kr/21/2020/10/2020100713423412549_1.jpg",
    type: "article",
  },
  {
    title: "[20Startup] 기술과 혁신으로 무장한 솔루션 스타트업 부각",
    date: "2020.11.22",
    origin: "w-startup",
    link: "http://www.w-startup.com/news/articleView.html?idxno=11347",
    image: "https://cdn.issuenbiz.com/news/thumbnail/202011/11347_11710_4643_v150.jpg",
    type: "article",
  },
  {
    title: "도시문제 해결사 나인와트, 건축물 에너지 건강검진 솔루션(energyMAP) 성과 주목",
    date: "2020.12.30",
    origin: "국민일보",
    link: "http://news.kmib.co.kr/article/view.asp?arcid=0015376870&code=61141411",
    image: "https://image.kmib.co.kr/online_image/2020/1230/611414110015376870_1.jpg",
    type: "article",
  },
  {
    title: "2021 주목할만한 AI 스타트업 25",
    date: "2020.12.31",
    origin: "Ai타임스",
    link: "http://www.aitimes.com/news/articleView.html?idxno=135345",
    image: "https://cdn.aitimes.com/news/thumbnail/202012/135345_133668_849_v150.jpg",
    type: "article",
  },
  {
    title: "KB금융, 육성 대상 스타트업 22개사 추가 선정",
    date: "2021.03.19",
    origin: "연합뉴스",
    link: "https://www.yna.co.kr/view/AKR20210319105800002",
    image: "https://img2.yna.co.kr/etc/inner/KR/2021/03/19/AKR20210319105800002_01_i_P4.jpg",
    type: "article",
  },
  {
    title: "그린 리더십' 선봉에 선 KB 윤종규…녹색금융이 미래 경쟁력",
    date: "2021.03.30",
    origin: "인더뉴스",
    link: "https://www.inthenews.co.kr/news/article.html?no=32205",
    image: "",
    type: "article",
  },
  {
    title: "낭비 과잉이 환경파괴 주범으로...‘착한 스타트업’이 뜬다",
    date: "2021.04.01",
    origin: "헤럴드경제",
    link: "http://biz.heraldcorp.com/view.php?ud=20210401000768",
    image: "https://wimg.heraldcorp.com/content/default/2021/04/01/20210401000609_0.jpg",
    type: "article",
  },
  {
    title: "경북테크노파크, 산업부 ‘풍력에너지 클러스터 인재양성사업’ 선정",
    date: "2021.05.28",
    origin: "nsp통신",
    link: "http://www.nspna.com/news/?mode=view&newsid=504690",
    image: "20210528133906_504690_1.jpg",
    type: "article",
  },
  {
    title: "데이터산업진흥원, 2021 데이터-스타즈 25곳 선정",
    date: "2021.06.01",
    origin: "디지털타임스",
    link: "http://www.dt.co.kr/contents.html?article_no=2021060102109931650010",
    image: "//contents.dt.co.kr/images/202106/2021060102109931650010[1].jpg",
    type: "article",
  },
  {
    title: "경북테크노파크, 풍력에너지 클러스터 인재양성사업 참여기관 워크숍 성료",
    date: "2021.07.20",
    origin: "The JoongAng 경제",
    link: "https://news.joins.com/article/24109822",
    image: "",
    type: "article",
  },
  {
    title: "소풍벤처스-신보, 소셜벤처 액셀러레이팅 프로그램 ‘NEST’ 데모데이 개최",
    date: "2021.07.23",
    origin: "platum",
    link: "https://platum.kr/archives/167443",
    image: "https://platum.kr/wp-content/uploads/2021/07/soo-1024x498.png",
    type: "article",
  },
  {
    title: "신한금융·셀트리온, 20개 스타트업에 스마트시티 등 사업화 지원",
    date: "2021.08.04",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2021080409271849093",
    image: "https://thumb.mt.co.kr/21/2021/08/2021080409271849093_1.jpg",
    type: "article",
  },
  {
    title: "“ESG의 ‘E기업’ 선제 발굴” VC 몰린 임팩트다이브",
    date: "2021.09.06",
    origin: "the bell",
    link: "https://www.thebell.co.kr/free/content/ArticleView.asp?key=202109021506377680106138&lcode=00",
    image: "https://image.thebell.co.kr/news/photo/2021/09/02/20210902153155704_n.jpg",
    type: "article",
  },
  {
    title: "건물·공장 전기 줄줄 새는데 ESG 경영?...AI가 에너지 낭비 막는다",
    date: "2021.09.14",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2021090714322182182&outlink=1&ref=%3A%2F%2F",
    image: "https://thumb.mt.co.kr/21/2021/09/2021090714322182182_1.jpg",
    type: "article",
  },
  {
    title: "겨울 앞두고 '에너지 대란' 우려...줄줄 새는 전기 잡는 스타트업 뜬다",
    date: "2021.10.07",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2021100613513689025",
    image: "https://thumb.mt.co.kr/21/2021/10/2021100613513689025_1.jpg",
    type: "article",
  },
  {
    title: "신한 스퀘어브릿지 인천 스타트업 콘퍼런스 2일 개최",
    date: "2021.11.01",
    origin: "국민일보",
    link: "http://news.kmib.co.kr/article/view.asp?arcid=0016421848&code=61121111&cp=nv",
    image:
      "https://image.kmib.co.kr/online_image/2021/1101/2021110112571186235_1635739031_0016421848.jpg",
    type: "article",
  },
  {
    title: "SK에코플랜트, 글로벌 ESG 선도 스타트업 발굴 나서",
    date: "2021.11.15",
    origin: "투데이에너지",
    link: "http://www.todayenergy.kr/news/articleView.html?idxno=242203",
    image: "https://cdn.todayenergy.kr/news/thumbnail/202111/242203_122295_657_v150.jpg",
    type: "article",
  },
  {
    title: "한국데이터산업진흥원, 2021 DATA-Stars Awards 성료",
    date: "2021.11.19",
    origin: "보안뉴스",
    link: "https://www.boannews.com/media/view.asp?idx=102577&kind=",
    image: "http://www.boannews.com/media/upFiles2/2021/11/835251354_4738.jpg",
    type: "article",
  },
  {
    title: "SK에코플랜트, 친환경 사업으로 글로벌 ESG 영토 넓히기 박차",
    date: "2021.11.29",
    origin: "Viewers",
    link: "http://theviewers.co.kr/View.aspx?No=2130094",
    image: "http://theviewers.co.kr/Files/30/News/202111/1979_20211129144315370.JPG",
    type: "article",
  },
  {
    title: "“이 건물 전기사용량이 지나치게 많네요”…AI·빅데이터로 에너지낭비 막는다",
    date: "2021.12.15",
    origin: "매일경제",
    link: "https://www.mk.co.kr/news/business/view/2021/12/1138331/",
    image: "https://pimg.mk.co.kr/meet/2021/12/image_listtop_2021_1138331_1639556042.jpg",
    type: "article",
  },
  {
    title: "데이터 댐 성공사례 봤더니…수출·청년 스타트업 ‘특급 도우미’",
    date: "2021.12.21",
    origin: "zdnetkorea",
    link: "https://zdnet.co.kr/view/?no=20211221172921",
    image: "https://image.zdnet.co.kr/2020/09/02/3ed88669d597dff5f024b4f49566a812.jpg",
    type: "article",
  },
  {
    title: "국토부-LX공사, 공간정보 창업아이디어 발굴해 육성한다",
    date: "2021.12.24",
    origin: "이데일리",
    link: "https://www.edaily.co.kr/news/read?newsId=01315286629281800&mediaCodeNo=257&OutLnkChk=Y",
    image: "https://image.edaily.co.kr/images/Photo/files/NP/S/2021/12/PS21122400099.jpg",
    type: "article",
  },
  {
    title: "전기안전점검 원격전환…새 비즈모델 창출 '촉각'",
    date: "2021.12.28",
    origin: "zdnetkorea",
    link: "https://zdnet.co.kr/view/?no=20211228172454",
    image: "https://image.zdnet.co.kr/2021/10/06/6a040504d2eb4b4bbdf7ebd796caa02b.jpg",
    type: "article",
  },
  {
    title: "가비아, 에너지 부문 11개 기업 SaaS 전환‧개발 지원",
    date: "2021.12.30",
    origin: "IT DAILY",
    link: "http://www.itdaily.kr/news/articleView.html?idxno=205765",
    image: "https://cdn.itdaily.kr/news/thumbnail/202112/205765_206655_2524_v150.jpg",
    type: "article",
  },
  {
    title: "유니콘팩토리 올라탄 스타트업, '인재·자금·고객' 몰렸다",
    date: "2022.02.09",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2022020817320995184",
    image: "https://thumb.mt.co.kr/21/2022/02/2022020817320995184_1.jpg",
    type: "article",
  },
  {
    title: "대통령 인수위-LX공사, 중소벤처 ESG 역량 강화 간담회",
    date: "2022.05.04",
    origin: "전기신문",
    link: "https://www.electimes.com/news/articleView.html?idxno=304112",
    image: "https://cdn.electimes.com/news/thumbnail/202205/304112_503292_5321_v150.jpg",
    type: "article",
  },
  {
    title: "교통혼잡 걱정 마세요 스마트시티 성큼 개인정보 침해 우려도",
    date: "2022.04.01",
    origin: "TECHWORLD",
    link: "https://www.epnc.co.kr/news/articleView.html?idxno=221581",
    image: "https://cdn.epnc.co.kr/news/thumbnail/202204/221581_222277_3542_v150.jpg",
    type: "article",
  },
  {
    title: "구자균 회장이 직저 챙긴 스타트업 6개사...협업 기대 커",
    date: "2022.04.01",
    origin: "국민일보",
    link: "https://news.mt.co.kr/mtview.php?no=2022040115352049935",
    image: "https://thumb.mt.co.kr/21/2022/04/2022040115352049935_1.jpg",
    type: "article",
  },
  {
    title: "2022년 그린뉴딜 유망기업 30개사 선정, 수여식 개최",
    date: "2022.05.04",
    origin: "국토일보",
    link: "https://www.ikld.kr/news/articleView.html?idxno=253400",
    image: "http://www.ikld.kr/news/thumbnail/202205/253400_103786_3319_v150.jpg",
    type: "article",
  },
  {
    title: "중기부-중진공, APEC 저탄소 산업 생태계 조성 포럼",
    date: "2022.06.23",
    origin: "노컷뉴스",
    link: "https://www.nocutnews.co.kr/news/5776228",
    image: "https://file2.nocutnews.co.kr/newsroom/image/2022/06/23/202206231353567675_0.jpg",
    type: "article",
  },
  {
    title: "인천센터, 상반기 투자유치 사업계획 발표회(BiiG WAVE IR) 개최",
    date: "2022.07.05",
    origin: "VENTURE SQUARE",
    link: "https://www.venturesquare.net/858358",
    image:
      "https://www.venturesquare.net/wp-content/uploads/2022/07/2022년도-상반기-빅웨이브-투자유치-IR-포스터-e1656991421844.jpg",
    type: "article",
  },
  {
    title: "LS일렉트릭, 에너지-자동화사업분야 국내 스타트업 6곳과 협업한다",
    date: "2022.03.31",
    origin: "Business Post",
    link: "https://www.businesspost.co.kr/BP?command=article_view&num=276315",
    image: "https://www.businesspost.co.kr/news/photo/202203/20220331175912_59332.jpg",
    type: "article",
  },
  {
    title: "이지스자산운용, 소셜벤처 육성 프로그램 '이지스 임팩트 스테이지'참가팀 모집",
    date: "2022.08.08",
    origin: "파이낸셜투데이",
    link: "https://www.ftoday.co.kr/news/articleView.html?idxno=239694",
    image: "https://cdn.ftoday.co.kr/news/thumbnail/202208/239694_238806_188_v150.jpg",
    type: "article",
  },
  {
    title:
      "나인와트, 2022월드 스마트시티 엑스포서 건물 에너지 진단 플랫폼 공개... 에너지 사용량 한눈에 파악",
    date: "2022.09.07",
    origin: "aving",
    link: "https://kr.aving.net/news/articleView.html?idxno=1771642",
    image: "https://cdn.kr.aving.net/news/photo/202209/1771642_688112_595.jpg",
    type: "article",
  },
  {
    title: "인천TP '인천 라이징 스타 데모데이 열어",
    date: "2022.11.14",
    origin: "전자신문",
    link: "https://www.etnews.com/20221114000314",
    image: "https://img.etnews.com/photonews/2211/1593535_20221114222440_894_0001.jpg",
    type: "article",
  },
  {
    title: "영국으로 간 K-스타트업 8개 사 ",
    date: "2022.11.18",
    origin: "platum",
    link: "https://platum.kr/archives/197056",
    image: "https://platum.kr/wp-content/uploads/2022/11/3-6.jpg",
    type: "article",
  },
  {
    title:
      "서울창조경제혁신센터, 2022년 대-스타 해결사 플랫폼 4차산업 분야 스타트업 23개사 지원 시작",
    date: "2022.12.14",
    origin: "서울경제",
    link: "https://www.sedaily.com/NewsView/26EWF0B9B8",
    image: "https://newsimg.sedaily.com/2022/12/14/26EWF0B9B8_1.jpg",
    type: "article",
  },
  {
    title: "印尼, 40조 규모 ‘新수도’ 이전… “세종시 벤치마킹”",
    date: "2023.03.21",
    origin: "동아일보",
    link: "https://www.donga.com/news/Economy/article/all/20230320/118439292/1",
    image: "https://dimg.donga.com/wps/NEWS/IMAGE/2023/03/20/118439290.1.jpg",
    type: "article",
  },
  {
    title: "강남구, 민·관 협력 오픈 이노베이션 ‘제1회 강남, 디지털을 품다’ 개최",
    date: "2023.04.13",
    origin: "스카이데일리",
    link: "https://skyedaily.com/news/news_view.html?ID=188468",
    image: "https://pds.skyedaily.com/top_image/202304/188468_p.jpg",
    type: "article",
  },
  {
    title: "강남구, ‘강남, 디지털을 품다’ 참여 기업 11개사와 업무협약 체결",
    date: "2023.07.10",
    origin: "시민일보",
    link: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160299391491679",
    image: "https://www.siminilbo.co.kr/news/data/20230707/p1160299391491679_217_thum.JPG",
    type: "article",
  },
  {
    title: "에스아이디파트너스, 초거대 AI를 주제로 오픈테크 특강 성료",
    date: "2023.07.27",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2023072714180756678",
    image: "https://thumb.mt.co.kr/21/2023/07/2023072714180756678_1.jpg",
    type: "article",
  },
  {
    title: "서울 강남구, 바르셀로나에서 스마트 도시 정책을 전 세계에 알린다",
    date: "2023.11.02",
    origin: "문화경제",
    link: "https://weekly.cnbnews.com/news/article.html?no=155226",
    image: "https://weekly.cnbnews.com/data/photos/20231144/art_155226_1698898202.jpg",
    type: "article",
  },
  {
    title: "강남구, 도시 에너지 3D맵 구축으로 빅데이터 활용 우수상",
    date: "2023.11.06",
    origin: "서울신문",
    link: "https://amp.seoul.co.kr/seoul/20231106500252",
    image: "",
    type: "article",
  },
  {
    title: "오픈AI는 왜 이 스타트업을 골랐나... 인류에 도움되는 AI 필",
    date: "2023.12.15",
    origin: "아이뉴스24",
    link: "https://www.inews24.com/view/1666119",
    image: "https://image.inews24.com/v1/05727d0d9d06c1.jpg",
    type: "article",
  },
  {
    title: "중기부, 오픈AI 협업할 스타트업 13곳과 간담회",
    date: "2024.01.30",
    origin: "중소기업신문",
    link: "https://www.smedaily.co.kr/news/articleView.html?idxno=280389",
    image: "https://cdn.smedaily.co.kr/news/thumbnail/202401/280389_217627_5554_v150.jpg",
    type: "article",
  },
  {
    title: "IBK창공(創工) 마포' 12기 투자유치 프로그램 정기 IR 개시",
    date: "2024.01.26",
    origin: "머니투데이",
    link: "https://news.mt.co.kr/mtview.php?no=2024012618214340000",
    image: "https://thumb.mt.co.kr/21/2024/01/2024012618214340000_1.jpg",
    type: "article",
  },
  {
    title: "IFEZ 인천스타트업파크, 글로벌 실증 메카로 자리매김",
    date: "2024.01.07",
    origin: "전국매일신문",
    link: "https://www.jeonmae.co.kr/news/articleView.html?idxno=1005743",
    image: "https://www.jeonmae.co.kr/news/thumbnail/202401/1005743_698581_117_v150.jpg",
    type: "article",
  },
  {
    title: "맞춤형 전기요금 설정 도움...나인와트가 도시를 살리는 비법",
    date: "2024.02.26",
    origin: "이데일리",
    link: "https://www.edaily.co.kr/News/Read?newsId=01170966638794456&mediaCodeNo=257&OutLnkChk=Y",
    image: "https://image.edaily.co.kr/images/Photo/files/NP/S/2024/02/PS24022600043.jpg",
    type: "article",
  },
  {
    title: "샘 올트먼 깜짝 방문…오픈AI, K스타트업 10개사 키운다",
    date: "2024.03.17",
    origin: "이데일리",
    link: "https://www.edaily.co.kr/News/Read?newsId=01426806638824304&mediaCodeNo=257&OutLnkChk=Y",
    image: "https://image.edaily.co.kr/images/Photo/files/NP/S/2024/03/PS24031700152.jpg",
    type: "article",
  },
  {
    title: "(2024 전기산업대전) 창사 50년 LS일렉트릭, 파트너사와 100년 미래 꿈꾼다",
    date: "2024.04.04",
    origin: "전기신문",
    link: "https://www.electimes.com/news/articleView.html?idxno=335020",
    image: "https://cdn.electimes.com/news/thumbnail/202404/335020_536715_5436_v150.jpg",
    type: "article",
  },
  {
    title: "서울경제진흥원, 미·중·일 진출 액셀러레이팅 프로그램 운영",
    date: "2024.05.24",
    origin: "지디넷코리아",
    link: "https://zdnet.co.kr/view/?no=20240524135002",
    image: "https://image.zdnet.co.kr/2024/05/20/d8511e018029a2b6f9d12694f9fd17f8.jpg",
    type: "article",
  },
  {
    title: "에너지공단, 지역 분산자원 살리는 'ESS 9총사' 결성",
    date: "2024.05.24",
    origin: "데일리 한국",
    link: "https://daily.hankooki.com/news/articleView.html?idxno=1087729",
    image: "https://cdn.daily.hankooki.com/news/thumbnail/202405/1087729_1314736_034_v150.jpg",
    type: "article",
  },
  {
    title: "[더벨][VC 투자기업] 나인와트, 30억 시리즈A 추가 유치 시동",
    date: "2024.09.25",
    origin: "더벨",
    link: "https://www.thebell.co.kr/free/content/ArticleView.asp?key=202409111454343520108923",
    image: "https://image.thebell.co.kr/news/photo/2024/09/11/20240911145658076.png",
    type: "article",
  },
  {
    title: "나인와트, 시나넨 홀딩스와 함께 스마트시티 글로벌 실증 프로젝트 본격 추진",
    date: "2024.10.18",
    origin: "비욘드포스트",
    link: "https://www.beyondpost.co.kr/view.php?ud=2024101811465667599aeda69934_30",
    image:
      "https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?pp=002&idx=999&simg=20241018114705082769aeda6993417521136223.jpg&nmt=30",
    type: "article",
  },
  {
    title: "IBK창공, 2024년 일본 액셀러레이팅 프로그램 성료",
    date: "2024.11.06",
    origin: "프라임경제",
    link: "https://www.newsprime.co.kr/news/article/?no=661663",
    image: "http://www.newsprime.co.kr/data/photos/cdn/20241145/art_661663_1730859711.jpg",
    type: "article",
  },
  {
    title:
      "나인와트, Pre-CES2025 인천(IFEZ)서 에너지 리노베이션 플랫폼 ‘WATTI’ 알린다... “에너지 및 탄소 저감량 예측”",
    date: "2024.11.07",
    origin: "에이빙뉴스",
    link: "https://kr.aving.net/news/articleView.html?idxno=1795290",
    image: "https://cdn.kr.aving.net/news/photo/202411/1795290_738196_537.jpg",
    type: "article",
  },
  {
    title: "마이크로소프트와 손잡는 인천... 인천경제청, 스타트업 육성 '협업'",
    date: "2024.11.13",
    origin: "경기일보",
    image:
      "https://ypzxxdrj8709.edge.naverncp.com/data2/content/image/2024/11/13/.cache/512/20241113580151.jpg",
    link: "https://www.kyeonggi.com/article/20241113580126",
    type: "article",
  },
  {
    title: "인천경제청과 한국MS, 인천 유망 스타트업 육성 업무협약 체결",
    date: "2024.11.13",
    origin: "인천in",
    image: "http://www.incheonin.com/news/thumbnail/202411/105379_158398_4149_v150.jpg",
    link: "https://www.incheonin.com/news/articleView.html?idxno=105379",
    type: "article",
  },
  {
    title: "인천센터, 빅웨이브 글로벌 참여기업 2개사 일본 현지 IR 피칭 성료",
    date: "2024.11.14",
    origin: "브레이크뉴스",
    image: "http://www.ebreaknews.com/imgdata/ebreaknews_com/202411/2024111438133136.jpg",
    link: "https://www.breaknews.com/1070760",
    type: "article",
  },
  {
    title:
      "나인와트, CES 2025서 도시 단위 에너지 리노베이션 솔루션 ’WATTI’ 소개 나서... “그린 리모델링 사업 함께할 파트너 모집한다!”",
    date: "2025.01.10",
    origin: "에이빙뉴스",
    image: "https://cdn.kr.aving.net/news/photo/202501/1796763_741203_292.jpg",
    link: "https://kr.aving.net/news/articleView.html?idxno=1796763",
    type: "article",
  },
  {
    title: "에스아이디파트너스, 투자기업 5개사 CES서 혁신상 수상·비즈니스 밋업 등 성과",
    date: "2025.01.16",
    origin: "머니투데이",
    image: "https://thumb.mt.co.kr/21/2025/01/2025011615261725339_1.jpg",
    link: "https://news.mt.co.kr/mtview.php?no=2025011615261725339",
    type: "article",
  },
  {
    title: "샘 올트먼, 국내 스타트업과 협력…AI 공동전선 구축",
    date: "2025.02.04",
    origin: "아주경제",
    image: "https://image.ajunews.com/content/image/2025/02/04/20250204151308896270.jpg",
    link: "https://www.ajunews.com/view/20250204151150940",
    type: "article",
  },
  {
    title: "나인와트, 건물 탄소관리 솔루션으로 탄소중립 시대 선도",
    date: "2025.04.16",
    origin: "서울경제",
    image: "https://www.sentv.co.kr/data/sentv/image/2025/04/16/sentv20250416000104.jpg",
    link: "https://www.sentv.co.kr/article/view/sentv202504160106",
    type: "article",
  },
  {
    title: "인천지식재산센터 ‘글로벌IP스타기업’ 수여식",
    date: "2025.04.16",
    origin: "경인일보",
    image:
      "https://wimg.kyeongin.com/news/cms/2025/04/16/news-p.v1.20250416.bdd78a727ba2428a9aa6bd79ad1d1592_R.jpg",
    link: "https://www.kyeongin.com/article/1736524",
    type: "article",
  },
  {
    title: "에너지공단, '8개 분산에너지 비즈니스 모델 지원 업무협약' 체결",
    date: "2025.04.18",
    origin: "국토일보",
    image: "http://www.ikld.kr/news/thumbnail/202504/311777_158634_1145_v150.jpg",
    link: "https://www.ikld.kr/news/articleView.html?idxno=311777",
    type: "article",
  },
  {
    title: "K-스타트업, 프랑스 비바테크 3년 연속 출전...19개 창업기업 유럽 시장 진출 '날개'",
    date: "2025.04.24",
    origin: "뉴스핌",
    image: "https://img.newspim.com/news/2025/04/24/2504241555393670_559_tc.jpg",
    link: "https://www.newspim.com/news/view/20250424001022",
    type: "article",
  },
  {
    title: "더데이원랩 등 19개 스타트업, 유럽 공략...'비바테크 2025' 참가",
    date: "2025.04.24",
    origin: "머니투데이",
    image: "https://thumb.mt.co.kr/21/2025/04/2025042415491591088_1.jpg",
    link: "https://news.mt.co.kr/mtview.php?no=2025042415491591088",
    type: "article",
  },
  {
    title: "에기연, 수열E 활용·에너지믹스 기술개발 ‘킥오프 회의’ 성료",
    date: "2025.05.18",
    origin: "냉동공조저널",
    image: "https://cdn.hvacrj.co.kr/news/photo/202505/30198_30659_4149.jpg",
    link: "https://www.hvacrj.co.kr/news/articleView.html?idxno=30198",
    type: "article",
  },
  {
    title: "IBK창공, 스타트업 8개사와 ‘2025년 일본 액셀러레이팅 프로그램",
    date: "2025.05.23",
    origin: "벤처스퀘어",
    image: "https://www.venturesquare.net/wp-content/uploads/2025/05/ibk.jpg",
    link: "https://www.venturesquare.net/970339",
    type: "article",
  },
  {
    title: '[비바테크 2025] ① 나인와트 "도시의 숨은 에너지 낭비를 제로로"',
    date: "2025.06.04",
    origin: "뉴스핌",
    image: "https://img.newspim.com/news/2025/06/03/2506031300357940.jpg",
    link: "https://www.newspim.com/news/view/20250529000058",
    type: "article",
  },
  {
    title:
      "나인와트, 비바테크 2025서 AI 기반 건물·도시 에너지 성능 분석 플랫폼 ‘WATTI’ 소개 나선다... “유럽 각국으로 PoC 파트너십 확대”",
    date: "2025.06.05",
    origin: "에이빙뉴스",
    image: "https://cdn.kr.aving.net/news/photo/202506/1800792_749682_90.jpg",
    link: "https://kr.aving.net/news/articleView.html?idxno=1800792",
    type: "article",
  },
  {
    title: '"기술 놀랍다" 쏟아진 투자상담…비바테크 사로잡은 K스타트업',
    date: "2025.06.22",
    origin: "머니투데이",
    image: "https://thumb.mt.co.kr/06/2025/06/2025062215245351374_1.jpg/dims/optimize/",
    link: "https://news.mt.co.kr/mtview.php?no=2025062215245351374",
    type: "article",
  },
  {
    title: 'ESG경영 친환경 건물 리모델링의 새로운 기준, “나인와트의 그린플래너 APP"',
    date: "2025.06.23",
    origin: "경기헤드라인",
    image: "https://www.gheadline.co.kr/data/photos/portnews/202506/20250623203427-36185.jpg",
    link: "https://www.gheadline.co.kr/news/article.html?no=481103",
    type: "article",
  },
  {
    title: "[세부과제 참여기관] 나인와트",
    date: "2025.07.07",
    origin: "KHARN칸",
    image:
      "https://www.kharn.kr/data/photos/20250727/art_17516170045572_173b06.png?iqs=0.3452225218728109",
    link: "https://www.kharn.kr/news/article.html?no=28218",
    type: "article",
  },
  {
    title: "용인시산업진흥원, 50여 개 기업 참여 오픈이노베이션 교류회 성황 개최",
    date: "2025.07.19",
    origin: "전자신문	",
    image:
      "https://img.etnews.com/news/article/2025/07/19/news-p.v1.20250719.b478cd13942f43c28d790c0e8eccb9f9_P1.jpg",
    link: "https://www.etnews.com/20250719000070",
    type: "article",
  },
  {
    title: "파리서 머리 맞댄 K-스타트업, 유럽 진출의 길을 열다",
    date: "2025.07.24",
    origin: "벤처스퀘어",
    image: "https://www.venturesquare.net/wp-content/uploads/2025/07/GCCEI_01-1.png",
    link: "https://www.venturesquare.net/995531",
    type: "article",
  },
  {
    title:
      "[클린테크 기업 찾아서](68)나인와트, 도시 속 건물에너지 분석-해결책 제시...스마트시티 만들다",
    date: "2025.06.02",
    origin: "SDG뉴스",
    image: "https://cdn.sdgnews.net/news/photo/202506/48050_52790_4124.jpg",
    link: "https://www.sdgnews.net/news/articleView.html?idxno=48050",
    type: "article",
  },
  {
    title:
      "창업진흥원, ‘비바테크 2025’ K-Startup 통합관 성과공유회 개최... “국내 창업기업 글로벌 혁신의 중심에 서”",
    date: "2025.08.22",
    origin: "에이빙뉴스",
    image: "https://cdn.kr.aving.net/news/photo/202508/1803290_755142_4131.jpg",
    link: "https://kr.aving.net/news/articleView.html?idxno=1803290",
    type: "article",
  },
  {
    title: "서울시, 데이터로 정책 바꾼다…시민 시각화 경진대회 나인와트 우수상",
    date: "2025.09.22",
    origin: "환경과조경",
    image:
      "https://www.lak.co.kr/mark/watermark.php?path=http://www.lak.co.kr/data/news/editor/20250922153053_cvfltibn.jpg",
    link: "https://www.lak.co.kr/news/boardview.php?id=21340",
    type: "article",
  },
  {
    title: "경기도 육성 기후테크 스타트업 4곳 'CES 2026' 혁신상 수상",
    date: "2025.11.06",
    origin: "연합뉴스",
    image:
      "https://imgnews.pstatic.net/image/001/2025/11/06/AKR20251106035800061_01_i_P4_20251106090914825.jpg?type=w860",
    link: "https://n.news.naver.com/article/001/0015727002?sid=101",
    type: "article",
  },
];

const NINEWATT_VIDEO = [
  {
    title: "VIVATECH Meetup NINEWATT",
    date: "2025.06.10",
    origin: "에이빙뉴스",
    type: "video",
    image: "https://i.ytimg.com/vi/2R8Y9kGafuM/0.jpg",
    link: "https://www.youtube.com/watch?v=2R8Y9kGafuM",
  },
  {
    title: "Ninewatt : Urban Energy Renovation Solution 'WATTI' at CES 2025",
    date: "2025.01.13",
    origin: "에이빙뉴스",
    type: "video",
    image: "https://i.ytimg.com/vi/ELIT_G9AUHk/0.jpg",
    link: "https://www.youtube.com/watch?v=ELIT_G9AUHk",
  },
  {
    title: "나인와트, 에너지 리노베이션 플랫폼 ‘WATTI’ 알린다... “에너지 및 탄소 저감량 예측”",
    date: "2024.11.21",
    origin: "AVING NEWS 에이빙 뉴스",
    type: "video",
    image:
      "https://i.ytimg.com/vi/uO1DN4U5oBs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYyhYMA8=&rs=AOn4CLD__kAR_wa1PYTlKyKm4G1x08qZDw",
    link: "https://www.youtube.com/watch?v=uO1DN4U5oBs",
  },
  {
    title:
      "LX공간드림센터 입주기업 사업공유 워크숍_2편 #리빌더에이아이 #더넥스트에이아이 #나인와트",
    date: "2023.01.06",
    origin: "LX한국국토정보공사 Official",
    type: "video",
    image: "https://i.ytimg.com/vi/U7BI83chbXs/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=U7BI83chbXs",
  },
  {
    title: "Insight Session ①ㅣ나인와트 김영록 대표",
    date: "2022.08.19",
    origin: "이지스자산운용",
    type: "video",
    image: "https://i.ytimg.com/vi/FLgqal5oOYA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=FLgqal5oOYA",
  },
  {
    title: "[ICT산업 Hot Clips] ㈜나인와트_2022년 ICT기금사업 우수기업을 만나다",
    date: "2022.08.19",
    origin: "KCA크카TV",
    type: "video",
    image: "https://i.ytimg.com/vi/-rwpBOqQmoc/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=-rwpBOqQmoc",
  },
  {
    title: "나인와트 김영록｜통계화된 수치로 공간에 새로운 문화를 만드는 솔루션",
    date: "2022.08.18",
    origin: "IGIS IMPACT STAGE",
    type: "video",
    image: "https://i.ytimg.com/vi/NqyqeNSlWgE/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=NqyqeNSlWgE",
  },
  {
    title: "[무삭제] 기후 문제를 해결할 효율적인 소프트웨어 | 나인와트 IR 피칭, Q&A",
    date: "2022.07.02",
    origin: "EO",
    type: "video",
    image: "https://i.ytimg.com/vi/UF5r5IT072k/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=UF5r5IT072k",
  },
  {
    title: "[IR Room] 시즌2 Ep.4-1 그린리모델링을 통한 건물 에너지 절감! 📌나인와트",
    date: "2022.05.11",
    origin: "SOVAC",
    type: "video",
    image: "https://i.ytimg.com/vi/mT1lOPP2VKc/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=mT1lOPP2VKc",
  },
  {
    title:
      "2022년 LS ELECTRIC x 무역협회 오픈이노베이션 최종발표회 현장 스케치(3/31) #LSELECTRIC #무역협회 #스타트업브랜치",
    date: "2022.04.12",
    origin: "StartupBranch",
    type: "video",
    image: "https://i.ytimg.com/vi/k4_4U3FaAGo/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=k4_4U3FaAGo",
  },
  {
    title: "데이터로 돈을 만든 떠오르는 스타트업 3인방",
    date: "2022.01.12",
    origin: "EO",
    type: "video",
    image: "https://i.ytimg.com/vi/P5_7uXX_FXI/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=P5_7uXX_FXI",
  },
  {
    title: "[2021 DATA-Stars 수상기업 개별 인터뷰] 나인와트",
    date: "2021.12.31",
    origin: "데이터 비즈니스 채널",
    type: "video",
    image: "https://i.ytimg.com/vi/GPCCM6XkqHw/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=GPCCM6XkqHw",
  },
  {
    title: "2021 IFEZ 스마트시티 국제심포지엄 ; 2021 IFEZ Smart City International Symposium (Kor)",
    date: "2021.12.07",
    origin: "IFEZ 인천경제자유구역",
    type: "video",
    image: "https://i.ytimg.com/vi/H7vtHHlb-Lg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=H7vtHHlb-Lg&t=15460s",
  },
  {
    title: "[인스타] 인천 스타트업 파크에 체험맨이 간다! 나인와트편",
    date: "2021.12.03",
    origin: "인천광역시",
    type: "video",
    image: "https://i.ytimg.com/vi/Eu7Xk80aghU/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Eu7Xk80aghU",
  },
  {
    title: "나인와트 & DATA-Stars 기업소개 1편",
    date: "2021.12.03",
    origin: "Ninewatt 블로그",
    type: "video",
    image:
      "https://blogthumb.pstatic.net/MjAyMTEyMDNfMzUg/MDAxNjM4NDk4NjYxMTI5.vcMyZAijEA9axaeyKljm8gXErQrnV17yf6crSPB9KhUg.BECvRiMzihouBQmXrCYIWXQRteyB8UY5fGf8YrqA7M0g.JPEG.ninewatt/%C1%A6%B8%F1%C0%BB-%C0%D4%B7%C2%C7%D8%C1%D6%BC%BC%BF%E4_-001_%286%29.jpg?type=w2",
    link: "https://blog.naver.com/PostView.naver?blogId=ninewatt&logNo=222585687177&categoryNo=13&parentCategoryNo=&from=thumbnailList",
  },
  {
    title: "나인와트 & DATA Stars 기업소개 2편",
    date: "2021.12.03",
    origin: "Ninewatt 블로그",
    type: "video",
    image:
      "https://blogthumb.pstatic.net/MjAyMTEyMDNfMTkx/MDAxNjM4NTA1OTA0MDc4.aa0sVYUdJ2EqEkUdIfLVl2v27DHy5wlo5EeluMggRX8g.wY8mliGmzIhrwZz--VzsLD8DoWSu-aa0JHvTTJTsliMg.JPEG.ninewatt/%C1%A6%B8%F1%C0%BB-%C0%D4%B7%C2%C7%D8%C1%D6%BC%BC%BF%E4_-001_%286%29.jpg?type=w2",
    link: "https://blog.naver.com/PostView.naver?blogId=ninewatt&logNo=222585778986&categoryNo=13&parentCategoryNo=&from=thumbnailList",
  },
  {
    title: "Global startups to save the Earth! D.DAY X Global League🌏 LIVE",
    date: "2021.11.13",
    origin: "D.CAMP",
    type: "video",
    image: "https://i.ytimg.com/vi/ZhTCCaaoCVU/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ZhTCCaaoCVU&t=1916s",
  },
  {
    title: "(CH2/KOR) 2일차 - 제1회 아·태 영리더스포럼, 제주",
    date: "2021.11.12",
    origin: "YLF_JEJU",
    type: "video",
    image: "https://i.ytimg.com/vi/KSDizSNLO-4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=KSDizSNLO-4&t=5264s",
  },
  {
    title: "2021 신한 스퀘어브릿지 인천 스타트업 콘퍼런스 ‘THE CONNECT 2021’",
    date: "2021.11.02",
    origin: "신한 스퀘어브릿지",
    type: "video",
    image: "https://i.ytimg.com/vi/B6ovT2eEBjA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=B6ovT2eEBjA",
  },
  {
    title: "[창업사례] 창업성공사례② 나인와트 김영록대표",
    date: "2021.11.01",
    origin: "한국부동산원",
    type: "video",
    image: "https://i.ytimg.com/vi/kl1u4g6aATw/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=kl1u4g6aATw",
  },
  {
    title:
      "[VIP TALK] ep.3 지구의 마지막 1.5˚C를 지켜라! 빅데이터로 여는 에너지 대전환 I 에너지문제 I 지구온난화 I 그린뉴딜 🌏",
    date: "2021.07.30",
    origin: "현대차 정몽구 재단",
    type: "video",
    image: "https://i.ytimg.com/vi/Jbt5-MR8qOI/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Jbt5-MR8qOI&t=348s",
  },
  {
    title: "[2021 DATA-Stars 킥오프데이 개별인터뷰] 나인와트",
    date: "2021.07.16",
    origin: "데이터 비즈니스 채널",
    type: "video",
    image: "https://i.ytimg.com/vi/C0ZPY8ExgQc/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=C0ZPY8ExgQc",
  },
  {
    title: "[나인와트(ninewatt)] 에너지맵",
    date: "2021.01.26",
    origin: "Ninewatt",
    type: "video",
    image:
      "https://i.ytimg.com/vi/0Z5M6tHGTPs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoACtAOKAgwIABABGDkgSSh_MA8=&rs=AOn4CLBYl83ZuLwTOkvDjSXdfiuOPxMAXA",
    link: "https://www.youtube.com/watch?v=0Z5M6tHGTPs",
  },
  {
    title: "나인와트 인포그래픽 홍보영상",
    date: "2021.01.15",
    origin: "주노베이션",
    type: "video",
    image: "https://i.ytimg.com/vi/-FRg9N4k4gY/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=-FRg9N4k4gY",
  },
  {
    title: "[BLUEPOINT DEMO DAY 7] 나인와트(Ninewatt)",
    date: "2020.12.01",
    origin: "블루포인트파트너스",
    type: "video",
    image: "https://i.ytimg.com/vi/qWJc-XpKACQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=qWJc-XpKACQ&t=1s",
  },
  {
    title: "9ninewatt 홍보 동영상 - 한국어",
    date: "2019.12.24",
    origin: "Ninewatt",
    type: "video",
    image: "https://i.ytimg.com/vi/ObMkTOVy2JE/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ObMkTOVy2JE",
  },
  {
    title: "9ninewatt 홍보 동영상 - 영어",
    date: "2019.12.24",
    origin: "Ninewatt",
    type: "video",
    image: "https://i.ytimg.com/vi/yRAgjCPVtF0/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=yRAgjCPVtF0",
  },
];

import { useEffect, useRef, useState } from "react";

import NewsCategory from "../_components/news-category";
import NewsBox from "../_components/news-box";
import Pagination from "@/app/_components/pagination";

import { NewsDataType, NewsResponseType } from "@/types/api-types";

export default function NewsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ctg, setCtg] = useState("all");
  const [newsList, setNewsList] = useState<NewsDataType[]>([]);
  const [flag, setFlag] = useState(false); // 첫 렌더링 여부

  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState<number>(); // 총 페이지 수

  // 뉴스 리스트 업데이트
  const getNews = async (page: number, type: string) => {
    try {
      const res: NewsResponseType = await fetch(`/api/career?page=${page}&limit=6&tab=${type}`, {
        method: "GET",
        cache: "no-store",
      }).then((data) => data.json());

      if (res) {
        setTotalPages(res.totalPages);
        setNewsList(res.data);
        if (!flag) setFlag(true);
      }
    } catch (err) {
      console.error("error: ", err);
    }
  };

  useEffect(() => {
    if (flag) {
      containerRef.current?.scrollIntoView();
      // console.log("flag 통과");
    }
    getNews(page, ctg);
  }, [page, ctg]);

  useEffect(() => {
    setPage(1);
  }, [ctg]);

  return (
    <div
      id="news-gallery"
      className="w-full flex flex-col items-center gap-10 xl:gap-20 mb-24"
      ref={containerRef}
    >
      <NewsCategory ctg={ctg} setCtg={setCtg} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 xl:gap-y-14 md:px-[20%] xl:px-0">
        {newsList?.map((news, idx: number) => (
          <NewsBox
            key={`news-${idx}`}
            title={news.title ?? ""}
            date={news.date}
            image={news.image}
            url={news.link}
            origin={news.origin}
            type={news.type}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPg={totalPages} />
    </div>
  );
}

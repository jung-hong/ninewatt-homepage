import {
  FirstPageArrow,
  LastPageArrow,
  NextPageArrow,
  PrevPageArrow,
} from "@/shared/assets/icons/arrows";
import { cn } from "@/shared/utils/tailwindUtils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPg: number | undefined;
}

export default function Pagination({ page, setPage, totalPg }: Props) {
  const numberStyle =
    "size-6 xs:size-7 flex items-center justify-center text-sm xl:text-lg leading-[1.3] text-neutral cursor-pointer";

  const goToFirstPage = () => setPage(1);
  const goToLastPage = () => setPage(totalPg ?? 1);

  const goToNextPage = () => {
    if (page === totalPg) return;
    setPage((page: number) => page + 1);
  };
  const goToPrevPage = () => {
    if (page === 1) return;
    setPage((page: number) => page - 1);
  };

  const [pages, setPages] = useState([1]);

  useEffect(() => {
    if (!totalPg) return;

    const newPages: number[] = [];

    if (page + 4 <= totalPg) {
      for (let i = 0; i < 4; i++) {
        newPages.push(page + i);
      }
    }
    if (totalPg < page + 4) {
      for (let i = 4; i > 0; i--) {
        if (totalPg - i > 0) newPages.push(totalPg - i);
      }
    }

    setPages(newPages);
  }, [page, totalPg]);

  return (
    <div className="flex items-center justify-center gap-1 xl:gap-[6px]">
      <FirstPageArrow className="cursor-pointer" onClick={goToFirstPage} />
      <PrevPageArrow className="cursor-pointer" onClick={goToPrevPage} />
      {totalPg && totalPg > 6 && 2 < page && (
        <>
          <p
            className={cn(
              numberStyle,
              page === 1 ? "text-black border-b border-black font-semibold" : "text-neutral"
            )}
            onClick={goToFirstPage}
          >
            1
          </p>
          <p className="size-6 xs:size-7 flex items-center justify-center text-sm xl:text-lg leading-[1.3] text-neutral font-medium">
            ···
          </p>
        </>
      )}

      {pages?.map((pg) => (
        <p
          className={cn(
            numberStyle,
            "size-6 xs:size-7 flex items-center justify-center text-sm xl:text-lg leading-[1.3]",
            page === pg ? "text-black border-b border-black font-semibold" : "text-neutral"
          )}
          key={`page-${pg}`}
          onClick={() => setPage(pg)}
        >
          {pg}
        </p>
      ))}

      {totalPg && page + 4 < totalPg && (
        <p className="size-6 xs:size-7 flex items-center justify-center text-sm xl:text-lg leading-[1.3] text-neutral font-medium">
          ···
        </p>
      )}

      {/* last page */}
      <p
        className={cn(
          numberStyle,
          page === totalPg ? "text-black border-b border-black font-semibold" : "text-neutral"
        )}
        onClick={goToLastPage}
      >
        {totalPg}
      </p>

      <NextPageArrow className="cursor-pointer" onClick={goToNextPage} />
      <LastPageArrow className="cursor-pointer" onClick={goToLastPage} />
    </div>
  );
}

import { cn } from "@/shared/utils/tailwindUtils";
import { NEWS_CATEGORIES } from "../_constants/news-categories";

interface Props {
  ctg: string;
  setCtg: (ctg: string) => void;
}

export default function NewsCategory({ ctg, setCtg }: Props) {
  return (
    <div className="flex items-center gap-6 xl:gap-3">
      {NEWS_CATEGORIES.map((item, idx: number) => (
        <div
          key={`tab-categories-${idx}`}
          className={cn(
            "px-0 xl:px-6 text-center font-semibold text-base xl:text-xl leading-normal transition-colors cursor-pointer"
          )}
          onClick={() => setCtg(item.type)}
        >
          <p
            className={cn(
              "py-[10px] xl:py-4 hover:text-gray900 transition-all",
              ctg === item.type
                ? "border-black text-black border-b-[3px]"
                : "text-black9 border-black9"
            )}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

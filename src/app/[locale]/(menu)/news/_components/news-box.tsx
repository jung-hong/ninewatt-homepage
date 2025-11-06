import { VideoIcon } from "@/shared/assets/icons/common";
import { cn } from "@/shared/utils/tailwindUtils";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  date: string;
  image: string;
  url: string;
  origin: string;
  type: string;
}

export default function NewsBox({ title, date, image, url, type }: Props) {
  const noImg = "/images/common/basic-thumbnail.png";
  const [imageUrl, setImageUrl] = useState(noImg);

  useEffect(() => {
    setImageUrl(
      image === "" || (!image.startsWith("http") && !image.startsWith("https")) ? noImg : image
    );
  }, [image]);

  return (
    <Link href={url} target="_blank">
      <div className="flex flex-col overflow-hidden">
        <div className="relative w-full min-h-56 md:min-h-32 xl:min-h-[273px] rounded-xl xl:rounded-2xl overflow-hidden border border-black/[0.08]">
          <Image
            src={imageUrl}
            onError={() => setImageUrl(noImg)}
            alt="news-thumbnail"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          {type === "video" && (
            <VideoIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>

        <div className="px-3 xl:px-4 pt-4 xl:py-6 pb-4 text-left flex flex-col gap-2 shrink-0">
          <p
            className={cn(
              "font-semibold text-caption-01-mo",
              type === "article" ? "text-primary-400" : "text-[#9D30C0]"
            )}
          >
            {type?.toUpperCase()}
          </p>
          <div className="hidden xl:block">
            <p
              className="h-[57px] font-semibold text-heading-04 text-gray900 whitespace-normal text-ellipsis overflow-hidden"
              style={{ WebkitBoxOrient: "vertical", WebkitLineClamp: 2, display: "-webkit-box" }}
            >
              {title}
            </p>
          </div>
          <div className="block xl:hidden">
            <p
              className="h-[52px] text-heading-04-mo font-semibold text-gray900 whitespace-normal text-ellipsis overflow-hidden"
              style={{ WebkitBoxOrient: "vertical", WebkitLineClamp: 2, display: "-webkit-box" }}
            >
              {title}
            </p>
          </div>

          <p className="mt-2 text-xs xl:text-sm leading-[1.6] font-medium text-gray500">{date}</p>
        </div>
      </div>
    </Link>
  );
}

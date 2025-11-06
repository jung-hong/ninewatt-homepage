import { Link } from "@/i18n/routing";

import { RightArrow } from "@/shared/assets/icons/arrows";
import { HomeIcon } from "@/shared/assets/icons/common";
import { paths } from "@/shared/routing";

interface Props {
  title: string;
}

export default function MenuHeader({ title }: Props) {
  return (
    <>
      <div className="w-full mt-40 xl:mt-[200px] mb-[98px] flex flex-col md:flex-row md:items-center justify-between gap-2">
        <h1 className="text-[#151515] font-semibold text-3xl xl:text-5xl">{title}</h1>
        <div className="flex items-center gap-3">
          <Link href={paths.main}>
            <HomeIcon />
          </Link>
          <RightArrow />
          <p className="leading-none font-medium text-sm text-neutral">{title}</p>
        </div>
      </div>
      <div className="w-[90%] xl:w-[700px] h-0.5 ml-auto mb-[50px] bg-black" />
    </>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { NINEWATT_PATENTS, NINEWATT_PATENTS_ENG } from "@/app/_constants/patents";

const sortById = (a: { id: number }, b: { id: number }) => {
  return b.id - a.id;
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const locale = searchParams.get("locale") || "kr";

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const baseList = locale === "en" ? NINEWATT_PATENTS_ENG : NINEWATT_PATENTS;
  const sortedList = baseList?.sort(sortById);

  const paginatedPerformanceList = sortedList.slice(startIndex, endIndex);

  return NextResponse.json({
    total: sortedList.length,
    page,
    limit,
    totalPages: Math.ceil(sortedList.length / limit),
    data: paginatedPerformanceList,
  });
};

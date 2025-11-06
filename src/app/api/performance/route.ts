import { NextRequest, NextResponse } from "next/server";
import {
  NINEWATT_PERFORMANCE_LIST,
  NINEWATT_PERFORMANCE_LIST_ENG,
} from "@/app/_constants/performances";

const sortById = (a: { id: number }, b: { id: number }) => {
  return b.id - a.id;
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const locale = searchParams.get("locale") || "kr";

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const performances = locale === "en" ? NINEWATT_PERFORMANCE_LIST_ENG : NINEWATT_PERFORMANCE_LIST;

  // Filter based on the selected tab
  const filteredList =
    category === "all" ? performances : performances.filter((item) => item.category === category);

  const sortedList = filteredList.sort(sortById);

  const paginatedPerformanceList = sortedList.slice(startIndex, endIndex);

  return NextResponse.json({
    total: sortedList.length,
    page,
    limit,
    totalPages: Math.ceil(sortedList.length / limit),
    data: paginatedPerformanceList,
  });
};

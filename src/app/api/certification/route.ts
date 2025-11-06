import { NextRequest, NextResponse } from "next/server";
import { NINEWATT_CERTIFICATIONS } from "@/app/_constants/certifications";

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

  const baseList = locale === "en" ? NINEWATT_CERTIFICATIONS : NINEWATT_CERTIFICATIONS;
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

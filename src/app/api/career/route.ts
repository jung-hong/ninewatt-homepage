import { NextRequest, NextResponse } from "next/server";
import { STRAPI_URL, strapiFetch, paginationMeta, parsePagination } from "@/shared/utils/strapi";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const { page, limit } = parsePagination(searchParams);
  const tab = searchParams.get("tab") || "all";

  try {
    const typeFilter = tab !== "all" ? `&filters[type][$eq]=${tab}` : "";
    const url = `${STRAPI_URL}/api/news-items?pagination[page]=${page}&pagination[pageSize]=${limit}&sort=date:desc,createdAt:desc${typeFilter}`;

    const res = await strapiFetch(url);
    if (!res.ok) throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);

    const json = await res.json();

    const data = json.data.map((item: any) => ({
      id: item.id || item.documentId,
      title: item.title,
      date: item.date?.replace(/-/g, ".") || "2000.01.01",
      origin: item.origin || "NineWatt",
      link: item.link || "",
      image: item.image || "",
      type: item.type,
    }));

    return NextResponse.json({ ...paginationMeta(json.meta, page, limit), data });
  } catch (error: any) {
    console.error("Error fetching news from Strapi:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: String(error) },
      { status: 500 },
    );
  }
};

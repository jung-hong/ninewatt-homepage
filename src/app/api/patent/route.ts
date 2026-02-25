import { NextRequest, NextResponse } from "next/server";
import {
  STRAPI_URL,
  strapiFetch,
  paginationMeta,
  parsePagination,
  toStrapiLocale,
} from "@/shared/utils/strapi";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const { page, limit } = parsePagination(searchParams);
  const locale = searchParams.get("locale") || "kr";

  const strapiLocale = toStrapiLocale(locale);
  const url = `${STRAPI_URL}/api/patents?locale=${strapiLocale}&sort=order_id:desc&pagination[page]=${page}&pagination[pageSize]=${limit}`;

  const res = await strapiFetch(url);
  if (!res.ok) return NextResponse.json({ error: "Failed to fetch from Strapi" }, { status: 500 });

  const { data, meta } = await res.json();

  return NextResponse.json({
    ...paginationMeta(meta, page, limit),
    data: data.map((item: any) => ({
      id: item.order_id,
      applicationDate: item.applicationDate,
      applicationNumber: item.applicationNumber,
      title: item.title,
      country: item.country,
      applicant: item.applicant,
    })),
  });
};

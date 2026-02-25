import { NextRequest, NextResponse } from "next/server";
import { STRAPI_URL, strapiFetch, paginationMeta, parsePagination } from "@/shared/utils/strapi";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const { page, limit } = parsePagination(searchParams);

  const url = `${STRAPI_URL}/api/certifications?sort=order_id:desc&pagination[page]=${page}&pagination[pageSize]=${limit}`;

  const res = await strapiFetch(url);
  if (!res.ok) return NextResponse.json({ error: "Failed to fetch from Strapi" }, { status: 500 });

  const { data, meta } = await res.json();

  return NextResponse.json({
    ...paginationMeta(meta, page, limit),
    data: data.map((item: any) => ({
      id: item.order_id,
      certificateName: item.certificateName,
      issuingAuthority: item.issuingAuthority,
      issueDate: item.issueDate,
      validPeriod: item.validPeriod,
      registrationNumber: item.registrationNumber,
      standardType: item.standardType,
    })),
  });
};

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"; // NOTE: 로컬 호스트의 경우 로컬 개발시 기본값으로 사용됩니다.

const LOCALE_MAP: Record<string, string> = {
  en: "en",
  ko: "ko-KR",
  //   ja: "ja-JP",
};

export const toStrapiLocale = (locale: string) => LOCALE_MAP[locale] ?? "ko-KR";

export const parsePagination = (searchParams: URLSearchParams) => ({
  page: parseInt(searchParams.get("page") || "1", 10),
  limit: parseInt(searchParams.get("limit") || "10", 10),
});

export const strapiFetch = (url: string) => fetch(url, { next: { revalidate: 60 } } as RequestInit);

export const paginationMeta = (meta: any, fallbackPage: number, fallbackLimit: number) => ({
  total: meta?.pagination?.total ?? 0,
  page: meta?.pagination?.page ?? fallbackPage,
  limit: meta?.pagination?.pageSize ?? fallbackLimit,
  totalPages: meta?.pagination?.pageCount ?? 1,
});

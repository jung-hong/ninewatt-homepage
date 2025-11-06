import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  // 루트 URL "/" 접근 시 "/main"으로 리디렉션
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("ko/main", request.url));
  }

  // 나머지 요청은 next-intl 미들웨어 처리
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(ko|en)/:path*"], // "/"도 포함하여 리디렉션에 대응
};

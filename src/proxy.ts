import { NextResponse, type NextRequest } from "next/server";
import { getCompanyRouteSegments } from "./app/brands/company-catalog";
import { activeCompany } from "./lib/company-site-config";

const companyPrefix = `/brands/${activeCompany}`;
const companyPaths = new Set(
  activeCompany
    ? getCompanyRouteSegments(activeCompany).map((segments) => `/${segments.join("/")}/`)
    : [],
);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/") return NextResponse.next();
  if (!activeCompany) {
    return pathname.startsWith("/brands/")
      ? new NextResponse("Page not found", { status: 404 })
      : NextResponse.next();
  }

  const branded = pathname.startsWith(`${companyPrefix}/`);
  const companyPath = branded ? pathname.slice(companyPrefix.length) : pathname;
  if (!companyPaths.has(companyPath)) {
    return new NextResponse("Page not found", { status: 404 });
  }
  if (branded) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.pathname = `${companyPrefix}${companyPath}`;
  return NextResponse.rewrite(destination);
}

export const config = {
  matcher: "/((?!_next/static/|_next/image|.*\\.(?:webp|png|jpe?g|svg|ico)$).*)",
};

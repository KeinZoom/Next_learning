import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // modify cookies
  const response = NextResponse.next();
  const setTheme = request.cookies.get("theme");

  if (!setTheme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-key", "custom-value");
  return response;
}

// export const config = {
//   matcher: "/profile",
// };

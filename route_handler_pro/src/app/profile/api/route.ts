import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const headersContent = new Headers(request.headers);
  const headersList = headers();

  const getTheme = request.cookies.get("theme");

  const authorization = headersContent.get("Authorization");
  const authorizationA = headersList.get("Authorization");

  cookies().set("resultsPerPage", "20");

  console.log(authorization);
  console.log(authorizationA);

  console.log(getTheme);
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>profile api response</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

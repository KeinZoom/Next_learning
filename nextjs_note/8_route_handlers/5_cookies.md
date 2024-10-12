### Cookies
- small pieces of data that a server sends to a user's web browser
- the client may store the cookie and **send it back** to the same server with **later requests**
- purposes
  - **Session management**, like logins and shopping carts
  - **Personalization**, like user preferences and themes
  - **Tracking**, like recording and analyzing user behavior

#### 2 methods to get and set cookies
- Response -> `"Set-Cookie": "theme=dark"`  `request.cookies.get("theme")`
- `cookies().get("resultsPerPage")` `cookies().set("resultsPerPage", "20")`
```typescript
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

```
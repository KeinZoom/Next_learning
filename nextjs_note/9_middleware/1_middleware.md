### Middleware
- a powerful feature that offers a robust way to intercept and **control the flow of requests and responses**
- runs at a global level, significantly enhancing features like **redirection**, **URL rewrites**, **authentication, headers and cookies management**

- **specify paths** where it will be active
  1. custom matcher config
  2. conditional statements


### redirection with custom matcher config
```typescript
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
  // return NextResponse.rewrite(new URL("/time", request.url));
  // rewrite - essential for SEO.  
}

export const config = {
  matcher: "/profile",
};

```

### modify cookies
```typescript
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // modify cookies
  const response = NextResponse.next();
  const setTheme = request.cookies.get("theme");

  if (!setTheme) {
    response.cookies.set("theme", "dark");
  }
  return response;
}
```

### modify both cookies and headers
```typescript
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
```


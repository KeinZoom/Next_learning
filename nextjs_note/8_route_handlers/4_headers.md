### Headers
- HTTP headers represent **the metadata** associated with an API **request** and **response**

#### Request Headers
- sent by the client, to the server.
- contain **essential information** about the request, which helps the server **understand and process** it correctly
  - `User-Agent`: identifies browser and OS
  - `Accept`: indicates the content types that client can process
  - `Authorization`: client use it to authenticate itself

#### Response Headers
- sent back from the server, to the client
- **information** about the server and the **data** being sent in the **response**
- `Content-Type`: indicates the media type of the response.


#### 2 methods to obtain the headers: 
- `new Headers(request.headers)` 
- `import { headers } from "next/headers";`

```typescript
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headersContent = new Headers(request.headers);
  const headersList = headers();

  const authorization = headersContent.get("Authorization");
  const authorizationA = headersList.get("Authorization");

  console.log(authorization);
  console.log(authorizationA);

  return new Response("profile api response");
}

```
### Query Parameter
- `localhost:3000/comments/?query=first`
- `request: NextRequest`
- `request.nextUrl.searchParams`
    ```typescript
    export async function GET(request: NextRequest) {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("query");
        const targetComments = query ? comments.find(item => item.text.includes(query)) : comments;

        return Response.json(targetComments);
    }
    ```
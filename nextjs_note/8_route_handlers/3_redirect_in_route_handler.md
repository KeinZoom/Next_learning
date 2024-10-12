### Redirect in router handler
- avoid URL that does not exist, and provide better user experience
- `import {redirect} from "next/navigation"`

    ```typescript
    export async function GET(
    request: Request,
    {
        params,
    }: {
        params: {
        id: string;
        };
    }
    ) {
    if (parseInt(params.id) > comments.length) {
        redirect("/comments");
    }
    const comment = comments.find((item) => item.id === params.id);
    if (comment) {
        return Response.json(comment);
    }
    }
    ```
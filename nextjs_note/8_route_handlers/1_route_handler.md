### Route handlers
- allow you to create RESTful endpoints, full control over response
- run server-side, ensuring sensitive information remain secure
- Route handlers are the equlvalent of API routes in Page route

### How to define route handlers
- create `route.ts` in folder

### solve the conflict of page route and route handlers
- priority: `route handler` > page route
- solution: move the route handler to subfolder `api`

#### GET and POST
```typescript
import { comments } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
    const text = await request.json();
    const newComment = {
        id: `${comments.length + 1}`,
        text: text.text,
    };
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-type": "application/json",
        },
        status: 201,
    });
}
```

#### Dynamic route handler
```typescript
import { comments } from "../data";
export async function GET(
    request: Request, 
    {params}: {
    params: {
        id: string; // from the folder [id]
    }
}) {
    const comment = comments.find(item => item.id === params.id);
    if (comment) {
        return Response.json(comment);
    }
}
```

#### PATCH
```typescript
export async function PATCH(request: Request, {params}: {
    params: {
        id: string;
    }
}) {
    const body = await request.json();
    const {text} = body;

    const index = comments.findIndex(item => item.id === params.id);
    comments[index].text = text;

    return Response.json(comments[index]);
}
```

#### DELETE
```typescript
export async function DELETE(
    _request: Request, 
    {params}: {
        params: {
            id: string;
        }
}) {
    const index = comments.findIndex(item => item.id === params.id);
    const delComment = comments[index];
    comments.splice(index, 1);

    return Response.json(delComment);
}
```
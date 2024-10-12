import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const targetComments = query ? comments.find(item => item.text.includes(query)) : comments;

    return Response.json(targetComments);
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
export const dynamic = "force-dynamic"; // "auto" by default

export async function GET() {
  return Response.json(new Date().toLocaleTimeString());
}

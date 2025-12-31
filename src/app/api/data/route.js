export const dynamic = "force-dynamic";
import { db } from "../lib/db";

export async function GET() {
  const result = await db.execute("SELECT 1 as test");
  return Response.json(result.rows);
}

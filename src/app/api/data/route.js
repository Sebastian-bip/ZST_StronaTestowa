export const dynamic = "force-dynamic";
import { db } from "../lib/db";

export async function GET() {
  try {
    const result = await db.execute("SELECT 1 as test");
    return Response.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
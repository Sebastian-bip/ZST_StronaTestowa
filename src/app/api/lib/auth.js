import { cookies } from "next/headers";
import { db } from "./db";

export async function getCurrentUser() {
  const sessionId = cookies().get("session")?.value;
  if (!sessionId) return null;

  const res = await db.execute({
    sql: `
      SELECT
        u.id,
        u.first_name,
        u.last_name,
        u.email,
        GROUP_CONCAT(r.name) AS roles
      FROM sessions s
      JOIN users u ON u.id = s.user_id
      LEFT JOIN user_roles ur ON ur.user_id = u.id
      LEFT JOIN roles r ON r.id = ur.role_id
      WHERE s.id = ? AND s.expires_at > CURRENT_TIMESTAMP
      GROUP BY u.id
    `,
    args: [sessionId],
  });

  return res.rows[0] || null;
}

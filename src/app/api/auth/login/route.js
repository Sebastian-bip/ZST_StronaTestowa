import { NextResponse } from "next/server";
import { db } from "@/app/api/lib/db";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function POST(req) {
  const { email, password } = await req.json();

  const userRes = await db.execute({
    sql: `SELECT id, password_hash FROM users WHERE email = ?`,
    args: [email],
  });

  if (userRes.rows.length === 0) {
    return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
  }

  const user = userRes.rows[0];
  const ok = await bcrypt.compare(password, user.password_hash);

  if (!ok) {
    return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
  }

  const sessionId = crypto.randomUUID();
  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24h

  await db.execute({
    sql: `
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES (?, ?, ?)
    `,
    args: [sessionId, user.id, expires.toISOString()],
  });

  const res = NextResponse.json({ success: true });

  res.cookies.set("session", sessionId, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    expires,
  });

  return res;
}

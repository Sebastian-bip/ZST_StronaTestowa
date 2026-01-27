import { verifyLogin } from "@/app/api/lib/authoryzation";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  const result = await verifyLogin(email, password);

  return NextResponse.json(result);
}

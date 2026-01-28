import { NextResponse } from "next/server";
import { createUser } from "@/app/api/lib/users";

export async function POST(req) {
  try {
    const body = await req.json();

    await createUser(body);

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );

  } catch (err) {
    console.error("CREATE USER ERROR:", err);

    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}

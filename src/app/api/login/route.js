import { NextResponse } from "next/server";
import { createUser } from "@/app/api/lib/users";

export async function POST(req) {
  try {
    const body = await req.json();

    // 🔍 DEBUG – bardzo ważne
    console.log("CREATE USER BODY:", body);

    const {
      first_name,
      last_name,
      email,
      password,
      date_of_birth,
      phone,
      role,
    } = body;

    if (!email || !password || !role) {
      return NextResponse.json(
        { error: "Brak wymaganych danych" },
        { status: 400 }
      );
    }

    await createUser({
      first_name,
      last_name,
      email,
      password,
      date_of_birth,
      phone,
      role,
    });

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (err) {
    console.error("CREATE USER ERROR:", err);

    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}

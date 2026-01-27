import { NextResponse } from "next/server";
import { createUser } from "@/app/api/lib/users";

export async function POST(req) {
  try {
    const body = await req.json();

    await createUser(body);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error(err);

    if (err.message === "EMAIL_EXISTS") {
      return NextResponse.json(
        { error: "Email zajęty" },
        { status: 409 }
      );
    }

    if (err.message === "MISSING_REQUIRED_FIELDS") {
      return NextResponse.json(
        { error: "Brakuje wymaganych pól" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Błąd serwera" },
      { status: 500 }
    );
  }
}


import { NextResponse } from "next/server";
import { createClient } from "@libsql/client";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const auth = req.headers.get("authorization");
  const token = auth?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Brak tokenu" }, { status: 401 });
  }

  try {
    // Weryfikacja tokenu ECDSA / EdDSA
    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY, {
      algorithms: ["EdDSA"]
    });

    // Połączenie z Turso
    const db = createClient({
      url: process.env.TURSO_URL,
      authToken: process.env.TURSO_TOKEN
    });

    // Pobranie artykułów
    const result = await db.execute(`
      SELECT 
        Artykul.artykul_id,
        Artykul.tekst,
        Artykul.data_utworzenia,
        Uzytkownicy.Nazwa_Uzytkownika AS autor
      FROM Artykul
      JOIN Uzytkownicy ON Artykul.autor_id = Uzytkownicy.id
    `);

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Token niepoprawny" }, { status: 403 });
  }
}

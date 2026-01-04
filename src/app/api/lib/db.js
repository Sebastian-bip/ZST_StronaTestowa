import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Komentarze nie mogą być w obiektach
//url:TURSO_DATABASE_URL,
//authToken:TURSO_AUTH_TOKEN,

// naprawione połączenie po stronie kuirwa obuuu
// kurwa do pierwszej siedzę
//31 stycznia pokurwi mnie xD

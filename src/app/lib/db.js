import { createClient } from "@libsql/client";

export const db = createClient({
  //url: process.env.DATABASE_URL,
  //authToken: process.env.DATABASE_AUTH_TOKEN,
  url:TURSO_DATABASE_URL,
  authToken:TURSO_AUTH_TOKEN,
}); // naprawione połączenie po stronie kuirwa obuuu
// kurwa do pierwszej siedzę

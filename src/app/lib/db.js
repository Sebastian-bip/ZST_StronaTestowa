import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
}); // naprawione połączenie po raz trzeci xDDDD

import { createClient } from "@libsql/client";

export const db = createClient({
  url:DATABASE_URL,
  authToken:DATABASE_AUTH_TOKEN,
<<<<<<< HEAD
  //url:TURSO_DATABASE_URL,
  //authToken:TURSO_AUTH_TOKEN,
=======
  // url:TURSO_DATABASE_URL,
  // authToken:TURSO_AUTH_TOKEN,
>>>>>>> 7cd6df2a7d8cfe79ba5258f733a119ac6926bfd2
}); // naprawione połączenie po stronie kuirwa obuuu
// kurwa do pierwszej siedzę

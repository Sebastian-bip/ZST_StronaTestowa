import { db } from "./db";
import bcrypt from "bcryptjs";

// Funkcja Pobiera użytkownika po emailu i jego hasło
export async function getUserPasswordByEmail(email) {
  const result = await db.execute({
    sql: `
      SELECT
        id,
        email,
        password_hash,
        first_name,
        last_name
      FROM users
      WHERE email = ?
      LIMIT 1
    `,
    args: [email],
  });

  return result.rows[0] || null;
}

/**
 * Sprawdza czy email i hasło są poprawne
 */
export async function verifyLogin(email, password) {
  const user = await getUserPasswordByEmail(email);

    // Jeśli nie ma takiego e maila zwróci fałsz zwróci wiadomość
  if (!user) {
    return {
      success: false,
      message: "Nieprawidłowy login lub hasło",
    };
  }

  const isValid = await bcrypt.compare(password, user.password_hash); // porównywanie podanego hasła z hasłem z bazy danych

  // Jeśli hasło jest złe (zwraca tą samą wiadomość żeby nie autoryzowana osoba nie miała pewności czy źle jest e mail czy hasło xD)
  if (!isValid) {
    return {
      success: false,
      message: "Nieprawidłowy login lub hasło",
    };
  }

  // ✅ sukces (NIE zwracamy hasha!)
  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    },
  };
}
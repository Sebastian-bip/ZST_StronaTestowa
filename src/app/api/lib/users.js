import { db } from "./db";
import bcrypt from "bcryptjs";
/**
 * Zwraca wszystkich użytkowników wraz z ich rolami
 */
export async function getAllUsersWithRoles() {
  const result = await db.execute({
    sql: `
      SELECT
        u.id,
        u.first_name,
        u.last_name,
        u.email,
        u.phone,
        u.date_of_birth,
        u.created_at,
        GROUP_CONCAT(r.name, ', ') AS roles
      FROM users u
      LEFT JOIN user_roles ur ON ur.user_id = u.id
      LEFT JOIN roles r ON r.id = ur.role_id
      GROUP BY u.id
      ORDER BY u.last_name, u.first_name
    `,
  });

  return result.rows;
}


/* funkcja do tworzenia użytkowników */

export async function createUser({
  first_name,
  last_name,
  email,
  password,
  date_of_birth,
  phone,
  role_id,
}) {
  if (!date_of_birth || !role_id) {
    throw new Error("MISSING_REQUIRED_FIELDS");
  }

  const exists = await db.execute({
    sql: "SELECT id FROM users WHERE email = ?",
    args: [email],
  });

  if (exists.rows.length > 0) {
    throw new Error("EMAIL_EXISTS");
  }

  const password_hash = await bcrypt.hash(password, 12);

  // 1️⃣ insert użytkownika
  const res = await db.execute({
    sql: `
      INSERT INTO users (
        first_name,
        last_name,
        email,
        password_hash,
        date_of_birth,
        phone
      )
      VALUES (?, ?, ?, ?, ?, ?)
      RETURNING id
    `,
    args: [
      first_name,
      last_name,
      email,
      password_hash,
      date_of_birth,
      phone || null,
    ],
  });

  const userId = res.rows[0].id;

  // 2️⃣ przypisanie roli
  await db.execute({
    sql: `
      INSERT INTO user_roles (user_id, role_id)
      VALUES (?, ?)
    `,
    args: [userId, role_id],
  });
}



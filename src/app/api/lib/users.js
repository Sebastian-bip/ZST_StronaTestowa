import { db } from "./db";

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

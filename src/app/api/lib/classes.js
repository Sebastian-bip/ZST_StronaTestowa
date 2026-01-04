import { db } from "./db";

// wypisuje id klasy rok symbol i nazwę profilu
export async function getAllClasses() {
  const result = await db.execute({
    sql: `
      SELECT
        c.id,
        c.grade,
        c.symbol,
        p.name AS profile_name
      FROM classes c
      JOIN profiles p ON p.id = c.profile_id
      ORDER BY c.grade, c.symbol
    `,
  });

  return result.rows;
}
// wypisuje klasę o konkretnym id
export async function getClassById(id) {
  const result = await db.execute({
    sql: `
      SELECT
        c.id,
        c.grade,
        c.symbol,
        p.name AS profile_name
      FROM classes c
      JOIN profiles p ON p.id = c.profile_id
      WHERE c.id = ?
    `,
    args: [id],
  });

  return result.rows[0] || null;
}

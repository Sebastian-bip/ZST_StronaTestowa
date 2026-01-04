import { db } from "@/app/api/lib/db";

// Ta funkcja zwraca 4 najnowsze artykuły
export async function getLatestArticleTitles(limit = 4) {
  const result = await db.execute({
    sql: `
      SELECT id, title, created_at
      FROM articles
      WHERE published = 1
      ORDER BY created_at DESC
      LIMIT ?
    `,
    args: [limit],
  });

  return result.rows;
}

// ta funkcja zwraca artykuł po id i wypisuje jego ważne informacje dla użytkownika
export async function getArticleById(id) {
  const result = await db.execute({
    sql: `
      SELECT 
        a.id,
        a.title,
        a.content,
        a.created_at,
        a.author_id,
        u.first_name,
        u.last_name
      FROM articles a
      LEFT JOIN users u ON a.author_id = u.id
      WHERE a.id = ? AND a.published = 1
    `,
    args: [id],
  });

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

export const dynamic = "force-dynamic";
import { getLatestArticleTitles } from "@/app/api/lib/articles";
import Link from "next/link";

export const metadata = {
  title: "Artykuły",
};

export default async function ArticlesPage() {
  try {
    const articles = await getLatestArticleTitles(24);

    return (
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <Link
          href="/data-base-test"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            color: "#0066cc",
            textDecoration: "none",
          }}
        >
          ← Powrót do menu
        </Link>
        
        <h2>Ostatnie artykuły</h2>
        {articles.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {articles.map((article) => (
              <li key={article.id} style={{ marginBottom: "1rem" }}>
                <Link
                  href={`/data-base-test/${article.id}`}
                  style={{
                    display: "block",
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    textDecoration: "none",
                    color: "#0066cc",
                  }}
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Brak artykułów w bazie danych.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Database error:", error);
    return (
      <div style={{ padding: "2rem" }}>
        <Link
          href="/data-base-test"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            color: "#0066cc",
            textDecoration: "none",
          }}
        >
          ← Powrót do menu
        </Link>
        <h3>Błąd połączenia z bazą</h3>
        <p>Error: {error.message}</p>
      </div>
    );
  }
}


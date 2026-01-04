export const dynamic = "force-dynamic";
import { getLatestArticleTitles } from "@/app/api/lib/articles";
import Link from "next/link";

export const metadata = {
    title: "db tests"
}

export default async function DbTest() {
  try {
    const articles = await getLatestArticleTitles(4);

    return (
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
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
        <h3>Błąd połączenia z bazą</h3>
        <p>Error: {error.message}</p>
      </div>
    );
  }
}

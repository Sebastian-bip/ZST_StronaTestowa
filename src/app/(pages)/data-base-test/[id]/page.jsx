export const dynamic = "force-dynamic";

import { getArticleById } from "@/app/api/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  // ✅ WAŻNE: params jest Promise
  const { id } = await params;

  const articleId = parseInt(id, 10);

  if (isNaN(articleId)) {
    notFound();
  }

  try {
    const article = await getArticleById(articleId);

    if (!article) {
      notFound();
    }

    const formattedDate = new Date(article.created_at).toLocaleDateString(
      "pl-PL",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

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
          ← Powrót do listy artykułów
        </Link>

        <article>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            {article.title}
          </h1>

          <div
            style={{
              marginBottom: "2rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #ddd",
              color: "#666",
            }}
          >
            <p style={{ margin: "0.5rem 0" }}>
              <strong>Autor:</strong> {article.first_name}{" "}
              {article.last_name}
            </p>
            <p style={{ margin: "0.5rem 0" }}>
              <strong>Data publikacji:</strong> {formattedDate}
            </p>
          </div>

          <div
            style={{
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {article.content}
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);

    return (
      <div style={{ padding: "2rem" }}>
        <h2>Błąd</h2>
        <p>Nie udało się załadować artykułu.</p>
        <Link href="/data-base-test">
          ← Powrót do listy artykułów
        </Link>
      </div>
    );
  }
}

import Link from "next/link";

export const metadata = {
  title: "Data Base Test",
};

export default function DataBaseTestPage() {
  return (
    <div style={{ 
      padding: "3rem 2rem", 
      maxWidth: "1200px", 
      margin: "0 auto",
      fontFamily: "system-ui"
    }}>
      <h1 style={{ 
        fontSize: "2.5rem", 
        marginBottom: "3rem",
        textAlign: "center"
      }}>
        Data Base Test
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        <Link 
          href="/data-base-test/articles"
          style={{
            display: "block",
            padding: "2rem",
            border: "2px solid #0066cc",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginBottom: "1rem",
            color: "#0066cc"
          }}>
            📰 Ostatnie artykuły
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Przeglądaj 4 najnowsze artykuły z naszej bazy danych
          </p>
        </Link>

        <Link 
          href="/data-base-test/users"
          style={{
            display: "block",
            padding: "2rem",
            border: "2px solid #28a745",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginBottom: "1rem",
            color: "#28a745"
          }}>
            🧪 Strona testowa użytkowników
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Przejrzyj wszystkich użytkowników
          </p>
        </Link>

        <Link 
          href="/data-base-test/timetable"
          style={{
            display: "block",
            padding: "2rem",
            border: "2px solid #dc3545",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginBottom: "1rem",
            color: "#dc3545"
          }}>
            Test planów
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Wyświetlanie planów lekcji dla klas
          </p>
        </Link>

        <Link 
          href="/data-base-test/login"
          style={{
            display: "block",
            padding: "2rem",
            border: "2px solid #0ed27a",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#333",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(50, 80, 30, 0.57)"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginBottom: "1rem",
            color: "#35dc59"
          }}>
            Test logowania
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Testowa strona logowania
          </p>
        </Link>

                <Link 
          href="/data-base-test/rejestracja"
          style={{
            display: "block",
            padding: "2rem",
            border: "2px solid #85129cdf",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#443f32",
            backgroundColor: "#ffffff",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(50, 80, 30, 0.57)"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginBottom: "1rem",
            color: "#c73aadda"
          }}>
            Test tworzenia użytkownika
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Testowa strona rejestracja
          </p>
        </Link>

        <Link 
          href="/data-base-test/allArticles"
          style={{
            display: "block",
            padding: "2rem",
            border: "2px solid #0a1fdd",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#686462",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(113, 34, 218, 0.1)"
          }}
        >
          <h2 style={{ 
            fontSize: "1.5rem", 
            marginBottom: "1rem",
            color: "#0066cc"
          }}>
            📰 Ostatnie 24 artykuły
          </h2>
          <p style={{ color: "#666", lineHeight: "1.6" }}>
            Przeglądaj wszystkie artykuły z naszej bazy danych
          </p>
        </Link>
      </div>
    </div>
  );
}

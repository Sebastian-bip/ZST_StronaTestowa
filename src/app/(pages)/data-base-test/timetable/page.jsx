export const dynamic = "force-dynamic";
import { getAllClasses } from "@/app/api/lib/classes";
import Link from "next/link";

export default async function TimetablePage() {
  const classes = await getAllClasses();

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Wybierz klasę</h1>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {classes.map((cls) => (
          <Link
            key={cls.id}
            href={`/data-base-test/timetable/${cls.id}`}
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              textDecoration: "none",
              backgroundColor: "#f5f5f5",
              color: "#333",
            }}
          >
            {cls.grade}{cls.symbol} ({cls.profile_name})
          </Link>
        ))}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
import { getLatestArticleTitles } from "@/app/api/lib/articles";
import Link from "next/link";

export const metadata = {
    title: "db tests"
}

export default async function DbTest() {
  try {
    const result = await db.execute("SELECT 1 as test");
    
    return (
      <div> 
        <h3>Test połączenia z bazą</h3>
        <pre>{JSON.stringify(result.rows, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Database error:", error);
    return (
      <div>
        <h3>Błąd połączenia z bazą</h3>
        <p>Error: {error.message}</p>
      </div>
    );
  }
}

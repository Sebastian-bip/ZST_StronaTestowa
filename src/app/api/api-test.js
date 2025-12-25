import { createClient } from '@libsql/client';
import { NextResponse } from 'next/server';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});

export const POST = async () => {
  // Fetch data from SQLite
  //const result = await client.execute("CREATE TABLE todos (description);");
};

//tokens:
// eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicm8iLCJpYXQiOjE3NjY5NDQwMjksImlkIjoiY2EyMGJkZmQtZjgyZS00OTdjLWI2YTMtNTEyMjE0YjI5ODk0IiwicmlkIjoiN2ZkY2RkMzYtMjkwNi00ZTBiLWJkYjItNzVlZGIzMGYzNmMxIn0.mEcRrOoj0YRjW4DLkTd1dh7jLJ8mSa_Vu4-ZwEUM5sZXJWe632D84UuB_u_ZoLf-xj4YD4T0kn5p52B8Vn7nCQ
// libsql://podrzeczna-vercel-icfg-gffwqo9ppxkftx5bbuprqm3g.aws-eu-west-1.turso.io
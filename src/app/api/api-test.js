import { createClient } from '@libsql/client';
import { NextResponse } from 'next/server';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});

export const POST = async () => {
  // Fetch data from SQLite
  const result = await client.execute("CREATE TABLE todos (description);");
};

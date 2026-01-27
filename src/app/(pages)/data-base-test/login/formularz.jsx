"use client";

import { useState } from "react";

/*
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await verifyLogin(email, password);

    setResult(res);
    setLoading(false);
  }

  return (
    <>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
          />
        </div>

        <button disabled={loading}>
          {loading ? "Sprawdzam..." : "Zaloguj"}
        </button>
      </form>

  
      {result && (
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          {result.success ? (
            <>
              <h3>✅ Zalogowano poprawnie</h3>
              <p><strong>ID:</strong> {result.user.id}</p>
              <p><strong>Email:</strong> {result.user.email}</p>
              <p><strong>Imię:</strong> {result.user.first_name}</p>
              <p><strong>Nazwisko:</strong> {result.user.last_name}</p>
            </>
          ) : (
            <>
              <h3>❌ Błąd logowania</h3>
              <p>{result.message}</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
*/


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button disabled={loading}>Zaloguj</button>
      </form>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </>
  );
}
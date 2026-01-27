"use client";

import { useState } from "react";

export default function CreateUserPage() {

  // ✅ 1. STATE NA SAMEJ GÓRZE
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_of_birth: "",
    phone: "",
    role_id: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ✅ 2. FUNKCJE DOPIERO PO STATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Błąd");
      }

      setSuccess(true);
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        date_of_birth: "",
        phone: "",
        role_id: 1,
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <h1>Utwórz użytkownika</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Imię"
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
        />

        <input placeholder="Nazwisko"
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
        />

        <input placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input type="password" placeholder="Hasło"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input type="date"
          value={form.date_of_birth}
          onChange={(e) => setForm({ ...form, date_of_birth: e.target.value })}
        />

        <input placeholder="Telefon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <select
          value={form.role_id}
          onChange={(e) => setForm({ ...form, role_id: Number(e.target.value) })}
        >
          <option value={1}>Nauczyciel</option>
          <option value={2}>Administrator</option>
        </select>

        <button disabled={loading}>
          {loading ? "Tworzenie..." : "Utwórz"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Użytkownik utworzony ✅</p>}
    </div>
  );
}

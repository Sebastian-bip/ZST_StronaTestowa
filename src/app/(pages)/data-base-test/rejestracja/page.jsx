"use client";

import { useState } from "react";

export default function CreateUserPage() {

  // ✅ JEDEN SPÓJNY STATE
const [form, setForm] = useState({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  date_of_birth: "",
  phone: "",
  role: "nauczyciel", // 👈 domyślna
});


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/urzytkownicy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Błąd tworzenia użytkownika");
      }

      setSuccess(true);

      // opcjonalnie reset formularza
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        date_of_birth: "",
        phone: "",
        role: "teacher",
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
        <input
          placeholder="Imię"
          value={form.first_name}
          onChange={(e) => setForm({ ...form, first_name: e.target.value })}
          required
        />

        <input
          placeholder="Nazwisko"
          value={form.last_name}
          onChange={(e) => setForm({ ...form, last_name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Hasło"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <input
          type="date"
          value={form.date_of_birth}
          onChange={(e) =>
            setForm({ ...form, date_of_birth: e.target.value })
          }
          required
        />

        <input
          placeholder="Telefon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* ✅ POPRAWNY SELECT */}
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="administrator">Administrator</option>
          <option value="nauczyciel">Nauczyciel</option>
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

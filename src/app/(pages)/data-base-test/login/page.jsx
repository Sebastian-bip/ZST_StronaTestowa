import LoginForm from "./formularz";

export default function TestLoginPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: 500, margin: "0 auto" }}>
      <h1>Test logowania</h1>
      <p>Strona podglądowa – bez API</p>

      <LoginForm />
    </div>
  );
}

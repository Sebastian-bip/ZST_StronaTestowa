import { getAllUsersWithRoles } from "@/app/api/lib/users";

export default async function UsersPage() {
  const users = await getAllUsersWithRoles();

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Użytkownicy</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Data urodzenia</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.first_name}</td>
              <td>{u.last_name}</td>
              <td>{u.email}</td>
              <td>{u.phone || "-"}</td>
              <td>
                {u.date_of_birth
                  ? new Date(u.date_of_birth).toLocaleDateString("pl-PL")
                  : "-"}
              </td>
              <td>{u.roles || "brak"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

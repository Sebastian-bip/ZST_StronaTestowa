export const dynamic = "force-dynamic";

export default async function DbTest() {
  //const res = await fetch("http://localhost:3000/api/data", {
  const res = await fetch("/api/users", {
  cache: "no-store",
});


  const data = await res.json();
  // ten div w returnie nie obrazi się na styl xD
  return (
    <div> 
      <h3>Test połączenia z bazą</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

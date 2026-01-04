import { getTimetableForClass } from "@/app/api/lib/timetable";
import { getClassById } from "@/app/api/lib/classes";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TimetableClassPage({ params }) {
  const { id } = await params;      
  const classId = Number(id);

  if (isNaN(classId)) notFound();

  const timetable = await getTimetableForClass(classId);
  const cls = await getClassById(classId);

  if (!cls) notFound();


  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];

  // grupowanie
  const grouped = {};
  timetable.forEach((item) => {
    if (!grouped[item.lesson_number]) grouped[item.lesson_number] = {};
    grouped[item.lesson_number][item.day_of_week] = item;
  });

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <Link href="/data-base-test/timetable">← Powrót do klas</Link>

      <h1 style={{ margin: "1rem 0" }}>
        Plan lekcji – {cls.grade}{cls.symbol} ({cls.profile_name})
      </h1>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Lekcja</th>
              {days.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5,6,7,8].map((lesson) => (
              <tr key={lesson}>
                <td><strong>{lesson}</strong></td>
                {[1,2,3,4,5].map((day) => {
                  const l = grouped[lesson]?.[day];
                  return (
                    <td key={day}>
                      {l ? (
                        <>
                          <div><strong>{l.subject_name}</strong></div>
                          <div>{l.teacher_first_name} {l.teacher_last_name}</div>
                          <div>Sala: {l.room_number}</div>
                        </>
                      ) : "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

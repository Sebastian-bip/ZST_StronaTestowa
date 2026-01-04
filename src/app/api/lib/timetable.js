import { db } from "./db";

export async function getTimetableForClass(classId) {
  const result = await db.execute({
    sql: `
      SELECT
        t.day_of_week,
        t.lesson_number,

        s.name AS subject_name,

        u.first_name AS teacher_first_name,
        u.last_name AS teacher_last_name,

        r.number AS room_number
      FROM timetable t
      JOIN subjects s ON s.id = t.subject_id
      JOIN users u ON u.id = t.teacher_id
      JOIN rooms r ON r.id = t.room_id
      WHERE t.class_id = ?
      ORDER BY t.day_of_week, t.lesson_number
    `,
    args: [classId],
  });

  return result.rows;
}


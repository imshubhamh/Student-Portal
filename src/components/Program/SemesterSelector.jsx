import { useProgram } from "./index";

export default function SemesterSelector({ semesters }) {
  const { year, semester, setSemester } = useProgram();

  if (!year) return null;

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {semesters.map((s) => (
        <div
          key={s.number}
          onClick={() => setSemester(s.number)}
          className="cursor-pointer border rounded-lg p-4 hover:shadow"
        >
          <h3 className="font-medium">Semester {s.number}</h3>
        </div>
      ))}
    </div>
  );
}

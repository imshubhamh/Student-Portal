import { useEffect } from "react";
import { useProgram } from "./index";

export default function SemesterSelector({ semesters }) {
  const { year, semester, setSemester } = useProgram();

  if (!year) return null;

  // Set first semester active by default
  useEffect(() => {
    if (!semester && semesters.length > 0) {
      setSemester(semesters[0].number);
    }
  }, [semester, semesters, setSemester]);

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {semesters.map((s) => (
        <div
          key={s.number}
          onClick={() => setSemester(s.number)}
          className={`cursor-pointer rounded-full p-0.5 py-1 text-center transition-all duration-200
            ${semester === s.number
              ? "bg-[#2BBBAD] text-white shadow-lg transform scale-105"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow-md"}
          `}
        >
          <h3 className="font-semibold text-md">Semester {s.number}</h3>
        </div>
      ))}
    </div>
  );
}

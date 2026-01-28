import { useEffect } from "react";
import { useProgram } from "./index";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";

export default function YearSelector({ years }) {
  const { branch, year, setYear, setSemester } = useProgram();

  if (!branch) return null;

  useEffect(() => {
    if (!year && years.length > 0) {
      setYear(years[0]);
      setSemester(null);
    }
  }, [year, years, setYear, setSemester]);

  return (
    <div className="mt-6 inline-flex overflow-hidden border border-gray-200 shadow-sm rounded-lg">
      {years.map((y, idx) => (
        <div
          key={y}
          onClick={() => {
            setYear(y);
            setSemester(null);
          }}
          className={`
            cursor-pointer flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200
            ${year === y
              ? " text-[#2BBBAD] shadow-md scale-105"
              : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-105"}
            ${idx === 0 ? "rounded-l-lg" : ""}
            ${idx === years.length - 1 ? "rounded-r-lg" : ""}
            ${idx !== years.length - 1 ? "border-r border-gray-200" : ""}
          `}
        >
          <CalendarDaysIcon className={`h-4 w-4 ${year === y ? "text-[#2BBBAD]" : "text-gray-400"}`} />
          <span>Year {y}</span>
        </div>
      ))}
    </div>
  );
}

import { useProgram } from "./index";

export default function YearSelector({ years }) {
  const { branch, year, setYear, setSemester } = useProgram();

  if (!branch) return null;

  return (
    <div className="mt-6 flex gap-2">
      {years.map((y) => (
        <button
          key={y}
          onClick={() => {
            setYear(y);
            setSemester(null);
          }}
          className={`px-3 py-1 text-sm rounded-md border
            ${year === y ? "bg-gray-200" : "bg-white"}`}
        >
          Year {y}
        </button>
      ))}
    </div>
  );
}

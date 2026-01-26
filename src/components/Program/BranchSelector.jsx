import { useProgram } from "./index";

export default function BranchSelector({ branches }) {
  const { branch, setBranch, setYear, setSemester } = useProgram();

  return (
    <div className="flex gap-2 bg-slate-50 p-2 rounded-md border max-w-lg">
      {branches.map((b) => (
        <button
          key={b}
          onClick={() => {
            setBranch(b);
            setYear(null);
            setSemester(null);
          }}
          className={`px-2 py-1 text-sm rounded-md border
            ${branch === b ? "bg-gray-200" : "bg-white"}`}
        >
          {b}
        </button>
      ))}
    </div>
  );
}

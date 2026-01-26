import { useProgram } from "./index";

export default function SubjectList({ data }) {
  const { branch, semester } = useProgram();

  if (!branch || !semester) return null;

  const subjects = data?.[branch]?.[semester];

  if (!subjects || subjects.length === 0) {
    return (
      <p className="mt-6 text-sm text-gray-500">
        No subjects available for this semester.
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h4 className="font-semibold mb-4">
        Subjects – {branch} (Semester {semester})
      </h4>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {subjects.map((sub) => (
          <div
            key={sub.name}
            className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition"
          >
            {/* Thumbnail */}
            <img
              src={sub.thumbnail}
              alt={sub.name}
              className="h-32 w-full object-cover"
            />

            {/* Content */}
            <div className="p-3">
              <h5 className="font-medium text-sm mb-2">
                {sub.name}
              </h5>

              <button
                className="w-full text-sm px-3 py-1.5 rounded-md border
                bg-black text-white hover:bg-gray-800"
              >
                ▶ Watch Lecture
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

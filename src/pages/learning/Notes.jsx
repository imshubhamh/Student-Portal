import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import FolderCard from "../../components/common/FolderCard";

export default function Notes() {
  const navigate = useNavigate();

  const semesters = [
    {
      sem: 1,
      subjects: ["Mathematics I", "Physics", "Basic Electrical", "Engineering Drawing", "C Programming", "Workshop"],
    },
    {
      sem: 2,
      subjects: ["Mathematics II", "Chemistry", "Data Structures", "Digital Logic", "Communication Skills", "Environmental Studies"],
    },
    {
      sem: 3,
      subjects: ["DBMS", "Operating System", "Computer Networks", "OOPS", "Discrete Maths", "Software Engineering"],
    },
    {
      sem: 4,
      subjects: ["Java", "Python", "Web Development", "Microprocessor", "Compiler Design", "Cloud Basics"],
    },
  ];

  return (
    <>
      <PageHeader
        title="Study Notes"
        desc="Semester-wise organised notes for quick revision and exam prep."
      />

      {/* Section Title */}
      <h2 className="text-lg font-semibold text-gray-700 mt-10 mb-6 border-b p-2">
        Select Your Semester
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {semesters.map((semester) => (
          <div key={semester.sem} className="flex flex-col items-center">
            <FolderCard
              title={`Semester ${semester.sem}`}
              desc="6 Subjects Available"
              meta="Notes • PDFs • Important Questions"
              onClick={() => navigate(`/notes/semester/${semester.sem}`)}
            />

            {/* Subject Preview */}
            <ul className="mt-3 text-xs text-gray-600 space-y-1 text-center max-w-[200px]">
              {semester.subjects.slice(0, 3).map((sub, i) => (
                <li key={i}>• {sub}</li>
              ))}
              <li className="text-gray-400">+ 3 more...</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

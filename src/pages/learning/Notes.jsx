// // import { useNavigate } from "react-router-dom";
// // import PageHeader from "../../components/common/PageHeader";
// // import NoteCard from "../../components/common/NoteCard";

// // export default function Notes() {
// //   const navigate = useNavigate();

// //   return (
// //     <>
// //       <PageHeader
// //         title="Study Notes"
// //         desc="Well-organised notes for quick revision and exam prep."
// //       />

// //       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         <NoteCard
// //           title="React Notes"
// //           desc="Hooks, Components, Lifecycle, Best Practices"
// //           meta="PDF • 42 pages"
// //           image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
// //           onClick={() => navigate("/notes/react")}
// //         />

// //         <NoteCard
// //           title="DBMS Notes"
// //           desc="Normalization, Keys, Indexes, Transactions"
// //           meta="PDF • 38 pages"
// //           image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
// //           onClick={() => navigate("/notes/dbms")}
// //         />

// //         <NoteCard
// //           title="Operating System Notes"
// //           desc="Process, Threads, Scheduling, Memory"
// //           meta="PDF • 46 pages"
// //           image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
// //           onClick={() => navigate("/notes/os")}
// //         />
// //       </div>
// //     </>
// //   );
// // }


// // ---------------

// import { useNavigate } from "react-router-dom";
// import PageHeader from "../../components/common/PageHeader";
// import FolderCard from "../../components/common/FolderCard";

// export default function Notes() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <PageHeader
//         title="Study Notes"
//         desc="Well-organised notes for quick revision and exam prep."
//       />
// <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 mt-10 justify-items-center">
//   <FolderCard
//     title="React Notes"
//     desc="Hooks, Components, Lifecycle"
//     meta="PDF • 42 pages"
//     onClick={() => navigate("/notes/react")}
//   />

//   <FolderCard
//     title="DBMS Notes"
//     desc="Normalization, Keys, Indexes"
//     meta="PDF • 38 pages"
//     onClick={() => navigate("/notes/dbms")}
//   />

//   <FolderCard
//     title="OS Notes"
//     desc="Process, Threads, Scheduling"
//     meta="PDF • 46 pages"
//     onClick={() => navigate("/notes/os")}
//   />

//   <FolderCard
//     title="CN Notes"
//     desc="OSI Model, TCP/IP, Routing"
//     meta="PDF • 40 pages"
//     onClick={() => navigate("/notes/cn")}
//   />

  
//   <FolderCard
//     title="CN Notes"
//     desc="OSI Model, TCP/IP, Routing"
//     meta="PDF • 40 pages"
//     onClick={() => navigate("/notes/cn")}
//   />
// </div>

//     </>
//   );
// }


// -------------

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
      <h2 className="text-xl font-semibold text-gray-700 mt-10 mb-6">
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

// import React, { createContext, useContext, useState } from "react";

// const ProgramContext = createContext();

// export function Program({ children }) {
//   const [branch, setBranch] = useState(null);
//   const [semester, setSemester] = useState(null);

//   return (
//     <ProgramContext.Provider
//       value={{ branch, setBranch, semester, setSemester }}
//     >
//       <div>{children}</div>
//     </ProgramContext.Provider>
//   );
// }

// function Branch({ items }) {
//   const { branch, setBranch } = useContext(ProgramContext);

//   return (
//     <div className="flex flex-wrap gap-3 mb-8 bg-slate-50 p-2 rounded-md max-w-lg border">
//       {items.map((b) => (
//         <button
//           key={b}
//           onClick={() => setBranch(b)}
//           className={`px-2 py-1 text-sm rounded-md border transition
//             ${
//               branch === b
//                 ? "bg-gray-100"
//                 : "bg-white hover:bg-gray-100"
//             }`}
//         >
//           {b}
//         </button>
//       ))}
//     </div>
//   );
// }

// function Semesters({ children }) {
//   return (
//     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {children}
//     </div>
//   );
// }

// function Semester({ number, subjects }) {
//   const { branch, semester, setSemester } = useContext(ProgramContext);

//   if (!branch) return null;

//   return (
//     <div
//       onClick={() => setSemester(number)}
//       className="cursor-pointer rounded-xl border p-6 hover:shadow-md transition"
//     >
//       <h3 className="text-xl font-semibold">
//         Semester {number}
//       </h3>

//       {semester === number && (
//         <ul className="mt-4 text-sm text-gray-600 space-y-1">
//           {subjects.map((s) => (
//             <li key={s}>• {s}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// Program.Branch = Branch;
// Program.Semesters = Semesters;
// Program.Semester = Semester;


// --------

import React, { createContext, useContext, useState } from "react";

const ProgramContext = createContext();

export function Program({ children }) {
  const [branch, setBranch] = useState(null);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);

  return (
    <ProgramContext.Provider
      value={{
        branch,
        setBranch,
        year,
        setYear,
        semester,
        setSemester,
      }}
    >
      <div>{children}</div>
    </ProgramContext.Provider>
  );
}

export const useProgram = () => useContext(ProgramContext);

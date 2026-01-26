import { Program } from "./index";
import BranchSelector from "./BranchSelector";
import YearSelector from "./YearSelector";
import SemesterSelector from "./SemesterSelector";
import SubjectList from "./SubjectList";

const subjectData = {
  "Computer Science": {
    1: [
      { name: "Maths", thumbnail: "/images/maths.jpg" },
      { name: "C Programming", thumbnail: "/images/c.jpg" },
    ],
    2: [
      { name: "DBMS", thumbnail: "/images/dbms.jpg" },
      { name: "OOP", thumbnail: "/images/oop.jpg" },
    ],
  },
  Mechanical: {
    1: [
      { 
      name: "Engineering Drawing", 
      thumbnail: "/images/ed.jpg" 
    },
    ],
  },
};

export default function ProgramSection() {
  return (
    <section className="mt-20 mb-20">
      <h2 className="text-3xl font-semibold mb-1">
        Explore Subjects
      </h2>
      <p className="text-gray-600 mb-6">
        Branch → Year → Semester → Subjects
      </p>

      <Program>
        <BranchSelector
          branches={["Computer Science", "Mechanical", "Electrical"]}
        />

        <YearSelector years={[1, 2, 3]} />

        <SemesterSelector
          semesters={[
            { number: 1 },
            { number: 2 },
            { number: 3 },
          ]}
        />

        <SubjectList data={subjectData} />
      </Program>
    </section>
  );
}

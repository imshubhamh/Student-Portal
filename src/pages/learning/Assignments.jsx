import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";

export default function Assignments() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Assignments"
        desc="Track tasks, deadlines and submissions."
      />

      <div className="grid md:grid-cols-4 gap-6">
        <Card
          title="React Mini Project"
          desc="Deadline: 25 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/react")}
          image="https://images.unsplash.com/photo-1631651587645-e417d2b68735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFzc2lnbm1lbnRzfGVufDB8fDB8fHww"
        />

        <Card
          title="DSA Practice"
          desc="Deadline: 28 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/dsa")}
          image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXNzaWdubWVudHMlMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D"
        />

        <Card
          title="SQL Queries"
          desc="Deadline: 30 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/sql")}
          image="https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzc2lnbm1lbnRzJTIwY29kaW5nfGVufDB8fDB8fHww"
        />
         <Card
          title="SQL Queries"
          desc="Deadline: 30 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/sql")}
          image="https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzc2lnbm1lbnRzJTIwY29kaW5nfGVufDB8fDB8fHww"
        />
      </div>
    </>
  );
}

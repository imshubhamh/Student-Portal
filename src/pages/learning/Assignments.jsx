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

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="React Mini Project"
          desc="Deadline: 25 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/react")}
        />

        <Card
          title="DSA Practice"
          desc="Deadline: 28 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/dsa")}
        />

        <Card
          title="SQL Queries"
          desc="Deadline: 30 Sept"
          footer="View Assignment →"
          onClick={() => navigate("/assignments/sql")}
        />
      </div>
    </>
  );
}

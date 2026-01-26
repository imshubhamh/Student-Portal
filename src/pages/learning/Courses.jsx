import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Your Courses"
        desc="All your enrolled courses in one organised place."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Web Development"
          desc="HTML, CSS, JavaScript, React"
          meta="12 Modules"
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          onClick={() => navigate("/courses/web-development")}
        />

        <Card
          title="Data Structures"
          desc="Arrays, Linked List, Trees, Graphs"
          meta="DSA Core"
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          onClick={() => navigate("/courses/dsa")}
        />

        <Card
          title="Database Systems"
          desc="SQL, Indexing, Transactions"
          meta="DBMS"
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          onClick={() => navigate("/courses/dbms")}
        />
      </div>
    </>
  );
}

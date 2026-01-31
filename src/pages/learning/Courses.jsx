import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/common/Card";

export default function Courses() {
  const navigate = useNavigate();
   const [query, setQuery] = useState("");

  return (
    <>
      <div className="mb-20">
        <PageHeader
          title="Your Courses"
          desc="All your enrolled courses in one organised place."
        />
        <div className="max-w-md mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search playlists..."
            className="
              w-full border border-[#E5E7EB]
              rounded-xl px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-[#2BBBAD]
            "
          />
        </div>
      </div>

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

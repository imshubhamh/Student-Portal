import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import NoteCard from "../../components/common/NoteCard";

export default function Notes() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="Study Notes"
        desc="Well-organised notes for quick revision and exam prep."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NoteCard
          title="React Notes"
          desc="Hooks, Components, Lifecycle, Best Practices"
          meta="PDF • 42 pages"
          image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
          onClick={() => navigate("/notes/react")}
        />

        <NoteCard
          title="DBMS Notes"
          desc="Normalization, Keys, Indexes, Transactions"
          meta="PDF • 38 pages"
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          onClick={() => navigate("/notes/dbms")}
        />

        <NoteCard
          title="Operating System Notes"
          desc="Process, Threads, Scheduling, Memory"
          meta="PDF • 46 pages"
          image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
          onClick={() => navigate("/notes/os")}
        />
      </div>
    </>
  );
}

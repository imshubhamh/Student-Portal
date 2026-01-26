import PageHeader from "../../components/common/PageHeader";

export default function NoteDetail() {
  return (
    <>
      <PageHeader
        title="React Notes"
        desc="Quick revision notes for React."
      />

      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm text-gray-600">
        <p>
          React is a JavaScript library for building user interfaces.
          It uses a component-based architecture...
        </p>
      </div>
    </>
  );
}

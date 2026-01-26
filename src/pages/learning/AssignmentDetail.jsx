import PageHeader from "../../components/common/PageHeader";

export default function AssignmentDetail() {
  return (
    <>
      <PageHeader
        title="React Mini Project"
        desc="Build a small React app using hooks."
      />

      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm text-gray-600 space-y-3">
        <p>✔ Create reusable components</p>
        <p>✔ Use useState and useEffect</p>
        <p>✔ Submit GitHub repository link</p>
      </div>
    </>
  );
}

const ExamsHeader = () => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-semibold text-gray-900">Exams</h1>
      <p className="text-gray-600 mt-1">
        View your upcoming, live and completed exams
      </p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Upcoming", value: "3" },
          { label: "Attempted", value: "12" },
          { label: "Avg Score", value: "78%" },
          { label: "Total Exams", value: "15" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-white p-4"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-xl font-semibold text-gray-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamsHeader;

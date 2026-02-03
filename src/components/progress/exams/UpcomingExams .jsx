const UpcomingExams = () => {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Upcoming Exams</h2>

      <div className="space-y-4">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border bg-white p-5"
          >
            <div>
              <h3 className="font-medium text-gray-900">
                Frontend Development Test
              </h3>
              <p className="text-sm text-gray-500">
                10 Feb 2026 · 60 mins · Online
              </p>
            </div>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExams;
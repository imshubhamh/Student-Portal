const PastExams = () => {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Past Exams</h2>

      <div className="rounded-xl border bg-white divide-y">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="flex justify-between p-4"
          >
            <div>
              <p className="font-medium text-gray-900">
                JavaScript Basics
              </p>
              <p className="text-sm text-gray-500">
                Score: 82%
              </p>
            </div>
            <button className="text-sm text-blue-600">
              View Result
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

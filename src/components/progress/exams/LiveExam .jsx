const LiveExam = () => {
  return (
    <div className="mb-10 rounded-xl border bg-green-50 p-6">
      <h2 className="text-lg font-semibold text-green-800">
        Live Exam
      </h2>
      <p className="text-green-700 mt-1">
        Backend Development Assessment
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-green-600">
          Ends in: 45 minutes
        </span>
        <button className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white">
          Start Exam
        </button>
      </div>
    </div>
  );
};

const PerformanceSnapshot = () => {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">
        Performance Overview
      </h2>

      <div className="rounded-xl border bg-white p-6">
        <p className="text-sm text-gray-600">
          Strong in Frontend · Needs improvement in Backend
        </p>

        <div className="mt-4 h-3 w-full rounded-full bg-gray-200">
          <div className="h-full w-3/4 rounded-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

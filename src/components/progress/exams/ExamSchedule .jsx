const ExamSchedule = () => {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Exam Schedule</h2>

      <div className="rounded-xl border bg-white divide-y">
        {["10 Feb", "15 Feb", "20 Feb"].map((date) => (
          <div
            key={date}
            className="flex justify-between p-4"
          >
            <span className="text-gray-700">{date}</span>
            <span className="text-gray-500">Data Structures Exam</span>
          </div>
        ))}
      </div>
    </div>
  );
};

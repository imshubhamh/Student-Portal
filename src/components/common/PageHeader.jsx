export default function PageHeader({ title, desc }) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-lg md:text-2xl font-semibold text-[#1F2937]">
        {title}
      </h1>
      <p className=" text-gray-500 max-w-xl mx-auto">
        {desc}
      </p>
    </div>
  );
}

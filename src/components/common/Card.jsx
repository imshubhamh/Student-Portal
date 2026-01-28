export default function Card({
  title,
  desc,
  image,
  onClick,
  meta,
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative mt-16 flex justify-center"
    >
      {/* Floating Preview Images */}
      <div className="absolute -top-16 left-6 right-6 flex justify-center pointer-events-none">
        <div className="relative">
          {/* Back card */}
          <img
            src={image}
            alt=""
            className="
              absolute -left-6 top-4
              h-28 w-60
              rounded-xl
              object-cover
              opacity-40
              blur-[1px]
              scale-95
            "
          />

          {/* Middle card */}
          <img
            src={image}
            alt=""
            className="
              absolute left-6 top-2
              h-28 w-80
              rounded-xl
              object-cover
              opacity-70
              scale-95
            "
          />

          {/* Front card */}
          <img
            src={image}
            alt=""
            className="
              relative
              h-32 w-[280px] 
              rounded-xl
              object-cover
              shadow-xl
              transition-transform duration-300
              group-hover:-translate-y-2
            "
          />
        </div>
      </div>

      {/* Main Card */}
      <div
        className="
          relative
          w-[280px] md:w-[350px]
          rounded-xl bg-white
          border border-gray-200
          py-5 px-6
          shadow-sm
          transition-all duration-300
          group-hover:shadow-lg
        "
      >

        {/* Icons Row */}
        <div className="flex gap-2 mb-4">
          <span className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold">
            📘
          </span>
          <span className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold">
            ⚙️
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {desc}
        </p>

        <div className="mt-4 text-sm font-medium text-indigo-600">
          {meta}
        </div>
      </div>
    </div>
  );
}

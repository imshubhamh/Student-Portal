export default function NoteCard({
  title,
  desc,
  image,
  meta,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        bg-white
        rounded-2xl
        border border-[#E5E7EB]
        overflow-hidden
        shadow-sm
        hover:shadow-lg
        transition
        group
      "
    >
      {/* Thumbnail */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            group-hover:scale-105
            transition duration-300
          "
        />
        <span
          className="
            absolute top-3 left-3
            bg-white/90
            text-xs font-medium
            px-3 py-1 rounded-full
          "
        >
          {meta}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-[#1F2937] text-lg">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {desc}
        </p>

        <div className="mt-4 text-[#2BBBAD] font-medium text-sm">
          View Notes →
        </div>
      </div>
    </div>
  );
}

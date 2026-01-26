

export default function PlaylistCard({ playlist, onClick }) {
  const { title, thumbnails, itemCount } = playlist.snippet;

  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer
        bg-white border border-[#E5E7EB]
        rounded-xl overflow-hidden
        shadow-sm hover:shadow-md
        transition
      "
    >
      {/* Thumbnail */}
      <div className="relative h-50 overflow-hidden">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="
            w-full h-full object-cover
            group-hover:scale-105 transition duration-300
          "
        />

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 bg-black/30 opacity-0
            group-hover:opacity-100 transition
            flex items-center justify-center
          "
        >
          <span className="bg-white text-xs font-medium px-3 py-1 rounded-md">
            Open →
          </span>
        </div>

        {/* Video count */}
        {itemCount && (
          <span
            className="
              absolute top-2 right-2
              bg-white/90 text-[11px]
              px-2 py-0.5 rounded-md
            "
          >
            {itemCount} videos
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-[#1F2937] line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
}

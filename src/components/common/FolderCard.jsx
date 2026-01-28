export default function FolderCard({ title, desc, meta, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer w-full max-w-[220px] transition-all duration-300 hover:-translate-y-1"
    >
      {/* Back Shadow Layer */}
      <div className="absolute inset-0 translate-y-2 scale-[0.97] bg-gray-300 rounded-xl z-0" />

      {/* Folder Tab */}
      <div className="relative z-10 ml-5 w-24 h-5 bg-gray-300 rounded-t-[6px] border border-gray-400 border-b-0" />

      {/* Folder Body */}
      <div className="relative z-20 bg-gray-200 border border-gray-400 rounded-xl p-4 shadow-md group-hover:shadow-xl transition-all duration-300">
        
        {/* Inner Top Curve */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gray-100 rounded-t-xl" />

        {/* Shine */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 rounded-xl transition" />

        <div className="relative z-30 pt-2">
          <h3 className="font-semibold text-gray-800 text-sm truncate">
            {title}
          </h3>

          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {desc}
          </p>

          <p className="text-[11px] text-gray-500 mt-2">
            {meta}
          </p>
        </div>
      </div>
    </div>
  );
}

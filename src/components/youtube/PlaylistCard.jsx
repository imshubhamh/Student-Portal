// export default function PlaylistCard({ playlist, onClick }) {
//   const { title, thumbnails, itemCount } = playlist.snippet;

//   return (
//     <div
//       onClick={onClick}
//       className="
//         cursor-pointer flex gap-5
//         bg-white border border-gray-200
//         rounded-xl p-4
//         shadow-sm hover:shadow-md
//         transition
//         overflow-hidden
//       "
//     >
//       {/* Thumbnail */}
//       <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden">
//         <img
//           src={thumbnails.medium.url}
//           alt={title}
//           className="w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//         {itemCount && (
//           <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
//             {itemCount}+ Lectures
//           </div>
//         )}
//       </div>

//       {/* Info */}
//       <div className="flex flex-col justify-between flex-1 min-w-0">
//         <div>
//           <h3 className="text-base font-semibold text-gray-900 line-clamp-2 break-words">
//             {title}
//           </h3>

//           <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//             Complete structured learning playlist
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-600">
//           <span className="bg-gray-100 px-2 py-1 rounded">HD</span>
//           <span className="bg-gray-100 px-2 py-1 rounded">Step-by-step</span>
//           <span className="bg-gray-100 px-2 py-1 rounded">Beginner → Pro</span>
//         </div>
//       </div>

//       {/* Arrow */}
//       <div className="flex items-center text-gray-400 text-2xl pl-2">
//         ›
//       </div>
//     </div>
//   );
// }


// -----------
export default function PlaylistCard({ playlist, onClick }) {
  const { title, thumbnails, itemCount } = playlist.snippet;

  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer flex items-center gap-6
        bg-white border border-gray-200
        rounded-2xl p-5
        shadow-sm hover:shadow-md
        transition
      "
    >
      {/* Thumbnail */}
      <div className="relative w-48 h-28 flex-shrink-0 rounded-xl overflow-hidden">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full h-full object-cover"
        />

        {itemCount && (
          <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {itemCount}+ Lectures
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          Structured video course for deep conceptual understanding
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
            Full Course
          </span>
          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md">
            Step-by-step
          </span>
          <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-md">
            Beginner → Advanced
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-gray-400 text-2xl flex-shrink-0">
        →
      </div>
    </div>
  );
}

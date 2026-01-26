// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PageHeader from "../../components/common/PageHeader";
// import PlaylistCard from "../../components/youtube/PlaylistCard";
// import { fetchPlaylists } from "../../services/youtubeApi";

// const CHANNEL_ID = "UCYQYShFuP6N2sbJOYsjti_A";

// export default function Playlists() {
//   const [playlists, setPlaylists] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPlaylists(CHANNEL_ID).then((data) => {
//       setPlaylists(data.items || []);
//     });
//   }, []);

//   return (
//     <>
//       <PageHeader
//         title="Video Playlists"
//         desc="All video lectures organised by playlists"
//       />

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {playlists.map((pl) => (
//           <PlaylistCard
//             key={pl.id}
//             playlist={pl}
//             onClick={() => navigate(`/youtube/${pl.id}`)}
//           />
//         ))}
//       </div>
//     </>
//   );
// }


// ------------

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import PlaylistCard from "../../components/youtube/PlaylistCard";
import { SkeletonCard } from "../../components/common/SkeletonCard";
import { fetchPlaylists } from "../../services/youtubeApi";

const CHANNEL_ID = "UC04gG1Nze-SpgPHWVz0O7JQ";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchPlaylists(CHANNEL_ID).then((data) => {
      setPlaylists(data.items || []);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    return playlists.filter((pl) =>
      pl.snippet.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [playlists, query]);

  return (
    <>
      {/* Header with search */}
      <div className="mb-8">
        <PageHeader
          title="Video Playlists"
          desc="All video lectures organised by playlists"
        />

        <div className="max-w-md mx-auto mt-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search playlists..."
            className="
              w-full border border-[#E5E7EB]
              rounded-xl px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-[#2BBBAD]
            "
          />
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No playlists found.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pl) => (
            <PlaylistCard
              key={pl.id}
              playlist={pl}
              onClick={() => navigate(`/youtube/${pl.id}`)}
            />
          ))}
        </div>
      )}
    </>
  );
}



import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import PlaylistCard from "../../components/youtube/PlaylistCard";
import { SkeletonCard } from "../../components/common/SkeletonCard";
import { fetchPlaylists } from "../../services/youtubeApi";

const CHANNEL_ID = "UCBwmMxybNva6P_5VmxjzwqA";

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
      <div className="mb-8 ">
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
  <div className="max-w-6xl mx-auto">
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <div className="space-y-6 max-h-[650px] overflow-y-auto pr-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </div>
) : filtered.length === 0 ? (
  <div className="text-center text-gray-500 mt-20">
    No playlists found.
  </div>
) : (
  <div className="max-w-6xl mx-auto">
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Card Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <h2 className="font-semibold text-gray-800 text-lg">
          All Playlists
        </h2>
        <span className="text-sm text-gray-500">
          {filtered.length} total
        </span>
      </div>

      {/* Scrollable Card Body */}
      <div className="p-6 space-y-6 max-h-[650px] overflow-y-auto pr-2">
        {filtered.map((pl) => (
          <PlaylistCard
            key={pl.id}
            playlist={pl}
            onClick={() => navigate(`/youtube/${pl.id}`)}
          />
        ))}
      </div>

    </div>
  </div>
)}


    </>
  );
}

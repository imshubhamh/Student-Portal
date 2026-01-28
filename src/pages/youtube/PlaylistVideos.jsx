

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoCard from "../../components/youtube/VideoCard";
import { fetchPlaylistVideos, fetchVideoDetails } from "../../services/youtubeApi";


export default function PlaylistVideos() {
  const { playlistId } = useParams();
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
const [videoDetails, setVideoDetails] = useState(null);


useEffect(() => {
  if (!currentVideo) return;

  fetchVideoDetails(currentVideo).then((snippet) => {
    setVideoDetails(snippet);
  });
}, [currentVideo]);



  useEffect(() => {
    fetchPlaylistVideos(playlistId).then((data) => {
      setVideos(data.items || []);
      if (data.items?.length) {
        setCurrentVideo(data.items[0].snippet.resourceId.videoId);
      }
    });
  }, [playlistId]);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* PLAYER */}
      <div className="lg:col-span-2 space-y-4">
        {currentVideo && (
          <>
            {/* Video Frame */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${currentVideo}`}
                allowFullScreen
              />

              {/* Top Gradient Overlay */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
            </div>

            {/* Video Info Panel */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 line-clamp-2">
                {videos.find(v => v.snippet.resourceId.videoId === currentVideo)?.snippet.title}
              </h2>

              <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded">Playlist Lecture</span>
                <span>HD Quality</span>
                <span>Structured Learning</span>
              </div>
            </div>
          </>
        )}

        {videoDetails && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            About this lecture
          </h3>

          <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed max-h-64 overflow-y-auto">
            {videoDetails.description || "No description available."}
          </p>
        </div>
      )}

      </div>


      {/* PLAYLIST PANEL */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800">Playlist Videos</h3>
          <p className="text-xs text-gray-500">
            {videos.length} lectures in this series
          </p>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[850px]">
          {videos.map((v) => (
            <VideoCard
              key={v.id}
              video={v}
              isActive={currentVideo === v.snippet.resourceId.videoId}
              onPlay={setCurrentVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

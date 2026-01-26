import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoCard from "../../components/youtube/VideoCard";
import { fetchPlaylistVideos } from "../../services/youtubeApi";

export default function PlaylistVideos() {
  const { playlistId } = useParams();
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetchPlaylistVideos(playlistId).then((data) => {
      setVideos(data.items || []);
      if (data.items?.length) {
        setCurrentVideo(data.items[0].snippet.resourceId.videoId);
      }
    });
  }, [playlistId]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* PLAYER */}
      <div className="lg:col-span-2">
        {currentVideo && (
          <iframe
            className="w-full h-[400px] rounded-xl"
            src={`https://www.youtube.com/embed/${currentVideo}`}
            allowFullScreen
          />
        )}
      </div>

      {/* VIDEO LIST */}
      <div className="space-y-3">
        {videos.map((v) => (
          <VideoCard
            key={v.id}
            video={v}
            onPlay={setCurrentVideo}
          />
        ))}
      </div>
    </div>
  );
}

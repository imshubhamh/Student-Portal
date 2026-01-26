export default function VideoCard({ video, onPlay }) {
  const { title, thumbnails, resourceId } = video.snippet;

  return (
    <div
      onClick={() => onPlay(resourceId.videoId)}
      className="cursor-pointer flex gap-4 bg-white p-4 rounded-xl border hover:bg-gray-50"
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-32 rounded-lg p-5"
      />

      <div>
        <p className="font-medium text-sm">{title}</p>
      </div>
    </div>
  );
}

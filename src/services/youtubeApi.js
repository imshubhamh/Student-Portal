const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchPlaylists(channelId) {
  const res = await fetch(
    `${BASE_URL}/playlists?part=snippet&channelId=${channelId}&maxResults=20&key=${API_KEY}`
  );
  return res.json();
}

export async function fetchPlaylistVideos(playlistId) {
  const res = await fetch(
    `${BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`
  );
  return res.json();
}

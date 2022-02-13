import youtubedl from "youtube-dl-exec"; // es6

youtubedl("https://www.youtube.com/c/YMSClips", {
  playlistEnd: 10,
  extractAudio: true,
  audioFormat: "mp3",
  output: "%(title)s.mp3",
  noPart: true,
});

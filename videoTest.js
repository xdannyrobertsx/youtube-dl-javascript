const youtubedl = require("youtube-dl-exec");

youtubedl("https://www.youtube.com/watch?v=z_CcQhbwINU", {
  extractAudio: true,
  audioFormat: "mp3",
  output: "./bruh.mp3",
  noPart: true,
});

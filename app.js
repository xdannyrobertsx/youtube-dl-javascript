import youtubedl from "youtube-dl-exec";
// import { apiKey, fetchYoutube } from "./src/fetchYoutube.js";
import { channelID, prompter } from "./src/regexPrompt.js";

prompter();

// need to make prompter function from regexPrompt.js asynchronous

youtubedl(channelID, {
  playlistEnd: 2,
  extractAudio: true,
  audioFormat: "mp3",
  output: "%(title)s.mp3",
  noPart: true,
});

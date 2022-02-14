import prompt from "prompt";
import youtubedl from "youtube-dl-exec";

function prompter() {
  let channelID = "";

  let promptReq = {
    properties: {
      channel: {
        pattern: /(\/channel\/|c\/(.*))/,
        message: "That's not a Youtube Channel!",
        required: true,
      },
    },
  };

  prompt.start();
  console.log("What Youtube Channel Would You Like To Scrape?");

  prompt.get(promptReq, function (err, answer) {
    channelID = answer.channel; // returns object with key titled "channel"
    console.log("GETTING VIDEOS");
    youtubedl(channelID, {
      playlistEnd: 2,
      extractAudio: true,
      audioFormat: "mp3",
      output: "%(title)s.mp3",
      noPart: true,
    });
  });
}

prompter();

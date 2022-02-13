let channelID = "";

let apiKey = "AIzaSyAWIrzsVnN0QO_gukNz5I37BNya2GuZe9s";

// const https = require("https");
import https from "https"; // es6

let fetchYoutube = function (api) {
  https
    .get(`${api}`, (res) => {
      let data = "";

      // called when a data chunk is received.
      res.on("data", (chunk) => {
        data += chunk;
      });

      // called when the complete response is received.
      res.on("end", () => {
        console.log(JSON.parse(data));
        console.log(JSON.parse(data)); //test
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
};

function getChannelID(channel) {
  let rx = /channel\/(.*)/;
  let rx2 = /channel\/(.*)\//;
  let rx3 = /c\/(.*)/;

  if (channel.match(rx2) || channel.match(rx)) {
    let arr = channel.match(rx2) || channel.match(rx);
    channelID = arr[1];
    console.log(arr[1]); //test
  } else if (channel.match(rx3)) {
    console.log("legacy");
  } else {
    console.log("nada");
  }
}

let userInput = "https://www.youtube.com/c/YMSClips";

getChannelID(userInput);

let apiCall = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=10`;
fetchYoutube(apiCall);

let channelID = "exampleID123";

let apiKey = "AIzaSyAWIrzsVnN0QO_gukNz5I37BNya2GuZe9s";

const https = require("https");

let fetchYoutube = function (json) {
  https
    .get(`${json}`, (res) => {
      let data = "";

      // called when a data chunk is received.
      res.on("data", (chunk) => {
        data += chunk;
      });

      // called when the complete response is received.
      res.on("end", () => {
        console.log(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
};

function getChannelID(channel) {
  let rx = /channel\/(.*)/;
  let rx2 = /channel\/(.*)\//;

  let arr = channel.match(rx2) || channel.match(rx);
  console.log(arr[1]);
}

let userInput = "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw";

getChannelID(userInput);

let apiCall = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=10`;
fetchYoutube(apiCall);

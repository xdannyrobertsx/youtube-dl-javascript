let channelID = "";

const prompt = require("prompt");

let promptReq = {
  properties: {
    channel: {
      pattern: /\/channel\//,
      message: "That's not a Youtube Channel!",
      required: true,
    },
  },
};

prompt.start();
console.log("What Youtube Channel Would You Like To Scrape?");

prompt.get(promptReq, function (err, answer) {
  channelID = answer.channel;
  console.log(channelID);
});

import prompt from "prompt";

let channelID = "";

function prompter() {
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
    console.log(channelID);
    return;
  });
}

export { channelID, prompter };

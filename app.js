let channelID = "exampleID123";

let apiKey = "exampleKey234";

function getChannelID(channel) {
  let rx = /channel\/(.*)/;
  let rx2 = /channel\/(.*)\//;

  let arr = channel.match(rx2) || channel.match(rx);
  console.log(arr[1]);
}

let bruh = "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw";

getChannelID(bruh);

let apiCall = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=20`;

async function getChannel() {
  let response = await fetch(apiCall);
  let data = response.json();
  return data;
}

getChannel().then((data) => console.log(data));

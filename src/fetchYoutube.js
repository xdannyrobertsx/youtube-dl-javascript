let apiKey = "AIzaSyAWIrzsVnN0QO_gukNz5I37BNya2GuZe9s";

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

export { apiKey, fetchYoutube };

#!/usr/bin/env node

import inquirer from "inquirer";
import youtubedl from "youtube-dl-exec";

function prompter() {
  let channelID;
  let vidNumber;
  const questions = [
    {
      type: "input",
      name: "channel",
      message: "What Youtube Channel Would You Like To Scrape?",
      validate(value) {
        const pass = value.match(/(\/channel\/|c\/(.*))/);
        if (pass) {
          return true;
        }

        return "Please Enter a Valid Youtube Channel";
      },
    },
    {
      type: "input",
      name: "vidNumber",
      message: "How Many Videos Would You Like to Scrape?",
      validate(value) {
        const pass = value.match(/^(0?[1-9]|[1-9][0-9])$/);
        if (pass) {
          return true;
        }

        return "Please Enter a Number Between 1 and 99";
      },
      default() {
        return 1;
      },
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    channelID = answers["channel"];
    vidNumber = answers["vidNumber"];

    console.log("Downloading Videos now!");

    youtubedl(channelID, {
      playlistEnd: vidNumber,
      extractAudio: true,
      audioFormat: "mp3",
      output: "./%(channel)s/%(title)s.mp3",
      noPart: true,
    });
  });
}

prompter();

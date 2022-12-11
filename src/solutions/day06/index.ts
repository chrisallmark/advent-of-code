const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  const START_OF_PACKET_SIZE = 4;
  const START_OF_MESSAGE_SIZE = 14;
  const data = [...input];
  // part1
  let part1 = 0;
  for (let i = 0; i <= data.length - START_OF_PACKET_SIZE; i++) {
    if (
      new Set(data.slice(i, i + START_OF_PACKET_SIZE)).size ===
      START_OF_PACKET_SIZE
    ) {
      part1 = i + START_OF_PACKET_SIZE;
      break;
    }
  }
  // part2
  let part2 = 0;
  for (let i = 0; i <= input.length - START_OF_MESSAGE_SIZE; i++) {
    if (
      new Set(data.slice(i, i + START_OF_MESSAGE_SIZE)).size ===
      START_OF_MESSAGE_SIZE
    ) {
      part2 = i + START_OF_MESSAGE_SIZE;
      break;
    }
  }
  return [part1, part2];
};

module.exports = {
  solve: (input?: string) =>
    crunchInput(input || /* istanbul ignore next */ loadInput("input.txt")),
};

if (process.env["NODE_ENV"] === "test") {
  module.exports.loadInput = loadInput;
  module.exports.crunchInput = crunchInput;
}

export {};

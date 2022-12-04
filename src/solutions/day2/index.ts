const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const points = (id: string) => {
  switch (id) {
    case "A":
    case "X":
      return 1;
    case "B":
    case "Y":
      return 2;
    case "C":
    case "Z":
      return 3;
    /* istanbul ignore next */
    default:
      return 0;
  }
};

const crunchInput = (input: string) => {
  const plays = [
    [3, 1, 2], // [rock][lose,draw,win]
    [1, 2, 3], // [paper][lose,draw,win]
    [2, 3, 1], // [scissors][lose,draw,win]
  ];
  const scores = [
    [3, 6, 0], // [rock][rock,paper,scisors]
    [0, 3, 6], // [paper][rock,paper,scisors]
    [6, 0, 3], // [scissors][rock,paper,scisors]
  ];
  let part1 = 0;
  let part2 = 0;
  input
    .split("\n")
    .map((line) => line.split(" "))
    .forEach((values) => {
      const play1 = points(values[0]);
      const play2 = points(values[1]);
      const play3 = plays[play1 - 1][play2 - 1];
      part1 += play2 + scores[play1 - 1][play2 - 1];
      part2 += play3 + scores[play1 - 1][play3 - 1];
    });
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

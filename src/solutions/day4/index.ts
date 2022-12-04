const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  let part1 = 0;
  let part2 = 0;
  input.split("\n").forEach((line) => {
    // part 1
    const ranges = line
      .split(",")
      .map((range) => range.split("-").map((value) => Number.parseInt(value)));
    if (
      (ranges[0][0] >= ranges[1][0] && ranges[0][1] <= ranges[1][1]) ||
      (ranges[1][0] >= ranges[0][0] && ranges[1][1] <= ranges[0][1])
    ) {
      part1++;
    }
    if (
      (ranges[0][0] >= ranges[1][0] && ranges[0][0] <= ranges[1][1]) ||
      (ranges[0][1] >= ranges[1][0] && ranges[0][1] <= ranges[1][1]) ||
      (ranges[1][0] >= ranges[0][0] && ranges[1][0] <= ranges[0][1]) ||
      (ranges[1][1] >= ranges[0][0] && ranges[1][1] <= ranges[0][1])
    ) {
      part2++;
    }
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

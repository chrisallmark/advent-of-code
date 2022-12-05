const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  let part1 = 0;
  let part2 = 0;
  input.split("\n").forEach((line) => {
    const ranges = line.split(",").map((range) => {
      const minmax = range.split("-").map((value) => Number.parseInt(value));
      return Array.from(
        { length: minmax[1] - minmax[0] + 1 },
        (_, i) => minmax[0] + i
      );
    });
    const intersection = ranges[0].filter((value) => ranges[1].includes(value));
    // part 1
    if (
      intersection.length === ranges[0].length ||
      intersection.length === ranges[1].length
    ) {
      part1++;
    }
    // part 2
    if (intersection.length > 0) {
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

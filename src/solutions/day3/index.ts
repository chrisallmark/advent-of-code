const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  let group: Array<Array<string>> = [];
  let part1 = 0;
  let part2 = 0;
  const priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  input.split("\n").forEach((line) => {
    // part 1
    const compartmentOne = [...line.slice(0, line.length / 2)];
    const compartmentTwo = [...line.slice(line.length / 2)];
    part1 +=
      priorities.indexOf(
        [
          ...new Set(
            compartmentOne.filter((item) => compartmentTwo.includes(item))
          ),
        ][0]
      ) + 1;
    compartmentOne.filter((item) => compartmentTwo.includes(item));
    // part 2
    group.push([...line]);
    if (group.length === 3) {
      part2 +=
        priorities.indexOf(
          [
            ...new Set(
              group[0]
                .filter((item) => group[1].includes(item))
                .filter((item) => group[2].includes(item))
            ),
          ][0]
        ) + 1;
      group = [];
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

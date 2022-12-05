const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  const inputs = input.split("\n\n");
  const part1 = inputs[0].split("\n").map((line) => [...line]);
  const part2 = inputs[0].split("\n").map((line) => [...line]);
  inputs[1].split("\n").forEach((line) => {
    const match = line.match(/^move (\d+) from (\d+) to (\d+)$/);
    if (match) {
      const move = Number.parseInt(match[1]);
      const from = Number.parseInt(match[2]) - 1;
      const to = Number.parseInt(match[3]) - 1;
      // part1
      for (let i = 0; i < move; i++) {
        part1[to].push(part1[from].pop()!);
      }
      // part2
      const bulk = [];
      for (let i = 0; i < move; i++) {
        bulk.unshift(part2[from].pop()!);
      }
      part2[to] = [...part2[to], ...bulk];
    }
  });

  return [
    part1.reduce((result, value) => (result += value.pop()), ""),
    part2.reduce((result, value) => (result += value.pop()), ""),
  ];
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

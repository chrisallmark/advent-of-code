const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const transposeState = (state: Array<Array<string>>) =>
  state[0].map((_, index) => state.map((row) => row[index]));

const crunchInput = (input: string) => {
  const [state, data] = input.split("\n\n");
  const part1 = transposeState(
    state
      .split("\n")
      .map((line) => [...line].filter((_, index) => (index + 3) % 4 === 0))
  ).map((crates) => crates.filter((crate) => crate !== " ").reverse());
  const part2: Array<Array<string>> = JSON.parse(JSON.stringify(part1));
  data.split("\n").forEach((line) => {
    const match = line.match(/^move (\d+) from (\d+) to (\d+)$/);
    if (match) {
      const move = Number.parseInt(match[1]);
      const from = Number.parseInt(match[2]) - 1;
      const to = Number.parseInt(match[3]) - 1;
      const bulk = [];
      for (let i = 0; i < move; i++) {
        // part1
        part1[to].push(part1[from].pop()!);
        bulk.unshift(part2[from].pop()!);
      }
      // part2
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

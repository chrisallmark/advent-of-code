const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  const data = input
    .split("\n\n")
    .map((item: string) => item.split("\n"))
    .map((data) =>
      data.reduce((total, value) => total + Number.parseInt(value), 0)
    )
    .sort((a, b) => b - a);
  return [data[0], data[0] + data[1] + data[2]];
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

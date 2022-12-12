const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

// this solution intentionally left blank
const crunchInput = (input: string) => {
  return [0, 0];
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

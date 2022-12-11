import { JsonableValue } from "ts-jest";

const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  const instructions = input.split("\n");
  let part1 = 0;
  let part2 = 0;

  let command = "noop";
  let value = 0;
  let delay = false;

  let cycle = 0;
  let x = 1;

  const crt = Array.from(Array(6), (_) => Array(40).fill("."));

  while (instructions.length) {
    cycle++;
    if (
      Math.floor((cycle - 1) % 40) >= Math.floor(x % 40) - 1 &&
      Math.floor((cycle - 1) % 40) <= Math.floor(x % 40) + 1
    ) {
      crt[Math.floor((cycle - 1) / 40)][Math.floor((cycle - 1) % 40)] = "#";
    }
    if (delay) {
      delay = false;
    } else {
      const instruction = instructions.shift()!.split(" ");
      command = instruction![0];
      value = Number.parseInt(instruction![1]) || 0;
      delay = command === "addx";
    }
    if (!delay) {
      x += value;
    }
    if ((cycle + 1 - 20) % 40 === 0) {
      part1 += (cycle + 1) * x;
    }
  }
  return [part1, crt.map((line) => line.join("")).join("\n")];
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

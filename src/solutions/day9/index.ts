const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const ropeRunner = (input: string, length: number) => {
  const result = new Set();
  const rope = Array.from(Array(length), (_) => [11, 5]);
  input.split("\n").forEach((line) => {
    const [direction, count] = line.split(" ");
    for (let i = 0; i < Number.parseInt(count); i++) {
      rope.forEach((knot, index) => {
        if (index === 0) {
          knot[0] += direction === "L" ? -1 : direction === "R" ? 1 : 0;
          knot[1] += direction === "U" ? 1 : direction === "D" ? -1 : 0;
        } else {
          const hMove = rope[index - 1][0] - knot[0];
          const vMove = rope[index - 1][1] - knot[1];
          // if the head is ever two steps directly up, down, left, or right from the tail,
          // the tail must also move one step in that direction so it remains close enough:
          if (
            (Math.abs(hMove) === 2 && Math.abs(vMove) === 0) ||
            (Math.abs(hMove) === 0 && Math.abs(vMove) === 2)
          ) {
            knot[0] += Math.sign(hMove);
            knot[1] += Math.sign(vMove);
          }
          // otherwise, if the head and tail aren't touching and aren't in the same row
          // or column, the tail always moves one step diagonally to keep up:
          else if (Math.abs(hMove) > 1 || Math.abs(vMove) > 1) {
            if (hMove >= 1 && vMove >= 1) {
              knot[0]++;
              knot[1]++;
            }
            if (hMove >= 1 && vMove <= -1) {
              knot[0]++;
              knot[1]--;
            }
            if (hMove <= -1 && vMove >= 1) {
              knot[0]--;
              knot[1]++;
            }
            if (hMove <= -1 && vMove <= -1) {
              knot[0]--;
              knot[1]--;
            }
          }
          if (index === rope.length - 1) {
            result.add(`${knot[0]}-${knot[1]}`);
          }
        }
      });
    }
  });
  return result.size;
};

const crunchInput = (input: string) => {
  const part1 = ropeRunner(input, 2);
  const part2 = ropeRunner(input, 10);
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

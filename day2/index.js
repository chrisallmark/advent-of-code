const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

// map input to points
const points = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
};

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

const result = input.reduce(
  (previousValue, currentValue) => {
    const values = currentValue.split(" ");
    const play1 = points[values[0]];
    const play2 = points[values[1]];
    const play3 = plays[play1 - 1][play2 - 1];
    previousValue.part1 += play2 + scores[play1 - 1][play2 - 1];
    previousValue.part2 += play3 + scores[play1 - 1][play3 - 1];
    return previousValue;
  },
  { part1: 0, part2: 0 }
);

console.log(`Part 1: ${result.part1}`);
console.log(`Part 2: ${result.part2}`);

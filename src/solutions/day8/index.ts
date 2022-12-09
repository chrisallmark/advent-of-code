const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  const grid = input
    .split("\n")
    .map((line) => line.split("").map((value) => Number.parseInt(value)));

  // part 1
  const part1 = Array.from(Array(grid.length), (_) =>
    Array(grid[0].length).fill("")
  );
  // left / right
  for (let i = 0; i < grid.length; i++) {
    let left = -1;
    let right = -1;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > left) {
        part1[i][j] = "V";
        left = grid[i][j];
      }
      if (grid[i][grid[i].length - j - 1] > right) {
        part1[i][grid[i].length - j - 1] = "X";
        right = grid[i][grid[i].length - j - 1];
      }
    }
  }
  // top / bottom
  for (let i = 0; i < grid[0].length; i++) {
    let top = -1;
    let bottom = -1;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > top) {
        part1[j][i] = "V";
        top = grid[j][i];
      }
      if (grid[grid.length - j - 1][i] > bottom) {
        part1[grid.length - j - 1][i] = "X";
        bottom = grid[grid.length - j - 1][i];
      }
    }
  }

  // part 2
  const part2 = Array.from(Array(grid.length), (_) =>
    Array(grid[0].length).fill(0)
  );
  grid.forEach((line, row) => {
    line.forEach((value, column) => {
      // up
      let up = 0;
      for (let i = row - 1; i >= 0; i--) {
        up++;
        if (grid[i][column] >= value) {
          break;
        }
      }
      // left
      let left = 0;
      for (let i = column - 1; i >= 0; i--) {
        left++;
        if (grid[row][i] >= value) {
          break;
        }
      }
      // down
      let down = 0;
      for (let i = row + 1; i < grid.length; i++) {
        down++;
        if (grid[i][column] >= value) {
          break;
        }
      }
      // right
      let right = 0;
      for (let i = column + 1; i < grid[row].length; i++) {
        right++;
        if (grid[row][i] >= value) {
          break;
        }
      }
      part2[row][column] = up * left * down * right;
    });
  });
  return [
    part1.reduce((total, row) => {
      total += row.filter((value) => value === "X").length;
      return total;
    }, 0),
    part2.reduce((max, values) => Math.max(max, Math.max(...values)), 0),
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

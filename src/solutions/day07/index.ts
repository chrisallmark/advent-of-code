const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

const crunchInput = (input: string) => {
  const path: Array<string> = [];
  interface Tree {
    [key: string]: any;
  }
  let tree: Tree = {};
  input.split("\n").forEach((line) => {
    if (line.startsWith("$ cd ")) {
      const dir = line.slice(5);
      if (dir === "..") {
        const total = tree[path.join("")];
        path.pop();
        tree[path.join("")] += total;
      } else {
        path.push(dir);
      }
    } else if (line === "$ ls") {
      tree[path.join("")] = 0;
    } else if (!line.startsWith("dir")) {
      tree[path.join("")] += Number.parseInt(line.split(" ")[0]);
    }
  });
  while (path.length > 1) {
    tree["/"] += tree[path.join("")];
    path.pop();
  }

  // part 1
  const part1 = Object.keys(tree).reduce((total, key) => {
    if (tree[key] <= 100000) {
      total += tree[key];
    }
    return total;
  }, 0);

  // part 2
  let part2 = 0;
  let unused = 70000000;
  Object.values(tree)
    .sort((a, b) => b - a)
    .forEach((value, index) => {
      if (index === 0) {
        unused -= value;
      } else {
        if (unused + value >= 30000000) {
          part2 = value;
        }
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

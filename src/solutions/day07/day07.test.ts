const day = require("./index.ts");

const input = day.loadInput("day07.txt");

describe("Day 7", () => {
  test("Load Input", () => {
    expect(input).toBe(
      "$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k"
    );
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([95437, 24933642]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([95437, 24933642]);
  });
});

export {};

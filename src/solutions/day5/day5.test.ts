const day = require("./index.ts");

const input = day.loadInput("day5.txt");

describe("Day 5", () => {
  test("Load Input", () => {
    expect(input).toBe(
      "    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2"
    );
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual(["CMZ", "MCD"]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual(["CMZ", "MCD"]);
  });
});

export {};

const day = require("./index.ts");

const input = day.loadInput("day02.txt");

describe("Day 2", () => {
  test("Load Input", () => {
    expect(input).toBe("A Y\nB X\nC Z");
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([15, 12]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([15, 12]);
  });
});

export {};

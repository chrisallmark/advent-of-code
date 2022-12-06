const day = require("./index.ts");

const input = day.loadInput("day6.txt");

describe("Day 6", () => {
  test("Load Input", () => {
    expect(input).toBe("mjqjpqmgbljsphdztnvjfqwrcgsmlb");
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([7, 19]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([7, 19]);
  });
});

export {};

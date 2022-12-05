const day = require("./index.ts");

const input = day.loadInput("day4.txt");

describe("Day 4", () => {
  test("Load Input", () => {
    expect(input).toBe("2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8");
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([2, 4]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([2, 4]);
  });
});

export {};

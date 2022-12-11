const day = require("./index.ts");

const input = day.loadInput("day08.txt");

describe("Day 8", () => {
  test("Load Input", () => {
    expect(input).toBe("30373\n25512\n65332\n33549\n35390");
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([21, 8]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([21, 8]);
  });
});

export {};

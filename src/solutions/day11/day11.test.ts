const day = require("./index.ts");

const input = day.loadInput("day11.txt");

describe("Day 11", () => {
  test("Load Input", () => {
    expect(input).toMatch(
      /^Monkey 0:\n  Starting items: 79, 98\n  Operation: new = old \* 19\n  Test: divisible by 23\n    If true: throw to monkey 2\n    If false: throw to monkey 3\n\n/
    );
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([10605, 2713310158]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([10605, 2713310158]);
  });
});

export {};

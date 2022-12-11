const day = require("./index.ts");

const input = day.loadInput("day03.txt");

describe("Day 3", () => {
  test("Load Input", () => {
    expect(input).toBe(
      "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw"
    );
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([157, 70]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([157, 70]);
  });
});

export {};

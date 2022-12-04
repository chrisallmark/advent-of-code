const day = require("./index.ts");

const input = day.loadInput("day1.txt");

describe("Day 1", () => {
  test("Load Input", () => {
    expect(input).toEqual(
      "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000"
    );
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([24000, 45000]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([24000, 45000]);
  });
});

export {};

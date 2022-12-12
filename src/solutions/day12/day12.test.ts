const day = require("./index.ts");

const input = day.loadInput("input.txt");

describe("Day 12", () => {
  test("Load Input", () => {
    expect(input).toBe("Sabqponm\nabcryxxl\naccszExk\nacctuvwj\nabdefghi");
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(input)).toEqual([0, 0]);
  });

  test("Solve", () => {
    expect(day.solve(input)).toEqual([0, 0]);
  });
});

export {};

const day = require("./index.ts");

const inputPart1 = day.loadInput("day9-part1.txt");
const inputPart2 = day.loadInput("day9-part2.txt");

describe("Day 9", () => {
  test("Load Input", () => {
    expect(inputPart1).toBe("R 4\nU 4\nL 3\nD 1\nR 4\nD 1\nL 5\nR 2");
    expect(inputPart2).toBe("R 5\nU 8\nL 8\nD 3\nR 17\nD 10\nL 25\nU 20");
  });

  test("Crunch Input", () => {
    expect(day.crunchInput(inputPart1)[0]).toEqual(13);
    expect(day.crunchInput(inputPart2)[1]).toEqual(36);
  });

  test("Solve", () => {
    expect(day.solve(inputPart1)[0]).toEqual(13);
    expect(day.solve(inputPart2)[1]).toEqual(36);
  });
});

export {};

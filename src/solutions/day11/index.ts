const { readFileSync } = require("fs");

const loadInput = (filename: string) => {
  return readFileSync(`${__dirname}/${filename}`, "utf-8");
};

type Monkey = {
  divisor: number;
  inspections: number;
  items: number[];
  operation?: (n: number, f: (r: number) => number) => number;
  test?: (n: number) => number;
};

const monkeyMaker = (input: string): Monkey[] => {
  const monkeys: Monkey[] = input.split("\n\n").map((data) => {
    let monkey: Monkey = {
      divisor: 0,
      inspections: 0,
      items: [],
    };
    const items = data.match(/Starting items: (.*)/);
    if (items) {
      monkey.items = items[1].split(", ").map((item) => Number.parseInt(item));
    }
    const operation = data.match(/Operation: new = old (\S*) (\S*)/);
    if (operation) {
      monkey.operation = (n, f) => {
        const value =
          operation[2] === "old" ? n : Number.parseInt(operation[2]);
        let result = 0;
        switch (operation[1]) {
          case "+":
            result = n + value;
            break;
          case "*":
            result = n * value;
            break;
        }
        return f(result);
      };
    }
    const test = data.match(
      /Test: divisible by (\d*)\n.*If true: throw to monkey (\d*)\n.*If false: throw to monkey (\d*)/
    );
    if (test) {
      monkey.divisor = Number.parseInt(test[1]);
      monkey.test = (n) => {
        return Math.floor(n % monkey.divisor) === 0
          ? Number.parseInt(test[2])
          : Number.parseInt(test[3]);
      };
    }
    return monkey;
  });
  return monkeys;
};

const monkeyShenanigans = (monkeys: Monkey[], iterations: number) => {
  for (let i = 0; i < iterations; i++) {
    monkeys.forEach((monkey) => {
      while (monkey.items.length) {
        const item = monkey.items.shift();
        const operationResult = monkey.operation!(item!, (r) =>
          iterations === 20
            ? Math.floor(r / 3)
            : r %
              monkeys.reduce((product, monkey) => product * monkey.divisor, 1)
        );
        const testResult = monkey.test!(operationResult);
        monkeys[testResult].items.push(operationResult);
        monkey.inspections++;
      }
    });
  }
  return monkeys
    .sort((a, b) => b.inspections - a.inspections)
    .slice(0, 2)
    .reduce((product, monkey) => product * monkey.inspections, 1);
};

const crunchInput = (input: string) => {
  // part 1
  const part1 = monkeyShenanigans(monkeyMaker(input), 20);
  // part 2
  const part2 = monkeyShenanigans(monkeyMaker(input), 10000);
  return [part1, part2];
};

module.exports = {
  solve: (input?: string) =>
    crunchInput(input || /* istanbul ignore next */ loadInput("input.txt")),
};

if (process.env["NODE_ENV"] === "test") {
  module.exports.loadInput = loadInput;
  module.exports.crunchInput = crunchInput;
}

export {};

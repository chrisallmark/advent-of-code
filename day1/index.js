const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

const data = input
  .reduce(
    (previousValue, currentValue) => {
      if (currentValue.length) {
        previousValue.total += parseInt(currentValue);
      } else {
        previousValue.totals.push(previousValue.total);
        previousValue.total = 0;
      }
      return previousValue;
    },
    { total: 0, totals: [] }
  )
  .totals.sort((a, b) => b - a);

console.log(`Part 1: ${data[0]}`);
console.log(`Part 2: ${data[0] + data[1] + data[2]}`);

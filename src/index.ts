const solutions = require("./solutions");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 [-d number] [-p number]")
  .options({
    d: {
      type: "number",
      alias: "day",
    },
    p: {
      type: "number",
      alias: "part",
      choices: [1, 2],
    },
  }).argv;

if (argv.day) {
  console.log(solutions[`day${argv.day}`].solve());
}

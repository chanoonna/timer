const args = process.argv.slice(2).map((arg) => parseInt(arg));

if (args.length === 0) {
  throw new Error("Arguments were not provided.");                  // No arguments
}

const timer = function(args) {
  for (let sec of args) {
    if (sec === 'NaN') {                                            // NaN
      throw new Error("Argument contains non-numeric value.");
    } else if (sec < 0) {                                           // Negative number. Flip it.
      sec = ~sec + 1;
    }
    setTimeout(() => process.stdout.write('\x07'), sec * 1000);
  }
};

timer(args);

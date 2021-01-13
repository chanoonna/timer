const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === "b") {
    beep();
  } else if (key > "0" && key <= "9") {
    console.log("setting timer for x seconds...");
    setTimeout(() => beep(), Number(key) * 1000);
  } else {
    console.log("Invalid input");
  }
});

const beep = function() {
  process.stdout.write('\x07');
};

// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
const maximum = parseInt(prompt(`choose your maximum number`));
const randomNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt(`guess a number`));
let attempt = 1;

while (guess !== randomNum) {
  if (guess < randomNum) {
    guess = parseInt(prompt(`the number is greater`));
  } else {
    guess = parseInt(prompt(`the number is less than your guess`));
  }
  attempt++;
}

console.log(`Bravoooo you catch it in ${attempt} attempt`);

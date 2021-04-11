const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function print(element) {
  console.log(element);
}

// console.log(print(numbers[1]));

// forEach:
let myFunc = numbers.forEach(function print(element) {
  console.log(element);
});

//for of:
for (let number of numbers) {
  console.log(number);
}

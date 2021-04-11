const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let moreThanTen = numbers.filter(number => number >= 10);
// console.log(moreThanTen);

let numberFour = numbers.filter(number => number === 4);
// console.log( numberFour );

// let numbersLessThanTen = numbers.filter( function ( number ) {
//     return number < 10
// } )
// console.log(numbersLessThanTen)

// let isFourIncludes = numbers.includes(number => number === 4);
// console.log(isFourIncludes);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let moreThanSix = words.filter(characters => characters.length > 6);
console.log(moreThanSix);
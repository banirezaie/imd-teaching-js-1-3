const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 76];

// if your gonna receive a boolean value, start your variable/function's name with "is"
// let isPass = exams.every(passScore => passScore > 75);
// console.log(isPass);

// let isPassing = exams.every(passScore => passScore >= 77);
// console.log(isPassing);

// let isAnyOnePassed = exams.some(passScore => passScore >= 77);
// console.log(isAnyOnePassed);

// let isGradeA = exams.some(passScore => passScore >= 95);
// console.log(isGradeA);

// let isGradeD = exams.some(passScore => passScore < 75);
// console.log(isGradeD);

let evens = [2, 4, 6, 8];
const mixes = [1, 4, 6, 8];
const consequence = [1, 2, 3];

// if (1) {
//   return console.log(true);
// } else {
//   return console.log(false);
// }

// reusable function
const isAllAreEvens = arrayOfNumbers =>
  console.log(arrayOfNumbers.every(number => !(number % 2)));

isAllAreEvens(evens);
isAllAreEvens(mixes);
isAllAreEvens(consequence);

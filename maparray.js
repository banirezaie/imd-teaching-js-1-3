// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// const airplane = [
//   ["Sirvan", "Zahra", "Fatemeh"],
//   ["Mohsen", "Azam", "Shirin"],
//   ["Alireza", "Narges", "Behnaz"],
//   ["Romina", "Benyamin", "Bahar"],
//   ["Amir", "Beti", "Pourya"],
// ];

// let num = airplane.map(function print(element) {
//   console.log(element);
// });

const airplanePassengers = [
  "      Sirvan     ",
  "      Zahra   ",
  "   Fatemeh   ",
  "Mohsen      ",
  "     Azam      ",
  "     Shirin      ",
];

const newPassengersArr = airplanePassengers.map(passenger => passenger.trim());
console.log(newPassengersArr);

const newPassengersStr = airplanePassengers.forEach(passenger =>
  console.log(passenger.trim())
);

// const newArr = airplanePassengers.map(passenger =>
//   passenger.trim().toUpperCase()
// );
// console.log(newArr);

// const greet = name => console.log(`Hey ${name}!`);

// greet("Harry");
// greet("Ayda");

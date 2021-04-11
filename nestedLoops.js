// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`        js is: ${j}`);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`i is: ${i}`);

//   for (let j = 0; j <= 3; j++) {
//     console.log(`           j is: ${j}`);
//   }
// }

const airplane = [
  ["Sirvan", "Zahra", "Fatemeh"],
  ["Mohsen", "Azam", "Shirin"],
  ["Alireza", "Narges", "Behnaz"],
  ["Romina", "Benyamin", "Bahar"],
  ["Amir", "Beti", "Pourya"],
];

// airplane.length

for (let i = 0; i < airplane.length; i++) {
  console.log(`Row ${i + 1} contains`);
  // console.log(airplane[i]);
  // back tick
  //                    Sirvan
  //                    Zahra
  //                    Fatemeh
  //Row 2 contains:
  //                    Mohsen
  for (let j = 0; j < airplane[i].length; j++) {
    console.log(`                ${airplane[i][j]}`);
  }
  // for (let j = 0; j < airplane[i].length; j++) {
  //   console.log(`              ${airplane[i][j]}`);
  // }
}

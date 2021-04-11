const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;

// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// let total = prices.reduce((total, price) => total + price);

// console.log(total);

let minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
}, 10);
console.log(minPrice);

// const evens = [2, 4, 6, 8];
// let sumWithNew = evens.reduce((sum, num) => sum + num, 100);
// console.log(sumWithNew);

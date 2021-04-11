// const X = function () {
//   // "this" here is the caller of X
// };

// const Y = () => {
//   // "this" here is NOT the caller of Y
//   // It's same as "this" found in Y's scope
// };

// console.log("this");

// const testerObj = {
//   func1: function () {
//     console.log("func1", this);
//     //look at the scope of "this" keyword here!!!
//   },
//   func2: () => {
//     console.log("func2", this);
//     //look at the scope of "this" keyword
//   },
// };

// console.log(testerObj.func1());
// console.log(testerObj.func2());

//sedamo darid???????????
//edame bedaaaam????
// moshkel chiye>???????

// khandeye talkhe man az gerye gham angiz tar astttttt... hey...

function hiii(narges) {
  console.log(`hello ${narges}`);
}
hiii("Azam");

const hello = (narges, lastName) => console.log(`hello ${narges} ${lastName}`);
hello("Amir", "Pourhadi");

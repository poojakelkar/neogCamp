//Assignment 1:
// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

//Assignment 2:
// var multiply = function(x, y) {
//     return x * y;
//   };
let multiply = (x, y) => x * y;
console.log(multiply(2, 4));

//Assignment 3:
// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"

let customer = { name: "bhaloo" };
let card = { amount: 20, product: "aaloo", unitprice: 50 };
let message = `hello ${customer.name} want to buy ${card.amount} ${card.product} for price of ${card.unitprice} per price`;
console.log(message);

//assignment 4:
// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];
// console.log(Neog)

let Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
    [CEO, Mentor] = [Neog[0], Neog[2]];
console.log(CEO);

// Assignment:5
// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);
let arr = ["MA", "TA", "PA", "CA"];
[firstname, surname] = [arr[0], arr[1]];
console.log(firstname);

// Assignment:6
// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

let obj = { Aaloo: "Tasty", bhaloo: "cute" };
console.log(obj);

// Assignment 7:
// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

let a = 5;
let b = 10;
console.log(`Fifteem is ${a + b} and not ${2 * a + b}.`);

//assignment 8:
// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//       return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//       return num1 * num2;
//     }
//   };
// console.log(arithmeticobj.mul(5,4))

let arithmeticobj = {
    sum: (num1, num2) => num1 + num2,
    mul: (num1, num2) => num1 * num2,
};
console.log(arithmeticobj.mul(6, 7));

//assignment 9:
let avengers = {
    operation: "Assemble",
    members: [
        { ironMan: "Tony Stark" },
        { captainAmerica: "Steve Rogers" },
        { blackWidow: "Natasha Romanoff" },
    ],
};
let operation = avengers.operation,
    members = avengers.members;
console.log(members);

//assignment 10:
// const packIt = (...args) => console.log(args)

// packIt(1,2,3,5,5)

const packIt = function packIt(...args) {
    console.log(args);
};
packIt(1, 2, 3, 5, 5);

//assignment 11:
const hello = () => "Hello";
const welcome = () => "Welcome";
const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
console.log(Hello, Welcome);

//assignment 12:
const obj5 = {
    aloo0: 1,
    bhallo: 2,
};

const { c: aloo = [2, 3, 4].push(5), aloo0 } = obj5;
console.log(aloo);

let hellooo = "Hello, ";
console.log(hellooo.concat("Kevin", ". Have a nice day."));

const oddOrEven = (num) => (num % 2 === 0 ? 'even' : 'odd')
const res = `The number 5 is ${oddOrEven(5)} `
console.log(res)

// add css tommorow
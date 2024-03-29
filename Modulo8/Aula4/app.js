const names = ["Christian", "Alfredo", "Edson"];

names.sort();

console.log(names);

const numbers = [10, 50, 20, 5, 35, 70, 45];

numbers.sort((number1, number2) => number1 - number2);
// To order the numbers from smallest to largest, first param - second param

console.log(numbers);

const theBigFamily = [
  { name: "Lineu", score: 20 },
  { name: "Nene", score: 10 },
  { name: "Tuco", score: 50 },
  { name: "Bebel", score: 30 },
  { name: "Agostinho", score: 70 },
];

theBigFamily.sort((item1, item2) => item2.score - item1.score);
// To order the numbers from largest to smallets, second param - first param

console.log(theBigFamily);
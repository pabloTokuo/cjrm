// Function declaration
function sayHi() {
  console.log('oi');
}

// Function expression
const showFood = function() {
  console.log('pizza');
}


sayHi();

showFood();


// Argumentos, parâmetros de default parameters
const myFunc = function (name, lastName) {
  console.log(`Oi, ${name} ${lastName}!`);
}

myFunc('Pablo', 'Tokuo');

// Retornando valores
const double = function(number) {
  return number * 2;
}

const result = double(3);

const showResult = function(value) {
  return `O resultado é: ${value}`; 
}

console.log(showResult(result));
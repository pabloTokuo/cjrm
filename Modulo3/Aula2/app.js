// funcao tradicional
// const double = function(number) {
//   return number * 2;
// }

// arrow function
const double = (number) => {
  return number * 2;
}

const result = double(3);
// console.log(`O resultado é ${result}`);

const name = 'Pablo';

// funcoes
const sayHi = () => 'Oi';

const greet = sayHi();
// console.log(greet);

// métodos
name.toUpperCase();

// forEach e callbacks
const socialNetworks = ['youtube', 'twitter', 'facebook', 'instagram'];

const logArrayInfo = (socialNetwork, index, array) => {
  console.log(index, socialNetwork, array);
}

socialNetworks.forEach(logArrayInfo);
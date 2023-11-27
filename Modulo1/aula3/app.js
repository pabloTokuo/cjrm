// Arrays é uma lista de valores, que geralmente tem seus valores
// relacionados entre si.

const fruits = ['Banana', 'Maça', 'Mamão', 'Banana'];
console.log(fruits);

// Um array no JS pode receber tanto string como number.
const heroesAndAge = ['Batman', 99, 'Super-Man', 90, 'Spider-Man', 20];
console.log(heroesAndAge);

// Existem diversos tipos de métodos para usar com array
const joinFruits = fruits.join(', '); // metodo join separa os dados dentro do array
const pushToFruits = fruits.push('Uva'); // metodo push ira adicionar no final do array original um valor alterando o array original
const concatFruits = fruits.concat(['Batman', 'Super-Man']); // metodo concat cria outra array e adicionar ao final
const indexOfBanana = fruits.indexOf('Banana'); // metodo indexOf pegara o primeiro index do argumento que contem no array
console.log(indexOfBanana);
